## BackStage - Deployment Project

If you would like to run this app locally you can clone this repo and cd into ```cd Deployment\ Project``` which will take you to the root. from there run ```yarn install``` to install followed by ```yarn run dev``` which will start up your local browser as well as the back end.

you can also build through docker below

This project was an MVP created to explore [Backstage](https://backstage.io/docs/overview/what-is-backstage) framework possibilities and apply the concepts of CI/CD

### Situation<br>
The goal of this application was to challenge ourselves to learn a new technology - in this case Backstage, and build an MVP of a software catalog, along with adding GitHubActions, and deploying through Docker

### Task
For this project, since it was deployment, we werent as concerned with the UI as much as we were with the configurations for linking Github accounts for authenticating users, or setting up the docker configuration, adding Github Actions, etc. Luckily Backstage by default comes with a prebuilt UI linked to a backend service.<br>
Part of my tasks were to: 
- configure the [Dockerfile](https://github.com/Keffdu/final-portfolio/blob/main/Deployment%20Project/packages/backend/Dockerfile)
![SS1](./assets/SS1.png)<br>
the dockerfile can be executed by first running the commands <br>
```yarn install```
```yarn tsc```
```yarn build:backend```
<br>
following those you can run ```yarn build-image``` which will get you running locally

### Action
There were several areas in the repo that contributed, and I ran into a lot of challenges during this project with trying to get everything configured locally to run properly, the hardest part was connecting github authentication and making sure it is passing the secrets correctly.

## Technologies
- Backstage
- TypeScript
- Node
- ESLint
- Playwrite

For a full demo of the project, watch the video linked below

https://youtu.be/bwmNdO9Q-OI?si=1V2WHGExbbPDN-I3

## Competencies
### JF 1.1 - Can explain all stages of the software development life cycle (what each stage contains, including the inputs and outputs)
for this project from brainstorming the idea, initializing the project, then developing, creating the CI/CD pipeline and with GitHub Actions and Docker - all of these make up the software development life cycle and allowed us to create a robust application that has automations integrated.


### JF 1.6 - Can follow software designs and functional/technical specifications
This project required a lot of new learning for me especially when it came to Docker and Backstage. Luckily they both have very helpful documentation with technical guides and tutorials. Through those pages, I was able to follow software designs and technical specifications to correctly configure and set up both the Docker file in the project as well as configurations within Backstage as well. from those readings I was able to get a better understanding of how these technologies worked


### JF 2.2 - Can identify relevant and up-to-date software designs and how to read and implement functional/technical specifications
This project required a lot of new learning for me especially when it came to Docker and Backstage. Luckily they both have very helpful documentation with technical guides and tutorials. Through those pages, I was able to follow software designs and technical specifications to correctly configure and set up both the Docker file in the project as well as configurations within Backstage as well. from those readings I was able to get a better understanding of how these technologies worked
