import { Link } from "react-router-dom";

function ProductMiniMenu() {
  return (
    <div>
      <Link to={`/detial/${"yx1-earphones"}`}>See Product</Link>
    </div>
  );
}

export default ProductMiniMenu;
