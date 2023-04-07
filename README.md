# WebJourn: A visually appealing blogging platform built with Django, React, and Tailwind, featuring RESTful API conventions for efficient communication between backend and frontend.

## Intro

This is WebJourn. WebJourn is a web application that combines Django, React, and Tailwind to create a blogging platform. The project utilizes Django models to store markdown formatted blog posts, and using RESTful API conventions, it converts these Django markdown posts into JSON content, for the frontend application to render. The frontend proceeds to convert the markdown content into an actual HTML format, with custom Tailwind styling, embedded Images and also embedded YouTube links. The Django backend server acts as a content management system, for easy management of blog posts. This project showcases my knowledge of multiple technologies (Django, React, Tailwind, and much more) to create not only a fully functional, but also a visually appealing web application.

#### The web app has two main parts:

The two parts are the backend and the frontend. The backend is built with Django and consists of files such as views.py, urls.py, and manage.py. The frontend is built with Vite React and Tailwind and consists of files like App.js, index.js, and package.json.

## Distinctiveness and Complexity

The distinctiveness and complexity of WebJourn lies in its use of multiple technologies to create a fully functional web application. Combining Django, React, and Tailwind, the project showcases how different frameworks can be integrated to create a seamless user experience.

#### WebJourn has several key features that make it distinct:

- RESTful API Integration: The frontend fetches data from the backend using RESTful API conventions, allowing for efficient and standardized communication between the two components of the application. Additionally, the use of a RESTful API created with Django on the backend allows for dynamic content updates without the need for a page refresh. This further enhances the user experience by providing a faster and more responsive application.

- Django as a Content Management System: While the frontend is built with React, the application can also use Django as a CMS. This means that the frontend only needs to handle frontend-related tasks, while the backend takes care of managing content and data.

- Autoformatting using Markdown: The React frontend application is designed to automatically format Markdown text into blog posts. This means that users can simply write their posts in Markdown and the application will handle the formatting, making it easy to create and publish content.

- Automatic Embedding of Images and Videos: The application automatically links Imgur images and YouTube videos into embedded players, making it easy for users to add media to their blog posts.

- The autoformatting of Markdown and automatic linking of images and videos make it easy for users to create content, while the integration with Django as a CMS adds flexibility and scalability to the application.

## Technologies used

- Django: Used as the back-end framework for the application, including the creation of models for storing blog posts.
- React: Used as the front-end library for rendering blog posts dynamically and providing a responsive user interface.
- Tailwind: Used to style the application and make it mobile-responsive.

#### There are several reasons why I chose these technologies for WebJourn.

- First, I am currently taking the Fullstack Open 2022 course, which covers frontend web app development using React and RESTful APIs integration on the backend servers.

- Second, CS50w requires me to use Django for my final project, which is understandable because it is the main tech stack on CS50w.

- In conclusion, By combining these technologies, I am able to use the knowledge and tools I gained from both courses to build a unique and valuable web application. This approach also allows me to leverage the power of abstraction and separation of concerns.

- Additionally, this approach enables me to use third-party libraries and tools specific to each technology, further enhancing the application's functionality and performance.

## Prerequisites

- Python
- Node.js

## Running the Application

There are two ways to run the WebJourn application:

#### Option 1: Run the Backend and Frontend Separately

1. Clone the repository.
2. In the frontend directory, run `npm install` to install the required frontend dependencies.
3. In the frontend directory, run `npm run dev` to start the frontend development server.

4. In the backend directory, create and activate a virtual environment.

```bash
python -m venv env
source env/bin/activate  # On Linux/MacOS
env\Scripts\activate.bat  # On Windows
```

4. In the backend directory, run `pip install -r requirements.txt` to install the required Python packages.
5. In a separate terminal window, run `python manage.py runserver` to start the Django development server.
6. Open your web browser and navigate to http://localhost:5173 to view the application from the frontend's perspective.

#### Option 2: Running Backend with Built Frontend Files

1. After doing all of the steps in Option 1, navigate to the frontend directory and run `npm run build` to build the frontend files.
2. Once the build is complete, in the backend directory, run `python manage.py runserver` to start the Django development server.
3. The frontend build files are automatically linked to the Django server, so there is no need to manually link them up.
4. Open your web browser and navigate to http://localhost:8000 to view the application from the backend's perspective.
