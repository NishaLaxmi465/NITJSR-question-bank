document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener("click", function (e) {
        const ok = confirm("Do you want to download this question paper?");
        if (!ok) {
            e.preventDefault();
        }
    });
});
const status = document.querySelector("#status-text");

document.querySelectorAll(".semester-title").forEach(title => {
    const container = title.nextElementSibling;
    container.style.display = "none";

    function getStatusText() {
        return container.style.display === "block"
            ? "Click to hide subjects"
            : "Click to view subjects";
    }
    title.addEventListener("mouseenter", () => {
        status.textContent = getStatusText();
    });
    title.addEventListener("mouseleave", () => {
        status.textContent = "";
    });
    title.addEventListener("click", () => {
        container.style.display =
            container.style.display === "block" ? "none" : "block";
            if (title.matches(":hover")) {
            status.textContent = getStatusText();
        }
    });
});
const modeBtn = document.getElementById("mode-toggle");
const body = document.body;

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        modeBtn.textContent = "Light Mode";
    } else {
        modeBtn.textContent = "Dark Mode";
    }
});


