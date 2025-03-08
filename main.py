from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/admission')
def admission():
    return render_template('admission.html')

@app.route('/curriculum')
def curriculum():
    return render_template('curriculum.html')

@app.route('/activities')
def activities():
    return render_template('activities.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    # Always serve on port 5000 for Replit
    app.run(host='0.0.0.0', port=5000, debug=True)
