import React from 'react';
import ReactDOM from 'react-dom/client';   
import Header from './components/Header';
import Body from './components/Body';
 

// react.createlement is actually a js object its not h1 tag yet
// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'reactinjs' }, //props
//   'React in js!'
// );

//this will print object
//console.log(heading);

const AppLayout = () => {
  return(
    <>
    <Header />
    <Body />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
// render takes the object and convert to tag
root.render(<AppLayout />);

