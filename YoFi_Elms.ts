
const _h1 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h1,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h1 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h1,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h2 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h2,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h2 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h2,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h3 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h3,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h3 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h3,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h4 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h4,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h4 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h4,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h5 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h5,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h5 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h5,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _h6 = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h6,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $h6 = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.h6,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _div = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.div,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $div = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.div,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _span = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.span,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $span = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.span,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _p = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.p,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $p = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.p,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _header = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.header,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $header = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.header,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _li = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.li,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $li = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.li,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _ul = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.ul,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $ul = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.ul,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _main = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.main,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $main = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.main,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _section = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.section,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $section = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.section,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _script = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.script,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $script = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.script,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _img = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.img,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $img = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.img,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _br = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.br,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $br = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.br,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _a = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.a,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $a = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.a,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _button = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.button,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $button = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.button,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _i = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.i,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $i = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.i,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _iframe = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.iframe,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $iframe = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.iframe,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _td = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.td,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $td = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.td,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _tr = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tr,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $tr = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tr,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _tbody = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tbody,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $tbody = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.tbody,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _table = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.table,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $table = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.table,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _input = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.input,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $input = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.input,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _source = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.source,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $source = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.source,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _video = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.video,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $video = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.video,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _audio = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.audio,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $audio = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.audio,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _noscript = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.noscript,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $noscript = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.noscript,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}

const _label = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.label,
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
}
const $label = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.label,
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
}
