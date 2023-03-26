"use strict";
const my_p = _p([
    "lala 2",
    _span([
        "this is a span"
    ], {
        style: {
            display: "block",
        }
    }),
], {
    baseSelector: baseElm("body"),
    classes: "xoxo lala zozo",
    style: {
        color: "#EEE",
    }
}, async () => {
    await Sleep.sleepBySuc(3);
    console.log("yay");
}).changeStyles({
    background: "#000",
});
const input = _input("", {
    baseSelector: (baseElm("body")),
    type: "text",
});
console.log(input.attrs);
