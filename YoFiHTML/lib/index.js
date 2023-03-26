"use strict";
class Sleep {
    static async sleepByMelSuc(dlay) {
        await new Promise(r => setTimeout(r, dlay));
    }
    static async sleepBySuc(dlay) {
        await new Promise(r => setTimeout(r, dlay * 1000));
    }
    static async sleepByMin(dlay) {
        await new Promise(r => setTimeout(r, dlay * 1000 * 60));
    }
    static async sleepByHours(dlay) {
        await new Promise(r => setTimeout(r, dlay * 1000 * 60 * 60));
    }
}
class YoFiElement {
    attrs;
    cheldren;
    element;
    jQElement;
    text = "";
    tag;
    constructor({ attrs, tag, cheldren, init, textContent }) {
        const element = document.createElement(tag);
        this.tag = tag;
        this.element = element;
        if (attrs) {
            this.attrs = attrs;
            this.set_all_attrs();
            if (attrs.type) {
                this.element.type = attrs.type;
            }
            if (attrs.src) {
                this.element.src = attrs.src;
            }
            if (attrs.id) {
                this.element.id = attrs.id;
            }
            if (attrs.dataset) {
                for (let data of Object.keys(attrs.dataset)) {
                    this.element.dataset[data] = attrs.dataset[data];
                }
            }
            if (attrs.classes) {
                for (let className of attrs.classes.trim().split(" ")) {
                    this.element.classList.add(className);
                }
            }
            if (attrs.style) {
                this.setStyles(attrs.style);
            }
            if (attrs.href) {
                this.element.href = attrs.href;
            }
            if (attrs.baseSelector) {
                const father = document.querySelector(attrs.baseSelector);
                if (father) {
                    father.appendChild(this.element);
                }
            }
            if (attrs.value) {
                this.setText(attrs.value);
            }
            if (attrs.placeHolder) {
                this.changeAttr("placeHolder", attrs.placeHolder);
            }
        }
        if (textContent) {
            this.setText(textContent);
        }
        if (cheldren) {
            this.cheldren = cheldren;
            cheldren.forEach(elm => {
                this.element.appendChild(elm.element);
            });
        }
        this.jQElement = $(this.element);
        if (init) {
            init(this);
        }
        return;
    }
    setStyles(styles) {
        this.element.style = "";
        for (let style of Object.keys(styles)) {
            this.element.style[style] = styles[style];
        }
        if (this.attrs) {
            this.Re_Attr({
                style: styles
            });
        }
        return this;
    }
    removeClasses(classes) {
        for (let className of classes.trim().split(" ")) {
            className ? this.element.classList.remove(className) : null;
            if (this.attrs?.classes) {
                this.attrs.classes = this.attrs.classes.trim().split(" ").filter(value => value != className).join(" ");
            }
        }
        return this;
    }
    setText(text) {
        if (this.tag == "input") {
            this.element.value = text;
            this.Re_Attr({
                value: text
            });
        }
        else if (this.tag == "img") {
            this.element.src = text;
            this.Re_Attr({
                src: text
            });
        }
        else {
            this.element.textContent = text;
        }
        ;
        this.text = text;
        return this;
    }
    addClasses(classes) {
        for (let className of classes.trim().split(" ")) {
            className ? this.element.classList.add(className) : null;
            if (this.attrs) {
                var tembClasses = this.attrs.classes?.trim().split(" ") || [];
                tembClasses?.push(className);
                this.Re_Attr({
                    classes: tembClasses?.join(" ")
                });
            }
        }
        return this;
    }
    changeStyles(styles) {
        for (let style of Object.keys(styles)) {
            this.element.style[style] = styles[style];
        }
        if (this.attrs) {
            this.attrs.style = { ...this.attrs.style, ...styles };
        }
        return this;
    }
    removeStyles(styles) {
        for (let style of styles) {
            this.element.style.removeProperty(`${style.toString()}`);
            if (this.attrs && this.attrs.style) {
                delete this.attrs.style[style];
            }
        }
        return this;
    }
    removeAllStyles() {
        this.element.attributes.removeNamedItem("style");
        if (this.attrs && this.attrs.style) {
            this.Re_Attr({
                style: undefined
            });
        }
        return this;
    }
    // events
    onClick(func) {
        this.element.onclick = (e) => {
            func(e);
        };
        return this;
    }
    onMouseDown(func) {
        this.element.onmousedown = (e) => {
            func(e);
        };
        return this;
    }
    onMouseUp(func) {
        this.element.onmouseup = (e) => {
            func(e);
        };
        return this;
    }
    onMouseMove(func) {
        this.element.onmousemove = (e) => {
            func(e);
        };
        return this;
    }
    onTouchStart(func) {
        this.element.ontouchstart = (e) => {
            func(e);
        };
        return this;
    }
    onTouchEnd(func) {
        this.element.ontouchend = (e) => {
            func(e);
        };
        return this;
    }
    onTouchMove(func) {
        this.element.ontouchmove = (e) => {
            func(e);
        };
        return this;
    }
    changeAttr(attr, value) {
        this.element.setAttribute(attr.toLowerCase(), value);
        if (this.attrs) {
            this.attrs[attr] = value;
        }
        return this;
    }
    Re_Attr(options) {
        if (this.attrs) {
            for (let key of Object.keys(options)) {
                this.attrs[key] = options[key];
            }
        }
        return this;
    }
    set_all_attrs() {
        if (this.attrs) {
            for (let key of Object.keys(this.attrs)) {
                if (key == "baseSelector" ||
                    key == "classes" ||
                    key == "dataset" ||
                    key == "href" ||
                    key == "id" ||
                    key == "placeHolder" ||
                    key == "src" ||
                    key == "style" ||
                    key == "value" ||
                    key == "type") {
                    continue;
                }
                this.element.setAttribute(key, this.attrs[key]);
            }
        }
        return this;
    }
}
class YoFiSelectorElement extends YoFiElement {
    constructor({ selector, init, cheldren }) {
        super({
            tag: Y.div,
            attrs: {
                style: {},
                dataset: {}
            },
            init: init,
            textContent: "",
        });
        this.element.remove();
        // get elmemnt
        this.element = document.querySelector(selector);
        this.jQElement = $(selector);
        this.tag = this.element.tagName.toLowerCase();
        // get elmemnt
        // change text
        this.text = this.element.tagName == "INPUT" ?
            this.element.value :
            this.element.tagName == "IMG" ? this.element.src :
                this.element.textContent;
        // change text
        if (this.element.className) {
            this.addClasses(this.element.className);
        }
        const options = this.element.attributes;
        if (this.attrs) {
            for (let key of Object.values(options)) {
                if (key.name == "style" || key.name == "class") {
                    continue;
                }
                if (key.name.startsWith("data-")) {
                    this.attrs.dataset[key.name.split("-")[1]] = key.value;
                    continue;
                }
                this.attrs[key.name] = key.value;
            }
        }
        if (this.element.style) {
            for (let key of Object.values(this.element.style)) {
                this.attrs.style[key] = this.element.style[key];
            }
        }
        if (cheldren) {
            for (let child of cheldren) {
                this.element.appendChild(child.element);
            }
        }
    }
}
const _ = (selector, cheldren, init) => {
    return new YoFiSelectorElement({
        selector: selector,
        cheldren: cheldren,
        init: init
    });
};
const baseId = (id) => {
    return `#${id}`;
};
const baseClass = (className) => {
    return `.${className}`;
};
const baseElm = (element) => {
    return element;
};
const c = ({ tag, attrs, cheldren, init, textContent }) => {
    return new YoFiElement({
        tag: tag,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const cc = (tag, textContent, attrs, baseSelector, cheldren, init) => {
    return new YoFiElement({
        tag: tag,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
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
