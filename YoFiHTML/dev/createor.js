const path = require("path")
class Y  {
    h1 = "h1"
    h2 = "h2"
    h3 = "h3"
    h4 = "h4"
    h5 = "h5"
    h6 = "h6"
    div = "div"
    span = "span" 
    p = "p"
    header = "header" 
    li = "li" 
    ul = "ul"
    main = "main"
    section = "section"
    script = "script"
    img = "img"
    br = "br"
    a = "a"
    button = "button"
    i = "button"
    iframe = "iframe"
    td = "td"
    tr = "tr"
    tbody = "tbody"
    table = "table"
    input = "input"
    source = "source"
    video = "video"
    audio = "audio"
    noscript = "noscript"
    label = "label"
}
const fs = require("fs")
var final = ""
var classProp = ""
Object.keys(new Y()).forEach(elm => {
    classProp += `\tpublic static readonly ${elm} = "${elm}"\n`
    final += `
const _${elm} = (cheldren?:Array<string | YoFiElement>, attrs?:attrTtype, init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.${elm},
        attrs:attrs,
        cheldren:cheldren ? (cheldren as any).filter((value:any) => typeof value != "string") : undefined,
        init:init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    })
};
const $${elm} = (textContent?:string, cheldren?:YoFiElement[], attrs?:attrTtype,  init?:(elem:YoFiElement) => void) => {
    return new YoFiElement({
        tag:Y.${elm},
        attrs:attrs,
        cheldren:cheldren,
        init:init,
        textContent:textContent
    })
};
`

})
fs.writeFile(path.join(__dirname, "../lib/YoFi_Elms.ts"), `class Y {

${classProp}
}
${final}`, "utf-8", () => {
    console.log("elms created")
})