function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validación básica
    if (name === '' || email === '' || password === '') {
      document.getElementById('error-message').textContent = 'Por favor, complete todos los campos.';
    } else {
      document.getElementById('error-message').textContent = 'Registro completo';

      // Aquí puedes enviar los datos a un servidor o realizar otras acciones necesarias
      console.log('Nombre:', name);
      console.log('Correo Electrónico:', email);
      console.log('Contraseña:', password);

      // Resetear el formulario después de enviar
      document.getElementById('myForm').reset();
    }
  }