import { useState } from 'react';
import './Shop.css';
import productImg from '../assets/images/solhydra2.png';

const sizes = [
  { label: '2L', price: 2050 },
  { label: '1L', price: 1050 },
  { label: '750ml', price: 750 },
  { label: '500ml', price: 500 },
];

const Shop = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('2L');

  return (
    <section className="shop-section">
      <div className="shop-container">
        <div className="shop-visual">
          <img
            src={productImg}
            alt="Hydra Sparkling Bottle"
            className="product-image"
          />
        </div>

        <div className="shop-details">
          <h1 className="product-title">
            Hydra Original Drink <br />
          </h1>
          <p className="subtitle">0 Sugar</p>

          <p className="product-description">
            Unlock Peak Performance. This scientifically balanced formula replaces
            the essential minerals - Sodium, Potassium, and Magnesium - that water
            alone can't provide.
          </p>

          <div className="size-section">
            <div className="size-header">
              <span>Select Size</span>
              <span>Required</span>
            </div>

            {sizes.map((size) => (
              <label key={size.label} className="size-option">
                <input
                  type="radio"
                  name="size"
                  value={size.label}
                  checked={selectedSize === size.label}
                  onChange={() => setSelectedSize(size.label)}
                />
                <span>{size.label}</span>
                <span>Ksh {size.price}</span>
              </label>
            ))}
          </div>

          <div className="bottom-controls">
            <div className="quantity">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button className="add-btn">Add To Cart</button>
          </div>

          <div className="product-features">
            <div className="feature">
              <strong>Source</strong>
              <span>Alpine Springs</span>
            </div>
            <div className="feature">
              <strong>Carbonation</strong>
              <span>Light & Crisp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
