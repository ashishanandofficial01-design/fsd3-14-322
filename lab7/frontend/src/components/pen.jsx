const Pen = ({ pen }) => {
  const { picUrl, company, price } = pen;

  return (
    <div>
      <img src={picUrl} alt={company} />
      <h3>{company}</h3>
      <h4>Rs. {price}</h4>
    </div>
  );
};

export default Pen;