interface attrTtype {
    readonly classes?:string,
    readonly dataset?:any
    readonly id?:string
    readonly style?:YoFiStyles,
    readonly href?:string,
    readonly src?:string
    readonly type?:string
    readonly baseSelector?:string
    readonly placeHolder?:string
    readonly value?:string
}

class Sleep {
   public static async sleepByMelSuc (dlay:number):Promise<void> {
        await new Promise(r => setTimeout(r, dlay))
    }
    public static async sleepBySuc (dlay:number):Promise<void> {
        await new Promise(r => setTimeout(r, dlay * 1000))
    }
    public static async sleepByMin (dlay:number):Promise<void> {
        await new Promise(r => setTimeout(r, dlay * 1000 * 60))
    }
    public static async sleepByHours (dlay:number):Promise<void> {
        await new Promise(r => setTimeout(r, dlay * 1000 * 60 * 60))
    }
}

 

interface YoFiElementContructer {
    attrs?:attrTtype,
    tag:keyof Yprops,
    cheldren?:YoFiElement[],
    textContent?:string
    init?:(elem:YoFiElement) => void | Promise<void>
}



type YoFiStyles =   {
    [P in keyof CSSStyleDeclaration]?: String | "none" | "unset" | "auto" | "inherit" | "initial";
} | {
    position?:String | "absolute" | "fixed" | "inherit" | "initial" | "relative" | "revert" | "static" | "sticky" ;
    display?:String | "block" | "contents" | "flex" | "grid"  | "contents" | "inline-block" | "inline-flex" | "inline-grid" | "inline-table" | "list-item" | "table";
    border?:String | "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden";
    borderStyle?:String | "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden";
    listStyleType?:String | "circle" | "square" | "upper-roman" | "lower-alpha" ;
    listStylePosition?:String | "outside" | "inside";
    overflow?: String | "visible" | "hidden" | "scroll" | "auto";
    overflowX?: String | "visible" | "hidden";
    overflowY?: String | "visible" | "hidden";
    property?: String | "value";
    direction?:String | ""
    flex?:String | "content"
    justifyContent?:String |""
    alignContent?:String |""
    alignItems?:String |""
    alignSelf?:String | ""
    backdropFilter?:String |""
    listStyle?:String |""
    justifyItems?:String | ""
    justifySelf?:String | ""
} & {
    [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P];
}


interface YoFiEvnts {
    onClick: (func:(e:MouseEvent) => void) => YoFiElement
    onMouseDown: (func:(e:MouseEvent) => void) => YoFiElement
    onMouseUp: (func:(e:MouseEvent) => void) => YoFiElement
    onMouseMove: (func:(e:MouseEvent) => void) => YoFiElement
    onTouchStart: (func:(e:TouchEvent) => void) => YoFiElement
    onTouchEnd: (func:(e:TouchEvent) => void) => YoFiElement
    onTouchMove: (func:(e:TouchEvent) => void) => YoFiElement
}

interface YoFiFunctions {
    setStyles:(styles:YoFiStyles) => YoFiElement
    changeStyles:(styles:YoFiStyles) => YoFiElement
    removeStyles:(styles:Array<keyof YoFiStyles>) => YoFiElement
    removeAllStyles:() => YoFiElement
    addClasses:(classes:string) => YoFiElement;
    removeClasses:(classes:string) => YoFiElement;
    setText:(text:string) => YoFiElement;
}

class YoFiElement implements YoFiEvnts, YoFiFunctions{
    public readonly attrs:attrTtype | undefined
    public readonly cheldren:YoFiElement[] | undefined
    public readonly element:HTMLElement
    public readonly jQElement:JQuery<HTMLElement>
    public readonly text:string = ""
    public readonly tag:keyof Yprops
    constructor({attrs, tag, cheldren, init, textContent}:YoFiElementContructer) {
        const element = document.createElement(tag)!
        this.tag = tag
        this.element = element
        if(attrs){
            this.attrs = attrs
            if(attrs.type){
                (this.element as HTMLInputElement).type = attrs.type
            }
            if(attrs.src){
                (this.element as HTMLImageElement).src = attrs.src
            }
            if(attrs.id){
                this.element.id = attrs.id
            }
            if(attrs.dataset){
                for(let data of Object.keys(attrs.dataset)){
                    (this.element as any).dataset[data] = attrs.dataset[data]
                }
                
            }
            if(attrs.classes){
                for(let className of attrs.classes.trim().split(" ")){
                    this.element.classList.add(className)
                }
            }
            if(attrs.style){
                this.setStyles(attrs.style)
            }
            if(attrs.href){
                (this.element as HTMLAnchorElement).href = attrs.href
            }
            if(attrs.baseSelector){
                const father = document.querySelector(attrs.baseSelector)
                if(father){
                    father.appendChild(this.element)
                }
            }
            if(attrs.value){
                this.setText(attrs.value)
            }
            if(attrs.placeHolder){
                this.changeAttr("placeHolder" ,attrs.placeHolder)
            }
        }

        if(textContent){
            this.setText(textContent)
        }
        if(cheldren){
            this.cheldren = cheldren
            cheldren.forEach(elm => {
                this.element.appendChild(elm.element)
            })
        }
        this.jQElement = $(this.element)
        if(init){
            init(this)
        }
        return
    }

    public setStyles(styles:YoFiStyles):YoFiElement{
        (this.element as any).style = ""
        for(let style of Object.keys(styles)){
            (this.element as any).style[style] = (styles as any)[style]
        }
        if(this.attrs){
            this.Re_Attr({
                style:styles
            })
        }
        return this
    }
    public removeClasses(classes: string) {
        for(let className of classes.trim().split(" ")){
            className ? this.element.classList.remove(className) : null
            if(this.attrs?.classes){
                (this.attrs.classes as any) = this.attrs.classes.trim().split(" ").filter(value => value != className).join(" ")
            }
        }
        return this
    }
    public setText(text: string)  {
        if(this.tag == "input"){
            (this.element as HTMLInputElement).value = text
            this.Re_Attr({
                value:text
            })
        } else if(this.tag == "img") {
            (this.element as HTMLImageElement).src = text
            this.Re_Attr({
                src:text
            })
        } else {
            this.element.textContent = text
        };
        (this.text as any) = text
        return this
    }
    public addClasses(classes: string) {
        for(let className of classes.trim().split(" ")){
            className ? this.element.classList.add(className) : null
            if(this.attrs){
                var tembClasses =  this.attrs.classes?.trim().split(" ")
                tembClasses?.push(className)
                this.Re_Attr({
                    classes:tembClasses?.join(" ")
                })
            }
        }
        return this
    }
    public changeStyles(styles:YoFiStyles):YoFiElement{
        for(let style of Object.keys(styles)){
            (this.element as any).style[style] = (styles as any)[style]
        }
        if(this.attrs){
            (this.attrs.style as any) = {...this.attrs.style, ...styles}
        }
        return this
    }
    public removeStyles(styles: Array<keyof YoFiStyles>):YoFiElement{
        for(let style of styles){
            this.element.style.removeProperty(`${style.toString()}`)
            if(this.attrs && this.attrs.style){
               delete (this.attrs.style as any)[style]
            }
        }
        return this
    }
    public removeAllStyles():YoFiElement{
        this.element.attributes.removeNamedItem("style")
        if(this.attrs && this.attrs.style){
            this.Re_Attr({
                style:undefined
            })
        }
        return this
    }

    // events
    public onClick(func:(e:MouseEvent) => void){
        this.element.onclick = (e) => {
            func(e)
        }
        return this
    }
    public onMouseDown(func:(e:MouseEvent) => void){
        this.element.onmousedown = (e) => {
            func(e)
        }
        return this
    }
    public onMouseUp(func:(e:MouseEvent) => void){
        this.element.onmouseup = (e) => {
            func(e)
        }
        return this
    }
    public onMouseMove(func:(e:MouseEvent) => void){
        this.element.onmousemove = (e) => {
            func(e)
        }
        return this
    }
    public onTouchStart(func:(e:TouchEvent) => void){
        this.element.ontouchstart = (e) => {
            func(e)
        }
        return this
    }
    public onTouchEnd(func:(e:TouchEvent) => void){
        this.element.ontouchend = (e) => {
            func(e)
        }
        return this
    }
    public onTouchMove(func:(e:TouchEvent) => void){
        this.element.ontouchmove = (e) => {
            func(e)
        }
        return this
    }

    public changeAttr(attr:keyof attrTtype, value:string){
        this.element.setAttribute(attr.toLowerCase(), value)
        if(this.attrs){
            (this.attrs as any)[attr] = value
        }
        return this
    }
    private Re_Attr(options:attrTtype){
        if(this.attrs){
            for(let key of Object.keys(options)){
                (this.attrs as any)[key] = (options as any)[key]
            }
        }
    }
}

const baseId = (id:string) => {
    return `#${id}`
}
const baseClass = (className:string) => {
    return `.${className}`
}
const baseElm = (element:keyof HTMLElementTagNameMap) => {
    return element
}

const c = ({tag, attrs, cheldren, init, textContent}:YoFiElementContructer) => {
    return new YoFiElement({
        tag:tag,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}
const cc = (tag:keyof Y, textContent?:string , attrs?:attrTtype, baseSelector?:string, cheldren?:YoFiElement[], init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:tag,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

type ElemOptions = {baseSelector?:string, init?:(elem:YoFiElement) => void}


// const YEElm = ({tag, attrs, baseSelector, cheldren, init, textContent}:YoFiElementContructer) => {
//     return new YoFiElement({
//         tag:tag,
//         attrs:attrs,
//         baseSelector:baseSelector,
//         cheldren:cheldren,
//         init:init,
//         textContent:textContent
//     })
// }

// function div({attrs, baseSelector, cheldren, init, textContent}:{
//     attrs?:attrTtype,
//     cheldren?:YoFiElement[],
//     baseSelector?:string
//     textContent?:string
//     init?:() => void
// }):YoFiElement{
//     return new YoFiElement({
//         tag:YElms.div,
//         attrs:attrs,
//         baseSelector:baseSelector,
//         cheldren:cheldren,
//         init:init,
//         textContent:textContent
//     })
// } 
