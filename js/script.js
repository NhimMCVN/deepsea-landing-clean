window.onscroll = function() {
    fixHeader(), scrollFunction()
};
var header = document.getElementById("header"),
    sticky = header.offsetTop;

function fixHeader() {
    window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky")
}
let mybutton = document.getElementById("clickToTop");

function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? mybutton.style.display = "block" : mybutton.style.display = "none"
}

function topFunction() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}

function darken_screen(e) {
    !0 == e ? document.querySelector(".screen-darken").classList.add("active") : !1 == e && document.querySelector(".screen-darken").classList.remove("active")
}

function close_offcanvas() {
    darken_screen(!1), document.querySelector(".mobile-offcanvas.show").classList.remove("show"), document.body.classList.remove("offcanvas-active")
}

function show_offcanvas(e) {
    darken_screen(!0), document.getElementById(e).classList.add("show"), document.body.classList.add("offcanvas-active")
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[data-trigger]").forEach(function(e) {
        let t = e.getAttribute("data-trigger");
        e.addEventListener("click", function(e) {
            e.preventDefault(), show_offcanvas(t)
        })
    }), document.querySelectorAll(".btn-close").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault(), close_offcanvas()
        })
    }), document.querySelector(".screen-darken").addEventListener("click", function(e) {
        close_offcanvas()
    })
});