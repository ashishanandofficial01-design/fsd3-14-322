const products = [
  { title: 'Apple', id: 1, isFruit: true },
  { title: 'Banana', id: 2, isFruit: true },
  { title: 'Cabbage', id: 3, isFruit: false },
  { title: 'Orange', id: 4, isFruit: true },
];

const ListItem = products.map((item) => (
  <li
    key={item.id}
    style={{ color: item.isFruit ? 'green' : 'black' }}
  >
    {item.title}
  </li>
));

const Fruit = () => {
  return <ul>{ListItem}</ul>;
};

export default Fruit;