"use strict";
class Yprops {
    a = "a";
    abbr = "abbr";
    address = "address";
    area = "area";
    article = "article";
    aside = "aside";
    audio = "audio";
    b = "b";
    base = "base";
    bdi = "bdi";
    bdo = "bdo";
    blockquote = "blockquote";
    body = "body";
    br = "br";
    button = "button";
    canvas = "canvas";
    caption = "caption";
    cite = "cite";
    co = "co";
    col = "col";
    colgroup = "colgroup";
    data = "data";
    datalist = "datalist";
    dd = "dd";
    del = "del";
    details = "details";
    dfn = "dfn";
    dialog = "dialog";
    div = "div";
    dl = "dl";
    dt = "dt";
    em = "em";
    embed = "embed";
    fieldset = "fieldset";
    figcaption = "figcaption";
    figure = "figure";
    footer = "footer";
    form = "form";
    h1 = "h1";
    h2 = "h2";
    h3 = "h3";
    h4 = "h4";
    h5 = "h5";
    h6 = "h6";
    head = "head";
    header = "header";
    hgroup = "hgroup";
    hr = "hr";
    html = "html";
    i = "i";
    iframe = "iframe";
    img = "img";
    input = "input";
    ins = "ins";
    kbd = "kbd";
    label = "label";
    legend = "legend";
    li = "li";
    link = "link";
    main = "main";
    map = "map";
    mark = "mark";
    menu = "menu";
    meta = "meta";
    meter = "meter";
    nav = "nav";
    noscript = "noscript";
    object = "object";
    ol = "ol";
    optgroup = "optgroup";
    option = "option";
    output = "output";
    p = "p";
    picture = "picture";
    pre = "pre";
    progress = "progress";
    q = "q";
    rp = "rp";
    rt = "rt";
    ruby = "ruby";
    s = "s";
    samp = "samp";
    script = "script";
    section = "section";
    select = "select";
    slot = "slot";
    small = "small";
    source = "source";
    span = "span";
    strong = "strong";
    style = "style";
    sub = "sub";
    summary = "summary";
    sup = "sup";
    table = "table";
    tbody = "tbody";
    td = "td";
    template = "template";
    textarea = "textarea";
    tfoot = "tfoot";
    th = "th";
    thead = "thead";
    time = "time";
    title = "title";
    tr = "tr";
    track = "track";
    u = "u";
    ul = "ul";
    var = "var";
    video = "video";
    wbr = "wbr";
}
class Y {
    static a = "a";
    static abbr = "abbr";
    static address = "address";
    static area = "area";
    static article = "article";
    static aside = "aside";
    static audio = "audio";
    static b = "b";
    static base = "base";
    static bdi = "bdi";
    static bdo = "bdo";
    static blockquote = "blockquote";
    static body = "body";
    static br = "br";
    static button = "button";
    static canvas = "canvas";
    static caption = "caption";
    static cite = "cite";
    static co = "co";
    static col = "col";
    static colgroup = "colgroup";
    static data = "data";
    static datalist = "datalist";
    static dd = "dd";
    static del = "del";
    static details = "details";
    static dfn = "dfn";
    static dialog = "dialog";
    static div = "div";
    static dl = "dl";
    static dt = "dt";
    static em = "em";
    static embed = "embed";
    static fieldset = "fieldset";
    static figcaption = "figcaption";
    static figure = "figure";
    static footer = "footer";
    static form = "form";
    static h1 = "h1";
    static h2 = "h2";
    static h3 = "h3";
    static h4 = "h4";
    static h5 = "h5";
    static h6 = "h6";
    static head = "head";
    static header = "header";
    static hgroup = "hgroup";
    static hr = "hr";
    static html = "html";
    static i = "i";
    static iframe = "iframe";
    static img = "img";
    static input = "input";
    static ins = "ins";
    static kbd = "kbd";
    static label = "label";
    static legend = "legend";
    static li = "li";
    static link = "link";
    static main = "main";
    static map = "map";
    static mark = "mark";
    static menu = "menu";
    static meta = "meta";
    static meter = "meter";
    static nav = "nav";
    static noscript = "noscript";
    static object = "object";
    static ol = "ol";
    static optgroup = "optgroup";
    static option = "option";
    static output = "output";
    static p = "p";
    static picture = "picture";
    static pre = "pre";
    static progress = "progress";
    static q = "q";
    static rp = "rp";
    static rt = "rt";
    static ruby = "ruby";
    static s = "s";
    static samp = "samp";
    static script = "script";
    static section = "section";
    static select = "select";
    static slot = "slot";
    static small = "small";
    static source = "source";
    static span = "span";
    static strong = "strong";
    static style = "style";
    static sub = "sub";
    static summary = "summary";
    static sup = "sup";
    static table = "table";
    static tbody = "tbody";
    static td = "td";
    static template = "template";
    static textarea = "textarea";
    static tfoot = "tfoot";
    static th = "th";
    static thead = "thead";
    static time = "time";
    static title = "title";
    static tr = "tr";
    static track = "track";
    static u = "u";
    static ul = "ul";
    static var = "var";
    static video = "video";
    static wbr = "wbr";
}
const _a = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.a,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $a = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.a,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _abbr = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.abbr,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $abbr = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.abbr,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _address = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.address,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $address = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.address,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _area = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.area,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $area = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.area,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _article = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.article,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $article = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.article,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _aside = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.aside,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $aside = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.aside,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _audio = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.audio,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $audio = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.audio,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _b = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.b,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $b = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.b,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _base = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.base,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $base = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.base,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _bdi = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.bdi,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $bdi = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.bdi,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _bdo = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.bdo,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $bdo = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.bdo,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _blockquote = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.blockquote,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $blockquote = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.blockquote,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _body = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.body,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $body = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.body,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _br = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.br,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $br = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.br,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _button = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.button,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $button = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.button,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _canvas = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.canvas,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $canvas = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.canvas,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _caption = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.caption,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $caption = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.caption,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _cite = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.cite,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $cite = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.cite,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _co = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.co,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $co = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.co,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _col = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.col,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $col = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.col,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _colgroup = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.colgroup,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $colgroup = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.colgroup,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _data = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.data,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $data = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.data,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _datalist = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.datalist,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $datalist = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.datalist,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _dd = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dd,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $dd = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dd,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _del = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.del,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $del = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.del,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _details = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.details,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $details = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.details,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _dfn = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dfn,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $dfn = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dfn,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _dialog = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dialog,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $dialog = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dialog,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _div = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.div,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $div = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.div,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _dl = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dl,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $dl = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dl,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _dt = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dt,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $dt = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.dt,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _em = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.em,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $em = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.em,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _embed = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.embed,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $embed = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.embed,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _fieldset = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.fieldset,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $fieldset = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.fieldset,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _figcaption = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.figcaption,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $figcaption = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.figcaption,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _figure = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.figure,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $figure = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.figure,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _footer = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.footer,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $footer = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.footer,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _form = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.form,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $form = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.form,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h1 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h1,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h1 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h1,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h2 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h2,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h2 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h2,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h3 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h3,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h3 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h3,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h4 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h4,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h4 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h4,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h5 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h5,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h5 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h5,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _h6 = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h6,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $h6 = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.h6,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _head = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.head,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $head = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.head,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _header = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.header,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $header = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.header,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _hgroup = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.hgroup,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $hgroup = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.hgroup,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _hr = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.hr,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $hr = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.hr,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _html = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.html,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $html = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.html,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _i = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.i,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const $i = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const _iframe = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.iframe,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $iframe = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.iframe,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _img = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.img,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const $img = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const _input = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const $input = (value, attrs, init) => {
    return new YoFiElement({
        tag: Y.input,
        attrs: attrs,
        cheldren: undefined,
        init: init,
        textContent: value
    });
};
const _ins = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ins,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $ins = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ins,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _kbd = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.kbd,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $kbd = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.kbd,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _label = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.label,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $label = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.label,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _legend = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.legend,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $legend = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.legend,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _li = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.li,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $li = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.li,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _link = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.link,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $link = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.link,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _main = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.main,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $main = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.main,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _map = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.map,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $map = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.map,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _mark = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.mark,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $mark = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.mark,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _menu = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.menu,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $menu = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.menu,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _meta = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.meta,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $meta = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.meta,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _meter = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.meter,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $meter = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.meter,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _nav = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.nav,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $nav = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.nav,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _noscript = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.noscript,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $noscript = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.noscript,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _object = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.object,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $object = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.object,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _ol = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ol,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $ol = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ol,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _optgroup = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.optgroup,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $optgroup = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.optgroup,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _option = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.option,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $option = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.option,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _output = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.output,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $output = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.output,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _p = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.p,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $p = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.p,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _picture = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.picture,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $picture = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.picture,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _pre = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.pre,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $pre = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.pre,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _progress = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.progress,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $progress = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.progress,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _q = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.q,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $q = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.q,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _rp = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.rp,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $rp = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.rp,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _rt = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.rt,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $rt = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.rt,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _ruby = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ruby,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $ruby = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ruby,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _s = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.s,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $s = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.s,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _samp = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.samp,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $samp = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.samp,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _script = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.script,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $script = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.script,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _section = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.section,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $section = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.section,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _select = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.select,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $select = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.select,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _slot = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.slot,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $slot = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.slot,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _small = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.small,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $small = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.small,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _source = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.source,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $source = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.source,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _span = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.span,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $span = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.span,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _strong = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.strong,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $strong = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.strong,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _style = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.style,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $style = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.style,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _sub = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.sub,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $sub = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.sub,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _summary = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.summary,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $summary = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.summary,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _sup = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.sup,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $sup = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.sup,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _table = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.table,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $table = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.table,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _tbody = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tbody,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $tbody = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tbody,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _td = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.td,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $td = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.td,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _template = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.template,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $template = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.template,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _textarea = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.textarea,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $textarea = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.textarea,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _tfoot = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tfoot,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $tfoot = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tfoot,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _th = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.th,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $th = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.th,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _thead = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.thead,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $thead = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.thead,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _time = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.time,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $time = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.time,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _title = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.title,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $title = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.title,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _tr = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tr,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $tr = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.tr,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _track = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.track,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $track = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.track,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _u = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.u,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $u = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.u,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _ul = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ul,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $ul = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.ul,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _var = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.var,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $var = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.var,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _video = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.video,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $video = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.video,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
const _wbr = (cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.wbr,
        attrs: attrs,
        cheldren: cheldren ? cheldren.filter((value) => typeof value != "string") : undefined,
        init: init,
        textContent: cheldren && typeof cheldren[0] == "string" ? cheldren[0] : ""
    });
};
const $wbr = (textContent, cheldren, attrs, init) => {
    return new YoFiElement({
        tag: Y.wbr,
        attrs: attrs,
        cheldren: cheldren,
        init: init,
        textContent: textContent
    });
};
