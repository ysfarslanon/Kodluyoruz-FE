const closedEmoji = document.getElementById("closed");
const openedEmoji = document.getElementById("opened");

closedEmoji.addEventListener('click',()=>{
    if (closedEmoji.classList.contains("active")) {
        closedEmoji.classList.remove("active")
        closedEmoji.classList.add("closed")
        openedEmoji.classList.add("active")
    }
});
openedEmoji.addEventListener('click',()=>{
    if (openedEmoji.classList.contains("active")) {
        openedEmoji.classList.remove("active")
        openedEmoji.classList.add("closed")
        closedEmoji.classList.add("active")
    }
});