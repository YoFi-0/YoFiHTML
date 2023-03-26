class Yprops {
    	public  readonly h1 = "h1"
	public  readonly h2 = "h2"
	public  readonly h3 = "h3"
	public  readonly h4 = "h4"
	public  readonly h5 = "h5"
	public  readonly h6 = "h6"
	public  readonly div = "div"
	public  readonly span = "span"
	public  readonly p = "p"
	public  readonly header = "header"
	public  readonly li = "li"
	public  readonly ul = "ul"
	public  readonly main = "main"
	public  readonly section = "section"
	public  readonly script = "script"
	public  readonly img = "img"
	public  readonly br = "br"
	public  readonly a = "a"
	public  readonly button = "button"
	public  readonly i = "i"
	public  readonly iframe = "iframe"
	public  readonly td = "td"
	public  readonly tr = "tr"
	public  readonly tbody = "tbody"
	public  readonly table = "table"
	public  readonly input = "input"
	public  readonly source = "source"
	public  readonly video = "video"
	public  readonly audio = "audio"
	public  readonly noscript = "noscript"
	public  readonly label = "label"

}

class Y {

	public static readonly h1 = "h1"
	public static readonly h2 = "h2"
	public static readonly h3 = "h3"
	public static readonly h4 = "h4"
	public static readonly h5 = "h5"
	public static readonly h6 = "h6"
	public static readonly div = "div"
	public static readonly span = "span"
	public static readonly p = "p"
	public static readonly header = "header"
	public static readonly li = "li"
	public static readonly ul = "ul"
	public static readonly main = "main"
	public static readonly section = "section"
	public static readonly script = "script"
	public static readonly img = "img"
	public static readonly br = "br"
	public static readonly a = "a"
	public static readonly button = "button"
	public static readonly i = "i"
	public static readonly iframe = "iframe"
	public static readonly td = "td"
	public static readonly tr = "tr"
	public static readonly tbody = "tbody"
	public static readonly table = "table"
	public static readonly input = "input"
	public static readonly source = "source"
	public static readonly video = "video"
	public static readonly audio = "audio"
	public static readonly noscript = "noscript"
	public static readonly label = "label"

}
const _h1 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h1,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $h1 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h1,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _h2 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h2,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $h2 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h2,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _h3 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h3,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $h3 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h3,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _h4 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h4,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $h4 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h4,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _h5 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h5,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $h5 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h5,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _h6 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h6,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $h6 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h6,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _div = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.div,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $div = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.div,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _span = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.span,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $span = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.span,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _p = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.p,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $p = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.p,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _header = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.header,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $header = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.header,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _li = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.li,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $li = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.li,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _ul = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.ul,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $ul = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.ul,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _main = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.main,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $main = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.main,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _section = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.section,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $section = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.section,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _script = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.script,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $script = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.script,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _img = (value:string, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.img,
        attrs:attrs,
        cheldren:undefined,
        init:init,
        textContent:value
    })
};
const $img = (value?:string, attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.input,
        attrs:attrs,
        cheldren:undefined,
        init:init,
        textContent:value
    })
};const _br = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.br,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $br = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.br,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _a = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.a,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $a = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.a,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _button = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.button,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $button = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.button,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _i = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.i,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $i = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.i,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _iframe = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.iframe,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $iframe = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.iframe,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _td = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.td,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $td = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.td,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _tr = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tr,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $tr = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tr,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _tbody = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tbody,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $tbody = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tbody,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _table = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.table,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $table = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.table,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _input = (value:string, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.input,
        attrs:attrs,
        cheldren:undefined,
        init:init,
        textContent:value
    })
};
const $input = (value?:string, attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.input,
        attrs:attrs,
        cheldren:undefined,
        init:init,
        textContent:value
    })
};const _source = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.source,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $source = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.source,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _video = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.video,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $video = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.video,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _audio = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.audio,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $audio = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.audio,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _noscript = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.noscript,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $noscript = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.noscript,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
const _label = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.label,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $label = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.label,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
