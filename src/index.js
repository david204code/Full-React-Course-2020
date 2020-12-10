import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function BookList(){
  return (
    <section className ="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// Explicit return with the retun keyword
const Book = () => {
  return (
    <article className ='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
}

// Implicit retrun without the return keyword
const Image = () => (
  <img src ="https://m.media-amazon.com/images/I/61jcNGAvh7L._AC_UY218_.jpg" alt = ""/>
);

const Title = () => {
  return (
    <h1>Little Prince, Little Prince: What Will You Be?</h1>
  )
}

const Author = () => (
  <h4>Naomi Zacharias</h4>
);

ReactDom.render(<BookList/>, document.getElementById('root'));