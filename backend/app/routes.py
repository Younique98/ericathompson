from flask import Blueprint, jsonify

main = Blueprint("main", __name__)


@main.route("/api/health-check")
def health_check():
    return jsonify({"status": "healthy", "message": "Flask backend is running!"})
