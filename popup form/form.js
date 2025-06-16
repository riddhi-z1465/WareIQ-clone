





document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("openWareIQForm");

  button.addEventListener("click", function () {
    fetch("form/form.html") // Adjust path if different
      .then((res) => res.text())
      .then((html) => {
        const container = document.getElementById("form-modal-container");
        container.innerHTML = html;

        // Dynamically load modal CSS
        const cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = "form/form.css"; // Adjust path
        document.head.appendChild(cssLink);

        // Dynamically load modal JS
        const script = document.createElement("script");
        script.src = "form/form.js"; // Adjust path
        document.body.appendChild(script);
      })
      .catch((err) => {
        console.error("Error loading form:", err);
      });
  });
});

