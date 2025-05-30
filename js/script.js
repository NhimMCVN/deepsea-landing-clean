window.onscroll = function() {
    fixHeader();
    scrollFunction();
};

var header = document.getElementById("header"),
    sticky = header.offsetTop;

function fixHeader() {
    window.pageYOffset > sticky
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
}

let mybutton = document.getElementById("clickToTop");

function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? mybutton.style.display = "block"
        : mybutton.style.display = "none";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function darken_screen(e) {
    if (e === true)
        document.querySelector(".screen-darken").classList.add("active");
    else
        document.querySelector(".screen-darken").classList.remove("active");
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector(".mobile-offcanvas.show").classList.remove("show");
    document.body.classList.remove("offcanvas-active");
}

function show_offcanvas(e) {
    darken_screen(true);
    document.getElementById(e).classList.add("show");
    document.body.classList.add("offcanvas-active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[data-trigger]").forEach(function(e) {
        let t = e.getAttribute("data-trigger");
        e.addEventListener("click", function(e) {
            e.preventDefault();
            show_offcanvas(t);
        });
    });

    document.querySelectorAll(".btn-close").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector(".screen-darken").addEventListener("click", function(e) {
        close_offcanvas();
    });

    // Đóng offcanvas khi click vào từng nav-link trên mobile
	document.querySelectorAll('#navbar_main .nav-link').forEach(function(link) {
		link.addEventListener('click', function() {
			// 1. Cập nhật .active
			document.querySelectorAll('#navbar_main .nav-item').forEach(function(item) {
				item.classList.remove('active');
			});
			this.closest('.nav-item').classList.add('active');

			// 2. Đóng offcanvas nếu trên mobile
			if (window.innerWidth <= 991.98) {
				close_offcanvas();
			}
		});
	});
});