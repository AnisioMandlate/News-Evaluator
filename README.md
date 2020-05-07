# Udacity: Evaluate a News Article with Natural Language Processing

## Overview

This app allows users to run Natural Language Processing (NLP) on articles or blogs found on the Internet. Using an api called Aylien. This tool can give us back pertinent information about the article, whether the content is subjective (opinion-based) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express will be used for the webserver and routing, and webpack is the build tool of choice. The app has dev and prod environments, each with their own set of tools and commands.

## Getting started

You can fork, clone, or download this repo and begin your project setup.

Once you clone, you may need to install some packages:

### Step 1: Signup for an API key

You will need to sign up [here](https://developer.aylien.com/signup) to get Aylien credentials. Signing up will get you an API key. You will enter this API key information into the `sever/index.js` file.

### To Run The Project

**(Currently, prod mode allows you to see the results of the API fetch)**:

- cd into your new folder and run in prod mode
- `npm install`
- `npm run build-prod to generate a dist folder for prod`
- `npm run start to run the Express server on port 8080`

**Note:** The web page can be accessed through `localhost:8080`
