# create venv

python -m venv .env

# activate env

.env\Scripts\activate

# install requirements

pip install -r requirements.txt

# run server

py manage.py runserver

or

npm start

# autobuild and refresh tool for dev:
npm i
npm i --prefix frontend
npm run dev