import Product from "./Product";

function App() {
  return (
    <div className="container-fluid my-5 bg-body-tertiary">
      <Product name="Apple IPhone" price={200} inStock={true} />
    </div>
  );
}

export default App;
