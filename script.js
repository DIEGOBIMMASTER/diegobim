const WHATSAPP_NUMBER = "51902598128"; // ← cambia por tu número real

const btn = document.getElementById("btnWhatsApp");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const message =
  "Hola Diego, necesito información por favor.";

btn.href =
  "https://wa.me/" +
  WHATSAPP_NUMBER +
  "?text=" +
  encodeURIComponent(message);

// Tabs Servicios
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = {
  revit: document.getElementById("tab-revit"),
  dynamo: document.getElementById("tab-dynamo"),
  familias: document.getElementById("tab-familias"),
};

if (tabButtons.length) {
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // activar botón
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // mostrar contenido
      Object.values(tabContents).forEach((el) => (el.style.display = "none"));
      const key = btn.dataset.tab;
      tabContents[key].style.display = "block";
    });
  });
}
