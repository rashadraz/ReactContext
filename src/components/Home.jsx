import { faker } from "@faker-js/faker";


import SingleProduct from "./SingleProduct";

faker.seed(20);

function Home() {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  console.log(productsArray);

  return (
    <div className="productContainer">
      {productsArray.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
}

export default Home;