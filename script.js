document.getElementById('emailForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to, subject, message })
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert('Error al enviar el correo');
        console.error(error);
    }
});
