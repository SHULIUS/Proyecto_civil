

var btnSignOut = document.getElementById("btnSignOut");
btnSignOut.addEventListener("click", () => signOut());
var btnGraphics = document.getElementById("btnGraphics");
btnGraphics.addEventListener("click", () => graphics());
var btnForms = document.getElementById("btnForms");
btnForms.addEventListener("click", () => seeForms());
getSignUp();

const loadForms = async () => {
  const dashboardContainer = document.getElementById("dashboardContainer");
    try {
      const { getForms } = await import('../firebase/firebaseGetForms.js');
      const forms = getForms();
      var ubicaciones=[]
      forms.then(formsArray => {
        formsArray.forEach(form => {
            var formContainer = document.createElement("div");
            formContainer.setAttribute("class", "formContainer");

            var personalInformationContainer = document.createElement("div");
            personalInformationContainer.setAttribute("class", "personalInformationContainer");

            var informationContainer = document.createElement("div");
            informationContainer.setAttribute("class", "informationContainer");

            var labelPersonalInformation = [
              `Nombre: ${form.primernombre} ${form.segundonombre}${form.primerapellido} ${form.segundoapellido}  `,
              `Nivel de formacion: ${form.NivelFormacion}`,
              `Telefono: ${form.celular}`,
              `Cedula: ${form.cedula}`,
              `Correo: ${form.correo}`,
              `Departamento: ${form.departamento}`,
              `Municipio: ${form.municipio}`,
              `Barrio: ${form.barrio}`,
              `Direccion: ${form.direccion}`,
              `Longitud: ${form.longitud}`,
              `Latitud: ${form.latitud}`,
            ];
            var labelInformation = [
              `Construccion de la vivienda: ${form.year}`,
              `Fué construida por alguna entidad o empresa constructora: ${form.year}`,
              `- EXTERIOR DE LA VIVIENDA`,
              `Dimension del fondo de la vivienda: ${form.Fondo}`,
              ` Exactamente: ${form.Fondodetallada} m`,
              `Dimension del frente de la vivienda: ${form.Frente}`,
              ` Exactamente: ${form.Frentedetallada} m`,
              `Imagen del frente de la casa:`,
              form.frenteImg,
              `Area de la vivienda: ${form['area-vivenda']}`,  
              `Ubicacion de la vivienda cercana a: ${form.ubicacionvivenda}`,
              `Elementos cercanos a la vivienda: ${form.elementoscerca}`,
              `Uso de la vivienda: ${form.elementoscerca}`,
              `La vivienda tuvo un uso diferente antes: ${form.hubousoanteriorvivienda}`,
              `Numero de pisos: ${form.numerodepisos}`,
              `Piso en el cual esta la vivienda: ${form.pisovivienda}`,
              `Numero de sotanos: ${form.numerodesotanos}`,
              `La vivienda comparte muros: ${form.compartemuro}`,
              `Equipos grandes cerca de la vivienda: ${form.equiposgrandes}`,
              `- INTERIOR DE LA VIVIENDA`,
              `Altura del piso al techo: ${form.alturapisotecho}`,
              `Material del cual esta construido la vivienda: ${form.materialconstruccion}`,
              `Tipo de piso de la vivienda: ${form.tipopiso}`,
              `Tipo de techo de la vivienda: ${form.tipotecho}`,
            ];


            for (var i = 0; i < labelPersonalInformation.length; i++) {
              var label = document.createElement("label");
              label.setAttribute("class", "labelForm");
              label.textContent = labelPersonalInformation[i];
              personalInformationContainer.appendChild(label);
            }

            for (var i = 0; i < labelInformation.length; i++) {

              if(labelInformation[i].startsWith("http")){
                var img = document.createElement("img");
                img.setAttribute("class", "formImg");
                img.setAttribute("src", labelInformation[i]);
                informationContainer.appendChild(img);
              }else{
                var label = document.createElement("label");
                label.setAttribute("class", "labelForm");
                label.textContent = labelInformation[i];
                informationContainer.appendChild(label);
              }
            }
                var hundimiento = document.createElement("label");
                hundimiento.setAttribute("class", "labelForm");
                hundimiento.textContent = `La edificacion presenta hundimientos: ${form.hundimiento}`;
                informationContainer.appendChild(hundimiento);
                if(form.hundimiento == "Si"){
                  var img = document.createElement("img");
                  img.setAttribute("class", "formImg");
                  img.setAttribute("src", form.hundimiento1Img);
                  informationContainer.appendChild(img);
                  var img2 = document.createElement("img");
                  img2.setAttribute("class", "formImg");
                  img2.setAttribute("src", form.hundimiento2Img);
                  informationContainer.appendChild(img2);
                }
                var grietas = document.createElement("label");
                grietas.setAttribute("class", "labelForm");
                grietas.textContent = `La edificacion presenta grietas: ${form.grietas}`;
                informationContainer.appendChild(grietas);
                if(form.grietas == "Si"){
                  var img = document.createElement("img");
                  img.setAttribute("class", "formImg");
                  img.setAttribute("src", form.grieta1Img);
                  informationContainer.appendChild(img);
                  var img2 = document.createElement("img");
                  img2.setAttribute("class", "formImg");
                  img2.setAttribute("src", form.grieta2Img);
                  informationContainer.appendChild(img2);
                }

                const idMapNum =parseFloat(form.cedula)*Math.random();
                const idMap=idMapNum.toString();
                var newDiv = document.createElement("div");
              newDiv.setAttribute("class", "mapForm");

              newDiv.setAttribute("id", idMap);
     

                ubicaciones.push(form)

           personalInformationContainer.appendChild(newDiv) 

            formContainer.appendChild(personalInformationContainer);
            formContainer.appendChild(informationContainer);
            dashboardContainer.appendChild(formContainer);
            
            const mapa = L.map(idMap).setView([form.latitud, form.longitud], 18);
        
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(mapa);
          
            L.marker([form.latitud, form.longitud]).addTo(mapa)
                .bindPopup(`${form.primernombre} ${form.segundonombre}${form.primerapellido} ${form.segundoapellido}`); 
        });

        localization(ubicaciones);

      })
      .catch();
    } catch (error) {
      console.error('Error al importar el módulo:', error);
    }
  };loadForms();


  const signOut = ()=>{
    localStorage.removeItem("permissions");
    localStorage.removeItem("user");
    window.location.href = "../inicio secion/iniciosecion.html";
}

const graphics = ()=>{
  var miDiv = document.getElementById('objeto-propiedades');
  miDiv.style.display = 'none';
  var miDiv2 = document.getElementById('divGraphics');
  miDiv2.style.display = 'block';
}

const seeForms = ()=>{
  var miDiv = document.getElementById('objeto-propiedades');
  miDiv.style.display = 'flex';
  var miDiv2 = document.getElementById('divGraphics');
  miDiv2.style.display = 'none';
}

function getSignUp(){
  if(localStorage.getItem("permissions") == null || localStorage.getItem("user") == null)
  {
    window.location.href = '../inicio secion/iniciosecion.html';
  } 
} 




function localization(localizaciones){
  const LATITUD = 6.295839548181851;
	const LONGITUD = -75.55232272951797;
  const mapa = L.map('formsMap').setView([LATITUD, LONGITUD], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
  }).addTo(mapa);

  localizaciones.forEach(form => {
    const marcador = L.marker([form.latitud, form.longitud]).addTo(mapa)
        .bindPopup(form.nombre);

    marcador.on('click', () => {

Swal.fire({
      title: 'Mensaje de ejemplo',
      html: `Nombre: ${form.primernombre} ${form.segundonombre}${form.primerapellido} ${form.segundoapellido}<br>
      Nivel de formacion: ${form.NivelFormacion} <br>
      Telefono: ${form.celular}<br>
      Cedula: ${form.cedula}<br>
      Correo: ${form.correo}<br>
      Departamento: ${form.departamento}<br>
      Municipio: ${form.municipio}<br>
      Barrio: ${form.barrio}<br>
      Direccion: ${form.direccion}<br>
     Longitud: ${form.longitud}<br>
      Latitud: ${form.latitud}<br>
      Construccion de la vivienda: ${form.year}<br>
      Fué construida por alguna entidad o empresa constructora: ${form.year}<br>
      - EXTERIOR DE LA VIVIENDA<br>
      Dimension del fondo de la vivienda: ${form.Fondo}<br>
       Exactamente: ${form.Fondodetallada} m<br>
      Dimension del frente de la vivienda: ${form.Frente}<br>
       Exactamente: ${form.Frentedetallada} m<br>
      Area de la vivienda: ${form['area-vivenda']}<br>
      Ubicacion de la vivienda cercana a: ${form.ubicacionvivenda}<br>
      Elementos cercanos a la vivienda: ${form.elementoscerca}<br>
      Uso de la vivienda: ${form.elementoscerca}<br>
      La vivienda tuvo un uso diferente antes: ${form.hubousoanteriorvivienda}<br>
      Numero de pisos: ${form.numerodepisos}<br>
      Piso en el cual esta la vivienda: ${form.pisovivienda}<br>
      Numero de sotanos: ${form.numerodesotanos}<br>
      La vivienda comparte muros: ${form.compartemuro}<br>
      Equipos grandes cerca de la vivienda: ${form.equiposgrandes}<br>
      - INTERIOR DE LA VIVIENDA<br>
      Altura del piso al techo: ${form.alturapisotecho}<br>
      Material del cual esta construido la vivienda: ${form.materialconstruccion}<br>
      Tipo de piso de la vivienda: ${form.tipopiso}<br>
      Tipo de techo de la vivienda: ${form.tipotecho}    <br>
      La edificacion presenta hundimientos: ${form.hundimiento}<br>
      La edificacion presenta grietas: ${form.grietas}<br>
      `,
      icon: 'info'
})  
    });
});
}

