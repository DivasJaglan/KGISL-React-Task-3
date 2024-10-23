function Product({ name, price, inStock }) {
  return (
    <div className="p-3">
      <table className="table table-light table-striped table-responsive table-hover ">
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th scope="row">Price</th>
            <td>{price}$</td>
          </tr>
          <tr>
            <th scope="row">Stock</th>
            <td>{inStock ? "In Stock" : "Out of Stock"}</td>
          </tr>
        </tbody>
      </table>
      {price > 100 && (
        <span className="badge text-bg-secondary fs-6 ">Premium Product</span>
      )}
    </div>
  );
}

export default Product;
