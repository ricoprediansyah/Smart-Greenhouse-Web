      // contast us
              
                
function sendMail(){
  var params = {
    nameX: document.getElementById("nameX").value,
    emailX: document.getElementById("emailX").value,
    phoneX: document.getElementById("phoneX").value,
    messageX: document.getElementById("messageX").value,
  };


const serviceID = "service_pfeotci";
const templateID = "template_06txbwv";

emailjs
.send(serviceID,templateID,params)
.then((res) =>{
    document.getElementById("nameX").value = "";
    document.getElementById("emailX").value = "";
    document.getElementById("phoneX").value = "";
    document.getElementById("messageX").value = "";
    console.log(res);
    alert("Pesan telah terkirim");

  }
)
.catch((err) => console.log(err));
}