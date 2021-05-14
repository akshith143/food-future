window.onscroll = function () {
    console.log("scrolled")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "50px";
        document.getElementById("nav-logo").style.height = "50px";
        document.getElementById("nav-logo").style.width = "50px";
    } else {
        document.getElementById("header").style.height = "100px";
        document.getElementById("nav-logo").style.height = "100px";
        document.getElementById("nav-logo").style.width = "100px";
    }
}