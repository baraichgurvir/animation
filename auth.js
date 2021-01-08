var result = '';
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

if (document.getElementsByTagName('animscript').length === 0) {
        
} else if (document.getElementsByTagName('animscript').length === 1) {
    const charactersLength = characters.length;
    for ( let i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let styles = new Styles();
} else {
    console.error("Error: Duplicates Avaliable")
}

childs = [];
childs = document.body.children;

if (childs[childs.length - 2].getAttribute("src") === null || childs[childs.length - 2].getAttribute("src") != "auth.js") {
    console.error("Error: script tag with src=\"auth.js\" should be at the end of body")
    for (var child = 0; child < childs.length; child++) {
        document.body.removeChild(childs[child]);
    }
} else if (childs[childs.length - 3].getAttribute("src") === null || childs[childs.length - 3].getAttribute("src") != "animations.js") {
    console.error("Error: script tag with src=\"animations.js\" should be before auth.js and after animscript")
    for (var child = 0; child < childs.length; child++) {
        document.body.removeChild(childs[child]);
    }
} else if (childs[childs.length - 5].getAttribute("src") === null || childs[childs.length - 5].getAttribute("src") != "animation.js") {
    console.error("Error: script tag with src=\"animation.js\" should be before animscript")
    for (var child = 0; child < childs.length; child++) {
        document.body.removeChild(childs[child]);
    }
}
