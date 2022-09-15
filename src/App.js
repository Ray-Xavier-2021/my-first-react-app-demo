// THIS FILE IS USED TO DISPLAY THE APP
// import React
import React, { useState, useEffect } from "react";
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

  // Set state for full name
  const [fullname, setFullname] = useState('WAITING FOR DATA')

  // styled component
  const myStyle = {
    color: 'red'
  }

  // Create an async /await random picture generator that fetches from API dynamically
  const getRandomName = async () => {
    // Await fetch data
    let response = await fetch('https://randomuser.me/api')
    // Convert data to JSON format {object}
    const data = await response.json()
    // Update state of name
    setFullname(data.results[0].name.first + ' ' + data.results[0].name.last);
    // return first index picture
    return data.results[0].picture.large
  }

  // useEffect makes sure code only runs once
  // Runs once only when the page loads due to empty array dependencies
  useEffect(() => {
    // Call function
    getRandomName()
  }, [])




  return (
    <>
      {/* JSX fragments: dummy parent */}
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
        <ProfileCard 
        // Rnamdom image generators
        image={`https://robohash.org/${Math.random()}.png`}
        name={fullname} 
        title={profile.title} 
        description={profile.description}/>
      ))}
    </>
  );
}