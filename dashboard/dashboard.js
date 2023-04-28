

var btnSignOut = document.getElementById("btnSignOut");
btnSignOut.addEventListener("click", () => signOut());
var btnGraphics = document.getElementById("btnGraphics");
btnGraphics.addEventListener("click", () => graphics());
var btnForms = document.getElementById("btnForms");
btnForms.addEventListener("click", () => seeForms());


getSignUp();

var arreglos = []


const loadForms = async () => {
  const dashboardContainer = document.getElementById("dashboardContainer");
    try {
      const { getForms } = await import('../firebase/firebaseGetForms.js');
      const forms = getForms();
      var ubicaciones=[]
      forms.then(formsArray => {
      arreglos = formsArray
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
  var formsMap = document.getElementById('formsMap');
  formsMap.style.display = 'none';
  var dashboardContainer = document.getElementById('dashboardContainer');
  dashboardContainer.style.display = 'none';
  var miDiv2 = document.getElementById('divGraphics');
  miDiv2.style.display = 'block';
}

const seeForms = ()=>{
  var formsMap = document.getElementById('formsMap');
  formsMap.style.display = 'block';
  var dashboardContainer = document.getElementById('dashboardContainer');
  dashboardContainer.style.display = 'block';
  var divGraphics = document.getElementById('divGraphics');
  divGraphics.style.display = 'none';
}

function getSignUp(){
  if(localStorage.getItem("permissions") == null || localStorage.getItem("user") == null)
  {
    window.location.href = '../inicio secion/iniciosecion.html';
  } 
} 




function localization(data){
  const LATITUD = 6.295839548181851;
	const LONGITUD = -75.55232272951797;
  const mapa = L.map('formsMap').setView([LATITUD, LONGITUD], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
  }).addTo(mapa);

  const iconos = {
    red: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      html: '<div style="background-color: red; border-radius: 50%; text-align: center; line-height: 25px; color: white; font-weight: bold;">1</div>',
    }),
    orange: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      html: '<div style="background-color: #FF5500; border-radius: 50%; text-align: center; line-height: 25px; color: white; font-weight: bold;">2</div>',
    }),
    yellow: L.icon({
      iconUrl:'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      html: '<div style="background-color: #FFD100; border-radius: 50%; text-align: center; line-height: 25px; color: white; font-weight: bold;">3</div>',
    })
    ,
    green: L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      html: '<div style="background-color: green; border-radius: 50%; text-align: center; line-height: 25px; color: white; font-weight: bold;">4</div>',
    }),
  };

  data.forEach(form => {

    let icono;
    if (parseInt(form.puntajefinal) <= 30) {
      icono = iconos.green;
    } else if (parseInt(form.puntajefinal) > 30 && parseInt(form.puntajefinal) <=60) {
      icono = iconos.yellow;
      console.log("yellow")
    } else if (parseInt(form.puntajefinal) >60 && parseInt(form.puntajefinal) <=80) {
      icono = iconos.orange;
      console.log("orange")
    }else {
      icono = iconos.red;
      console.log("red")
    }


    const marcador = L.marker([form.latitud, form.longitud],{icon: icono}).addTo(mapa)
        .bindPopup(form.nombre);

    marcador.on('click', () => {

Swal.fire({
      title: `${form.primernombre} ${form.segundonombre}${form.primerapellido} ${form.segundoapellido}`,
      html: `
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
      Fué construida por alguna entidad o empresa constructora: ${form.year}<br><br>
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
      Equipos grandes cerca de la vivienda: ${form.equiposgrandes}<br><br>
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

const { getForms } = await import('../firebase/firebaseGetForms.js');
const forms = getForms();


var year = []
var Fondo = []
var Frente = []
var Area = []
var Ubicaciones=[]
var elementoscerca = []
var hubousoanteriorvivienda = []
var numerodepisos = []
var pisovivienda = []
var numerodesotanos = []
var compartemuro = []
var equiposgrandes = []

/* Interior Vivienda */
var alturapisotecho = []
var materialconstruccion = []
var tipopiso = []
var tipotecho = []
var hundimiento = []
var grietas = []




forms.then(formsArray => {
  arreglos = formsArray

  
  const  tipotechoCount = {};

  
  formsArray.forEach(form => {
    if (form.tipotecho in tipotechoCount) {
      tipotechoCount[form.tipotecho]++;
    } else {
      tipotechoCount[form.tipotecho] = 1;
    }
    tipotecho.push(form.tipotecho); 
   
  });

  



  const tipotecholabels = Object.keys(tipotechoCount);
  const tipotechodata = Object.values(tipotechoCount);

  const tipotechocanvas = document.getElementById('Grafica_tipotecho_vivienda');

  
  const tipotechoctx = tipotechocanvas.getContext('2d');
  const tipotechochart = new Chart(tipotechoctx, {
    type: 'bar',
    data: {
      labels: tipotecholabels,
      datasets: [{
        label: 'Tipo de techo de la vivienda',
        data: tipotechodata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {
      

      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });

  const  tipopisoCount = {};

  
  formsArray.forEach(form => {
    if (form.tipopiso in tipopisoCount) {
      tipopisoCount[form.tipopiso]++;
    } else {
      tipopisoCount[form.tipopiso] = 1;
    }
    tipopiso.push(form.tipopiso); 
   
  });

  



  const tipopisolabels = Object.keys(tipopisoCount);
  const tipopisodata = Object.values(tipopisoCount);

  const tipopisocanvas = document.getElementById('Grafica_tipopiso_vivienda');

  
  const tipopisoctx = tipopisocanvas.getContext('2d');
  const tipopisochart = new Chart(tipopisoctx, {
    type: 'bar',
    data: {
      labels: tipopisolabels,
      datasets: [{
        label: 'Tipo de piso de la vivienda',
        data: tipopisodata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });

  const  alturapisotechoCount = {};

  
  formsArray.forEach(form => {
    if (form.alturapisotecho in alturapisotechoCount) {
      alturapisotechoCount[form.alturapisotecho]++;
    } else {
      alturapisotechoCount[form.alturapisotecho] = 1;
    }
    alturapisotecho.push(form.alturapisotecho); 
   
  });

  



  const alturapisotecholabels = Object.keys(alturapisotechoCount);
  const alturapisotechodata = Object.values(alturapisotechoCount);

  const alturapisotechocanvas = document.getElementById('Grafica_alturapisotecho_vivienda');

  
  const alturapisotechoctx = alturapisotechocanvas.getContext('2d');
  const alturapisotechochart = new Chart(alturapisotechoctx, {
    type: 'bar',
    data: {
      labels: alturapisotecholabels,
      datasets: [{
        label: 'Altura del piso al techo',
        data: alturapisotechodata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
  
  const  materialconstruccionCount = {};

  
  formsArray.forEach(form => {
    if (form.materialconstruccion in materialconstruccionCount) {
      materialconstruccionCount[form.materialconstruccion]++;
    } else {
      materialconstruccionCount[form.materialconstruccion] = 1;
    }
    materialconstruccion.push(form.materialconstruccion); 
   
  });

  



  const materialconstruccionlabels = Object.keys(materialconstruccionCount);
  const materialconstrucciondata = Object.values(materialconstruccionCount);

  const materialconstruccioncanvas = document.getElementById('Grafica_materialconstruccion_vivienda');

  
  const materialconstruccionctx = materialconstruccioncanvas.getContext('2d');
  const materialconstruccionchart = new Chart(materialconstruccionctx, {
    type: 'bar',
    data: {
      labels: materialconstruccionlabels,
      datasets: [{
        label: 'Material del cual esta construido la vivienda',
        data: materialconstrucciondata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
  
  const equiposgrandesCount = {};

  
  formsArray.forEach(form => {
    if (form.equiposgrandes in equiposgrandesCount) {
      equiposgrandesCount[form.equiposgrandes]++;
    } else {
      equiposgrandesCount[form.equiposgrandes] = 1;
    }
    equiposgrandes.push(form.equiposgrandes); 
   
  });

  



  const equiposgrandeslabels = Object.keys(equiposgrandesCount);
  const equiposgrandesdata = Object.values(equiposgrandesCount);

  const equiposgrandescanvas = document.getElementById('Grafica_equiposgrandes_vivienda');

  
  const equiposgrandesctx = equiposgrandescanvas.getContext('2d');
  const equiposgrandeschart = new Chart(equiposgrandesctx, {
    type: 'bar',
    data: {
      labels: equiposgrandeslabels,
      datasets: [{
        label: '¿Equipos grandes cerca de la vivienda?',
        data: equiposgrandesdata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
  const compartemuroCount = {};

  
  formsArray.forEach(form => {
    if (form.compartemuro in compartemuroCount) {
      compartemuroCount[form.compartemuro]++;
    } else {
      compartemuroCount[form.compartemuro] = 1;
    }
    compartemuro.push(form.compartemuro); 
   
  });

  



  const compartemurolabels = Object.keys(compartemuroCount);
  const compartemurodata = Object.values(compartemuroCount);

  const compartemurocanvas = document.getElementById('Grafica_compartemuro_vivienda');

  
  const compartemuroctx = compartemurocanvas.getContext('2d');
  const compartemurochart = new Chart(compartemuroctx, {
    type: 'bar',
    data: {
      labels: compartemurolabels,
      datasets: [{
        label: '¿Comparte Muro?',
        data: compartemurodata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
  const numerodesotanosCount = {};

  
  formsArray.forEach(form => {
    if (form.numerodesotanos in numerodesotanosCount) {
      numerodesotanosCount[form.numerodesotanos]++;
    } else {
      numerodesotanosCount[form.numerodesotanos] = 1;
    }
    numerodesotanos.push(form.numerodesotanos); 
   
  });

  



  const numerodesotanoslabels = Object.keys(numerodesotanosCount);
  const numerodesotanosdata = Object.values(numerodesotanosCount);

  const numerodesotanoscanvas = document.getElementById('Grafica_numerodesotanos_vivienda');

  
  const numerodesotanosctx = numerodesotanoscanvas.getContext('2d');
  const numerodesotanoschart = new Chart(numerodesotanosctx, {
    type: 'bar',
    data: {
      labels: numerodesotanoslabels,
      datasets: [{
        label: 'Numero de sotanos',
        data: numerodesotanosdata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
  
  const pisoviviendaCount = {};

  
  formsArray.forEach(form => {
    if (form.pisovivienda in pisoviviendaCount) {
      pisoviviendaCount[form.pisovivienda]++;
    } else {
      pisoviviendaCount[form.pisovivienda] = 1;
    }
    pisovivienda.push(form.pisovivienda); 
   
  });

  



  const pisoviviendalabels = Object.keys(pisoviviendaCount);
  const pisoviviendadata = Object.values(pisoviviendaCount);

  const pisoviviendacanvas = document.getElementById('Grafica_pisovivienda_vivienda');

  
  const pisoviviendactx = pisoviviendacanvas.getContext('2d');
  const pisoviviendachart = new Chart(pisoviviendactx, {
    type: 'bar',
    data: {
      labels: pisoviviendalabels,
      datasets: [{
        label: 'Numero de piso en el que vive',
        data: pisoviviendadata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });


  const numerodepisosCount = {};

  
  formsArray.forEach(form => {
    if (form.numerodepisos in numerodepisosCount) {
      numerodepisosCount[form.numerodepisos]++;
    } else {
      numerodepisosCount[form.numerodepisos] = 1;
    }
    numerodepisos.push(form.numerodepisos); 
   
  });

  



  const numerodepisoslabels = Object.keys(numerodepisosCount);
  const numerodepisosdata = Object.values(numerodepisosCount);

  const numerodepisoscanvas = document.getElementById('Grafica_numerodepisos_vivienda');

  
  const numerodepisosctx = numerodepisoscanvas.getContext('2d');
  const numerodepisoschart = new Chart(numerodepisosctx, {
    type: 'bar',
    data: {
      labels: numerodepisoslabels,
      datasets: [{
        label: 'Numero de pisos',
        data: numerodepisosdata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
  const hubousoanteriorviviendaCount = {};

  
  formsArray.forEach(form => {
    if (form.hubousoanteriorvivienda in hubousoanteriorviviendaCount) {
      hubousoanteriorviviendaCount[form.hubousoanteriorvivienda]++;
    } else {
      hubousoanteriorviviendaCount[form.hubousoanteriorvivienda] = 1;
    }
    hubousoanteriorvivienda.push(form.hubousoanteriorvivienda); 
   
  });

  



  const hubousoanteriorviviendalabels = Object.keys(hubousoanteriorviviendaCount);
  const hubousoanteriorviviendadata = Object.values(hubousoanteriorviviendaCount);

  const hubousoanteriorviviendacanvas = document.getElementById('Grafica_hubousoanteriorvivienda_vivienda');

  
  const hubousoanteriorviviendactx = hubousoanteriorviviendacanvas.getContext('2d');
  const hubousoanteriorviviendachart = new Chart(hubousoanteriorviviendactx, {
    type: 'bar',
    data: {
      labels: hubousoanteriorviviendalabels,
      datasets: [{
        label: 'La vivienda tuvo un uso diferente antes',
        data: hubousoanteriorviviendadata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
     
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });

  const elementoscercaCount = {};

  
  formsArray.forEach(form => {
    if (form.elementoscerca in elementoscercaCount) {
      elementoscercaCount[form.elementoscerca]++;
    } else {
      elementoscercaCount[form.elementoscerca] = 1;
    }
    elementoscerca.push(form.elementoscerca); 
   
  });

  



  const elementoscercalabels = Object.keys(elementoscercaCount);
  const elementoscercadata = Object.values(elementoscercaCount);

  const elementoscercacanvas = document.getElementById('Grafica_Elementos_Cerca_vivienda');

  
  const elementoscercactx = elementoscercacanvas.getContext('2d');
  const elementoscercachart = new Chart(elementoscercactx, {
    type: 'bar',
    data: {
      labels: elementoscercalabels,
      datasets: [{
        label: 'Elementos cercanos a la vivienda',
        data: elementoscercadata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });

  
  const yearCount = {};

  
  formsArray.forEach(form => {
    if (form.year in yearCount) {
      yearCount[form.year]++;
    } else {
      yearCount[form.year] = 1;
    }
    year.push(form.year); 
   
  });

  



  const yearlabels = Object.keys(yearCount);
  const yeardata = Object.values(yearCount);

  const yearcanvas = document.getElementById('Grafica_Años_vivienda');

  
  const yearctx = yearcanvas.getContext('2d');
  const yearchart = new Chart(yearctx, {
    type: 'bar',
    data: {
      labels: yearlabels,
      datasets: [{
        label: 'Año vivienda',
        data: yeardata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });

  const FondoCount = {};

  
  formsArray.forEach(form => {
    if (form.Fondo in FondoCount) {
      FondoCount[form.Fondo]++;
    } else {
      FondoCount[form.Fondo] = 1;
    }
    Fondo.push(form.Fondo); 
   
  });

  



  const Fondolabels = Object.keys(FondoCount);
  const Fondodata = Object.values(FondoCount);

  const Fondocanvas = document.getElementById('Grafica_Fondo_vivienda');

  
  const Fondoctx = Fondocanvas.getContext('2d');
  const Fondochart = new Chart(Fondoctx, {
    type: 'bar',
    data: {
      labels: Fondolabels,
      datasets: [{
        label: 'Fondo vivienda',
        data: Fondodata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
  const FrenteCount = {};

  
  formsArray.forEach(form => {
    if (form.Frente in FrenteCount) {
      FrenteCount[form.Frente]++;
    } else {
      FrenteCount[form.Frente] = 1;
    }
      Frente.push(form.Frente); 
   
  });

  



  const Frentelabels = Object.keys(FrenteCount);
  const Frentedata = Object.values(FrenteCount);

  const Frentecanvas = document.getElementById('Grafica_Frente_vivienda');

  
  const Frentectx = Frentecanvas.getContext('2d');
  const Frentechart = new Chart(Frentectx, {
    type: 'bar',
    data: {
      labels: Frentelabels,
      datasets: [{
        label: 'Dimension del frente de la vivienda',
        data: Frentedata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });


  const AreaCount = {};

  
  formsArray.forEach(form => {
    if (form['area-vivenda'] in AreaCount) {
      AreaCount[form['area-vivenda']]++;
    } else {
      AreaCount[form['area-vivenda']] = 1;
    }
    Area.push(form['area-vivenda']); 
   
  });

  



  const Arealabels = Object.keys(AreaCount);
  const Areadata = Object.values(AreaCount);

  const Areacanvas = document.getElementById('Grafica_Area_vivienda');

  
  const Areactx = Areacanvas.getContext('2d');
  const Areachart = new Chart(Areactx, {
    type: 'bar',
    data: {
      labels: Arealabels,
      datasets: [{
        label: 'Area de la vivienda',
        data: Areadata,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
  const ubicacionesCount = {};

  
  formsArray.forEach(form => {
    if (form.ubicacionvivenda in ubicacionesCount) {
      ubicacionesCount[form.ubicacionvivenda]++;
    } else {
      ubicacionesCount[form.ubicacionvivenda] = 1;
    }
      ubicaciones.push(form.ubicacionvivenda); 
   
  });

  



  const labels = Object.keys(ubicacionesCount);
  const data = Object.values(ubicacionesCount);

  const canvas = document.getElementById('Grafica_Ubicacion_vivienda');

  
  const ctx = canvas.getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Ubicacion de Vivienda',
        data: data,
        
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        


      }]
    },
    



    options: {

      responsive: true,
      maintainAspectRatio: false,
      
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },

      
    }
  });
});