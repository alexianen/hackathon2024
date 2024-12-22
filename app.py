from flask import Flask, jsonify, request, render_template
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')  # Render the HTML template

@app.route('/proxy')
def proxy():
    query = request.args.get('query')
    url = f'https://serpapi.com/search?engine=google_scholar&api_key=d7648cc41455edfc02f1bb19c1ed8b57e1699300e62a2d608e11ed44d9349275&q={query}'  
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raises an error for HTTP request failures
        data = response.json()

        # Assuming 'data' contains a 'results' key with articles
        return jsonify(data), 200
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return jsonify({"error": "Failed to fetch data"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
