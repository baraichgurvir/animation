class Styles {
    constructor() {
        this.start();
    }

    start() {
        let style = document.getElementsByTagName('animscript')[0];
        if (style === undefined) {
            document.body.remove(style);
        } else {
            if (style != null) {
                let STT = document.createElement('script');
                let code = style.innerHTML;
                STT.innerHTML = code;
                document.body.appendChild(STT);
                style.innerHTML = null;
            }
        }
    }
}