import React, { useContext } from 'react'
import { Mycontext } from '../App'
import Navbar from '../page/Navbar';
import Footer from '../page/Footer';

const Cart = () => {

const [product, setProduct] = useContext(Mycontext)

const totalprice = product.reduce((acc, curr) => acc + curr.price * (curr.quantity || 1), 0);
const totalquantity = product.reduce((acc, curr) => acc + (curr.quantity || 1), 0);

const handleInc = (id, quantity) => {
  setProduct(curr => 
    curr.map(element => 
      element.id === id 
        ? { ...element, quantity: (element.quantity || quantity) + 1 } 
        : element
    )
  );
};

const handleDec = (id, quantity) => {
  setProduct(curr => 
    curr.map(element => 
      element.id === id 
        ? { ...element, quantity: Math.max((element.quantity || quantity) - 1, 1) } 
        : element
    )
  );
};

const handleRemove = (id) => {
  setProduct(curr => curr.filter(element => element.id !== id));
};

return (
  <>
    <Navbar />
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 mb-4">
          <h1>Total Quantity: {totalquantity}</h1>
          <h1>Total Price: ${totalprice.toFixed(2)}</h1>
        </div>
        {product.map((ele, ind) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={ind}>
            <div className="card h-100">
              <img src={ele.images} alt={ele.title} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">{ele.description}</p>
                <p className="card-text"> Price: ${ele.price}</p>
                <p className="card-text">Discount: {ele.discountPercentage}%</p>
                <p className="card-text">Brand: {ele.brand}</p>
                <p className="card-text">Category: {ele.category}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary" onClick={() => handleInc(ele.id, ele.quantity || 1)}>+</button>
                  <span className="mx-2">{ele.quantity || 1}</span>
                  <button className="btn btn-primary" onClick={() => handleDec(ele.id, ele.quantity || 1)}>-</button>
                  <button className="btn btn-danger" onClick={() => handleRemove(ele.id)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
)
}

export default Cart