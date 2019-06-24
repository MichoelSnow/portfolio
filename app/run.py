from flask import Flask, render_template, flash, redirect, json
from werkzeug.utils import secure_filename
import json

# https://uicookies.com/free-bootstrap-resume-templates/
# https://startbootstrap.com/
# https://uicookies.com/html-online-resume-templates/


app = Flask(__name__, static_url_path='/static')
app.config['SECRET_KEY'] = 'secret'

nycbb = json.load(open('./static/json/nycbb_topojson.json'))


# views
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template("index.html")


@app.route('/projects', methods=['GET', 'POST'])
def projects():
    return render_template("projects.html")


@app.route('/resume', methods=['GET', 'POST'])
def resume():
    return render_template("resume.html")


@app.route('/glen', methods=['GET', 'POST'])
def glen():
    return render_template("glen_orig.html")


@app.route('/d3', methods=['GET', 'POST'])
def d3():
    return render_template("d3_2.html", nycbb=nycbb)


@app.route('/d3_bias_vs_var', methods=['GET', 'POST'])
def d3_bias_vs_var():
    return render_template("d3_bias_vs_var.html")


@app.route('/jup', methods=['GET', 'POST'])
def jup():
    return render_template("bgg_user_data.html")


if __name__ == '__main__':
    # app.debug = True
    # app.run(debug=False, port=5000)
    # app.run(debug=True, port=8881, host='0.0.0.0')
    app.run(debug=True, port=5012, host='0.0.0.0')
