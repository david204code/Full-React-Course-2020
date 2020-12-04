import React from 'react';
import ReactDom from 'react-dom';


function Greeting(){
  return (
    <div>
      <Person />
      <Message />
      <Message1 />
    </div>
  );
}

const Person = () => <h2>David Wu</h2>;
const Message = () => {
  return <h4>Edit This is David, my first component</h4>
}
const Message1 = () => <h5>Hello David</h5>

ReactDom.render(<Greeting/>, document.getElementById('root'));