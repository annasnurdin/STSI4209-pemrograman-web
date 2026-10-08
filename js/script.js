function bukaModal(id) {
  document.getElementById(id).classList.add("active");
}

function tutupModal(id) {
  document.getElementById(id).classList.remove("active");
}

document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = dataPengguna.find(function (u) {
    return u.email === email && u.password === password;
  });

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("email/password yang anda masukkan salah");
  }
});

document.getElementById("formLupa").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Instruksi reset password telah dikirim ke email Anda.");
  tutupModal("modalLupa");
});

document.getElementById("formDaftar").addEventListener("submit", function (e) {
  e.preventDefault();

  dataPengguna.push({
    id: dataPengguna.length + 1,
    nama: document.getElementById("regNama").value,
    email: document.getElementById("regEmail").value,
    password: document.getElementById("regPassword").value
  });

  alert("Pendaftaran berhasil! Silakan login.");
  tutupModal("modalDaftar");
});
