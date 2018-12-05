from app import db

class Todo(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  task = db.Column(db.String(120), nullable = False)

  @property
  def serialize(self):
    return({'ID': self.id, 'task': self.task})

  def __repr__(self):
    return '<Task %r>' % self.task
