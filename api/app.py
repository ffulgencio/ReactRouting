from flask import Flask
from flask_cors import CORS;

app = Flask(__name__)
CORS(app)

@app.route("/api/products")
def get_products():
    products = { "data": [
        {"id": 1, "productName":"Mouse usb", "precio": 300},
        {"id": 2, "productName":"Monitor LED", "precio": 5900.99},
        {"id": 3, "productName":"Teclado Inalambrico", "precio": 987.75},
        {"id": 4, "productName":"Impresora HP", "precio": 1490.80},
    ] }
    return products

if __name__ == "__main__":
    app.run()