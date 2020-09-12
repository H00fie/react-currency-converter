import React from 'react';
import './App.css';
import Calculator from "./components/Calculator/Calculator";
import Button from "./components/Button/Button";

const day = "Saturday";



function App() {
  return (
    <div className="App">
      <p>Hello!</p>
      <p>{day}</p>
        <Calculator />
    </div>
  );
}

{/*<App>*/}
{/*    <Header>*/}
{/*        <Menu></Menu>*/}
{/*    </Header>*/}
{/*    <Main>
<div>
<div>
<div>
</Main>*/}
{/*    */}
{/*    <Footer></Footer>*/}
{/*</App>*/}

export default App;
