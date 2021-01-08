class Animator {
    constructor() {
        this.container = String;
        this.sec = 4;
        this.from = 1;
        this.y = null;
        this.type = String;
        this.side = "LEFT";
    }
    
    start() {
        let container = document.querySelector('.' + this.container) || document.getElementById('' + this.container);
        document.body.style.margin = "0px";
        document.body.style.padding = "0px";
        
        
        if (container === undefined || container === null) {
            console.error("Error: " + this.container + " is undifined");
        }
        
        if (this.y === null || this.y === undefined) {
            console.error("Error: y cannot be null")
        } else {
            this.over(container);
        }
        
        this.dimens(container);
        
        this.animate(container);
    }
    
    animate(container) {
        let childs = [];
        childs = container.children;
        this.sec = this.sec * 1000;
        
        for (var child = 0; child < childs.length; child++) {
            childs[child].classList.add('animate');
        }
        
        if (this.type === String || this.type === null || this.type === "") {
            console.error("Error: Type is null")
        } else if (this.type === "clip-circle") {
            childs[this.from - 1].classList.add('active');
            childs[this.from - 1].classList.add('clip-circle');
            
            setInterval(() => {
                childs[this.from - 1].classList.remove('active'); 
                childs[this.from - 1].classList.remove('clip-circle');
                this.from++;
                
                if (this.from > childs.length) {
                    this.from = 1;
                }
                childs[this.from - 1].classList.add('active');
                childs[this.from - 1].classList.add('clip-circle');
            }, this.sec)
        } else if (this.type === "slide") {
            if (this.side === "LEFT") {
                childs[this.from - 1].classList.add('active');
                childs[this.from - 1].classList.add('slide-l');
                childs[this.from].classList.add('active');
                
                setInterval(() => {
                    childs[this.from - 1].classList.remove('active'); 
                    childs[this.from - 1].classList.remove('slide-l');
                    if (this.from === childs.length + 1) {
                        childs[this.from].classList.remove('active');
                        this.from = 1;
                    } else if (this.from < childs.length) {
                        childs[0].classList.add('active');
                        childs[this.from].classList.remove('active');
                    }
                    // console.log(chi lds[this.from - 1])
                    this.from++;
                    
                    if (this.from > childs.length) {
                        this.from = 1;
                    }
                    
                    if (this.from === childs.length + 1) {
                        childs[0].classList.remove('active');
                        childs[this.from].classList.add('active');
                    } else if (this.from < childs.length) {
                        childs[this.from].classList.add('active');
                    }
                    childs[this.from - 1].classList.add('active');
                    childs[this.from - 1].classList.add('slide-l');
                }, this.sec)
            } else if (this.side === "RIGHT") {
                childs[this.from - 1].classList.add('active');
                childs[this.from - 1].classList.add('slide-r');
                childs[this.from].classList.add('active');
                
                setInterval(() => {
                    childs[this.from - 1].classList.remove('active'); 
                    childs[this.from - 1].classList.remove('slide-r');
                    if (this.from === childs.length + 1) {
                        childs[this.from].classList.remove('active');
                        this.from = 1;
                    } else if (this.from < childs.length) {
                        childs[0].classList.add('active');
                        childs[this.from].classList.remove('active');
                    }
                    // console.log(chi lds[this.from - 1])
                    this.from++;
                    
                    if (this.from > childs.length) {
                        this.from = 1;
                    }
                    
                    if (this.from === childs.length + 1) {
                        childs[0].classList.remove('active');
                        childs[this.from].classList.add('active');
                    } else if (this.from < childs.length) {
                        childs[this.from].classList.add('active');
                    }
                    childs[this.from - 1].classList.add('active');
                    childs[this.from - 1].classList.add('slide-r');
                }, this.sec)
            }
        } else if (this.type != "slide" || this.type != "clip-circle") {
            console.warn("Warning: Type should be only 'clip-circle', 'slide'");
            console.error("Error: Type is undifined");
        }
    }
    
    dimens(container) {
        var childs = [];
        childs = container.children;
        
        for (var child = 0; child < childs.length; child++) {
            childs[child].style.width = "100vw";
        }
        
        for (var child = 0; child < childs.length; child++) {
            childs[child].style.height = this.y;
        }
    }
    
    over(container) {
        container.style.width = "100vw";
        container.style.height = this.y;
        container.style.overflow = "hidden";
    }
}