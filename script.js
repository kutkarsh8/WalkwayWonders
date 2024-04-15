document.addEventListener("DOMContentLoaded", () => {
    const Bar = document.getElementById("bar");
    const nav = document.getElementById("navbar");
    const close = document.getElementById("close");

    if (Bar) {
        Bar.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    if (close) {
        close.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    }
});