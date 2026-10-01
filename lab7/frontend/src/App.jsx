import Book from "./components/Book";
const b1 = {
  picUrl:
    "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY327_FMwebp_QL65_.jpg",
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
export default function App() {
  return (
    <>
      <h1>Online Bookstore</h1>
      <div className="container">
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
      </div>
    </>
  );
}
