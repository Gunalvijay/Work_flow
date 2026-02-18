const button = document.getElementById("button");

button.addEventListener("click", handleSubmit);

function handleSubmit() {
    const heading = document.getElementById("head");
    const name = document.getElementById("username").value;

    // Fade out
    heading.classList.remove("fade-in");
    heading.classList.add("fade-out");

    // Wait for fade out to complete
    setTimeout(() => {
        heading.textContent = "Welcome " + name;

        // Fade in
        heading.classList.remove("fade-out");
        heading.classList.add("fade-in");
    }, 800);
}
