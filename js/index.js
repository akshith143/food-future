window.onscroll = function () {
    console.log("scrolled")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "45px";
        document.getElementById("nav-logo").style.height = "45px";
        document.getElementById("nav-logo").style.width = "45px";
    } else {
        document.getElementById("header").style.height = "93px";
        document.getElementById("nav-logo").style.height = "93px";
        document.getElementById("nav-logo").style.width = "93px";
    }
}