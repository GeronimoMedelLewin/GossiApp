document.getElementById('emailForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
    });

    // Verifica si la respuesta es válida
    if (!response.ok) {
        const errorText = await response.text(); // Obtiene el texto de error
        console.error('Error:', errorText);
        return;
    }

    // Intenta analizar como JSON
    try {
        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('JSON parse error:', error);
        console.error('Response text:', await response.text()); // Muestra el texto de la respuesta para depuración
    }
});
