const btn = document.getElementById("btn2");

btn.addEventListener("click", (e) => {
    const topPos =  btn.offsetTop;
    if (topPos === 15) {
        btn.style.margin = 115 + "px";
        btn.style.transition = 1.5 + "s";
    } else if (topPos === 115) {
        btn.style.margin = 15 + "px";
        btn.style.transition = 1.5 + "s";
    }
})