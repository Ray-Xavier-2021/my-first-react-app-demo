// THIS FILE IS USED TO DISPLAY THE APP
// import React
import React, { useState } from "react";
// Import stylesheet
import './App.css'
// Import Components
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
// Import fake database
import profiles from "./fakeData";

// Create a functional component
// Returns HTML
// how to make functional component
// variables
// console logging
// How to write JSX
// 👉 {stuuf here is JAVASCRIPT}
// inline styling 👉 {{key: 'value'}}
// JSX 👉 {put stuff in here}
// How to create own component MyButton.js
// props

/*
  How to build a new component:

  1. Create new file with name of comp
  2. Place file in components dir
  3. In component file rafce
  4. Build your component
  5. Import component in App.js

*/

/*
function App () {
  let myAge = 39
  // Increment a REGULAR variable
  myAge++
  console.log(myAge);
  // JSX - writing HTML into Javascript
  
  // Inline styling is done with JSX {}
  return <h2 style={{color: 'red'}}>{myAge}</h2>

}

// Export for use
export default App;
*/


// Make a Counter App
export default function App () {

  // set state 👉 [currentState, function]
  const [count, setCount] = useState(0)
  // Increment state variable 👉 setCount(count + 1)

  // styled component
  const myStyle = {
    color: 'red'
  }
  return (
    // JSX fragments: dummy parent
    <>
      {/* default state */}
      <h2 style={myStyle}>My count is {count}</h2> 
      {/* Function that changes state */}
      <button style={{width: '24px'}} onClick={() => setCount(count + 1)}>+</button>
      <button style={{width: '24px', marginLeft: '10px'}} 
      onClick={() => setCount(count - 1)}>-</button>
      {/* Imported Components */}
      <MyButton color='green' title='BUY 🚀' />
      <MyButton color='red' title='SELL 🚀' />
      {/* Access data then map data and display image*/}
      {profiles.map(profile => (
        <ProfileCard image={profile.image} name={profile.name} title={profile.title} description={profile.description}/>
      ))}
    </>
  );
}