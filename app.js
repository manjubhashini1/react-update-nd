// react.createlement is actually a js object its not h1 tag yet
const heading = React.createElement(
  'h1',
  { id: 'heading', className: 'reactinjs' }, //props
  'React in js!'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
// render takes the object and convert to tag
root.render(heading);

//this will print object
console.log(heading);