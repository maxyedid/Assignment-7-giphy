# Working with the GIPHY API
*2022 Brooklyn College TTP - Assignment #7*

Using the GIPHY SDK API and a unique key, our app retrieves and displays 50 trending GIFs on mount.  

There is a search bar for the user to search up any keyword and retrieve up to 50 related GIFs.  
There are also two radio buttons to sort the GIFs by newest or oldest imported date.*

Image size was set to a max width of 250px, the average height of the smaller-sized GIFs. Width was left untouched to not skew the resolution.

---
**View the app on GitHub Pages: https://maxyedid.github.io/Assignment-7-giphy/**

*Group members:*  
* [Bryant Bardales](https://github.com/bryant-bardales)
* [Lucy Lee](https://github.com/lucylee-412)
* [Max Yedid](https://github.com/maxyedid)

---
## Changelog

Our team coded this project using *both* class components and function components.

The master branch contains teammate Lucy's working version using function components.  
Please see [teammate Bryant's branch](https://github.com/maxyedid/Assignment-7-giphy/tree/bryant) to view the code using class components.

*January 17, 2022*
* Added a sort function to App.js that takes in the state passed up by GifCard component.  
I (Lucy) could not figure out a way to send the state of the parent component (App) down to the GifCard as a prop to be sorted there, because all the relevant tutorials used class components, and I had a hard time converting the syntax into hooks. I followed the same logic I used to create the SearchField component. The name GifCard does not really match the purpose of the component anymore, unfortunately.
* Please note that there was a minor issue where the first radio button click returns the default state of the sort type, which was set to null. In order to get the sort to register, the user must double-click the radio button.  
In order to fix it visually, I (Lucy) used preventDefault() on the event. I learned the hard way that no one likes using radio buttons with React. The correct solution would be to use the UseEffect() hook, but I had a hard time implementing this. I will learn my lesson and use a dropdown menu next time.

*January 16, 2022*
* Attempted to apply teammate Bryant's CSS to my (Lucy) version of the project, but it was a bit difficult. The stylesheet was not being recognized until I moved it into the parent /src folder. Not all styling was applied. Please see [teammate Bryant's branch](https://github.com/maxyedid/Assignment-7-giphy/tree/bryant) for a nicer looking app. (You'll have to download the files and run `npm install` and `npm start` to view the app locally in your browser.)

*January 15 ~ January 16, 2022*
* Created a search field that takes in user input, and sends the state back up to App.js where it is appended to the API call and reloads the GIFs displayed.
* Added a state for the text that displays above the GIFs in order to update it with any searches.

*January 14 ~ January 15, 2022*
* Imported the [Axios promise-based HTTP client](https://axios-http.com/) to use with our GET requests to the GIPHY API.
* Displayed trending GIFs on mount.
