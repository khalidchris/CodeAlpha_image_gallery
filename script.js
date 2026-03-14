const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".image");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));

        // Add active to clicked button
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        images.forEach(image => {

            if (filter === "all") {
                image.classList.remove("hide");
            } else {
                if (image.classList.contains(filter)) {
                    image.classList.remove("hide");
                } else {
                    image.classList.add("hide");
                }
            }

        });

    });
});
