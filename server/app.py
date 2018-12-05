from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json

app = Flask(__name__, static_folder = '../public/dist', template_folder = '../public')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://Jeongdizzle@localhost:5432/practice'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import Todo

@app.route('/')
def render_home():
  return render_template('index.html')

@app.route('/Todos', methods = ['GET', 'POST'])
def handleTodos():
  if request.method == 'GET':
    results = Todo.query.all()
    data = []
    for task in results:
      data.append(task.serialize)
    return jsonify(data)
  else:
    data = request.get_json()
    todo = Todo(task = data['task'])
    db.session.add(todo)
    db.session.commit()
    return 'successful', 201

if __name__ == '__main__':
  app.run(debug = True)