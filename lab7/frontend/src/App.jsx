import Book from "./components/Book";
import Fruit from "./components/Fruit";
import Pen from "./components/pen";
import { books } from "./data/books";
import { pens } from "./data/pens";
import Event from "./components/Event";

export default function App() {
  return (
    <>
      <h1>Online Bookstore</h1>
      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />
        <Fruit />
        <Event/>
      </div>
    </>
  );
}
