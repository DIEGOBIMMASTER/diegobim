const WHATSAPP_NUMBER = "51999999999"; // ← cambia por tu número real

const btn = document.getElementById("btnWhatsApp");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const message =
  "Hola Diego, quiero información sobre clases personalizadas de Revit y/o scripts Dynamo.";

btn.href =
  "https://wa.me/" +
  WHATSAPP_NUMBER +
  "?text=" +
  encodeURIComponent(message);

