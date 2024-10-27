import requests
import json
with open("../contraseñas.json", "r") as contraseñas_jsonFile:
    contraseñas_jsonData = json.load(contraseñas_jsonFile)

def handler(request):
    # Procesa la solicitud y extrae datos
    data = request.json
    to = data.get("to")
    subject = data.get("subject")
    message = data.get("message")

    # Configura y envía la solicitud a Elastic Email
    API_KEY = contraseñas_jsonData["elastic email"]
    response = requests.post(
        "https://api.elasticemail.com/v2/email/send",
        data={
            "apikey": API_KEY,
            "from": "geronimo.medel.lewin@gmail.com",
            "to": to,
            "subject": subject,
            "bodyHtml": f"<p>{message}</p>",
            "bodyText": message
        }
    )

    # Respuesta de la API
    if response.status_code == 200:
        return {
            "statusCode": 200,
            "body": json.dumps({"message": "Correo enviado exitosamente"})
        }
    else:
        return {
            "statusCode": 500,
            "body": json.dumps({"message": "Error al enviar el correo"})
        }
