const my_p = _p([
    "lala 2",
    _("#FF",[
        _span([
            "yaaay"
        ])
    ], (elm) => {
        console.log(elm.element)
    })
], {
    baseSelector:baseElm("body"),
    classes:"xoxo lala zozo",
    style:{
        color:"#EEE",
    }
}, async () => {

}).changeStyles({
    background:"#000",
})
const input = _input("", {
    baseSelector:(baseElm("body")),
    type:"text",
}).changeAttr({
    placeHolder:"lala",
})


// console.log(input.attrs)

