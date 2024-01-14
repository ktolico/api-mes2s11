console.log("Entro qr.js");

let imageqr = document.getElementById("imageqr");

const size = "300x300";
const qrText = "Julian";

fetch (`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${qrText}`)
.then(data => {
  console.log(data);
    if (data.status == 200) {
      imageqr.src = data.url;
    }
}).catch(error => {
  alert("error en carga")
})