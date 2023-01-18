// Obtenemos la lista
const macDock = document.querySelector('.mac-dock ul');

// Añadimos el evento
macDock.addEventListener('mouseover', (e) => {
  // Obtenemos el elemento sobre el que se ha producido el evento
  const elemento = e.target;

  // Comprobamos que el elemento es una imagen
  if (elemento.nodeName === 'IMG') {
    // Cambiamos los estilos
    elemento.parentElement.style.transform = 'scale(1.8)';
    if(elemento.parentElement.previousElementSibling){
        elemento.parentElement.previousElementSibling.style.transform = 'scale(1.4)';
        if(elemento.parentElement.previousElementSibling.previousElementSibling){
            elemento.parentElement.previousElementSibling.previousElementSibling.style.transform = 'scale(1.2)';
        }
    }
    if(elemento.parentElement.nextElementSibling){
        elemento.parentElement.nextElementSibling.style.transform = 'scale(1.4)';
        if(elemento.parentElement.nextElementSibling.nextElementSibling){
            elemento.parentElement.nextElementSibling.nextElementSibling.style.transform = 'scale(1.2)';
        }
    }
  }
});

// Añadimos el evento mouseout
macDock.addEventListener('mouseout', (e) => {
  // Obtenemos el elemento sobre el que se ha producido el evento
  const elemento = e.target;

  // Comprobamos que el elemento es una imagen
  if (elemento.nodeName === 'IMG') {
    // Obtenemos todos los elementos de la lista
    const elementos = document.querySelectorAll('.mac-dock ul li');

    // Recorremos todos los elementos
    elementos.forEach((el) => {
      // Restablecemos los estilos
      el.style.transform = 'scale(1)';
    });
  }
});