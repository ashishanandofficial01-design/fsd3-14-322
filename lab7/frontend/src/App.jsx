import Book from "./components/Book";
import Pen from "./components/pen";
const b1 = {
  picUrl:
    "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl:
    "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 2199,
  quantity: 5,
  rating: 5.0,
};

const p1={
  picUrl:
  "https://m.media-amazon.com/images/I/618WT3o106L._AC_UL480_FMwebp_QL65_.jpg",
  company:"Parker",
  price:344,
};
export default function App() {
  return (
    <>
      <h1>Online Bookstore</h1>
      <div className="container">
        <Book book={b2} />
        <Book book={b1} />
        <Pen  pen={p1}/>
      </div>
    </>
  );
}
