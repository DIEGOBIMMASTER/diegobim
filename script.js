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

