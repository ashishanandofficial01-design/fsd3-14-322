export default function Pen(props) {
  const { pname, price, quantity, picUrl,company } = props.pen;
  const qtyStyle = {
    fontsize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px",
  };
    return (
      <div>
        <img src={picUrl} alt={pname} />
        <h1>{pname}</h1>
        <h2>Price: {price}</h2>
        <h3>Quantity: {quantity}</h3>
        <h3>Company: {company}</h3>
      </div>
    );