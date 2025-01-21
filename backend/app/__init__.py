from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)  # Allows CORS for all routes

    # Import and register routes
    from app.routes import main

    app.register_blueprint(main)

    return app
