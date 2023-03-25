"use strict";
_p([
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
    classes: "xoxo lala zozo ",
    style: {
        color: "#EEE",
        background: "#000",
    }
}, async () => {
    await Sleep.sleepBySuc(3);
    console.log("yay");
});
