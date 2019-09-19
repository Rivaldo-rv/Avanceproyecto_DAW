// Obtener referencia al input y a la imagen

const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
  $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $seleccionArchivos.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $imagenPrevisualizacion.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  const primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  const objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  $imagenPrevisualizacion.src = objectURL;
});


//Creador de preguntas
conta=0;
function Crear(){
    //var etiqueta = document.getElementById("etiqueta").value;
    var newelement;
    //var color = document.getElementById("colores").value;
    
            newelement = document.createElement("p");
            texto= document.createTextNode("Es un parrafo creado desde JS");
            newelement.appendChild(texto);
            //newelement.setAttribute("id","pregunta_"+conta);
            newelement.style.color= color;
            conta++;
            
    }
    
