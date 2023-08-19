/*9. Galería de imágenes:
- Crea una galería de imágenes en tu HTML con miniaturas de 
imágenes.
- Al hacer clic en una miniatura, muestra la imagen completa 
en un cuadro modal.
- Permite al usuario navegar entre las imágenes utilizando 
botones "Anterior" y "Siguiente" en el cuadro modal.*/


let imagen =[... document.querySelectorAll('img')]
const myModal = new bootstrap.Modal(document.getElementById('Modal'), )

const abrirImagen1=()=>{
imagen[0],
myModal.show
}