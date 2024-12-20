## Frontend Project - Historic Art Archive

A front end application that utilizes a free API to fetch historic art via ```https://collectionapi.metmuseum.org```

### Situation<br>
The goal of this application is to work with an external API and build a UI that allows users to control the data they see as well as save art that they like. This app has features for accessibility in mind such as light/dark mode as well as a responsive view to any device. 

### Task
The team wanted to design a clean and intuitive UI that was easy to interact with.<br>
Part of my tasks was to create the design and logic for:
- [FavortieCard](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/components/FavoriteCard.jsx)
- [FavoriteList](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/components/FavoriteCard.jsx)
- [Header](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/components/Header.jsx)
- [Dark Mode](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/components/Header.jsx#L28-L34)
- Building the [App Root](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/App.jsx)
- Some contributions to the [ArtCard](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/components/ArtCard.jsx) for handling favorited items. 
- All of these files are housed in the [src](https://github.com/Keffdu/final-portfolio/tree/main/Front%20End%20Project/src).

Our main focus for this project was to integrate an external API and build a UI around it that is intuitive to use, provides accessibility features for users, navigation, displays dynamic routes, and has some sort of filtering when it comes to the data being displayed.

### Action
There were several areas in the repo that contributed, I will go be discussing the components I built, as well as the logic for the favorite feature and app root
#### [Components](https://github.com/Keffdu/final-portfolio/tree/main/Front%20End%20Project/src/components)
- ##### [App Root](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/App.jsx)
Here is where most of the high level configurations are set - like the design theme for the app
![SS1](./assets/SS1.png)<br>
Or where a lot of the high level state is managed to be passed around and inital ```useEffect()``` is called to pull in the data
![SS2](./assets/SS2.png)<br>
I also wrote the logic and to handle removing and adding favorites to your collection as well as the JSX to give the root level of the application
![SS3](./assets/SS3.png)<br>
Frontend View:
![SS4](./assets/SS4.png)<br>
- ##### [ArtCard](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/components/ArtCard.jsx)
For the ArtCard I contributed by adding CSS for styling, as well as additional logic to handle adding/removing a favorited item
![SS5](./assets/SS5.png)<br>
![SS6](./assets/SS6.png)<br>
now to see what happens when you click to favorite an item

- ##### [FavortieList](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/components/FavoriteList.jsx)
when you click to favorite a piece of art, it gets stored in state as an array of ```favorites```. those are then mapped over and each favorite then returns a ```FavoriteCard``` which you would see as a list in ```/favorties``` route.
![SS8](./assets/SS8.png)<br>
- ##### [FavortieCard](https://github.com/Keffdu/final-portfolio/blob/main/Front%20End%20Project/src/components/FavoriteCard.jsx)
when FavoriteCard is called on each item, it returns this piece of JSX to be rendered in the list, populated with some data from the item.
![SS7](./assets/SS7.png)<br>
##### Frontend View Favorite List:
![SS9](./assets/SS9.png)<br>
##### Single Favorite Card:
![SS10](./assets/SS10.png)<br>
- #### Logic for handling favorites
![SS11](./assets/SS11.png)<br>
- you can see that ```removeFavorite``` takes a parameter of ```deleteArt``` which is the expected item to remove from the favorites list, so we filter over the favorites array to search for an object id that matches the one we passed in to the function, we then set the updated array as the new state and render it.
- for ```handleFavorites``` I first had to check whether or not that item already existed in the favorites array or not - because we cant have an item favorited twice. if the item comes back as being valid, we update the existing state to include the new item.

### Technologies
- React.js
- React Context
- React Hooks (useState, UseEffect)
- MaterialUI
- React Router
- Vite
- Jest
- HTML
- CSS

If you would like to run this app locally you can clone this repo and cd into ```cd Front\ End\ Project``` which will take you to the root. from there run ```npm i``` to install followed by ```npm run build``` and finally  ```npm run dev```

it will open a browser for you, from there you will see the landing page and can navigate freely from there.
![SS17](./assets/SS17.png)<br>

## Competencies
### 2.3 - Can develop effective user interfaces
- for this project the main focus was on building a clean and functional UI that is both responsive and accessible.
- Through utilizing standardized libraries such as [Material UI](https://mui.com/material-ui/) I was able to build a more uniform components and intuitive layout for the user which in turn allows for a better UX
![SS4](./assets/SS4.png)<br>
- from there I added the ability to toggle from light or dark mode - to add to accessibility for the web page 
![SS13](./assets/SS13.png)<br>
![SS3](./assets/SS3.png)<br>
### 2.5 - Can implement a responsive User Interface
- Through using MUI as well as CSS Flex, I built our application to be responsive regardless of the browser size or device.
- This allows more users to interact with the application as well as leads to an overall better UX.
- the use of Flex and its properties ```flexWrap``` allows the items to overflow within the FavortiesList component
![SS14](./assets/SS14.png)<br>
### Example of Flex Wrap:
![SS15](./assets/SS15.png)<br>
here you can see the list of favorites is being wrapped to the bottom row since the whole list cant fit in one row, if we didnt use this half of our favorites would not be visible.

Then with only 4 favorites you can see how that second row behaves. since we have flew wrap and we also set ```justifyContent``` to space-evenly that is causing the 4th item to be centered horizontally on the page.
![SS16](./assets/SS16.png)<br>
