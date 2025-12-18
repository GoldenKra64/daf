$(document).ready(() => {
    $(".ic-hi-con").click(() => {
        $("body").toggleClass("high-contrast");
    });

    $(".ic-si-inc").click(() => {
        const root = document.documentElement;
        let size = parseFloat(getComputedStyle(root).getPropertyValue("--text-size"));
        if (size > 1.5) return;
        root.style.setProperty("--text-size", (size + 0.25) + "em");
    });

    $(".ic-si-dec").click(() => {
        const root = document.documentElement;
        let size = parseFloat(getComputedStyle(root).getPropertyValue("--text-size"));
        if (size < 1.5) return;
        root.style.setProperty("--text-size", (size - 0.25) + "em");
    });
});