# Biggest Roman

## What it this and why it exists?
- This is an API project developed in NodeJS using REST API architecture that will receive an sentence with letters and returns what is the biggest roman number included in it.
- This project was developed as a technical challenge for a back-end role which I've applied to.
- The goal of this project is to develop a backend part of the application that will handle a text input and return the biggest roman number included in that text.

## Technologies and libs used in this project.
- NodeJS
- [ESLint](https://eslint.org/) for enforcing code style.
- [TypeScript](https://www.typescriptlang.org/) for implementing typed code into JavaScript.
- [REST API / RESTful API](https://www.redhat.com/en/topics/api/what-is-a-rest-api) for using a client-server architecture throughout the HTTP web application.
- [ExpressJS](https://expressjs.com/) for provide a minimalistic web framework for a Node.js application.
- [Jest](https://jestjs.io/) for testing application enforcing TDD philosophy throughout the development.
- [Actions GitHub - CI](https://github.com/features/actions) for automatize app workflow managing development states from creation to deploy.
- [Docker - Dockerfile](https://docs.docker.com/engine/reference/builder/) for setting up a container image of the API.

# Docs
# Using API remotely
## Getting Started
- This API was developed using REST API, has only one route ```/search``` and uses a POST method to retrieves a JSON response.
- The base URL of the API is available at Heroku in the following address: ```https://biggest-roman-back.herokuapp.com/```, for different usage checkout the local approach of it in the topics bellow.

## Fetching Resources
- To fetch resources you need to use the following endpoint: ```@POST /search```;
- You may use ```POST``` requisitions to retrieve resources;
- The request body must include the a JSON as the following:
```JSON
{
  "text": "XI x DC hasd"
}
```
and will provide a response like this:
```JSON
{
  "number": "DC",
  "value": 600
}
```

# Using API locally
## Getting Started
### Step 01
- To run locally you gotta clone the repository into you machine using the following command in your terminal:
```
git clone git@github.com:btex88/biggest-roman-back.git
```

### Step 02
- You must install all dependencies and packages used in this project with the following command:
```
npm install
```

### Step 03
- You must run ```npm start``` to run it locally.
- **OBS:** By default the API runs on port ```8080``` if you wanna connect to an specific port you mus setup a ```.env``` file at the root of the project and add the following:
```
PORT=<YOUR_PORT_OF_CHOICE>
```
ex.
```
PORT=5000
```

## Running in a Docker container
- If you prefer to run the API in a container you may run the Dockerfile script to do it so.

### Step 01
- First of all you must have docker installed in your machine so the Dockerfile will be able to run it's configuration and create the container.
- In case you don't have docker installed you may checkout the documentation to follow the official tutorial for installing it. [Docker Guide](https://docs.docker.com/get-docker/).

### Step 02
- After step 01 is done you may open your terminal, got to the root of the local repository and run the following command:
```docker build -t biggest_roman:dev .```
- That command will be responsible for telling the docker to search for a Dockerfile in the current path and run that config which will setup and build the container image.
- Here is important to notice that the image is being flagged a ```:dev```.

### Step 03
- After **Step 02** is successfully finished you may run your container with the following command:
```docker run -p 8080:8080 -d biggest_roman:dev```
- This will start the container and mirror it's port 8080 into the port 8080 of you local machine, so you might use your the ```localhost:8080``` url to connect into the API.

## Heroku Deployment API
- Backend API base URL  - ```https://biggest-roman-back.herokuapp.com/```.
- [Biggest Roman Frontend](https://biggest-roman.vercel.app/) - The frontend part of the app fully deployed.
