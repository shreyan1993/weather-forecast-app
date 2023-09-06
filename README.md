# Weather Forecast App
This is a simple weather app that lets a user search a city by name and displays relevant weather conditions for the 
fetched location.

# How to start the app

- Please clone the repository from the github url provided.

- Run a `yarn install` to install all the dependencies.

- Run `yarn start` on where the project was cloned.




**Prerequisites**

- Have node v16.2 and yarn installed on your machine for everything to work.

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

# Assumptions

- The component structure is divided into Atom, Molecules and Oraganisms in increasing order of their complexity and reusabilty.
Atoms are like basic elements that can be consumed by any components inside Molecule or Organisms structure. Organisms are the largest of all elements and mostly all the final UI is put together in these folders.

- The data layer has been abstracted by the help of a context provider so that the components can only take care of interactions and states.

- The custom `useLocation` context provided consumes the `useWeatherData` and `useLocationData` hooks which is provided to all components.

- There is a lot of abstraction that can always happen and lot of components can be further split which are not done in the best interest of time. (Refactors can always happen)

- The idea of global css and global typings are present to demonstrate the idea of also pulling out global types and styles to make the codebase further cleaner. However there are still remaining bits and pieces that can still be pulled out to a more global level.

- Unit Test using RTL and Jest have been written for the majority of the code base to demo TDD principles.

- React 18 has been used as the latest version as the create-react-app commands comes with the latest package.

- Types of each component are present locally within each component folder , however some may also like having all the types defined under the `typings` folder. It is purely a matter of choice.

- setTimeouts have been added as debouncers to certain api calls to optimise performance and not call the api successively as the user keeps typing.

- There is `/404` route created which has link to the homepage which is added to demo the ability of routing within the app.

- assets for all the images and icons are placed inside the assets folder in root.

- Most of the Global css and variables are created under App.Theme.ts to demonstrate clear ability to also scope out css by keeping it clean.

- Dropdown onKey up and down focus state is missing but it still works. 

- Although the state of the app is fairly relatively small and thus no library like Mobx or Rxjs has not been used to manage state. A simple context provider and hooks do the job here in keep the component free from data calls and states associated to global level data needed by all components 


# Improvements

- In an ideal world, with coming iterations these are the few things the developer would have implemented.

- Clean up and pull out css , or create mixins to it can be reused more often.

- Add focus state to the dropdown to address accessibilty concern.

- Cleanup the typings a bit more.

- More code comments for further code explanation.


------------------------------------------------------------------------------------------------------------------------------------------------------------------
📸  In Action 📸 
------------------------------------------------------------------------------------------------------------------------------------------------------------------

![giffy](https://github.com/shreyan1993/weather-forecast-app/assets/86753021/f1043fbf-7390-4f61-8f49-19a1a5491a64)


------------------------------------------------------------------------------------------------------------------------------------------------------------------
📸  Desktop  📸
------------------------------------------------------------------------------------------------------------------------------------------------------------------
![localhost_3000_404 (1)](https://github.com/shreyan1993/weather-forecast-app/assets/86753021/8081a812-4934-4c9c-aadb-ab50d7cda64e)



------------------------------------------------------------------------------------------------------------------------------------------------------------------
📸  Mobile 📸 
------------------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/shreyan1993/weather-forecast-app/assets/86753021/145db53d-2c46-4363-9336-0e95fa3290a9)

------------------------------------------------------------------------------------------------------------------------------------------------------------------


