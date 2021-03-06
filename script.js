const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    
    notif.classList.add("toast");

    notif.innerText = "This challenge is crazy!";

    container.appendChild(notif);
    // enelevrr la notif au bout de 3 secondes
    setTimeout(() => {
        notif.remove();
    }, 3000);
}