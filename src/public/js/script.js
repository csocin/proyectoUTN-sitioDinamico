document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();

    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Ingresa tu nombre y apellido');
         return;
    }
    var numero = document.getElementById('numero').value;
    if(numero.length == 0) {
        alert('Ingresa tu numero de telefono');
        return;
      }
    var email = document.getElementById('email').value;
    if (email.length == 0){
        alert('Ingresa tu Email');
    };
        return;
    
    this.submit();
  }
  