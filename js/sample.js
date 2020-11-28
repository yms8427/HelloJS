var cmbGender = document.getElementById("gender");
var txtFirstName = document.getElementById("firstName");
var txtLastName = document.getElementById("lastName");
var txtBirthDate = document.getElementById("birthDate");
var txtInfo = document.getElementById("info");

function clear() {
  cmbGender.value = "-1";
  txtFirstName.value = "";
  txtLastName.value = "";
  txtBirthDate.value = "";
  txtInfo.value = "";
}

function removeIdsFromRecords() {
    document.querySelector(".records .card #img").removeAttribute("id");
    document.querySelector(".records .card span#fullName").removeAttribute("id");
    document.querySelector(".records .card span#birthDateSpan").removeAttribute("id");
    document.querySelector(".records .card #description").removeAttribute("id");
}

document.getElementById("btnSave").onclick = function () {
  var gender = cmbGender.value;
  if (gender == -1) {
    alert("Cinsiyet Seçiniz");
    return;
  }

  var template = document.getElementById("cardTemplate");
  template.content.getElementById("fullName").innerText = txtFirstName.value + " " + txtLastName.value;
  template.content.getElementById("birthDateSpan").innerText = txtBirthDate.value;
  template.content.getElementById("description").innerText = txtInfo.value;
  var img = template.content.getElementById("img");
  var imagePath = gender == "0" ? "img/male.png" : "img/female.png";
  img.setAttribute("src", imagePath);

  var records = document.getElementsByClassName("records")[0];
  records.innerHTML += template.innerHTML;
  clear();
  removeIdsFromRecords();
};

document.getElementById("btnCancel").onclick = function () {
    clear();
}
