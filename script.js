document.addEventListener("DOMContentLoaded", () => {
    const bogoBoxes = document.querySelectorAll(".bogo-box");

    bogoBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            // Remove 'active' class from all boxes and hide their expandable content
            bogoBoxes.forEach((b) => {
                b.classList.remove("active");
                b.querySelector(".expandable-content").style.display = "none";
            });

            // Add 'active' class to clicked box and show its expandable content
            box.classList.add("active");
            box.querySelector(".expandable-content").style.display = "block";

            // Check the associated radio button
            box.querySelector('input[type="radio"]').checked = true;
        });
    });

    // Ensure only the initially active box (1 Unit) shows expandable content on load
    document.querySelector(".bogo-box.active .expandable-content").style.display = "block";
});
