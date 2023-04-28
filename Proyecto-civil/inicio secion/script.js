
getSignUp();
   
const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  iconos = [
    document.querySelector(".modo"),
    document.querySelector(".luna"),
    document.querySelector(".sol"),
  ];
aviso = [
  document.querySelector(".Formulario"),
  document.querySelector(".info"),
  document.querySelector(".Iniciar-sesion"),
  document.querySelector(".salir"),
];
(modeSwitch = body.querySelector(".selector")),
  (modeText = body.querySelector(".mode-text"));

var c = 0;

if (localStorage.getItem("pantalla") == "oscuro") {
  body.classList.add("dark");

  iconos[2].classList.remove("sol");
  iconos[1].classList.add("luna");
  modeText.innerText = "Modo Oscuro";
} else {
  iconos[1].classList.remove("luna");
  iconos[2].classList.add("sol");
  modeText.innerText = "Modo Claro";
}
toggle.addEventListener("click", () => {
  c = c + 1;
  if (c % 2 != 0) {
    iconos[0].classList.add("modo2");
    for (i = 0; i < aviso.length; i++) {
      aviso[i].classList.add("remove-aviso");
    }
  } else {
    iconos[0].classList.remove("modo2");
    for (i = 0; i < aviso.length; i++) {
      aviso[i].classList.remove("remove-aviso");
    }
  }

  sidebar.classList.toggle("close");
});
function activar(variable) {
  document.querySelector(variable).classList.remove("activo");
}
function desactivar(variable) {
  document.querySelector(variable).classList.add("activo");
}

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    iconos[2].classList.remove("sol");
    iconos[1].classList.add("luna");
    localStorage.setItem("pantalla", "oscuro");
    modeText.innerText = "Modo Claro";
  } else {
    iconos[1].classList.remove("luna");
    iconos[2].classList.add("sol");
    modeText.innerText = "Modo Oscuro";
    localStorage.setItem("pantalla", "claro");
  }
});

const loadModule2 = async () => {
  try {
    const { getUsers } = await import("../firebase/firebaseLogin.js");
    return getUsers();
  } catch (error) {
    console.error("Error al importar el módulo:", error);
  }
};


const logIn = (event) => {
  event.preventDefault()
  let form = new FormData(document.getElementById("formLogin"));
  let currentUser = {};
  for (let [key, value] of form.entries()) {
    currentUser[key] = value;
  }
   loadModule2().then( data =>{
      data.docs.forEach(element => {
         if(currentUser.user == element._document.data.value.mapValue.fields.user.stringValue && currentUser.password == element._document.data.value.mapValue.fields.password.stringValue)
        {
          localStorage.setItem("permissions", element._document.data.value.mapValue.fields.permissions.integerValue);
          localStorage.setItem("user", element._document.data.value.mapValue.fields.user.stringValue);
          window.location.href = "../dashboard/dashboard.html";
        } 
      });
   });
};


function getSignUp(){
    if(localStorage.getItem("permissions") != null && localStorage.getItem("user") != null)
    {
      window.location.href = "../dashboard/dashboard.html";
    }
}