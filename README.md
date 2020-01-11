**Evaluating Text Content with Natural Language Processing**

This app evaluates content submitted by the user using Aylien's Content Analysis API. The submitted link will be evaluated on a number of factors: polarity, subjectivity, polarity confidence, and subjectivity confidence. The results are fetched from the API and displayed on the webpage.


**Project Dependencies

This is node.js app built primarily with HTML, CSS, JavaScript, Webpack, and Sass. Service Workers are used to display content offline. Testing is done with Jest. A complete list of dependencies can be found in the package.json file. 

**Running the Project

1. After downloading the zip file, you will need to register for Aylien API credentials here: https://developer.aylien.com/signup, and enter them into the src/server/index.js file as shown below:

`var textapi = new aylien({
  application_id: CREDENTIALS GO HERE,
  application_key: CREDENTIALS GO HERE
})`

2. From here, cd into the project and `npm install` to install all package.json dependencies. 

3. `run build-prod`

4. `npm start` and go to http://localhost:3000/


(make sure to add dev server)

