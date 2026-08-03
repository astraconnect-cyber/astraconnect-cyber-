function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let problem = document.getElementById("problem").value;

  let message =
`*New ASTRA Connect Booking*

Name: ${name}
Phone: ${phone}
Service: ${service}

Problem:
${problem}`;

  let url = "https://wa.me/2348116167723?text=" + encodeURIComponent(message);
  window.location.href = url;
}

function registerProfessional() {
  let fullname = document.getElementById("fullname").value;
  let phone = document.getElementById("phone").value;
  let location = document.getElementById("location").value;
  let profession = document.getElementById("profession").value;
  let experience = document.getElementById("experience").value;

  let message =
`*New Professional Registration*

Name: ${fullname}
Phone: ${phone}
Location: ${location}
Profession: ${profession}

Experience:
${experience}`;

  let url = "https://wa.me/2348116167723?text=" + encodeURIComponent(message);
  window.location.href = url;
}
