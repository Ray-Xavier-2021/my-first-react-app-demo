// THIS FILE IS USED TO DISPLAY THE APP

// Create a functional component
// Returns HTML

function App () {
  const myAge = 39
  console.log(myAge);
  // JSX - writing HTML into Javascript
  // Inline styling is done with JSX {}

  return <h2 style={{color: 'red'}}>{myAge}</h2>

  // how to make functional component
  // variables
  // console logging
  // How to write JSX
  // 👉 {stuuf here is JAVASCRIPT}
  // inline styling 👉 {{key: 'value'}}
  // JSX 👉 {put stuff in here}
}

// Export for use
export default App;