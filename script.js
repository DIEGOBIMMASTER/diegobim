const WHATSAPP_NUMBER = "51902598128";

// Espera a que cargue el HTML
document.addEventListener("DOMContentLoaded", () => {
  // Año (si existe)
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Botón WhatsApp (si existe)
  const btn = document.getElementById("btnWhatsApp");
  if (btn) {
    const message = "Hola Diego, necesito información por favor.";
    btn.href =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);
  }

  // Tabs Servicios (si existen)
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = {
    revit: document.getElementById("tab-revit"),
    dynamo: document.getElementById("tab-dynamo"),
    familias: document.getElementById("tab-familias"),
  };

  if (tabButtons.length) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // activar botón
        tabButtons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");

        // ocultar todo
        Object.values(tabContents).forEach((el) => {
          if (el) el.style.display = "none";
        });

        // mostrar el que corresponde
        const key = button.dataset.tab; // <-- debe ser revit/dynamo/familias
        if (tabContents[key]) tabContents[key].style.display = "block";
      });
    });
  }
});
