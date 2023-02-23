// Obtiene el elemento donde se mostrará el estado de la conexión
const connectionStatus = document.getElementById('connection-status');
const color = document.getElementById('color')

// Realiza una petición al archivo JSON
fetch("http://lpagani2003.pythonanywhere.com/pasantes")
  .then(response => {
    // Si la respuesta es exitosa, actualiza el estado de la conexión
    connectionStatus.textContent = 'Servidor en linea';
    color.classList.add('online');
  })
  .catch(error => {
    // Si hay un error, actualiza el estado de la conexión
    connectionStatus.textContent = 'Servidor fuera de línea';
    color.classList.add('offline');
  });
