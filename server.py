from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os, json
from datetime import datetime
import smtplib
from email.message import EmailMessage

load_dotenv()  # Load .env for mail credentials

app = Flask(__name__, static_folder='dist/assets', template_folder='dist')
CORS(app)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def api_contact():
    try:
        data = request.get_json()
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400

        contact_data = {
            'name': data['name'],
            'email': data['email'],
            'subject': data['subject'],
            'message': data['message'],
            'timestamp': datetime.now().isoformat()
        }

        # Save to contacts.json
        try:
            contacts_file = 'contacts.json'
            contacts = []
            if os.path.exists(contacts_file):
                with open(contacts_file, 'r') as f:
                    contacts = json.load(f)
            contacts.append(contact_data)
            with open(contacts_file, 'w') as f:
                json.dump(contacts, f, indent=2)
        except Exception as file_error:
            print("Failed to save contact:", file_error)
            return jsonify({'error': 'Failed to save contact information.'}), 500

        # Try sending email, but don’t return error if it fails
        try:
            msg = Message(
                subject=f"New Contact: {contact_data['subject']}",
                recipients=['naureensyedd@gmail.com'],
                body=(
                    f"Name: {contact_data['name']}\n"
                    f"Email: {contact_data['email']}\n\n"
                    f"Message:\n{contact_data['message']}\n\n"
                    f"Sent on: {contact_data['timestamp']}"
                )
            )
            mail.send(msg)
        except Exception as email_error:
            print("Email failed to send, but contact saved:", email_error)
            # Email failed, but continue as success

        return jsonify({'message': "Thank you for your message! I'll get back to you soon."}), 200

    except Exception as e:
        print("Unexpected error:", e)
        return jsonify({'error': 'An unexpected error occurred.'}), 500


# === Serve React App ===
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.template_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True, port=5000)
