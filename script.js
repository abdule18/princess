document.getElementById("surpriseButton").addEventListener("click", function() {
    var message = document.getElementById("surpriseMessage");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
    }
});
