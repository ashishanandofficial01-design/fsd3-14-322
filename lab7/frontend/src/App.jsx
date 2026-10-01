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
  return (
    <div>
      <img src={picUrl} alt={bname} />
      <h1>{bname}</h1>
      <h2>Price: {price}</h2>
      <h3>Quantity: {quantity}</h3>
      <h4 style={{ color: "red", textAlign: "center" }}>Rating: {rating}</h4>
    </div>
  );
}

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
