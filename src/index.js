import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// set up the variables
const author = 'Naomi Zacharias'
const title = 'Little Prince, Little Prince: What Will You Be?'
const img = 'https://m.media-amazon.com/images/I/61jcNGAvh7L._AC_UY218_.jpg'


function BookList(){
  return (
    <section className ="booklist">
      <Book />
    </section>
  );
}
// Explicit return with the retun keyword
const Book = () => {
  return (
    <article className ='book'>
      <img src ={img} alt = ""/>
      <h1>{title}</h1>
      <h4 style ={{color :"#617d98", fontSize: '0.75rem', marginTop: '0.25rem'}}>{author.toLocaleUpperCase()}</h4>
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

ReactDom.render(<BookList/>, document.getElementById('root'));