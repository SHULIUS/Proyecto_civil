const loadModule = async (form) => {
  try {
    const { addForm } = await import("./firebase/firebaseSetForm.js");
    return addForm(form);
  } catch (error) {
    console.error("Error al importar el módulo:", error);
  }
};

const loadStorage = async (file, path) => {
  try {
    const { addFile } = await import("./firebase/firebaseSetImg.js");
    return addFile(file, path);
  } catch (error) {
    console.error("Error al importar el módulo:", error);
  }
};

var r = 1,
  o = 1,
  o2 = 1,
  o3 = 1,
  l = 0,
  p = 1,
  a = "3p0",
  s = 1,
  d = 1,
  boton = false,
  siguienteandanterior = 0,
  puntajefinal = 0,
  primeraseccion = 0,
  segundaseccion = 0;
  latitud = 0, 
  longitud = 0;

function condicion(variable) {
  var condicion1 = body.querySelector("." + variable);
  if (variable == "condicional" && r == 1) {
    condicion1.innerHTML =
      " <label class='text' for='condicion1'>Nombre de la constructora(Esto es opcional)</label><input placeholder='Constructora' id='condicion1' type='text'>";
    r = 2;
  } else {
    if (variable == "condicionalno" && r == 2) {
      while (condicion1.firstChild) {
        condicion1.removeChild(condicion1.firstChild);
      }

      r = 1;
    }
  }
}
function condicion2(variable) {
  var condicion2 = body.querySelector("." + variable);
  if (variable == "condicion2" && p == 1) {
    condicion2.innerHTML =
      "<br><h2 class='text'>¿Cual era el uso anterior de la vivienda?</h2><section class='pregunta condicion'><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='residencial' id='residencial2' type='radio' required><label class='label label-radio text' for='residencial2'>Residencial</label><br><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='comercial' id='comercial2' type='radio'><label class='label label-radio text' for='comercial2'>Comercial</label><br><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='educativo' id='educativo2' type='radio'><label class='label label-radio text' for='educativo2'>Educativo</label><br><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='oficinas' id='oficinas2' type='radio'><label class='label label-radio text' for='oficinas2'>Oficinas</label><br><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='bodegas' id='bodegas2' type='radio'><label class='label label-radio text' for='bodegas2'>Bodegas</label><br><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='deportiva' id='deportiva2' type='radio'><label class='label label-radio text' for='deportiva2'>Deportiva</label><br><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='centrosalud' id='centrosalud2' type='radio'><label class='label label-radio text' for='centrosalud2'>Salud</label><br><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='industria' id='industria2' type='radio'><label class='label label-radio text' for='industria2'>Industria</label><br><input onclick=\"condicionotro('otrono2')\" name='usoanteriorvivienda' value='hotelero' id='hotelero2' type='radio'><label class='label label-radio text' for='hotelero2'>Hotelero</label><br><input onclick=\"condicionotro('otro2')\" name='usoanteriorvivienda' value='otro' id='otro2' type='radio'><label class='label label-radio text' for='otro2'>Otro</label><section class='otro2 otrono2'></section></section class='pregunta condicion'><hr>";
    p = 2;
  } else {
    if (variable == "condicion2no" && p == 2) {
      while (condicion2.firstChild) {
        condicion2.removeChild(condicion2.firstChild);
      }

      p = 1;
    }
  }
}
function condicion3(variable) {
  if (variable == "ninguna" && a == "3p0") {
  } else if (variable == "ninguna") {
    switch (a) {
      case "3p1":
        var material = document.querySelector(".condicion3p1");
        while (material.firstChild) {
          material.removeChild(material.firstChild);
        }
        a = "3p0";
        break;
      case "3p2":
        var material = document.querySelector(".condicion3p2");
        while (material.firstChild) {
          material.removeChild(material.firstChild);
        }
        a = "3p0";
        break;
      case "3p3":
        var material = document.querySelector(".condicion3p3");
        while (material.firstChild) {
          material.removeChild(material.firstChild);
        }
        a = "3p0";
        break;
      case "ninguna":
        break;
    }
  } else if (
    (variable == ".condicion3p1" ||
      variable == ".condicion3p2" ||
      variable == ".condicion3p3") &&
    a == "3p0"
  ) {
    switch (variable) {
      case ".condicion3p1":
        var material = document.querySelector(".condicion3p1");
        material.innerHTML =
          "<hr><h2 style='text-align: center;' class='text'>¿Cuál tipo de mampostería tiene la vivienda?</h2><input name='tipomamposteria' value='reforzada' id='reforzada' type='radio' required><label class='label label-radio text' for='reforzada'>Reforzada</label><p class='text'>(contiene acero al interior de la estructura): <a onclick=\"putimage('./img/4.jpg')\">Imagen</a></p><input name='tipomamposteria' value='noreforzada' id='noreforzada' type='radio'><label class='label label-radio text' for='noreforzada'>No reforzada</label><p class='text'> (No contiene hierro al interior de la estructura, solo sería el adobe)</p><input name='tipomamposteria' value='confinada' id='confinada' type='radio'><label class='label label-radio text' for='confinada'>Confinada</label><p class='text'>(Muro el cual está encerrado alrededor por vigas y columnas): <a onclick=\"putimage('./img/4.jpg')\">Imagen</a></p>";
        a = "3p1";
        break;
      case ".condicion3p2":
        var material = document.querySelector(".condicion3p2");
        material.innerHTML =
          "<hr><h2 style='text-align: center;' class='text'>¿Qué tipo de concreto reforzado tiene la vivienda?</h2><input name='tipoconcreto' value='muroestructural' id='muroestructural' type='radio' required><label class='label label-radio text' for='muroestructural'>Muro estructural</label><p class='text'>Muro el cual no se puede quitar ni modificar, ya que son muros que soportan la carga de la vivienda</p><input name='tipoconcreto' value='portico' id='portico' type='radio'><label style='display: inline;' class='label label-radio text' for='portico'>Pórtico</label><p style='display: inline; margin-left: 1rem;' class='text'><a onclick=\"putimage('./img/5.jpg')\">Imagen</a></p><br><input name='tipoconcreto' value='sistemadualcombinado' id='sistemadualcombinado' type='radio'><label class='label label-radio text' for='sistemadualcombinado'>Sistema dual o combinado</label><p class='text'>muros estructurales y pórticos (compuestos por vigas y columnas</p><input name='tipoconcreto' value='prefabricado' id='prefabricado2' type='radio'><label class='label label-radio text' for='prefabricado2'>Prefabricado</label><p class='text'>construcción por secciones o módulos que fueron diseñadas con antelación por fuera de la construcción<a onclick=\"putimage('./img/6.jpg')\">Imagen</a></p>";
        a = "3p2";
        break;
      case ".condicion3p3":
        var material = document.querySelector(".condicion3p3");
        material.innerHTML =
          "<hr><h2 style='text-align: center;' class='text'>¿Qué tipo de Prefabricación tiene la vivienda?</h2><input name='tipoprefabrica' value='yeso' id='yeso' type='radio' required><label style='display: inline; margin-right: 1rem;' class='label label-radio text' for='yeso'>Yeso</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/7.jpg')\">Imagen Yeso</a></p><br><input name='tipoprefabrica' value='madera' id='madera2' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text' for='madera2'>Madera</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/8.jpg')\">Imagen Madera</a></p><br><input name='tipoprefabrica' value='pvs' id='pvs' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text'for='pvs'>PVS</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/9.jpg')\">Imagen PVS</a></p><br><input name='tipoprefabrica' value='drywall' id='drywall' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text'for='drywall'>Drywall</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/10.jpg')\">Imagen Drywall</a></p><br><input name='tipoprefabrica' value='fibrocemento' id='fibrocemento' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text'for='fibrocemento'>fibrocemento</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/11.jpg')\">Imagen Fibrocemento</a></p><br><input name='tipoprefabrica' value='otro5' id='otro5' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text'for='otro5'>Otro</label>";
        a = "3p3";
        break;
    }
  } else if (
    (variable == ".condicion3p1" && a == "3p1") ||
    (variable == ".condicion3p2" && a == "3p2") ||
    (variable == ".condicion3p3" && a == "3p3")
  ) {
  } else if (a != "3p0") {
    switch (a) {
      case "3p1":
        var eliminar = document.querySelector(".condicion3p1");
        while (eliminar.firstChild) {
          eliminar.removeChild(eliminar.firstChild);
        }
        a = "3p1";
        break;
      case "3p2":
        var eliminar = document.querySelector(".condicion3p2");
        while (eliminar.firstChild) {
          eliminar.removeChild(eliminar.firstChild);
        }
        a = "3p2";
        break;
      case "3p3":
        var eliminar = document.querySelector(".condicion3p3");
        while (eliminar.firstChild) {
          eliminar.removeChild(eliminar.firstChild);
        }
        a = "3p3";
        break;
    }
    switch (variable) {
      case ".condicion3p1":
        var material = document.querySelector(".condicion3p1");
        material.innerHTML =
          "<hr><h2 style='text-align: center;' class='text'>¿Cuál tipo de mampostería tiene la vivienda?</h2><input name='tipomamposteria' value='reforzada' id='reforzada' type='radio' required><label class='label label-radio text' for='reforzada'>Reforzada</label><p class='text'>(contiene acero al interior de la estructura): <a onclick=\"putimage('./img/3.jpg')\">Imagen</a></p><input name='tipomamposteria' value='noreforzada' id='noreforzada' type='radio'><label class='label label-radio text' for='noreforzada'>No reforzada</label><p class='text'> (No contiene hierro al interior de la estructura, solo sería el adobe)</p><input name='tipomamposteria' value='confinada' id='confinada' type='radio'><label class='label label-radio text' for='confinada'>Confinada</label><p class='text'>(Muro el cual está encerrado alrededor por vigas y columnas): <a onclick=\"putimage('./img/4.jpg')\">Imagen</a></p>";
        a = "3p1";
        break;
      case ".condicion3p2":
        var material = document.querySelector(".condicion3p2");
        material.innerHTML =
          "<hr><h2 style='text-align: center;' class='text'>¿Qué tipo de concreto reforzado tiene la vivienda?</h2><input name='tipoconcreto' value='muroestructural' id='muroestructural' type='radio' required><label class='label label-radio text' for='muroestructural'>Muro estructural</label><p class='text'>Muro el cual no se puede quitar ni modificar, ya que son muros que soportan la carga de la vivienda</p><input name='tipoconcreto' value='portico' id='portico' type='radio'><label style='display: inline;' class='label label-radio text' for='portico'>Pórtico</label><p style='display: inline; margin-left: 1rem;' class='text'><a onclick=\"putimage('./img/5.jpg')\">Imagen</a></p><br><input name='tipoconcreto' value='sistemadualcombinado' id='sistemadualcombinado' type='radio'><label class='label label-radio text' for='sistemadualcombinado'>Sistema dual o combinado</label><p class='text'>muros estructurales y pórticos (compuestos por vigas y columnas</p><input name='tipoconcreto' value='prefabricado' id='prefabricado2' type='radio'><label class='label label-radio text' for='prefabricado2'>Prefabricado</label><p class='text'>construcción por secciones o módulos que fueron diseñadas con antelación por fuera de la construcción<a onclick=\"putimage('./img/6.jpg')\">Imagen</a></p>";
        a = "3p2";
        break;
      case ".condicion3p3":
        var material = document.querySelector(".condicion3p3");
        material.innerHTML =
          "<hr><h2 style='text-align: center;' class='text'>¿Qué tipo de Prefabricación tiene la vivienda?</h2><input name='tipoprefabrica' value='yeso' id='yeso' type='radio' required><label style='display: inline; margin-right: 1rem;' class='label label-radio text' for='yeso'>Yeso</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/7.jpg')\">Imagen Yeso</a></p><br><input name='tipoprefabrica' value='madera' id='madera2' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text' for='madera2'>Madera</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/8.jpg')\">Imagen Madera</a></p><br><input name='tipoprefabrica' value='pvs' id='pvs' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text'for='pvs'>PVS</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/9.jpg')\">Imagen PVS</a></p><br><input name='tipoprefabrica' value='drywall' id='drywall' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text'for='drywall'>Drywall</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/10.jpg')\">Imagen Drywall</a></p><br><input name='tipoprefabrica' value='fibrocemento' id='fibrocemento' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text'for='fibrocemento'>fibrocemento</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/11.jpg')\">Imagen Fibrocemento</a></p><br><input name='tipoprefabrica' value='otro5' id='otro5' type='radio'><label style='display: inline; margin-right: 1rem;' class='label label-radio text'for='otro5'>Otro</label>";
        a = "3p3";
        break;
    }
  }
}

function validarfile(variable) {
  var documento = document.getElementsByClassName(variable);
  var ruta = documento[0].value;
  var permitidos = /(.PNG|.jpg|.jpeg)$/i;
  if (!permitidos.exec(ruta)) {
    documento[0].value = "";
    documento[1].innerText =
      "El tipo de archivo que selecciono no es permitido asegúrese de subir una imagen, No se permite ningun otro tipo de archivo";
    documento[0].removeAttribute("required");
  } else {
    documento[1].innerText = "";
  }
  function file(event) {
    if (l % 2 != 0 && s == 1 && d == 1) {
      var input = "",
        parrafo = "",
        ruta = "";
      var permitidos = /(.PNG|.jpg|.jpge)$/i;
      for (i = 0; i < 4; i++) {
        input = document.querySelector("f" + (i + 1));
        parrafo = document.querySelector("p" + (i + 1));
        ruta = input.value;
        if (!permitidos.exec(ruta)) {
        }
      }
    }
  }
}
function mapa(event) {
  event.preventDefault();
  var miDiv = document.getElementById("spinnerMap");
  miDiv.style.display = "block";

  /** @type {HTMLElement}*/
  var posElt;
  /** @type {HTMLElement} */
  var posLinkElt;

  posElt = document.getElementById("Pos");
  posLinkElt = document.querySelector("#PosLink > a");

  navigator.geolocation.getCurrentPosition(geoposOK, geoposKO);

  /** @param {GeolocationPosition} pos */
  function geoposOK(pos) {
    //Obtenemos latitud y longitud
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    longitud = long;
    latitud = lat;
    miDiv.style.display = "none";
    //Mostramos la posición
    posElt.textContent = `${lat}, ${long}`;
    //generamos enlace a la posición
    posLinkElt.href = `https://maps.google.com/?q=${lat},${long}`;
    posLinkElt.textContent = "Mostrar tu posición en un mapa";
    boton = true;
  }

  /** @param {GeolocationPositionError} err */
  function geoposKO(err) {
    console.warn(err.message);
    let msg;
    switch (err.code) {
      case err.PERMISSION_DENIED:
        msg = "No nos has dado permiso para obtener tu posición";
        break;
      case err.POSITION_UNAVAILABLE:
        msg = "Tu posición actual no está disponible";
        break;
      case err.TIMEOUT:
        msg = "No se ha podido obtener tu posición en un tiempo prudencial";
        break;
      default:
        msg = "Error desconocido";
        break;
    }
    posElt.textContent = msg;
  }
}

function condicion4(variable) {
  var condicion4 = document.querySelector(variable);
  if (variable == ".condicion4" && s == 1) {
    condicion4.innerHTML =
      "<hr /><h2 style='text-align: center' class='text'>Incluya 2 imagenes del hundimiento</h2><p class='text'>En este primero suba una foto lejana del hundimiento horiozontal<a onclick=\"putimage('./img/hundimiento.png')\">Haga clic aquí para ver un ejemplo</a></p><input onchange=\"return validarfile('f2')\" class='f2' type='file'accept='image/*' required id='sinking1Img'><p class='text f2'></p><p class='text'>En este segundo suba una foto cercana con algun objeto que se pueda dimencionar al lado del hundimiento el objeto con el que se puede dimencionar puede ser por ejemplo: un lápiz o Cuaderno <a onclick=\"putimage('./img/hundimientolapicero.png')\">Haga clic aquí para ver un ejemplo</a></p><input onchange=\"return validarfile('f3')\" class='f3' type='file'accept='image/*' required id='sinking2Img'><p class='text f3'></p>";
    s = 2;
  } else {
    if (variable == ".seleccion3" && s == 2) {
      while (condicion4.firstChild) {
        condicion4.removeChild(condicion4.firstChild);
      }
      s = 1;
    }
  }
}
async function validar(event) {
  if (boton) {
    if (siguienteandanterior == 0) {
      switch (municipio.selectedIndex) {
        case 0:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "B";
              break;
            case 1:
              TipoTierra = "B";
              break;
            case 2:
              TipoTierra = "B";
              break;
            case 3:
              TipoTierra = "B";
              break;
            case 4:
              TipoTierra = "B";
              break;
            case 5:
              TipoTierra = "B";
              break;
            case 6:
              TipoTierra = "B";
              break;
            case 7:
              TipoTierra = "B";
              break;
            case 8:
              TipoTierra = "B";
              break;
            case 9:
              TipoTierra = "B";
              break;
            case 10:
              TipoTierra = "B";
              break;
            case 11:
              TipoTierra = "B";
              break;
            case 12:
              TipoTierra = "B";
              break;
            case 13:
              TipoTierra = "B";
              break;
            case 14:
              TipoTierra = "B";
              break;
            case 15:
              TipoTierra = "B";
              break;
            case 16:
              TipoTierra = "B";
              break;
            case 17:
              TipoTierra = "B";
              break;
            case 18:
              TipoTierra = "B";
              break;
            case 19:
              TipoTierra = "B";
              break;
            case 20:
              TipoTierra = "B";
              break;
            case 21:
              TipoTierra = "B";
              break;
            case 22:
              TipoTierra = "B";
              break;
            case 23:
              TipoTierra = "B";
              break;
            case 24:
              TipoTierra = "B";
              break;
            case 25:
              TipoTierra = "B";
              break;
            case 26:
              TipoTierra = "B";
              break;
            case 27:
              TipoTierra = "B";
              break;
            case 28:
              TipoTierra = "B";
              break;
            case 29:
              TipoTierra = "B";
              break;
            case 30:
              TipoTierra = "B";
              break;
            case 31:
              TipoTierra = "B";
              break;
            case 32:
              TipoTierra = "B";
              break;
            case 33:
              TipoTierra = "c";
              break;
            case 34:
              TipoTierra = "c";
              break;
            case 35:
              TipoTierra = "c";
              break;
            case 36:
              TipoTierra = "c";
              break;
            case 37:
              TipoTierra = "c";
              break;
            case 38:
              TipoTierra = "c";
              break;
            case 39:
              TipoTierra = "c";
              break;
            case 40:
              TipoTierra = "c";
              break;
            case 41:
              TipoTierra = "c";
              break;
            case 42:
              TipoTierra = "c";
              break;
            case 43:
              TipoTierra = "c";
              break;
            case 44:
              TipoTierra = "c";
              break;
            case 45:
              TipoTierra = "c";
              break;
            case 46:
              TipoTierra = "c";
              break;
            case 47:
              TipoTierra = "c";
              break;
            case 48:
              TipoTierra = "c";
              break;
            case 49:
              TipoTierra = "c";
              break;
            case 50:
              TipoTierra = "c";
              break;
            case 51:
              TipoTierra = "c";
              break;
            case 52:
              TipoTierra = "c";
              break;
          }
          break;
        case 1:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "A";
              break;
            case 1:
              TipoTierra = "D";
              break;
            case 2:
              TipoTierra = "D";
              break;
            case 3:
              TipoTierra = "D";
              break;
            case 4:
              TipoTierra = "D";
              break;
            case 5:
              TipoTierra = "D";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "C";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
            case 22:
              TipoTierra = "C";
              break;
            case 23:
              TipoTierra = "C";
              break;
            case 24:
              TipoTierra = "C";
              break;
          }
          break;
        case 2:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "B";
              break;
            case 1:
              TipoTierra = "B";
              break;
            case 2:
              TipoTierra = "B";
              break;
            case 3:
              TipoTierra = "B";
              break;
            case 4:
              TipoTierra = "B";
              break;
            case 5:
              TipoTierra = "B";
              break;
            case 6:
              TipoTierra = "B";
              break;
            case 7:
              TipoTierra = "B";
              break;
            case 8:
              TipoTierra = "B";
              break;
            case 9:
              TipoTierra = "B";
              break;
            case 10:
              TipoTierra = "B";
              break;
            case 11:
              TipoTierra = "B";
              break;
            case 12:
              TipoTierra = "B";
              break;
            case 13:
              TipoTierra = "B";
              break;
            case 14:
              TipoTierra = "B";
              break;
            case 15:
              TipoTierra = "B";
              break;
            case 16:
              TipoTierra = "B";
              break;
            case 17:
              TipoTierra = "B";
              break;
            case 18:
              TipoTierra = "B";
              break;
            case 19:
              TipoTierra = "B";
              break;
            case 20:
              TipoTierra = "B";
              break;
            case 21:
              TipoTierra = "B";
              break;
            case 22:
              TipoTierra = "B";
              break;
            case 23:
              TipoTierra = "B";
              break;
            case 24:
              TipoTierra = "B";
              break;
            case 25:
              TipoTierra = "B";
              break;
            case 26:
              TipoTierra = "B";
              break;
            case 27:
              TipoTierra = "B";
              break;
            case 28:
              TipoTierra = "B";
              break;
            case 29:
              TipoTierra = "B";
              break;
            case 30:
              TipoTierra = "B";
              break;
          }
          break;
        case 3:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "C";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
            case 22:
              TipoTierra = "C";
              break;
            case 23:
              TipoTierra = "C";
              break;
            case 24:
              TipoTierra = "C";
              break;
            case 25:
              TipoTierra = "C";
              break;
            case 26:
              TipoTierra = "C";
              break;
            case 27:
              TipoTierra = "C";
              break;
            case 28:
              TipoTierra = "C";
              break;
            case 29:
              TipoTierra = "C";
              break;
            case 30:
              TipoTierra = "C";
              break;
            case 31:
              TipoTierra = "C";
              break;
            case 32:
              TipoTierra = "C";
              break;
            case 33:
              TipoTierra = "c";
              break;
            case 34:
              TipoTierra = "c";
              break;
            case 35:
              TipoTierra = "c";
              break;
            case 36:
              TipoTierra = "c";
              break;
            case 37:
              TipoTierra = "c";
              break;
            case 38:
              TipoTierra = "c";
              break;
            case 39:
              TipoTierra = "c";
              break;
            case 40:
              TipoTierra = "c";
              break;
            case 41:
              TipoTierra = "c";
              break;
            case 42:
              TipoTierra = "c";
              break;
            case 43:
              TipoTierra = "c";
              break;
            case 44:
              TipoTierra = "c";
              break;
            case 45:
              TipoTierra = "c";
              break;
            case 46:
              TipoTierra = "c";
              break;
            case 47:
              TipoTierra = "c";
              break;
            case 48:
              TipoTierra = "c";
              break;
            case 49:
              TipoTierra = "c";
              break;
            case 50:
              TipoTierra = "c";
              break;
            case 51:
              TipoTierra = "c";
              break;
            case 52:
              TipoTierra = "c";
              break;
            case 53:
              TipoTierra = "c";
              break;
            case 54:
              TipoTierra = "c";
              break;
            case 55:
              TipoTierra = "c";
              break;
            case 56:
              TipoTierra = "c";
              break;
            case 57:
              TipoTierra = "c";
              break;
            case 58:
              TipoTierra = "c";
              break;
            case 59:
              TipoTierra = "c";
              break;
            case 60:
              TipoTierra = "c";
              break;
            case 61:
              TipoTierra = "c";
              break;
            case 62:
              TipoTierra = "c";
              break;
            case 63:
              TipoTierra = "c";
              break;
            case 64:
              TipoTierra = "c";
              break;
            case 65:
              TipoTierra = "c";
              break;
            case 66:
              TipoTierra = "c";
              break;
            case 67:
              TipoTierra = "c";
              break;
            case 68:
              TipoTierra = "c";
              break;
            case 69:
              TipoTierra = "c";
              break;
            case 70:
              TipoTierra = "c";
              break;
            case 71:
              TipoTierra = "c";
              break;
            case 72:
              TipoTierra = "c";
              break;
          }
          break;
        case 4:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "C";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
            case 22:
              TipoTierra = "C";
              break;
            case 23:
              TipoTierra = "C";
              break;
            case 24:
              TipoTierra = "C";
              break;
            case 25:
              TipoTierra = "C";
              break;
            case 26:
              TipoTierra = "C";
              break;
            case 27:
              TipoTierra = "C";
              break;
            case 28:
              TipoTierra = "C";
              break;
            case 29:
              TipoTierra = "C";
              break;
            case 30:
              TipoTierra = "C";
              break;
            case 31:
              TipoTierra = "C";
              break;
            case 32:
              TipoTierra = "C";
              break;
            case 33:
              TipoTierra = "c";
              break;
            case 34:
              TipoTierra = "c";
              break;
          }
          break;
        case 5:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "C";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
            case 22:
              TipoTierra = "C";
              break;
          }
          break;
        case 6:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
          }
          break;
        case 7:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "D";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "C";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
            case 22:
              TipoTierra = "C";
              break;
            case 23:
              TipoTierra = "C";
              break;
          }
          break;
        case 8:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
          }
          break;
        case 9:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
          }
          break;
        case 10:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "C";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
          }
          break;
        case 11:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "B";
              break;
            case 1:
              TipoTierra = "B";
              break;
            case 2:
              TipoTierra = "B";
              break;
            case 3:
              TipoTierra = "B";
              break;
            case 4:
              TipoTierra = "B";
              break;
            case 5:
              TipoTierra = "B";
              break;
            case 6:
              TipoTierra = "B";
              break;
            case 7:
              TipoTierra = "B";
              break;
            case 8:
              TipoTierra = "B";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
          }
          break;
        case 12:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "B";
              break;
            case 4:
              TipoTierra = "B";
              break;
            case 5:
              TipoTierra = "B";
              break;
            case 6:
              TipoTierra = "B";
              break;
            case 7:
              TipoTierra = "B";
              break;
            case 8:
              TipoTierra = "B";
              break;
            case 9:
              TipoTierra = "B";
              break;
            case 10:
              TipoTierra = "B";
              break;
            case 11:
              TipoTierra = "B";
              break;
            case 12:
              TipoTierra = "B";
              break;
            case 13:
              TipoTierra = "B";
              break;
            case 14:
              TipoTierra = "B";
              break;
            case 15:
              TipoTierra = "B";
              break;
            case 16:
              TipoTierra = "B";
              break;
            case 17:
              TipoTierra = "B";
              break;
          }
          break;
        case 13:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "c";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
            case 22:
              TipoTierra = "C";
              break;
            case 23:
              TipoTierra = "C";
              break;
            case 24:
              TipoTierra = "C";
              break;
            case 25:
              TipoTierra = "C";
              break;
          }
          break;
        case 14:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
          }
          break;
        case 15:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "c";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
          }
          break;
        case 16:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "c";
              break;
          }
          break;
        case 17:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "c";
              break;
            case 18:
              TipoTierra = "C";
              break;
          }
          break;
        case 18:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
          }
          break;
        case 19:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "C";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
          }
          break;
        case 20:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "B";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "c";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
            case 22:
              TipoTierra = "C";
              break;
            case 23:
              TipoTierra = "C";
              break;
            case 24:
              TipoTierra = "C";
              break;
            case 25:
              TipoTierra = "C";
              break;
            case 26:
              TipoTierra = "C";
              break;
            case 27:
              TipoTierra = "C";
              break;
            case 28:
              TipoTierra = "C";
              break;
            case 29:
              TipoTierra = "C";
              break;
            case 30:
              TipoTierra = "C";
              break;
            case 31:
              TipoTierra = "C";
              break;
            case 32:
              TipoTierra = "C";
              break;
            case 33:
              TipoTierra = "c";
              break;
            case 34:
              TipoTierra = "c";
              break;
            case 35:
              TipoTierra = "c";
              break;
            case 36:
              TipoTierra = "c";
              break;
            case 37:
              TipoTierra = "c";
              break;
            case 38:
              TipoTierra = "c";
              break;
            case 39:
              TipoTierra = "c";
              break;
            case 40:
              TipoTierra = "c";
              break;
            case 41:
              TipoTierra = "c";
              break;
            case 42:
              TipoTierra = "c";
              break;
            case 43:
              TipoTierra = "c";
              break;
            case 44:
              TipoTierra = "c";
              break;
            case 45:
              TipoTierra = "c";
              break;
            case 46:
              TipoTierra = "c";
              break;
            case 47:
              TipoTierra = "c";
              break;
            case 48:
              TipoTierra = "c";
              break;
            case 49:
              TipoTierra = "c";
              break;
            case 50:
              TipoTierra = "c";
              break;
            case 51:
              TipoTierra = "c";
              break;
            case 52:
              TipoTierra = "c";
              break;
            case 53:
              TipoTierra = "c";
              break;
            case 54:
              TipoTierra = "c";
              break;
          }
          break;
        case 21:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "B";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
          }
          break;
        case 22:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "A";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "C";
              break;
            case 5:
              TipoTierra = "C";
              break;
            case 6:
              TipoTierra = "C";
              break;
            case 7:
              TipoTierra = "C";
              break;
            case 8:
              TipoTierra = "C";
              break;
            case 9:
              TipoTierra = "C";
              break;
            case 10:
              TipoTierra = "C";
              break;
            case 11:
              TipoTierra = "C";
              break;
            case 12:
              TipoTierra = "C";
              break;
            case 13:
              TipoTierra = "C";
              break;
            case 14:
              TipoTierra = "C";
              break;
            case 15:
              TipoTierra = "C";
              break;
            case 16:
              TipoTierra = "C";
              break;
            case 17:
              TipoTierra = "c";
              break;
            case 18:
              TipoTierra = "C";
              break;
            case 19:
              TipoTierra = "C";
              break;
            case 20:
              TipoTierra = "C";
              break;
            case 21:
              TipoTierra = "C";
              break;
            case 22:
              TipoTierra = "C";
              break;
            case 23:
              TipoTierra = "C";
              break;
            case 24:
              TipoTierra = "C";
              break;
            case 25:
              TipoTierra = "C";
              break;
            case 26:
              TipoTierra = "C";
              break;
            case 27:
              TipoTierra = "C";
              break;
          }
          break;
        case 23:
          switch (barrio.selectedIndex) {
            case 0:
              TipoTierra = "D";
              break;
            case 1:
              TipoTierra = "C";
              break;
            case 2:
              TipoTierra = "C";
              break;
            case 3:
              TipoTierra = "C";
              break;
            case 4:
              TipoTierra = "A";
              break;
            case 5:
              TipoTierra = "A";
              break;
            case 6:
              TipoTierra = "A";
              break;
            case 7:
              TipoTierra = "A";
              break;
            case 8:
              TipoTierra = "A";
              break;
            case 9:
              TipoTierra = "A";
              break;
          }
          break;
      }
      // aa 1.5 av 0.2
      var fa = (fv = 0);
      switch (TipoTierra) {
        case "A":
          fa = fv = 0.8;
          break;
        case "B":
          fa = fv = 1;
          break;
        case "C":
          fa = 1;
          fv = 1.6;
          break;
        case "D":
          break;
          fa = 1;
          fv = 2;
      }
      event.preventDefault();
      var primerapregunta = document.querySelectorAll("input[name = 'year']");
      for (i = 0; i < 5; i++) {
        if (primerapregunta[i].checked) {
          var laseleccionada = i;
          break;
        }
      }
      switch (laseleccionada) {
        case 0:
          puntajefinal = puntajefinal + 4;
          break;
        case 1:
          puntajefinal = puntajefinal + 3;
          break;
        case 2:
          puntajefinal = puntajefinal + 3;
          break;
        case 3:
          puntajefinal = puntajefinal + 2;
          break;
        case 4:
          puntajefinal = puntajefinal + 1;
          break;
      }
      var segundapregunta = document.querySelectorAll(
        "input[name = 'entidadempresa']"
      );
      for (i = 0; i < 2; i++) {
        if (segundapregunta[i].checked) {
          var laseleccionada = i;
          break;
        }
      }
      switch (laseleccionada) {
        case 0:
          puntajefinal = puntajefinal + 0;
          break;
        case 1:
          puntajefinal = puntajefinal + 3;
          break;
      }

      Swal.fire({
        title: "Exterior de la vivienda",
        text: "Las siguientes preguntas se deberán realizar por fuera de la vivienda para poder observar las características de las preguntas",
        icon: "info",
        confirmButtonText: "Continuar",
        customClass: {
          confirmButton: "confirmAlert",
        },
        didClose: function () {
          document.getElementById("menor7").focus();
        },
      });

      document.querySelector(".before").classList.toggle("anterior");
      document.querySelector(".next").classList.toggle("siguiente");
      document.querySelector(".anterior").classList.remove("before");
      var continuar1 = document.querySelector(".continuar");
      document.querySelector(".continuar0").classList.add("quitar");
      siguienteandanterior = 1;
      primeraseccion = puntajefinal;
      continuar1.innerHTML =
        "<hr><h2 class='text'>¿Cuál es la dimención del fondo de la vivienda?</h2><section class='pregunta condicion'><input name='Fondo' value='Menor a 7 m' id='menor7' type='radio' required><label class='label-radio label text' for='menor7'>Menor a 7 m</label> <br><input name='Fondo' value='7 a 9 m' id='7a9m' type='radio'><label class='label-radio label text' for='7a9m'>7 a 9 m</label> <br><input name='Fondo' value='10 a 12 m' id='10a12m' type='radio' required><label class='label-radio label text' for='10a12m'>10 a 12 m</label> <br><input name='Fondo' value='13 a 15 m' id='13a15m' type='radio'><label class='label-radio label text' for='13a15m'>13 a 15 m</label><br><input name='Fondo' value='Mayores a 15m' id='Mayoresa15m' type='radio'><label class='label-radio label text' for='Mayoresa15m'>Mayores a 15m</label> <br><label class='label-radio label text' for='Fondodetallada'>Ingresar la distancia más detallada ejemplo: 10.5 el valor que se ingrese se tomara en metros</label><br><input title='Solo ingresar numeros reales' pattern='^[0-9]+([.][0-9]+)?$' style='margin-left: 30px;' name='Fondodetallada' id='Fondodetallada' placeholder='Ingresar Distancia más detallada' type='text' required></section><hr><h2 class='text'>¿Cuál es la dimención del frente de la vivienda?</h2><section class='pregunta condicion'><input name='Frente' value='Menor a 4 m' id='menor4' type='radio' required><label class='label-radio label text' for='menor4'>Menor a 4 m</label> <br><input name='Frente' value='4 a 5 m' id='4a5m' type='radio'><label class='label-radio label text' for='4a5m'>4 a 5 m</label> <br><input name='Frente' value='6 a 7 m' id='6a7m' type='radio' required><label class='label-radio label text' for='6a7m'>6 a 7 m</label> <br><input name='Frente' value='8 a 9 m' id='8a9m' type='radio'><label class='label-radio label text' for='8a9m'>8 a 9 m</label><br><input name='Frente' value='Mayores a 10m' id='Mayoresa10m' type='radio'><label class='label-radio label text' for='Mayoresa10m'>Mayores a 10m</label> <br><label class='label-radio label text' for='Frentedetallada'>Ingresar la distancia más detallada ejemplo: 7.5 el valor que se ingrese se tomara en metros</label><br><input   title='Solo ingresar numeros reales' pattern='^[0-9]+([.][0-9]+)?$' style='margin-left: 30px;' name='Frentedetallada' id='Frentedetallada' placeholder='Ingresar Distacia más detallada' type='text' required></section><hr><h2 class='text'>Seleccione una imagen del frente de la vivienda</h2><input class='f0.1' onchange=\"return validarfile('f0.1')\" type='file' accept='image/*' required id='frontHouseImg'><p class='text f0.1'></p><p class='text'><b>Nota: </b>subir imagen donde se pueda ver su vivienda y las de su lado <a onclick=\"putimage('./img/captura.jpg')\"> haz click acá para ver la imagen de ejemplo</a></p><hr><h2 class='text'>¿Cuál es el área de la vivienda?</h2><section class='pregunta condicion'><input name='area-vivenda' value='20 a 30m² ' id='20a30' type='radio' required><label class='label-radio label text' for='20a30'>20 A 30 m<sup>2</sup></label> <br><input name='area-vivenda' value='31 a 40m2' id='31a40' type='radio'><label class='label-radio label text' for='31a40'>31 A 40 m<sup>2</sup></label> <br><input name='area-vivenda' value='41 a 60m2' id='41a60' type='radio'><label class='label-radio label text' for='41a60'>41 A 60 m<sup>2</sup></label> <br><input name='area-vivenda' value='61 a 70m2' id='61a70' type='radio'><label class='label-radio label text' for='61a70'>61 A 70 m<sup>2</sup></label> <br><input name='area-vivenda' value='71 a 80m2' id='71a80' type='radio'><label class='label-radio label text' for='71a80'>71 A 80 m<sup>2</sup></label> <br><input name='area-vivenda' value='81 a 90m2' id='81a90' type='radio'><label class='label-radio label text' for='81a90'>81 A 90 m<sup>2</sup></label> <br><input name='area-vivenda' value='91m2 o mayor' id='91omayor' type='radio'><label class='label-radio label text' for='91omayor'>91m<sup>2</sup> o mayor</label> <br></section><hr><h2 class='text'>¿Cuál es la ubicación de la vivienda?</h2><section class='pregunta condicion'><input name='ubicacionvivenda' value='ladera' id='ladera' type='radio' required><label class='label-radio label text' for='ladera'>ladera</label><p class='text'><b>Nota: </b>De no tener conocimiento de lo que es una ladera de ingrese al siguiente link: <a onclick=\"putimage('https://kavilando.org/images/images/laderas_med.jpg')\">Imagen de ladera</a></p><input name='ubicacionvivenda' value='valle' id='valle' type='radio'><label class='label-radio label text' for='valle'>Valle</label><p class='text'><b>Nota: </b>De no tener conocimiento de lo que es un Valle ingrese al siguiente link: <a onclick=\"putimage('./img/2.jpg')\">Imagen de Valle</a></p></section><hr><h2 class='text'>¿Qué elementos hay cercanos a la vivienda?</h2><section class='pregunta condicion'><input name='elementoscerca' value='quebrada' id='quebrada' type='checkbox'><label class='label text' for='quebrada'>Quebrada</label><br><input name='elementoscerca' value='valle' id='valle2' type='checkbox'><label class='label text' for='valle2'>Valle</label><p class='text'><b>Nota: </b>De no tener conocimiento de lo que es un Valle ingrese al siguiente link: <a onclick=\"putimage('./img/2.jpg')\">Imagen de Valle</a></p><input name='elementoscerca' value='montana' id='montana' type='checkbox'><label class='label text' for='montana'>Montaña</label></section><hr><h2 class='text'>¿Cuál es el uso predominante que le dan a la vivienda?</h2><section class='pregunta condicion'><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='residencial' id='residencial' type='radio' required><label class='label label-radio text' for='residencial'>Residencial</label><br><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='comercial' id='comercial' type='radio'><label class='label label-radio text' for='comercial'>Comercial</label><br><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='educativo' id='educativo' type='radio'><label class='label label-radio text' for='educativo'>Educativo</label><br><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='oficinas' id='oficinas' type='radio'><label class='label label-radio text' for='oficinas'>Oficinas</label><br><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='bodegas' id='bodegas' type='radio'><label class='label label-radio text' for='bodegas'>Bodegas</label><br><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='deportiva' id='deportiva' type='radio'><label class='label label-radio text' for='deportiva'>Deportiva</label><br><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='centrosalud' id='centrosalud' type='radio'><label class='label label-radio text' for='centrosalud'>Salud</label><br><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='industria' id='industria' type='radio'><label class='label label-radio text' for='industria'>Industria</label><br><input onclick=\"condicionotro('otrono')\" name='usovivienda' value='hotelero' id='hotelero' type='radio'><label class='label label-radio text' for='hotelero'>Hotelero</label><br><input onclick=\"condicionotro('otro1')\" name='usovivienda' value='otro' id='otro' type='radio'><label class='label label-radio text' for='otro'>Otro</label><section class='otro1 otrono'></section><hr><h2 class='text'>¿La vivienda anteriormente tuvo uso diferente al actual?</h2><section class='pregunta condicion'><input onclick=\"condicion2('condicion2')\" name='hubousoanteriorvivienda' value='Si' id='Sip' type='radio' required><label class='label-radio label text' for='Sip'>Si</label> <br><input onclick=\"condicion2('condicion2no')\" name='hubousoanteriorvivienda' value='No' id='Nop' type='radio'><label class='label-radio label text' for='Nop'>No</label> <br></section><hr><section class='pregunta condicion2 condicion2no condicion'></section><h2 class='text'>¿Cuál es el total de pisos de la vivienda?</h2><section class='pregunta condicion'><select onchange=\"pisos_vivienda()\" name='numerodepisos' id='numerodepisos'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option  value='7 o mas'>7 O Más</option></select><hr><h2 class='text'>¿En que piso se encuentra la vivienda?</h2><section class='pregunta condicion'><select name='pisovivienda' id='pisovivienda'><option value='1'>1</option></select></section><hr><h2 class='text'>¿La vivienda cuenta con sótanos?</h2><section class='pregunta condicion'><select name='numerodesotanos' id='numerodesotanos'><option value='ninguno'>Ninguno</option><option value='1'>1</option><option value='2'>2</option></select></section><hr><h2 class='text'>¿Comparte muro con los vecinos de al lado?</h2><section class='pregunta condicion'><input onclick=\"separacion_viviendas('si')\" name='compartemuro' value='Si' id='Sipi' type='radio' required/><label class='label-radio label text' for='Sipi'>Si</label> <br /><input onclick=\"separacion_viviendas('no')\" name='compartemuro' value='No' id='Nopi' type='radio'/><label class='label-radio label text' for='Nopi'>No</label> <br /><section class='pregunta condicion separacion_vivienda'></section></section><hr><h2 class='text'>¿Hay presencia de equipos (grandes) dentro de la edificación?</h2><section class='pregunta condicion'><input  name='equiposgrandes' value='piscinas' id='piscinas' type='checkbox'/><label class='label text' for='piscinas'>Piscinas</label><br /><input  name='equiposgrandes' value='canchas' id='canchas' type='checkbox'/><label class='label text' for='canchas'>Canchas</label><br /><input  name='equiposgrandes' value='maquinastrabajo' id='maquinastrabajo' type='checkbox'/><label class='label text' for='maquinastrabajo'>Máquinas de trabajo</label><br /><input  name='equiposgrandes' value='tanquesdeagua' id='tanquesdeagua' type='checkbox'/><label class='label text' for='tanquesdeagua'>Tanques de agua</label><br /><input  name='equiposgrandes' value='maquinariaindustrial' id='maquinariaindustrial' type='checkbox'/><label class='label text' for='maquinariaindustrial'>Maquinaria industrial</label><br /><input  name='equiposgrandes' value='almacenamientos' id='almacenamientos' type='checkbox'/><label class='label text' for='almacenamientos'>Almacenamientos</label><br /><input  name='equiposgrandes' value='ningunadelasanteriores' id='ningunadelasanteriores' type='checkbox'/><label class='label text' for='ningunadelasanteriores'>Ninguna de las anteriores</label><br /><input onchange=\"condicionotro('otro3')\" name='equiposgrandes' value='otro3' id='otro3' type='checkbox'/><label class='label text' for='otro3'>Otro</label><br/><section class='otro3 otrono3'></section></section>";
      location.href = "#h1";
    } else if (siguienteandanterior == 1) {
      if (
        document.getElementById("quebrada").checked ||
        document.getElementById("valle2").checked ||
        document.getElementById("montana").checked
      ) {
        var onseavapregunta = document.querySelectorAll(
          "input[name = 'equiposgrandes']"
        );
        var seleccionadas = 0;
        for (i = 0; i < 8; i++) {
          if (onseavapregunta[i].checked) {
            var laseleccionada = i;
            seleccionadas++;
          }
        }
        if (
          (document.getElementById("piscinas").checked ||
            document.getElementById("canchas").checked ||
            document.getElementById("maquinastrabajo").checked ||
            document.getElementById("tanquesdeagua").checked ||
            document.getElementById("maquinariaindustrial").checked ||
            document.getElementById("almacenamientos").checked ||
            document.getElementById("ningunadelasanteriores").checked ||
            document.getElementById("otro3").checked) &&
          seleccionadas <= 2
        ) {
          event.preventDefault();
          var tercerapregunta = document.querySelectorAll(
            "input[name = 'ubicacionvivenda']"
          );
          for (i = 0; i < 2; i++) {
            if (tercerapregunta[i].checked) {
              var laseleccionada = i;
              break;
            }
          }
          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 2;
              break;
            case 1:
              puntajefinal = puntajefinal + 1;
              break;
          }

          var cuartapregunta = document.querySelectorAll(
            "input[name = 'elementoscerca']"
          );
          for (i = 0; i < 3; i++) {
            if (cuartapregunta[i].checked) {
              var laseleccionada = i;
              break;
            }
          }
          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 2;
              break;
            case 1:
              puntajefinal = puntajefinal + 1;
              break;
            case 2:
              puntajefinal = puntajefinal + 2;
              break;
          }

          var quintapregunta = document.querySelectorAll(
            "input[name = 'usovivienda']"
          );
          for (i = 0; i < 10; i++) {
            if (quintapregunta[i].checked) {
              var laseleccionada = i;
              break;
            }
          }
          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 0;
              break;
            case 1:
              puntajefinal = puntajefinal + 1;
              break;
            case 2:
              puntajefinal = puntajefinal + 2;
              break;
            case 3:
              puntajefinal = puntajefinal + 2;
              break;
            case 4:
              puntajefinal = puntajefinal + 3;
              break;
            case 5:
              puntajefinal = puntajefinal + 3;
              break;
            case 6:
              puntajefinal = puntajefinal + 2;
              break;
            case 7:
              puntajefinal = puntajefinal + 4;
              break;
            case 8:
              puntajefinal = puntajefinal + 2;
              break;
            case 9:
              puntajefinal = puntajefinal + 0;
              break;
          }
          var septimapregunta = document.getElementById("numerodepisos");
          for (i = 0; i < 7; i++) {
            if (septimapregunta.selectedIndex == i) {
              var laseleccionada = i;
              break;
            }
          }

          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 1;
              break;
            case 1:
              puntajefinal = puntajefinal + 1;
              break;
            case 2:
              puntajefinal = puntajefinal + 1;
              break;
            case 3:
              puntajefinal = puntajefinal + 2;
              break;
            case 4:
              puntajefinal = puntajefinal + 2;
              break;
            case 5:
              puntajefinal = puntajefinal + 2;
              break;
            case 6:
              puntajefinal = puntajefinal + 3;
              break;
          }

          var octavapregunta = document.getElementById("pisovivienda");
          for (i = 0; i < 7; i++) {
            if (octavapregunta.selectedIndex == i) {
              var laseleccionada = i;
              break;
            }
          }

          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 1;
              break;
            case 1:
              puntajefinal = puntajefinal + 1;
              break;
            case 2:
              puntajefinal = puntajefinal + 1;
              break;
            case 3:
              puntajefinal = puntajefinal + 2;
              break;
            case 4:
              puntajefinal = puntajefinal + 2;
              break;
            case 5:
              puntajefinal = puntajefinal + 2;
              break;
            case 6:
              puntajefinal = puntajefinal + 3;
              break;
          }

          var novenapregunta = document.getElementById("numerodesotanos");
          for (i = 0; i < 6; i++) {
            if (novenapregunta.selectedIndex == i) {
              var laseleccionada = i;
              break;
            }
          }

          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 0;
              break;
            case 1:
              puntajefinal = puntajefinal + 1;
              break;
            case 2:
              puntajefinal = puntajefinal + 2;
              break;
            case 3:
              puntajefinal = puntajefinal + 3;
              break;
            case 4:
              puntajefinal = puntajefinal + 3;
              break;
            case 5:
              puntajefinal = puntajefinal + 4;
              break;
          }

          var decimapregunta = document.querySelectorAll(
            "input[name = 'compartemuro']"
          );
          for (i = 0; i < 2; i++) {
            if (decimapregunta[i].checked) {
              var laseleccionada = i;
              break;
            }
          }
          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 3;
              break;
            case 1:
              puntajefinal = puntajefinal + 0;
              break;
          }

          var onseavapregunta = document.querySelectorAll(
            "input[name = 'equiposgrandes']"
          );
          var seleccionadas = 0;
          for (i = 0; i < 8; i++) {
            if (onseavapregunta[i].checked) {
              var laseleccionada = i;
              seleccionadas++;
            }
          }

          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 4;
              break;
            case 1:
              puntajefinal = puntajefinal + 3;
              break;
            case 2:
              puntajefinal = puntajefinal + 3;
              break;
            case 3:
              puntajefinal = puntajefinal + 4;
              break;
            case 4:
              puntajefinal = puntajefinal + 4;
              break;
            case 5:
              puntajefinal = puntajefinal + 3;
              break;
            case 6:
              puntajefinal = puntajefinal + 0;
              break;
            case 7:
              puntajefinal = puntajefinal + 0;
              break;
          }
          segundaseccion = primeraseccion;
          siguienteandanterior = 2;

          Swal.fire({
            title: "Interior de la vivienda",
            text: "Las siguientes preguntas se deberán realizar en el interior de la vivienda para poder observar las características de las preguntas",
            icon: "info",
            confirmButtonText: "Continuar",
            customClass: {
              confirmButton: "confirmAlert",
            },
          });

          document.querySelector(".continuar").classList.add("quitar");
          document.querySelector(".anterior").classList.toggle("anterior");
          document.querySelector(".next").classList.toggle("siguiente");
          document.querySelector(".next").classList.add("quitar");
          document.querySelector(".enviar").classList.remove("quitar");
          var continuar2 = document.querySelector(".continuar2");
          continuar2.innerHTML =
            "<hr><h2 class='text'>¿Cuál es la altura entre el piso de la vivienda al techo</h2><section class='pregunta condicion'><input name='alturapisotecho' value='2m' id='2m' type='radio' required><label class='label label-radio text' for='2m'>2 metros</label><br><input name='alturapisotecho' value='2.1-2.5' id='2.1-2.5' type='radio'><label class='label label-radio text' for='2.1-2.5'>2.1 a 2.5 metros.</label><br><input name='alturapisotecho' value='2.6-3' id='2.6-3' type='radio'><label class='label label-radio text' for='2.6-3'>2.6 a 3 metros</label><br><input name='alturapisotecho' value='3.1omas' id='3.1omas' type='radio'><label class='label label-radio text' for='3.1omas'>3.1 metros o mayores</label><br></section><hr><h2 class='text'>¿Cuál es material de construcción de la vivienda?</h2><section class='pregunta condicion'><input onclick=\"condicion3('.condicion3p1')\" name='materialconstruccion' value='' id='mamposteria' type='radio' required><label class='label label-radio text' for='mamposteria'>Mamposteria</label><br><p class='text'>(construcción compuesta por ladrillos u otro material):<a onclick=\"putimage('./img/12.jpg')\">Imagen de Mamposteria</a></p><input onclick=\"condicion3('.condicion3p2')\" name='materialconstruccion' value='concretoreforzado' id='concretoreforzado' type='radio'><label class='label label-radio text' for='concretoreforzado'>Concreto reforzado</label><br><p class='text'>(Construcción compuesta por concreto y acero)</p><input onclick=\"condicion3('.condicion3p3')\" name='materialconstruccion' value='prefabricado' id='prefabricado' type='radio'> <label class='label label-radio text' for='prefabricado'>Prefabricado</label><br> <p class='text'>(construcción por secciones o módulos que fueron diseñadas con antelación por fuera de la construcción)<a onclick=\"putimage('./img/6.jpg')\">Imagen Prefabricado</a></p> <input onclick=\"condicion3('ninguna')\" name='materialconstruccion' value='acero' id='acero' type='radio'> <label class='label label-radio text' for='acero'>Acero</label><br> <input onclick=\"condicion3('ninguna')\" name='materialconstruccion' value='madera' id='madera' type='radio'> <label class='label label-radio text' for='madera'>Madera</label><br> <input onclick=\"condicion3('ninguna')\" name='materialconstruccion' value='adobe' id='adobe' type='radio'> <label class='label label-radio text' for='adobe'>Adobe</label><br> <input onclick=\"condicion3('ninguna')\" name='materialconstruccion' value='tapia' id='tapia' type='radio'> <label style='display: inline; margin-right: 1rem;' class='label label-radio text' for='tapia'>Tapia</label> <p style='display: inline;' class='text'><a onclick=\"putimage('./img/13.jpg')\">Imagen Tapia</a></p><br> <input onclick=\"condicion3('ninguna')\" name='materialconstruccion' value='guadua' id='guadua' type='radio'> <label class='label label-radio text' for='guadua'>Guadua</label><br> <input onclick=\"condicion3('ninguna')\" name='materialconstruccion' value='otro' id='otro4' type='radio'> <label class='label label-radio text' for='otro4'>Otro</label><br> </section> <section class='pregunta condicion condicion3 condicion3p1'> </section> <section class='pregunta condicion condicion3 condicion3p2'> </section> <section class='pregunta condicion condicion3 condicion3p3'></section><hr><h2 class='text'>¿Como se encuentra construido el piso de la vivienda?</h2><section class='pregunta condicion'><input name='tipopiso' value='losaconcretoaligerado' id='losaconcretoaligerado' type='radio' required><label class='label label-radio text' for='losaconcretoaligerado'>Losa de concreto aligerado</label><p class='text'>conformada por concreto armado, estas se evidencian ya que forman una especie de cajón en el techo<a onclick=\"putimage('./img/14.jpg')\">Imagen de Losa de concreto aligerado</a></p><input name='tipopiso' value='losaconcretomaciza' id='losaconcretomaciza' type='radio'><label class='label label-radio text' for='losaconcretomaciza'>Losa de concreto maciza</label><p class='text'>conformada por concreto y acero<a onclick=\"putimage('./img/15.jpg')\">Imagen de Losa de concreto maciza</a></p><input name='tipopiso' value='madera3' id='madera3' type='radio'><label style='display: inline;' class='label label-radio text' for='madera3'>Madera</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/16.jpg')\">Imagen de piso de Madera</a></p><br><input  name='tipopiso' value='vigasacero' id='vigasacero' type='radio'><label style='display: inline;' class='label label-radio text' for='vigasacero'>Vigas de acero</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/17.jpg')\">Imagen de viga de acero</a></p></section><hr><h2 class='text'>¿Qué tipo de techo tiene la vivienda?</h2><section class='pregunta condicion'><input name='tipotecho' value='losaconcretoaligerado2' id='losaconcretoaligerado2' type='radio' required><label class='label label-radio text' for='losaconcretoaligerado2'>Losa de concreto aligerado</label> <p class='text'>conformada por concreto armado, estas se evidencian ya que forman una especie de cajón en el techo<a onclick=\"putimage('./img/14.jpg')\">Imagen de Losa de concreto aligerado</a></p><input name='tipotecho' value='losaconcretomaciza2' id='losaconcretomaciza2' type='radio'><label class='label label-radio text' for='losaconcretomaciza2'>Losa de concreto maciza</label><p class='text'>conformada por concreto y acero<a onclick=\"putimage('./img/15.jpg')\">Imagen de Losa de concreto maciza</a></p><input name='tipotecho' value='zinc' id='zinc' type='radio'><label style='display: inline;' class='label label-radio text' for='zinc'>Zinc</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/18.jpg')\">Imagen de un techo tipo Zinc</a></p><br><input name='tipotecho' value='terminaenplancha' id='terminaenplancha' type='radio'><label style='display: inline;' class='label label-radio text' for='terminaenplancha'>Termina en plancha</label> <p style='display: inline;' class='text'><a onclick=\"putimage('./img/12.jpg')\">Imagen de Ejemplo</a></p><br> <input name='tipotecho' value='Placafacil' id='Placafacil' type='radio'> <label style='display: inline;' class='label label-radio text' for='Placafacil'>Placa fácil</label> <p style='display: inline;' class='text'><a onclick=\"putimage('./img/19.jpg')\">Imagen de Ejemplo</a></p><br><input name='tipotecho' value='eternit' id='eternit' type='radio'><label style='display: inline;' class='label label-radio text' for='eternit'>Eternit</label><p style='display: inline;'><a onclick=\"putimage('./img/20.jpg')\">Imagen de Ejemplo</a></p><br><input name='tipotecho' value='maderaytejasdebarro' id='maderaytejasdebarro' type='radio'><label style='display: inline;' class='label label-radio text' for='maderaytejasdebarro'>Estructura de madera y tejas de barro</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/21.jpg')\">Imagen de Ejemplo</a></p><br><input name='tipotecho' value='metalica' id='metalica' type='radio'><label style='display: inline;' class='label label-radio text' for='metalica'>Metálica</label><p style='display: inline;' class='text'><a onclick=\"putimage('./img/22.jpg')\">Imagen de Ejemplo</a></p><br></section><hr><h2 class='text'>¿La edificación presenta algún hundimiento?</h2><section class='pregunta condicion'><input onclick=\"condicion4('.condicion4')\" name='hundimiento' value='Si' id='Sipit' type='radio' required><label class='label-radio label text' for='Sipit'>Si</label> <br><input onclick=\"condicion4('.seleccion3')\" name='hundimiento' value='No' id='Nopit' type='radio'><label class='label-radio label text' for='Nopit'>No</label> <br></section><section class='pregunta condicion condicion4 seleccion3'></section><hr><h2 class='text'>¿Se evidencias grietas pronunciadas en los muros y/o columnas?</h2><section class='pregunta condicion'><input onclick=\"condicion5('.condicion5')\" name='grietas' value='Si' id='Sipiti' type='radio' required><label class='label-radio label text' for='Sipiti'>Si</label> <br><input onclick=\"condicion5('.seleccion4')\" name='grietas' value='No' id='Nopiti' type='radio'><label class='label-radio label text' for='Nopiti'>No</label> <br></section><section class='pregunta condicion condicion5 seleccion4'></section>";
          location.href = "#h1";
        } else {
          event.preventDefault();
          window.alert(
            "¿Hay presencia de equipos (grandes) dentro de la edificación?:Selecciona por lo menos 1 de estas casillas y asegúrese de elejir máximo 2 opciones"
          );
          location.href = "#piscinas";
        }
      } else {
        event.preventDefault();
        window.alert(
          "¿Qué elementos hay cercanos a la vivienda?:Selecciona por lo menos 1 de estas casillas"
        );
        location.href = "#quebrada";
      }
    } else if (siguienteandanterior == 2) {
      event.preventDefault();

      var doceavapregunta = document.querySelectorAll(
        "input[name = 'alturapisotecho']"
      );
      for (i = 0; i < 4; i++) {
        if (doceavapregunta[i].checked) {
          var laseleccionada = i;
          break;
        }
      }
      switch (laseleccionada) {
        case 0:
          puntajefinal = puntajefinal + 1;
          break;
        case 1:
          puntajefinal = puntajefinal + 2;

          break;
        case 2:
          puntajefinal = puntajefinal + 3;
          break;
        case 3:
          puntajefinal = puntajefinal + 3;
          break;
      }

      var treceavapregunta = document.querySelectorAll(
        "input[name = 'materialconstruccion']"
      );
      for (i = 0; i < 8; i++) {
        if (treceavapregunta[i].checked) {
          var laseleccionada = i;
          break;
        }
      }
      switch (laseleccionada) {
        case 0:
          puntajefinal = puntajefinal + 2;
          var mamposteriapregunta = document.querySelectorAll(
            "input[name = 'tipomamposteria']"
          );
          for (i = 0; i < 3; i++) {
            if (mamposteriapregunta[i].checked) {
              var laseleccionada = i;
              break;
            }
          }
          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 1;
              break;
            case 1:
              puntajefinal = puntajefinal + 1;
              break;
            case 2:
              puntajefinal = puntajefinal + 1;
              break;
          }
          var t0 = 0.1 * ((0.2 * fv) / (1.5 * fa)),
            tc = 0.48 * ((0.2 * fv) / (1.5 * fa)),
            tl = 2.4 * fv;
          puntajefinal = puntajefinal + 1;
          var concretopregunta = document.querySelectorAll(
            "input[name = 'tipoconcreto']"
          );
          for (i = 0; i < 4; i++) {
            if (concretopregunta[i].checked) {
              var laseleccionada = i;
              break;
            }
          }
          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 1;
              break;
            case 1:
              puntajefinal = puntajefinal + 1;
              break;
            case 2:
              puntajefinal = puntajefinal + 1;
              break;
            case 3:
              puntajefinal = puntajefinal + 2;
              break;
          }

          break;
        case 2:
          puntajefinal = puntajefinal + 2;
          var prefabricapregunta = document.querySelectorAll(
            "input[name = 'tipoprefabrica']"
          );
          for (i = 0; i < 6; i++) {
            if (prefabricapregunta[i].checked) {
              var laseleccionada = i;
              break;
            }
          }
          switch (laseleccionada) {
            case 0:
              puntajefinal = puntajefinal + 2;
              break;
            case 1:
              puntajefinal = puntajefinal + 2;
              break;
            case 2:
              puntajefinal = puntajefinal + 2;
              break;
            case 3:
              puntajefinal = puntajefinal + 3;
              break;
            case 4:
              puntajefinal = puntajefinal + 1;
              break;
            case 5:
              puntajefinal = puntajefinal + 0;
              break;
          }

          break;
        case 3:
          puntajefinal = puntajefinal + 1;
          break;
        case 4:
          puntajefinal = puntajefinal + 2;
          break;
        case 5:
          puntajefinal = puntajefinal + 3;
          break;
        case 6:
          puntajefinal = puntajefinal + 3;
          break;
        case 7:
          puntajefinal = puntajefinal + 3;
          break;
        case 8:
          puntajefinal = puntajefinal + 0;
          break;
      }

      var catorceavapregunta = document.querySelectorAll(
        "input[name = 'tipopiso']"
      );
      for (i = 0; i < 4; i++) {
        if (catorceavapregunta[i].checked) {
          var laseleccionada = i;
          break;
        }
      }
      switch (laseleccionada) {
        case 0:
          puntajefinal = puntajefinal + 1;
          break;
        case 1:
          puntajefinal = puntajefinal + 1;
          break;
        case 2:
          puntajefinal = puntajefinal + 2;
          break;
        case 3:
          puntajefinal = puntajefinal + 1;
          break;
      }

      var quinceavapregunta = document.querySelectorAll(
        "input[name = 'tipotecho']"
      );
      for (i = 0; i < 7; i++) {
        if (quinceavapregunta[i].checked) {
          var laseleccionada = i;
          break;
        }
      }
      switch (laseleccionada) {
        case 0:
          puntajefinal = puntajefinal + 1;
          break;
        case 1:
          puntajefinal = puntajefinal + 1;
          break;
        case 2:
          puntajefinal = puntajefinal + 3;
          break;
        case 3:
          puntajefinal = puntajefinal + 1;
          break;
        case 4:
          puntajefinal = puntajefinal + 2;
          break;
        case 5:
          puntajefinal = puntajefinal + 3;
          break;
        case 6:
          puntajefinal = puntajefinal + 1;
          break;
        case 7:
          puntajefinal = puntajefinal + 3;
          break;
      }

      var dieciseisavapregunta = document.querySelectorAll(
        "input[name = 'hundimiento']"
      );
      for (i = 0; i < 2; i++) {
        if (dieciseisavapregunta[i].checked) {
          var laseleccionada = i;
          break;
        }
      }
      switch (laseleccionada) {
        case 0:
          puntajefinal = puntajefinal + 4;
          break;
        case 1:
          puntajefinal = puntajefinal + 0;
          break;
      }

      var diecisieteavapregunta = document.querySelectorAll(
        "input[name = 'grietas']"
      );
      for (i = 0; i < 2; i++) {
        if (diecisieteavapregunta[i].checked) {
          var laseleccionada = i;
          break;
        }
      }
      switch (laseleccionada) {
        case 0:
          puntajefinal = puntajefinal + 3;
          break;
          ule;
        case 1:
          puntajefinal = puntajefinal + 0;
          break;
      }


      var spinner = document.getElementById("spinnerSentForm");
      spinner.style.display = "block";
      var sendBtn = document.getElementById("sendBtn");
      sendBtn.style.display = "none";

      let formulario = new FormData(document.getElementById("formulario"));
      let datos = {};
      for (let [key, value] of formulario.entries()) {
        datos[key] = value;
      }
      
      const miSelect1 = document.getElementById("municipio");
      datos.municipio = miSelect1.options[miSelect1.selectedIndex].text;
      const miSelect2 = document.getElementById("barrio");
      datos.barrio = miSelect2.options[miSelect2.selectedIndex].text;
  
      var frontHouseImg = document.getElementById("frontHouseImg").files[0];

      var sinking1Img = undefined;
      var sinking2Img = undefined;
      var crack1Img = undefined;
      var crack2Img = undefined;
      
      datos.latitud = latitud.toString();
      datos.longitud = longitud.toString();
      datos.puntajefinal = puntajefinal.toString();
      


  

   


      
      if (datos.hundimiento == "Si") {
        sinking1Img = document.getElementById("sinking1Img").files[0];
        sinking2Img = document.getElementById("sinking2Img").files[0];
      }
      if (datos.grietas == "Si") {
        crack1Img = document.getElementById("crack1Img").files[0];
        crack2Img = document.getElementById("crack2Img").files[0];
      }


      await loadStorage(frontHouseImg,"frentesImg/").then(url => {
        datos.frenteImg = url;
      });

      if(sinking1Img != undefined && sinking2Img != undefined)
      {
        await loadStorage(sinking1Img,"hundimientos1Img/").then(url => {
          datos.hundimiento1Img = url;
        });
        await loadStorage(sinking2Img,"hundimientos2Img/").then(url => {
          datos.hundimiento2Img = url;
        });
      }

      if(crack1Img != undefined && crack2Img != undefined)
        {
          await loadStorage(crack1Img,"grieta1Img/").then(url => {
            datos.grieta1Img = url;
          });
          await loadStorage(crack2Img,"grieta2Img/").then(url => {
            datos.grieta2Img = url;
          });
        }

        await loadModule(datos).then(); 

      document.querySelector(".form").classList.add("quitar");
      var finalizar = document.querySelector(".finalizar");
      document.querySelector(".enviar").classList.add("quitar");
      if (puntajefinal < 31) {
        finalizar.innerHTML =
          "<h2 style='margin-left: 8%' id='h1' class='text h1'>Gracias por responder la encuesta, El puntaje en la escala de gravedad de tu vivienda es baja con un total de puntos de: " +
          puntajefinal +
          "</h2>";
      } else if (puntajefinal > 30 && puntajefinal < 61) {
        finalizar.innerHTML =
          "<h2 style='margin-left: 8%' id='h1' class='text h1'>Gracias por responder la encuesta, El puntaje en la escala de gravedad de tu vivienda es media con un total de puntos de: " +
          puntajefinal +
          "</h2>";
      } else if (puntajefinal > 60 && puntajefinal < 81) {
        finalizar.innerHTML =
          "<h2 style='margin-left: 8%' id='h1' class='text h1'>Gracias por responder la encuesta, El puntaje en la escala de gravedad de tu vivienda es alta con un total de puntos de: " +
          puntajefinal +
          "</h2>";
      } else if (puntajefinal > 80) {
        finalizar.innerHTML =
          "<h2 style='margin-left: 8%' id='h1' class='text h1'>Gracias por responder la encuesta, El puntaje en la escala de gravedad de tu vivienda es extrema con un total de puntos de: " +
          puntajefinal +
          "</h2>";
      }
    }
  } else {
    location.href = "#boton";
    Swal.fire({
      title: "Ubicacion",
      text: "Permitir la ubicación del dispositivo es obligatorio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Permitir",
    }).then((result) => {
      if (result.isConfirmed) {
        mapa(event);
      }
    });
    event.preventDefault();
  }
}
function condicion5(variable) {
  var condicion5 = document.querySelector(variable);
  if (variable == ".condicion5" && d == 1) {
    condicion5.innerHTML =
      "<hr /><h2 style='text-align: center' class='text'>Incluya 2 imagenes de la grieta </h2><p class='text'>En este primero suba una foto lejana de la grieta<a onclick=\"putimage('./img/grieta.png')\">Haga clic aquí para ver un ejemplo</a></p><input onchange=\"return validarfile('f4')\" class='f4' type='file'accept='image/*' required id='crack1Img'><p class='text f4'></p><p class='text'>En este segundo suba una foto cercana con algun objeto que se pueda dimencionar al lado de la grieta el objeto con el que se puede dimencionar puede ser por ejemplo: un lápiz o Cuaderno <a onclick=\"putimage('./img/grietalapicero.png')\">Haga clic aquí para ver un ejemplo</a></p><input onchange=\"return validarfile('f5')\" class='f5' type='file'accept='image/*' required id='crack2Img'><p class='text f5'></p>";
    d = 2;
  } else {
    if (variable == ".seleccion4" && d == 2) {
      while (condicion5.firstChild) {
        condicion5.removeChild(condicion5.firstChild);
      }
      d = 1;
    }
  }
}
function anterior(event) {
  event.preventDefault();
  if (siguienteandanterior == 1) {
    puntajefinal = 0;
    location.href = "#h1";
    document.querySelector(".continuar0").classList.remove("quitar");
    let continuar = document.querySelector(".continuar");
    while (continuar.firstChild) {
      continuar.removeChild(continuar.firstChild);
    }
    siguienteandanterior = 0;
    document.querySelector(".anterior").classList.add("before");
    document.querySelector(".before").classList.toggle("anterior");
    document.querySelector(".next").classList.toggle("siguiente");
  } else if (siguienteandanterior == 2) {
    puntajefinal = segundaseccion;
    document.querySelector(".continuar").classList.remove("quitar");
    let continuar = document.querySelector(".continuar2");
    while (continuar.firstChild) {
      continuar.removeChild(continuar.firstChild);
    }
    document.querySelector(".next").classList.remove("quitar");
    document.querySelector(".next").classList.toggle("siguiente");
    document.querySelector("#antes").classList.toggle("anterior");
    document.querySelector(".enviar").classList.add("quitar");
    location.href = "#h1";
    siguienteandanterior = 1;
  }
}
function putimage(ruta) {
  document.querySelector(".fondo-imagen").classList.remove("quitar");
  let img = document.querySelector(".imagenn");
  img.src = ruta;
}
function exit() {
  document.querySelector(".fondo-imagen").classList.add("quitar");
}
function condicionotro(variable) {
  var otro = body.querySelector("." + variable);
  if (
    (variable == "otro1" && o == 1) ||
    (variable == "otro2" && o2 == 1) ||
    variable == "otro3"
  ) {
    if (variable == "otro1") {
      otro.innerHTML =
        " <label class=' label-radio text' for='otro1'>Escribe que otro uso predominante le dan ala vivienda</label><br><input name='usovivienda' id='otro1' placeholder='Otro uso predominante' type='text' required>";
      o = 2;
    } else if (variable == "otro2") {
      otro.innerHTML =
        "<label class=' label-radio text' for='otrouso'>Escribe que otro uso le daban ala casa</label><br><input name='usovivienda' id='otrouso' placeholder='Otro uso  anterior ala casa' type='text' required>";
      o2 = 2;
    } else {
      if (document.querySelector("#otro3").checked) {
        otro.innerHTML =
          "<label class=' label-radio text' for='otroequipogrande'>Escribe que otro equipo grande dentro de la edificación</label><br><input name='otroequipogrande' id='otroequipogrande' placeholder='Escribir otra presencia de equipo grande' type='text' required>";
        o3 = 2;
      } else {
        while (otro.firstChild) {
          otro.removeChild(otro.firstChild);
        }

        o3 = 1;
      }
    }
  } else {
    if (
      (variable == "otrono" && o == 2) ||
      (variable == "otrono2" && o2 == 2)
    ) {
      if (variable == "otrono") {
        while (otro.firstChild) {
          otro.removeChild(otro.firstChild);
        }

        o = 1;
      } else if (variable == "otrono2") {
        while (otro.firstChild) {
          otro.removeChild(otro.firstChild);
        }

        o2 = 1;
      }
    }
  }
}
// ---------------------------------------validacion de los pisos------
function pisos_vivienda() {
  var pisos = document.querySelector("#pisovivienda"),
    condicion = document.querySelector("#numerodepisos"),
    sotanos = document.querySelector("#numerodesotanos");
  switch (condicion.selectedIndex) {
    case 0:
      pisos.innerHTML = "<option value='1'>1</option>";
      break;
    case 1:
      pisos.innerHTML =
        "<option value='1'>1</option><option value='2'>2</option>";
      break;
    case 2:
      pisos.innerHTML =
        "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option>";
      break;
    case 3:
      pisos.innerHTML =
        "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option>";
      break;
    case 4:
      pisos.innerHTML =
        "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option>";
      break;
    case 5:
      pisos.innerHTML =
        "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option>";
      break;
    case 6:
      pisos.innerHTML =
        "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option  value='7 o mas'>7 O Más</option>";
      break;
  }
  if (condicion.selectedIndex < 4) {
    sotanos.innerHTML =
      "<option value='ninguno'>Ninguno</option><option value='1'>1</option><option value='2'>2</option>";
  } else {
    sotanos.innerHTML = sotanos.innerHTML =
      "<option value='ninguno'>Ninguno</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5 o Más'>5 o mas</option>";
  }
}
function separacion_viviendas(variable) {
  var vivienda = document.querySelector(".separacion_vivienda");
  if (variable == "si") {
    vivienda.innerHTML =
      "<hr><h2 class='text'>¿Cuál es la distancia entre las viviendas con sus vecinos?</h2><section class='pregunta condicion'><input name='separcion' value='1 a 2 cm' id='1a2' type='radio' required /><label class='label-radio label text' for='1a2'>1 a 2 cm</label><br /><input name='separcion' value='3a4' id='3a4' type='radio' /><label class='label-radio label text' for='3a4'>3 a 4 m</label><br /><input name='separcion' value='5a6' id='5a6' type='radio' required /><label class='label-radio label text' for='5a6'>5 a 6 m</label><br /><input name='separcion' value='Mayores a 6.5cm' id='Mayoresa6.5cm' type='radio'/><label class='label-radio label text' for='Mayoresa6.5cm'>Mayores a 6.5cm</label><br /><label class='label-radio label text' for='separaciondetallada'>Ingresar la distancia más detallada ejemplo: 3.4  el valor que se ingrese se tomara en centimetros</label><br /><input  title='Solo ingresar numeros reales' pattern='^[0-9]+([.][0-9]+)?$' style='margin-left: 30px' name='separaciondetallada' id='separaciondetallada' placeholder='Ingresar Distacia más detallada' type='text' required/></section>";
  } else {
    while (vivienda.firstChild) {
      vivienda.removeChild(vivienda.firstChild);
    }
  }
}
var TipoTierra;
function validar_municipio() {
  var barrio = document.querySelector("select[name='barrio']"),
    municipio = document.querySelector("select[name='municipio']");
  switch (municipio.selectedIndex) {
    case 0:
      barrio.innerHTML =
        "<option value=''>Barrios unidos</option><option value=''>La pradera</option><option value=''>Aburra sur</option><option value=''>Barrio nuevo</option><option value=''>los cerezos</option><option value=''>Cristo rey</option><option value=''>Olaya herrera</option><option value=''>La docena</option><option value=''>La inmaculada</option><option value=''>Felipe Echavarría No. 1</option><option value=''>Felipe Echavarría No. 2</option><option value=''>La Chuscala</option><option value=''>El Minuto</option><option value=''>La Planta</option><option value=''>Las Margaritas</option><option value=''>La Acuarela y/o La Rivera</option><option value=''>Zona Centro</option><option value=''>Andalucía</option><option value=''>La Goretti</option><option value=''>El Socorro</option><option value=''>Juan XXIII</option><option value=''>Villa Capri</option><option value=''>La Buena Esperanza</option><option value=''>Fundadores</option><option value=''>Centenario</option><option value=''>Mandalay</option><option value=''>La Playita</option><option value=''>La aguacatala</option><option value=''>Bellavista</option><option value=''>El Porvenir</option><option value=''>Primavera</option><option value=''>La Locería</option><option value=''>Vereda la tolva</option><option value=''>vereda el cano</option><option value=''>vereda la raya</option><option value=''>verada la corrala</option><option value=''>vereda la miel</option><option value=''>vereda la valeria</option><option value=''>vereda la corralita</option><option value=''>vereda el potrerillo</option><option value=''>vereda La Maní de Cardal </option><option value=''>vereda Sinífana</option><option value=''>vereda Cardalito</option><option value=''>vereda Salinas</option><option value=''>vereda La Salada (Parte Alta)</option><option value=''>vereda La Salada (Parte Baja)</option><option value=''>vereda La Calle</option><option value=''>vereda La Clara</option><option value=''>vereda La Quiebra</option><option value=''>vereda La Chuscala</option><option value=''>vereda El Raizal</option><option value=''>vereda Minas</option><option value=''>vereda Minuto de Dios</option>";
      break;

    case 1:
      barrio.innerHTML =
        "<option value=''>Ancón San Martín</option><option value=''>Centro</option><option value=''>Bellavista</option><option value=''>La chinca</option><option value=''>Chile</option><option value=''>El Pedrero</option><option value=''>Horizontes</option><option value=''>la ferreria</option><option value=''>San Andres</option><option value=''>La ospina</option><option value=''>Camilo torres</option><option value=''>El dorado</option><option value=''>Primavera</option><option value=''>Caqueta</option><option value=''>Las brisas</option><option value=''>San vicente</option><option value=''>San cayetano</option><option value=''>Escobar</option><option value=''>Monterrey</option><option value=''>San Agustin</option><option value=''>zona industrial</option><option value=''>Vereda la tablacita</option><option value=''>Vereda Juan XXIII</option><option value=''>Vereda San isidro</option><option value=''>Vereda Sagrada familia</option>";

      break;

    case 2:
      barrio.innerHTML =
        "<option value=''>Aliadas Del Sur</option><option value=''>Ancon Sur</option><option value=''>Betania</option><option value=''>Calle Del Banco</option><option value=''>Calle Larga</option><option value=''>El Carmelo II</option><option value=''>Entreamigos</option><option value=''>Holanda</option><option value=''>La Barquereña</option><option value=''>La Florida</option><option value=''>La Doctora</option><option value=''>Las Casitas</option><option value=''>Los Alcázarez</option><option value=''>Los Arias</option><option value=''>Manuel Restrepo</option><option value=''>María Auxiliadora</option><option value=''>Nuestra Señora de los Dolores</option><option value=''>Paso Ancho</option><option value=''>Playas de María</option><option value=''>Prados de Sabaneta</option><option value=''>Promisión</option><option value=''>Restrepo Naranjo</option><option value=''>Sabaneta Real</option><option value=''>San Joaquín</option><option value=''>San Rafael</option><option value=''>Santa Ana</option><option value=''>Tres Esquinas</option><option value=''>Vegas de la Doctora</option><option value=''>Vegas de San José</option><option value=''>Villas del Carmen</option><option value=''>Virgen del Carmen</option>";

      break;

    case 3:
      barrio.innerHTML =
        "<option value=''>Zona Industrial Nº1</option><option value=''>Zona Industrial Nº2</option><option value=''>La Independencia</option><option value=''>San Juan Bautista</option><option value=''>San José</option><option value=''>Araucaria</option><option value=''>La Gloria</option><option value=''>Las Mercedes</option><option value=''>Centro</option><option value=''>Asturias</option><option value=''>Los Naranjos</option><option value=''>Villa Paula</option><option value=''>Artex</option><option value=''>Playa Rica</option><option value=''>Satexco</option><option value=''>San Isidro</option><option value=''>La Santa Cruz</option><option value=''>Santa Catalina</option><option value=''>Samaria</option><option value=''>La Finca</option><option value=''>Yarumito</option><option value=''>El Palmar</option><option value=''>Santa Ana</option><option value=''>Samaria Nº1</option><option value=''>Las Margaritas</option><option value=''>Malta</option><option value=''>Glorieta Pilsen</option><option value=''>Monte Verde</option><option value=''>Camparola</option><option value=''>San Pio X</option><option value=''>La Palama</option><option value=''>Jardines Montesacro</option><option value=''>Zona Industrial Nº3</option><option value=''>Las Brisas</option><option value=''>Pilsen</option><option value=''>San Javier</option><option value=''>Villa Lia</option><option value=''>19 de abri</option><option value=''>San Gabriel</option><option value=''>San Antonio</option><option value=''>Triana</option><option value=''>Ditaires</option><option value=''>San Francisco</option><option value=''>Bariloche</option><option value=''>Santa María Nº1</option><option value=''>Santa María Nº2</option><option value=''>Santa María Nº3</option><option value=''>Colinas del Sur</option><option value=''>Central Mayorista</option><option value=''>San Fernando</option><option value=''>La Raya(Guayabal)</option><option value=''>Simón Bolívar</option><option value=''>Las Acacias</option><option value=''>Las Américas</option><option value=''>El Tablazo</option><option value=''>Calatrava</option><option value=''>Loma Linda</option><option value=''>Terranova</option><option value=''>La Aldea</option><option value=''>Ferrara</option><option value=''>Balcones de Sevilla</option><option value=''>Fátima</option><option value=''>El Rosario</option><option value=''>La Unión</option><option value=''>Santa María la Nueva</option><option value=''>Vereda La Verde</option><option value=''>Vereda Los Olivales</option><option value=''>Vereda El Pedregal</option><option value=''>Vereda Loma de los Zuleta</option><option value=''>Vereda El Progreso</option><option value=''>Vereda Los Gómez</option><option value=''>Vereda El Ajizal</option><option value=''>Vereda El Porvenir</option>";

      break;

    case 4:
      barrio.innerHTML =
        "<option value=''>Las casitas</option><option value=''>primavera</option><option value=''>milan-vallejuelos</option><option value=''>Alcala</option><option value=''>El portal</option><option value=''>San marcos</option><option value=''>Jardines</option><option value=''>Villagrande</option><option value=''>Bosques de zuñiga</option><option value=''>loma del barro</option><option value=''>La paz</option><option value=''>El triatlon</option><option value=''>Las antillas</option><option value=''>San rafael</option><option value=''>El dorado</option><option value=''>Zona centro</option><option value=''>Mesa</option><option value=''>San jose</option><option value=''>Los naranjos</option><option value=''>Obrero</option><option value=''>Bucarest</option><option value=''>La magnolia</option><option value=''>Pontevedra</option><option value=''>Loma de las brujas</option><option value=''>La pradera</option><option value=''>La inmaculada</option><option value=''>El chocho</option><option value=''>Las orquideas</option><option value=''>Alto de misael</option><option value=''>Las flores</option><option value=''>Uribe angel</option><option value=''>La sebastiana</option><option value=''>Zuñiga</option><option value=''>El esmeraldal</option><option value=''>Loma el atravezado</option>";

      break;

    case 5:
      barrio.innerHTML =
        "<option value=''>El Guamal</option><option value=''>Barrio Colombia</option><option value=''>Villa Carlota</option><option value=''>Castropol</option><option value=''>Lalinde</option><option value=''>Las Lomas nº1</option><option value=''>Las Lomas n.º 2</option><option value=''>Altos del Poblado</option><option value=''>El Tesoro</option><option value=''>Los Naranjos</option><option value=''>Los Balsos nº1</option><option value=''>San Lucas</option><option value=''>El Diamante nº2</option><option value=''>El Castillo</option><option value=''>Los Balsos nº2</option><option value=''>Alejandría</option><option value=''>La Florida</option><option value=''>El Poblado</option><option value=''>Manila</option><option value=''>Astorga</option><option value=''>Patio Bonito</option><option value=''>La Aguacatala</option><option value=''>Santa María de Los Ángeles</option>";

      break;
    case 6:
      barrio.innerHTML =
        "<option value=''>Tenche</option><option value=''>Barrio Antioquia</option><option value=''>Santa Fe</option><option value=''>Campo Amor</option><option value=''>Cristo Rey</option><option value=''>Guayabal</option><option value=''>La Colina</option><option value=''>Club el Rodeo</option><option value=''>Parque Juan Pablo II</option>";

      break;
    case 7:
      barrio.innerHTML =
        "<option value=''>Las Violetas</option><option value=''>Fátima</option><option value=''>Rosales</option><option value=''>Belén parque</option><option value=''>Granada</option><option value=''>San Bernardo</option><option value=''>Las Playas</option><option value=''>Diego Echavarría</option><option value=''>Rodeo Alto</option><option value=''>La Mota</option><option value=''>El Rincón</option><option value=''>Loma de los Bernal</option><option value=''>La Gloria</option><option value=''>Altavista</option><option value=''>La Palma</option><option value=''>Los Alpes</option><option value=''>Los Alpinos</option><option value=''>Montenegro - Cantarranas</option><option value=''>Zafra</option><option value=''>Las Mercedes</option><option value=''>Nueva Villa del Aburrá</option><option value=''>Nogal - Los Almendros</option><option value=''>Cerro Nutibara</option><option value=''>El Rodeo</option>";

      break;
    case 8:
      barrio.innerHTML =
        "<option value=''>Ferrini</option><option value=''>Calasanz</option><option value=''>Los Pinos</option><option value=''>La América</option><option value=''>La Floresta</option><option value=''>Santa Lucía</option><option value=''>El Danubio</option><option value=''>Campo Alegre</option><option value=''>Santa Mónica</option><option value=''>Barrio Cristóbal</option><option value=''>Simón Bolívar</option><option value=''>Santa Teresita</option><option value=''>Calasanz Parte Alta</option>";

      break;
    case 9:
      barrio.innerHTML =
        "<option value=''>La Castellana</option><option value=''>Las Acacias</option><option value=''>Laureles</option><option value=''>Conquistadores</option><option value=''>San Joaquín</option><option value=''>Bolivariana</option><option value=''>Lorena</option><option value=''>El Velódromo</option><option value=''>Florida Nueva</option><option value=''>Naranjal</option><option value=''>Suramericana</option><option value=''>Estadio</option><option value=''>Los Colores</option><option value=''>La Cuarta Brigada</option><option value=''>Carlos E. Restrepo</option><option value=''>U.P.B</option><option value=''>Unidad Deportiva Atanasio Girardot</option>";

      break;
    case 10:
      barrio.innerHTML =
        "<option value=''>Prado</option><option value=''>Jesús Nazareno</option><option value=''>El Chagualo</option><option value=''>Estación Villa</option><option value=''>San Benito</option><option value=''>Guayaquil</option><option value=''>Corazón de Jesús</option><option value=''>Calle Nueva</option><option value=''>Perpetuo Socorro</option><option value=''>Colón</option><option value=''>Las Palmas</option><option value=''>Bombona nº1</option><option value=''>Boston</option><option value=''>Los Ángeles</option><option value=''>Villanueva</option><option value=''>La Candelaria</option><option value=''>San Diego</option><option value=''>La Alpujarra</option><option value=''>Centro Administrativo</option><option value=''>Hospital Universitario San Vicente de Paúl</option>";

      break;
    case 11:
      barrio.innerHTML =
        "<option value=''>Barrios de jesus</option><option value=''>Bombona nº2</option><option value=''>Los cerros El vergel</option><option value=''>Alejandro Echavarria</option><option value=''>Miraflores</option><option value=''>Cataluña</option><option value=''>La milagrosa</option><option value=''>Buenos Aires</option><option value=''>Caicedo</option><option value=''>Gerona</option><option value=''>El salvador</option><option value=''>Loreto</option><option value=''>Asomadera nº1</option><option value=''>Asomadera nº2</option><option value=''>Asomadera nº3</option>";

      break;
    case 12:
      barrio.innerHTML =
        "<option value=''>Villa Hermosa</option><option value=''>La Mansión</option><option value=''>San Miguel</option><option value=''>La Ladera</option><option value=''>Batallón Girardot</option><option value=''>Llanaditas</option><option value=''>Los Mangos</option><option value=''>Enciso</option><option value=''>Sucre</option><option value=''>El Pinal</option><option value=''>Trece de Noviembre</option><option value=''>La Libertad</option><option value=''>Villa Tina</option><option value=''>San Antonio</option><option value=''>Las Estancias</option><option value=''>Villa Turbay</option><option value=''>Villa Lilliam.</option><option value=''>La Sierra</option>";

      break;
    case 13:
      barrio.innerHTML =
        "<option value=''>Barrio Cerro El Volador</option><option value=''>San Germán</option><option value=''>Barrio Facultad de Minas</option><option value=''>La Pilarica</option><option value=''>Bosques de San Pablo</option><option value=''>Altamira</option><option value=''>Córdoba</option><option value=''>López de Mesa</option><option value=''>El Diamante</option><option value=''>Miramar</option><option value=''>Aures nº1</option><option value=''>Aures nº2</option><option value=''>Bello Horizonte</option><option value=''>Villa Flora</option><option value=''>Palenque</option><option value=''>Robledo</option><option value=''>Cucaracho</option><option value=''>Fuente Clara</option><option value=''>La Campiña</option><option value=''>La Huerta</option><option value=''>Pajarito</option><option value=''>Monteclaro</option><option value=''>Nueva Villa de La Iguaná</option><option value=''>Ciudadela Robledo U.de A.</option><option value=''>Universidad Nacional</option><option value=''>Parque natural regional Metropolitano Cerro El Volador</option>";

      break;
    case 14:
      barrio.innerHTML =
        "<option value=''>Santander</option><option value=''>Doce de Octubre nº1</option><option value=''>Doce de Octubre nº2</option><option value=''>Picachito</option><option value=''>Picacho</option><option value=''>San Martín de Porres</option><option value=''>Pedregal</option><option value=''>La Esperanza</option><option value=''>Kennedy</option>";

      break;
    case 15:
      barrio.innerHTML =
        "<option value=''>Castilla</option><option value=''>La Paralela</option><option value=''>Tricentenario</option><option value=''>Héctor Abad Gómez</option><option value=''>Toscana</option><option value=''>Barrio nuevo</option><option value=''>Plaza Colón</option><option value=''>Boyacá</option><option value=''>Las Brisas</option><option value=''>Florencia</option><option value=''>Tejelo</option><option value=''>Girardot</option><option value=''>Gratamira</option><option value=''>Francisco Antonio Zea</option><option value=''>Alfonso López</option><option value=''>Belalcázar</option><option value=''>Caribe</option><option value=''>El Progreso</option><option value=''>Plaza de Ferias</option><option value=''>Oleoducto</option><option value=''>Cementerio Universa</option><option value=''>Terminal de Transporte del Norte</option>";

      break;
    case 16:
      barrio.innerHTML =
        "<option value=''>Berlín</option><option value=''>San Isidro</option><option value=''>Palermo</option><option value=''>Los Álamos</option><option value=''>Moravia</option><option value=''>Sevilla</option><option value=''>San Pedro</option><option value=''>Manrique Central Nro.1</option><option value=''>Campo Valdés Nro.1</option><option value=''>Las Esmeraldas</option><option value=''>La Piñuela</option><option value=''>Aranjuez</option><option value=''>Brasilia</option><option value=''>Miranda</option><option value=''>Universidad de Antioquia</option><option value=''>Jardín Botánico</option><option value=''>Parque Norte</option><option value=''>Parque Explora</option>";

      break;
    case 17:
      barrio.innerHTML =
        "<option value=''>La Salle</option><option value=''>Las Granjas</option><option value=''>Jardín</option><option value=''>San Blas</option><option value=''>Santa Ana</option><option value=''>San Pablo</option><option value=''>Campo Valdés No.2</option><option value=''>Santa Inés</option><option value=''>El Raizal</option><option value=''>El Pomar</option><option value=''>Manrique Central No.2</option><option value=''>Manrique Oriental</option><option value=''>Versalles No.1</option><option value=''>Versalles No.2</option><option value=''>La Cruz</option><option value=''>Oriente</option><option value=''>María Cano - Carambolas</option><option value=''>San José de la Cima No.1</option><option value=''>San José de la Cima No.2</option>";

      break;
    case 18:
      barrio.innerHTML =
        "<option value=''>La Frontera</option><option value=''>La Isla</option><option value=''>Villa del Socorro</option><option value=''>El Playón de Los Comuneros</option><option value=''>Villa Niza</option><option value=''>Pablo VI</option><option value=''>Moscú Nº1</option><option value=''>La Asunción</option><option value=''>La Francia</option><option value=''>La Rosa</option><option value=''>Andalucía</option>";

      break;
    case 19:
      barrio.innerHTML =
        "<option value=''>El Popular</option><option value=''>Santo Domingo Savio N°1</option><option value=''>Santo Domingo Savio N°2</option><option value=''>La Avanzada</option><option value=''>Granizal</option><option value=''>La Esperanza N°2</option><option value=''>Carpinelo</option><option value=''>Aldea Pablo VI</option><option value=''>El Compromiso</option><option value=''>San Pablo</option><option value=''>Moscú Nº2</option><option value=''>Villa de Guadalupe</option>";

      break;
    case 20:
      barrio.innerHTML =
        "<option value=''>Vereda el granizal</option><option value=''>Ciudad Niquía</option><option value=''>Ciudadela del Norte</option><option value=''>Hermosa Provincia</option><option value=''>Panamericano</option><option value=''>Terranova</option><option value=''>Fontidueño</option><option value=''>La Mina</option><option value=''>Alcalá</option><option value=''>Los Ciruelos</option><option value=''>Estación Primera</option><option value=''>Las Vegas</option><option value=''>La Camila</option><option value=''>Cinco Estrellas</option><option value=''>Marco Fidel Suárez</option><option value=''>Suárez</option><option value=''>Puerto Bello</option><option value=''>Rincón Santos</option><option value=''>Central</option><option value=''>Espíritu Santo</option><option value=''>Centro</option><option value=''>Pérez</option><option value=''>Nazareth</option><option value=''>La Meseta</option><option value=''>El Rosario</option><option value=''>Andalucía</option><option value=''>López de Mesa</option><option value=''>El Cairo</option><option value=''>La Milagrosa</option><option value=''>El Congolo</option><option value=''>Las Granjas</option><option value=''>Prado</option><option value=''>Mánchester</option><option value=''>La Estación</option><option value=''>Villas de Occidente</option><option value=''>Molinares</option><option value=''>San Simón</option><option value=''>Amazonía</option><option value=''>Santa Ana</option><option value=''>Los Búcaros</option><option value=''>Serramonte</option><option value=''>Salento</option><option value=''>Barrio Nuevo</option><option value=''>La Cabañita</option><option value=''>La Cabaña</option><option value=''>La Madera</option><option value=''>La Florida</option><option value=''>Gran Avenida</option><option value=''>San José Obrero</option><option value=''>La Gabriela</option><option value=''>Belvedere</option><option value=''>Acevedo</option><option value=''>Zamora</option><option value=''>Santa Rita</option><option value=''>Zona Industrial #7</option>";

      break;
    case 21:
      barrio.innerHTML =
        "<option value=''>zona urbana copacabana</option><option value=''>Vereda Ancon 2</option><option value=''>Vereda Ancon 1</option><option value=''>Vereda Alvarado</option><option value=''>Vereda Salado</option><option value=''>Vereda Peñolcito</option><option value=''>Vereda Montañita</option><option value=''>Vereda El Cabuyal</option><option value=''>Vereda El Convento</option><option value=''>Vereda La lomita</option>";

      break;
    case 22:
      barrio.innerHTML =
        "<option value=''>Vereda La Palma</option><option value=''>Vereda San Diego</option><option value=''>Vereda Las cuchillas</option><option value=''>Vereda San Andres</option><option value=''>Vereda Loma de los Ochoa</option><option value=''>Vereda La Matica</option><option value=''>Vereda El paraiso</option><option value=''>Vereda San Esteban</option><option value=''>Vereda Portachuelo</option><option value=''>Vereda El totumo</option><option value=''>Aurelio Mejía</option><option value=''>Centro</option><option value=''>El Llano</option><option value=''>El Paraíso</option><option value=''>El Salado</option><option value=''>Girardota La Nueva</option><option value=''>Guaduales</option><option value=''>Guayacanes</option><option value=''>Juan XXIII</option><option value=''>La Ceiba</option><option value=''>La Ferrería</option><option value=''>La Florida</option><option value=''>Montecarlo</option><option value=''>Naranjal</option><option value=''>Nuevo Horizonte</option><option value=''>Palmas del Llano</option><option value=''>Santa Ana</option><option value=''>San José</option>";

      break;
    case 23:
      barrio.innerHTML =
        "<option value=''>Cabecera municipal</option><option value=''>Isaza</option><option value=''>Corrientes</option><option value=''>El cortado</option><option value=''>El hatillo</option><option value=''>Platanito parte baja</option><option value=''>La lomita</option><option value=''>tablazo hatillo</option><option value=''>Paraiso</option><option value=''>Filo verde</option>";

      break;
  }
}
