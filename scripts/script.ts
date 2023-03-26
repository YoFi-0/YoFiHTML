const my_p = _p([
    "lala 2",
    _("#FF",[
        _span([
            "yaaay"
        ])
    ])
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
}).changeAttr("placeHolder", "coco")


// console.log(input.attrs)

