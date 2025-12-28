const WHATSAPP_NUMBER = "51993788179"; // <-- cambia esto (sin +)

const btn = document.getElementById("btnWhatsApp");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const msg = "Hola Wilton, quiero información sobre clases 1:1 de Revit y/o scripts Dynamo.";
btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
