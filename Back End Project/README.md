## Backend Project - Instrument App

An Instrument API containing catalog of instruments

### Situation<br>
The goal of this application is to connect workers at an instrument shop with to their catalog of instruments available to their customers. This API provides protected routes that can only be accessed through authentication/authorization to make sure only authorized users can access sensitive data. This application was intended to focus mainly on back end technologies and REST prinicples. 

### Task
The team wanted to design a straighforward API that was easy to work with, part of my tasks was to create the [model](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/models/Instrument.js), [seed data](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/seedData.js), [seed file](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/seed.js), [db](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/db.js), and some contributions to the routes. All of these files are housed in the [server folder](https://github.com/Keffdu/final-portfolio/tree/main/Back%20End%20Project/server).

Our main focus was on the [routes](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/routes/instrument/instrument.js) and which should be protected, or what type of information the end user might find valuable. There was a lot of collaboration and brainstorming when going through the process of building our [routes](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/routes/instrument/instrument.js) as well as the [seed data](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/seedData.js) and how the object should be built.

### Action
There were several areas in the repo that contributed, I will go through my contributions to the routes, as well as the models files.
- #### [Routes](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/routes/instrument/instrument.js)
For our routes we decided we would want full CRUD operations on all instruments, requiring authorization for reading data.
here is an example for the standard ```/``` ```GET``` route that will return all instruments.

![SS1](./assets/SS1.png)

you can see ```requiresAuth()``` is running which we are importing from ```express-openid-connect```

after the user is authorized, we get all the instruments, decrypt the price and send the object as a response.

another route id like to touch on is the ```CREATE``` route

![SS2](./assets/SS2.png)

we built it so that there are validations done before the new instrument is created as well as encryption of the price, and handles the errors if there are any. IF there are no errors, a new instrument will be created and returned in the response

- #### [Model](https://github.com/Keffdu/final-portfolio/blob/main/Back%20End%20Project/server/models/Instrument.js)
The idea for designing the model was to have a simple object that would store valuable data about an instrument for the end user.

![SS3](./assets/SS3.png)

with the use of ```DataTypes``` I was able to create a scheme and define what the expected data types would be for all the attributes.

### Technologies
- Node.js
- Express
- SQL
- Sqlite3
- JWT
- ENVIRONMENTAL VARIABLES with dotenv
- POSTMAN
- SEQUELIZE
- HTML
- CSS
- BCRYPT
- JEST

## Competencies
### 3.2 - Can explain the principles and uses of relational and non-relational databases
- for this project we built a relational database, instead of a non-relational because we needed a simple schema and were looking for structured data.
- with this in mind we chose to build a relational database with Sqlite3
- I created the db file, and set up an instance to initialize the db
![SS4](./assets/SS4.png)
- from there I imported ```db``` into the instrument model and defined what the schema will look like and export that as an ```Instrument``` that can be acted on
![SS3](./assets/SS3.png)
- This allowed us to easily manipulate and serve up the data for this back end project
### 3.4 - Can create a logical and maintainable codebase
- A codebase can quickly become out of hand if maintenance is not done regularly. In this project, through the development phase there were multiple people working in the repo and committing/merging code, so comments were left, and things were not always refactored as much as they could have been.
- I went through before submitting the project and removed any left over ```console.log()```'s and commented out code
- I also made sure to following the separation of concerns and keeping files to only one task
- This allowed for a more readable code base as well as an easier time for troubleshooting.

### JF 3.5 - Can apply algorithms, logic and data structures
- Creating the seed data i had to build a data structure to store the data, as well as utilizing algorithms such as ```.find()```, and logical operators for conditional statements
- for the seed data I created an Array, that would store n instruments.
![SS5](./assets/SS5.png)
- each object inside the array would be one instrument, with all the necessary data needed
- in order to use this data or search through it, we had to use the ```.find()``` algorithm to iterate over each object within the array searching for the matching ```id```
![SS6](./assets/SS6.png)
### JF 1.5 - Can work effectively and contribute appropriately on a team to produce software
- Throughout this project and many others I have worked on a team with other developers, this requires great communication and collaboration, through things like version control and also all coming together to agree on one idea
- There were many daily or weekly meetings set up with the team to check in and make sure progress was being made and that there were no blockers.
- We also set up a GitHub projects board where we managed tasks to make sure no duplicate work was being done
### JF 1.7 - Can follow company, team or client approaches to continuous integration, version and source control
- I have fully adopted the use of Git, GitHub, and GitHub Actions for version control and part of CI. 
- I know the best practices for cloning and working in a repo.  I have demonstrated how to create feature branches and open a pull request. 
- Within this project specifically and all other projects, GitHub has been used, and all work that i have done was done on a feature branch that went through the whole PR process. 
- I have also participated in code reviews for other PR's, created action/workflows in multiple projects both for American Express and through Multiverse

