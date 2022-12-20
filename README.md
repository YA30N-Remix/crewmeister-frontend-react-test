# Crewmeister Front-End challange test
Hello,
My name is Yasin Asadnezhad and I'm greatful of your taking time to my challange feedback.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

##### `yarn` 
Run yarn to install the dependencies in package.json 
 
##### `yarn start` 
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.
 

##### `yarn server` 
Runs the REST Api server.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
For example you can test this link 
[http://localhost:8080/api/getAbsences](http://localhost:8080/api/getAbsences)

##### `yarn test` 
Launches the test runner in the interactive watch mode.\

##### `yarn build`
Builds the app for production to the `build` folder.\
 
## Documantation
Inside project we have serverside and clientside. 
Serverside programmed using Node Express which give some REST API
Clientside programmed using ReactJs and Redux Toolkit

##### Inside of server

- **[getAbsences](#http://localhost:8080/api/getAbsences)** service method to retrieve absences data (`POST /api/getAbsences`)

   set input :
```json
    { "startDate": "2020-01-01", "endDate": "2020-12-29", "type": "vacation|sickness" }
```

   will output :

```json
    [{
      "admitterId": null,
      "admitterNote": null,
      "confirmedAt": null,
      "createdAt": null,
      "crewId": null,
      "endDate": null,
      "id": null,
      "memberNote": null,
      "rejectedAt": null,
      "startDate": null,
      "type": null,
      "userId": null,
      "memberName": null
    }]
```
- **[getMembers](#http://localhost:8080/api/getMembers)** service method to retrieve members data (`POST /api/getMembers`)

   will output :

```json
    [{
      "crewId": null,
      "id": null,
      "image": null,
      "name": null,
      "userId": null
    }]
```

- **[getAbsence](#http://localhost:8080/api/getAbsence)** service method to retrieve a record of absence by id (`GET /api/getAbsence/id`)

   will output :

```json
    {
      "admitterId": null,
      "admitterNote": null,
      "confirmedAt": null,
      "createdAt": null,
      "crewId": null,
      "endDate": null,
      "id": null,
      "memberNote": null,
      "rejectedAt": null,
      "startDate": null,
      "type": null,
      "userId": null,
      "memberName": null
    }
``` 

- **[getMember](#http://localhost:8080/api/getMember)** service method to retrieve a record of member by id (`GET /api/getMember/id`)

   will output :

```json
    {
      "crewId": null,
      "id": null,
      "image": null,
      "name": null,
      "userId": null
    }
```


