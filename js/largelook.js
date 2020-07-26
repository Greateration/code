 //放大镜构造方法
 function MakeLarger() {
     //获取属性
     this.small = document.querySelector(".shopimg"); /*小盒子*/
     this.anchor = document.querySelector(".anchor"); /*移动锚点*/
     this.large = document.querySelector(".bigbox"); /*大盒子*/
     this.largeimg = document.querySelector(".bigbox > img"); /*放大镜图片*/
     this.maxX = this.small.offsetWidth - this.anchor.offsetWidth; /*所能移动的水平极值*/
     this.maxY = this.small.offsetHeight - this.anchor.offsetHeight; /*所能移动的水平极值*/
     var _this = this; //this指向赋给变量
     //小盒子添加鼠标事件方法
     this.smallMouse = function () {
         //鼠标移入触发
         _this.small.onmouseenter = function () {
             _this.large.style.display = "block";
             _this.anchor.style.display = "block";
             _this.anchor.style.opacity = 0.7;
         }
         //鼠标移出触发
         _this.small.onmouseleave = function () {
             _this.large.style.display = "none";
             _this.anchor.style.display = "none";
         }
         //鼠标移动触发
         _this.small.onmousemove = function (e) {
             e = e || window.event; //兼容IE
             /*水平移动距离*/
             var left = e.clientX - _this.small.parentElement.offsetLeft - _this.anchor.offsetWidth / 2;
             left = left < 0 ? 0 : left;
             left = left > _this.maxX ? _this.maxX : left;
             _this.anchor.style.left = left + "px";
             /*垂直移动距离*/
             var top = e.clientY - _this.small.offsetTop - _this.anchor.offsetHeight / 2;
             top = top < 0 ? 0 : top;
             top = top > _this.maxY ? _this.maxY : top;
             _this.anchor.style.top = top + "px";
             /*水平比例*/
             var percentX = left / _this.maxX;
             /*垂直比例*/
             var percentY = top / _this.maxY;
             /*大图移动距离*/
             var bigLeft = (_this.largeimg.offsetWidth - _this.large.offsetWidth) * percentX;
             var bigTop = (_this.largeimg.offsetHeight - _this.large.offsetHeight) * percentY;
             _this.largeimg.style.left = -bigLeft + "px";
             _this.largeimg.style.top = -bigTop + "px";
         }
     }
     this.smallMouse(); //调用鼠标事件方法
 }
 //实例化放大镜方法
 var makeLarger = new MakeLarger();