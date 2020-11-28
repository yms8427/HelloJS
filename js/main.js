var number = 1;
var btnAll = document.getElementById("btnAll");
var btn = document.getElementById("btn");

function addItem() {
  var list = document.getElementById("list");
  var value = number + ". Kullanıcı";
  var li = document.createElement("li");
  li.append(value);
  list.appendChild(li);
  number++;
  if (number === 21) {
      btn.setAttribute("disabled", "disabled");
      btnAll.setAttribute("disabled", "disabled");
  }
}

function changeColor() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
}

btn.onclick = function () {
  addItem();
  changeColor();
};

btnAll.onclick = function () {
  for (var i = 0; i < 10; i++) {
    addItem();
  }
  changeColor();
  this.setAttribute("disabled", "disabled");
};

document.getElementById("btnRead").onclick = function(){
    var value = document.getElementById("txt").value;
    console.log(value);
    if (isNaN(value)) {
        console.warn("Değer sayı olmalıdır");
        return;
    }

    console.info(value * 2);
}

function learnBasics() {
    var value1 = 6;
    if (value1) {
        console.log("Sayı");
    }

    var name = "Can";
    if (name) {
        console.log("İsim");
    }

    var value = { name: "Can" };
    if (value) {
        console.log("Object");
    }
}
