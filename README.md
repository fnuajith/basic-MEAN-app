# basic-MEAN-app

A very basic MEAN application - An application where users can
- Create posts  
- Retrieve and list posts  
- Delete their own posts  

![basic-mean-arch](/docs/images/basic-mean-arch.JPG)

### Highlights on the Angular application... ###  

- Application is broken down into separate components, logically divided by their functionalities.
- Usage of Angular CLI to generate the project, components and services  
- Usage of ```FormsModule``` to achieve two way data binding  
- Usage of ```HttpClientModule``` to make http calls to the REST APIs  
- Usage of a few [Angular material design components](https://material.angular.io/)  
- Usage of ```rxjs``` observables to communicate changes to different components in the application using ```Subject``` and ```Subscription```
- Usage of ```rxjs``` observables pipes to transform API response


### Highlights on the Node.js/Express application... ###  

- Exposes REST APIs to retrieve, add, edit and delete posts
- Usage of ```nodemon``` to detect and publish changes during development
- Usage of ```body-parser``` to provide access to data passed within the request body
- Usage of middleware to allow cross origin requests ```CORS```
- Usage of ```mongoose``` to connect to the mongo database
- Usage of mongoose ```Schema``` to work with the collection and documents

### Highlights on MongoDB... ### 

- Usage of free sandbox offering from mongodb - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). We could alternatively download and set up a mongo community database on our local machine and use that as well.
