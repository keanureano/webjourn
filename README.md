# create venv

python -m venv .env

# activate env

.env\Scripts\activate

# install requirements

pip install -r requirements.txt

# run server

py manage.py runserver

# dev: livereload

py manage.py livereload

# dev: auto build

npm run watch --prefix frontend
