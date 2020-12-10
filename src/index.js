import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// set up the variables

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/61jcNGAvh7L._AC_UY218_.jpg',
  title: 'Little Prince, Little Prince: What Will You Be?',
  author: 'Naomi Zacharias',
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/61JunrhQrAL._AC_UY218_.jpg',
  title: 'Grand Weaver The PB: How God Shapes Us Through the Events of Our Lives',
  author: 'Ravi Zacharias',
}

function BookList(){
  return (
    <section className ="booklist">
      <Book img ={firstBook.img} title ={firstBook.title} author ={firstBook.author}/>
      <Book img ={secondBook.img} title ={secondBook.title} author ={secondBook.author}/>
    </section>
  );
}
// Explicit return with the retun keyword
const Book = (props) => {
  // destructuring  
  // const Book = ({img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className ='book'>
      {/* destructuring result  */}
      {/* <h1>{title}</h1> */}
      <img src ={props.img} alt = ""/>
      <h1>{props.title}</h1>
      <h4 style ={{color :"#617d98", fontSize: '0.75rem', marginTop: '0.25rem'}}>{props.author.toLocaleUpperCase()}</h4>
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