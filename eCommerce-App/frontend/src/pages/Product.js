import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../data/products.js";

const Product = ({ match }) => {
  const product = products.find((prod) => prod._id === match.params.id);
  return (
    <>
      <Link className='btn btn-light m-2' to='/'>
        Go Back
      </Link>
      <div className='container-fluid'>
        <div className='card mb-3' style={{ maxWidth: "720px" }}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img
                className='img-fluid'
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h4 className='card-title'>{product.name}</h4>
                <p className='lead' style={product.countInStock > 0 ? {color: "#4CFF01"} : {color: "#D7415E"}}>
                  {product.countInStock > 0
                    ? "Available in stock."
                    : "Currently out of stock."}
                </p>
                <Rating rating={product.rating} reviews={product.numReviews} />
                <h6 className='card-text' style={{ color: "#2469A0" }}>
                  Company : {product.brand}
                </h6>
                <h5>
                  Description : <br />
                </h5>
                <p className='card-text'>{product.description}</p>
                <h6 className='card-subtitle mb-2 text-muted'>
                  <del>M.R.P.: &#x20B9; {product.price}</del>
                </h6>
                <h6 className='card-subtitle mb-2'>
                  Price : &#x20B9; {product.discountPrice}
                </h6>
                <p className='card-text'>
                  <small style={{ color: "#10BCE3" }}>
                    Inclusive of all taxes.
                  </small>
                </p>
                <div>
                <button type="button" className="btn btn-info" disabled={product.countInStock === 0}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
