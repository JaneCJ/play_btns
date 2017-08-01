var btn1 = {
    btn:null,
    mouseX:null,
    mouseY:null,
    WIDTH:0,
    HEIGHT:0,
    halfW:0,
    halfH:0,
    percentY:0,
    percentX:0,
    deg:20,
    btnHover(){
        this.btn = document.querySelector("#btn1 .hover-3d");
        this.WIDTH = parseFloat(getComputedStyle(this.btn).width);
        this.HEIGHT = parseFloat(getComputedStyle(this.btn).height);
        this.halfW = this.WIDTH/2;
        this.halfH = this.HEIGHT/2;
        this.btn.onmousemove = function(e){
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
            this.percentY = (this.mouseX - this.halfW)/this.halfW;
            this.percentX = (this.halfH - this.mouseY)/this.halfH;
            this.btn.style.transform = "rotateX("+this.deg*this.percentX+"deg)"+" rotateY("+this.deg*this.percentY+"deg)";
        }.bind(this);
        this.btn.onmouseout = function(){
            this.btn.style.transform = "";
        }.bind(this);
    }
}
btn1.btnHover();

var btn2 = {
    target: null,
    parent: null,
    rect: null,
    top: 0,
    left: 0,
    ripple:null,
    rippleSize:0,
    btn2Event(e){
        this.target = e.target;
        if(this.target.nodeName !== "BUTTON")
        return false;
        this.rect = this.target.getBoundingClientRect();
        console.log(this.rect);
        this.ripple = this.target.querySelector(".ripple");
        if(!this.ripple){
            this.ripple = document.createElement("span");
            this.ripple.className = "ripple";
            this.rippleSize = Math.max(this.rect.width,this.rect.height)+"px";
            console.log(this.rippleSize);
            console.log(this.ripple.offsetHeight);
            this.ripple.style.width = this.ripple.style.height = this.rippleSize;
            this.target.appendChild(this.ripple);
        }
        this.ripple.classList.remove("show");
        this.top = e.clientY - this.rect.top - this.ripple.offsetHeight/2;
        this.left = e.clientX - this.rect.left - this.ripple.offsetWidth/2;
        this.ripple.style.top = this.top + "px";
        this.ripple.style.left = this.left + "px";
        this.ripple.classList.add("show");
        return false;
    },
    btnClick(){
        this.parent = document.getElementById("main");
        this.parent.addEventListener("click",this.btn2Event);
    }
}
btn2.btnClick();
