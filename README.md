# Biggest Roman

## What it this?
- This is an API project developed in NodeJS using REST API that receive an random bulk of letters and returns if theres is and what is the biggest roman number included in it.

## Why this exists?
- This project was developed as a technical challenge for a back-end role which I've applied to.
- The goal of this project is to develop a back-end part of the application that will handle segments of random letters and will return the biggest roman number included in that segment.

## Technologies and libs used in this project.
- NodeJS
- TypeScript
- REST API
- ExpressJS
- Jest
- Actions GitHub - CI
- Dockerfile

# Docs
## Using deployed API
### Getting Started
- This API was developed using REST API, has only one route ```/search``` and uses a POST method to retrieves a JSON response.
- The base URL of the API is available at Heroku in the following address: ```https://biggest-roman-back.herokuapp.com/```

### Fetching Resources
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

## Running locally
- Step 01 - To run locally you gotta clone the repository into you machine using the following command in your terminal:
```
git clone git@github.com:btex88/biggest-roman-back.git
```

- Step 02 - You must install all dependencies and packages used in this project with the following command:
```
npm install
```

- Step 03 - You must run ```npm start``` to run it locally.

- OBS: By default the API runs on port ```8080``` if you wanna connect to an specific port you mus setup a ```.env``` file at the root of the project and add the following: ```PORT=<YOUR_PORT_OF_CHOICE>``` ex. ```PORT=5000```

## Setting up dockerized container
- If you prefer to run the API in a container you may run the Dokerfile to do it so.

- Step 01: First of all you must have docker installed in your machine so the Dockerfile will be able to run it's configuration and create the container. In case you don't have docker installed you may checkout the documentation to follow the official tutorial for installing it. [Docker Guide](https://docs.docker.com/get-docker/).

- Step 02 - After step 01 is done you may open your terminal got to the root of the local repository and run the following command:
```docker build -t biggest_roman:dev .```

- Step 03 - After step 02 is successfully finished you may run your container with the following command:
```docker run -p 8080:8080 -d biggest_roman:dev``` - This will start the container at mirroring the container port 8080 into your logical port 8080, so you might use your ```localhost:8080``` to connect into the API.

## Heroku Deployment API
- Backend API base URL  - ```https://biggest-roman-back.herokuapp.com/```
- [Biggest Roman Frontend](https://biggest-roman.vercel.app/)
