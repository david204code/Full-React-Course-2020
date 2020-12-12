import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// set up the variables
// const firstBook = {
//   img: 'https://m.media-amazon.com/images/I/61jcNGAvh7L._AC_UY218_.jpg',
//   title: 'Little Prince, Little Prince: What Will You Be?',
//   author: 'Naomi Zacharias',
// }

// const secondBook = {
//   img: 'https://m.media-amazon.com/images/I/61JunrhQrAL._AC_UY218_.jpg',
//   title: 'Grand Weaver The PB: How God Shapes Us Through the Events of Our Lives',
//   author: 'Ravi Zacharias',
// }

// set up array
const books = [
  
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/61jcNGAvh7L._AC_UY218_.jpg',
    title: 'Little Prince, Little Prince: What Will You Be?',
    author: 'Naomi Zacharias',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/61JunrhQrAL._AC_UY218_.jpg',
    title: 'Grand Weaver The PB: How God Shapes Us Through the Events of Our Lives',
    author: 'Ravi Zacharias',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/81Zu01RLffL._AC_UY218_.jpg',
    title: 'The Real Face of Athesim',
    author: 'Ravi Zacharias',
  },

];
// const names = ['john', 'peter', 'susan']
// // map method with parameter
// const newNames  = names.map((name) => {
//   // console.log(name);
//   return (
//     <h1>{name}</h1>
//   );
// });
// console.log(newNames);
function BookList(){
  return (
    <section className ="booklist">
      {/* {newNames} */}
      
      {books.map((book) => {
        // can also pass in index (book, index) so set the KEY as index
        // console.log(book);
        // destructuring
        // const { img, title, author} = book;
        return (
          // <div>
          //   <h3>{title}</h3>
          //   <h6>{author}</h6>
          // </div>
          // <Book key ={book.id} book ={book}></Book>
          // SPREAD OPERATOR ES6
          <Book key ={book.id} {...book}></Book>
        );
      })}

      {/* <Book 
        img ={firstBook.img} 
        title ={firstBook.title} 
        author ={firstBook.author}
      > */}
        {/* child props */}
        {/* <p>Deserunt id reprehenderit exercitation laboris minim exercitation sint magna laborum. Ex commodo et commodo ut proident tempor laboris. Excepteur exercitation sint ad voluptate. Minim incididunt voluptate laboris ullamco magna enim id occaecat commodo deserunt mollit eu excepteur. Aliquip sunt aute Lorem reprehenderit laborum labore magna do irure culpa proident aute deserunt. Est velit dolore sit do duis ex dolor voluptate veniam.</p> */}
      {/* </Book> */}
      {/* <Book 
        img ={secondBook.img} 
        title ={secondBook.title} 
        author ={secondBook.author}
      /> */}
    </section>
  );
}
// Explicit return with the retun keyword
const Book = (props) => {
  // console.log(props)
  // destructuring  
  // const Book = ({img, title, author, children }) => {
  // destructing the book property instead of the props
  // const { img, title, author } = props.book;
  // SPRED operator 
  const { img, title, author } = props;
  return (
    <article className ='book'>
      {/* destructuring result  */}
      {/* <h1>{title}</h1> */}
      <img src ={img} alt = ""/>
      <h1>{title}</h1>
      <h4 style ={{color :"#617d98", fontSize: '0.75rem', marginTop: '0.25rem'}}>{author.toLocaleUpperCase()}</h4>
      {/* {props.children} */}
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