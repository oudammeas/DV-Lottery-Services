import React, { Component } from "react";
import {render} from "react-dom";

// let skiData= {
//   total: 50,
//   powder: 20,
//   backcountry: 10,
//   goal: 100
// }

// const getPercent = decimal => {
//     return decimal*100 +"%"
//   }

// const  calcGoalProgress = (total, goal) => {
//     return getPercent(total/goal)
//   }

// const SkiDayCounter = ({total, powder, backcountry, goal}) => {
//   return (
//     <section>
//       <div>
//         <p>Total: {total}</p>
//       </div>
//       <div>
//         <p>Powder Days: {powder}</p>
//       </div>
//       <div>
//         <p>Backcountry Days: {backcountry}</p>
//       </div>
//       <div>
//         <p>Goal Progress: {calcGoalProgress(total,goal)}</p>
//       </div>
//     </section>    
//   )
// }

// class SkiDayCounter extends Component {

//   getPercent = decimal => {
//     return decimal*100 +"%"
//   }

//   calcGoalProgress = (total, goal) => {
//     return this.getPercent(total/goal)
//   }

//   render() {
//     const {total, powder, backcountry, goal} = this.props
//     return (
//       <section>
//         <div>
//           <p>Total: {total}</p>
//         </div>
//         <div>
//           <p>Powder Days: {powder}</p>
//         </div>
//         <div>
//           <p>Backcountry Days: {backcountry}</p>
//         </div>
//         <div>
//           <p>Goal Progress: {this.calcGoalProgress(total,goal)}</p>
//         </div>
//       </section>
//     );
//   }
// }

let bookList = [
  {"title": "The sun also rises", "author":"Ernest Hemingway", "pages": 260},
  {"title": "The sun also rises", "author":"Ernest Hemingway", "pages": 260},
  {"title": "The sun also rises", "author":"Ernest Hemingway", "pages": 260},
  {"title": "The sun also rises", "author":"Ernest Hemingway", "pages": 260}

]

const Book = ({title, author, pages, freeBookmark}) =>{
  return(
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
      <p>Free Bookamrk Today: {freeBookmark ? 'yes!': 'no!'}</p>
    </section>
  )
}

const Hiring = () => 
  <div>
    <p>The library is hiring. Go to www.library.com/jobs for more.</p>
  </div>

const NotHiring = () => 
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>

class Library extends Component {

  state = {
    open: true,
    freeBookmark: false,
    hiring: false
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open:!prevState.open
    }))
  }
  render(){
    console.log(this.state)
    const {books} = this.props
    return(
      <div>
        {this.state.hire ? <Hiring /> : <NotHiring />}
        <h1>The library is {this.state.open? 'open': 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => <Book 
                        key ={i}
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages} 
                        freeBookmark={this.state.freeBookmark}/>
        )}
      
      </div>
    )
  }
  
}

render(
  <Library books={bookList} />,
  document.getElementById("root")
);
