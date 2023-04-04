# create venv

python -m venv .env

# activate env

.env\Scripts\activate

# install requirements

pip install -r requirements.txt

# run server

py manage.py runserver

# optional: livereload

py manage.py livereload
