from flask.cli import FlaskGroup
from blog import app


cli = FlaskGroup(app)


if __name__ == '__main__':
    cli()