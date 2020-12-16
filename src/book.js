import React from 'react';

// Explicit return with the retun keyword
const Book = (props) => {
  // console.log(props)
  // destructuring  
  // const Book = ({img, title, author, children }) => {
  // destructing the book property instead of the props
  // const { img, title, author } = props.book;
  // SPRED operator 
  const { img, title, author } = props;

  // event for react we need attribute, eventHandler
  // onClick, onMouseOver event

  // function for the event
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }

  const complexExample = (props) => {
    console.log(props.author);
  }
  return (
    <article className ='book' onMouseOver ={() => {
      console.log(props.title)
    }}>
      {/* destructuring result  */}
      {/* <h1>{title}</h1> */}
      <img src ={img} alt = ""/>
      {/* inline event handler function example */}
      <h1 onClick ={ () => console.log(title)}>{title}</h1>
      <h4 style ={{color :"#617d98", fontSize: '0.75rem', marginTop: '0.25rem'}}>{author.toLocaleUpperCase()}</h4>
      {/* {props.children} */}
      {/* Eventhandler can be reference function or inline function */}
      <button type ="button" onClick ={clickHandler}>
        Click
      </button>
      {/* set up a arror function so it will not  invoke immediately */}
      <button type ="button" onClick ={() => complexExample(props)}>
        More Complex example
      </button>
    </article>
  )
}

// Implicit retrun without the return keyword
// const Image = () => (
//   <img src ="https://m.media-amazon.com/images/I/61jcNGAvh7L._AC_UY218_.jpg" alt = ""/>
// );

// const Title = () => {
//   return (
//     <h1>Little Prince, Little Prince: What Will You Be?</h1>
//   )
// }

// // inline styling
// const Author = () => (
//   <h4 style ={{color :"#617d98", fontSize: '0.75rem', marginTop: '0.25rem'}}>Naomi Zacharias</h4>
// );

export default Book;