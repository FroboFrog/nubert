const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xpos", x + "px")
    btnEl.style.setProperty("--ypos", y + "px")
})

function sound(){
    var audio = new Audio("Nubart2.mp3");
audio.play();
}