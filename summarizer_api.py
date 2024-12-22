from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

summarizer = pipeline("summarization")

@app.route('/summarize', methods=['POST'])
def summarize_article():
    data = request.get_json()
    article_url = data.get('url', '')

    # You can fetch the article's text here (using requests or scraping tools like BeautifulSoup)
    # For now, let's assume that we are passing article text directly
    article_text = data.get('text', '')
    
    # Generate the summary
    summary = summarizer(article_text, max_length=150, min_length=50, do_sample=False)

    return jsonify({"summary": summary[0]['summary_text']})


if __name__ == '__main__':
    app.run(debug=True)
