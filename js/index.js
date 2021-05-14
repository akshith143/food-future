window.onscroll = function () {
    console.log("scrolled")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "80px";
        document.getElementById("nav-logo").style.height = "80px";
        document.getElementById("nav-logo").style.width = "80px";
    } else {
        document.getElementById("header").style.height = "150px";
        document.getElementById("nav-logo").style.height = "150px";
        document.getElementById("nav-logo").style.width = "150px";
    }
}