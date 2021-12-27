from flask import Flask

app = Flask(__name__)

@app.route("/chart-data")
def members():
    return {"currency" : [{ "name": "BTC", "value": 550 },{ "name": "ETH", "value": 340 },{ "name": "USDT", "value": 100 },{ "name": "DOGE", "value": 50 }]}

if __name__ == "__main__":
    app.run(debug=True)