function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || correo === "" || fechaNacimiento === "" || telefono === "" || direccion === "") {
        alert("Por favor, completa todos los campos");
        return false;
    }
    // Validar el formato del correo electrónico
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido");
        return false;
    }

    if (!isValidDate(fechaNacimiento)) {
        alert("Por favor, ingresa una fecha de nacimiento válida");
        return false;
      }

      // Validar que el teléfono sea un número válido
      var phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido (10 dígitos)");
        return false;
      }

    // Si todos los campos son válidos, puedes hacer algo con los datos (enviarlos a un servidor, etc.)
    alert("¡Formulario enviado correctamente!");
    return true;
}

function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Formato inválido
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // Fecha inválida (no números)
    return d.toISOString().slice(0, 10) === dateString;
}
