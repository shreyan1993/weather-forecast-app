# Weather Forecast App
This is a simple weather app that lets a user search a city by name and displays relevant weather conditions for the 
fetched location.

# How to start the app

- Please clone the repository from the github url provided.

- Run a `yarn install` to install all the dependencies.

- Run `yarn start` on where the project was cloned.




**Prerequisites**

- Have node and yarn installed on your machine for everything to work.

- Version no requirement come up in the console , incase the end system doesnt meet the versioning requirements



# The Tools of Trade

It's 2021 and there are a whole wealth of tooling options for React, but these are the staples for every project I have worked on.  
  
✔️ Typescript - Because types are cool  
✔️ StyledComponents - Imagine if CSS got better? Now here we are.  
✔️ Prettier/Eslint/Stylelint - Some configs that make sense 
✔️ React Hooks - Hello functional components and simple state management  



# The UI 

A simple a11y favoured autocomplete that displays the list of cities and their current and forecasted weather below.



## What to know?  
The api used is from openweather apis for both geolocation and weather related data.

The list of cities is not at par with google and there may be a case where the desired city and weather info is not found.

Sometimes due to being on the free plan, there is a limit on how many times the api can be called and also impacts speed and performance at times.


**VS Code Extensions**  
To have the best experience with this framework and the tools in general, you need to have the right setup, so let me share some relevant ones (Alphabetical):

- Bracket Pair Colorizer 2: Unique colours for matching brackets
- Color Highlight: Highlights web colors inline
- ESLint: You know what this does
- Prettier: Same as above
- Stylelint: And again
- Vscode-icons: One of the best icon themes
- Vscode-styled-components: Helps syntax highlting with CSS in JS

## Things to Consider 

- Font sizes and line-heights have been assumed visually.

- The website is responsive upto 375px(mobiles) and above.

- The layout changes to naturally stack below 640px which is considered mobile territory to fit in content and leave the user with a good UI experience.

- The header and footer are just visual gimmicks to create a wholesome page experience and stay on the same page with semantic accessibilty.

- All the components are pretty dumb components, the states of which is controlled by a provider at the top level. The component only take care of their own UX interactions.

- Hooks has been used to align with the latest development done by React.

- React has been chosen to deliver the whole web app.

- Paddings/Margins have also been assumed visually to match the UI requirement and might be arbitary values instead of being multiples as recommended best practices.
  
- The autocomplete dropwdown caters for the basic keyboard controls and screen-reader accessibility requirement because why not.

------------------------------------------------------------------------------------------------------------------------------------------------------------------
📸  Desktop  📸
------------------------------------------------------------------------------------------------------------------------------------------------------------------
![localhost_3000_404 (1)](https://github.com/shreyan1993/weather-forecast-app/assets/86753021/8081a812-4934-4c9c-aadb-ab50d7cda64e)



------------------------------------------------------------------------------------------------------------------------------------------------------------------
📸  Mobile 📸 
------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/shreyan1993/weather-forecast-app/assets/86753021/145db53d-2c46-4363-9336-0e95fa3290a9)

------------------------------------------------------------------------------------------------------------------------------------------------------------------


