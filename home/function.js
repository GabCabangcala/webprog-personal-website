<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get input values
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        if (name && message) {
            // Show the modal
            const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));
            thankYouModal.show();

            // Reset form after showing the modal
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
