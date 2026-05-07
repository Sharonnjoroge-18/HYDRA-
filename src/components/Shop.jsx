import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import './Shop.css';
import productImg from '../assets/images/solhydra2.png';

const Shop = () => {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await api.products.getAll();
        setProducts(data);
        setSelectedProductId(data[0]?.id ?? null);
      } catch (err) {
        setError(err.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const selectedProduct = products.find((product) => product.id === selectedProductId);

  const handleAddToCart = async () => {
    if (!selectedProductId) return;

    try {
      await api.cart.add(selectedProductId, quantity);
      navigate('/cart');
    } catch (err) {
      if (err.message.toLowerCase().includes('not authenticated') || err.message.toLowerCase().includes('unauthorized')) {
        navigate('/login');
        return;
      }

      setError(err.message || 'Failed to add item to cart');
    }
  };

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
          <h1 className="product-title">Hydra Original Drink</h1>
          <p className="subtitle">{selectedProduct?.variant ?? 'Clean hydration'}</p>

          <p className="product-description">
            {selectedProduct?.description ||
              "Unlock peak performance with balanced electrolytes that water alone can't provide."}
          </p>

          {error && <p className="error-message">{error}</p>}
          {loading && <p>Loading products...</p>}

          {!loading && (
            <div className="size-section">
              <div className="size-header">
                <span>Select Product</span>
                <span>Required</span>
              </div>

              {products.map((product) => (
                <label key={product.id} className="size-option">
                  <input
                    type="radio"
                    name="product"
                    value={product.id}
                    checked={selectedProductId === product.id}
                    onChange={() => setSelectedProductId(product.id)}
                  />
                  <span>{product.name}</span>
                  <span>Ksh {product.price}</span>
                </label>
              ))}
            </div>
          )}

          <div className="bottom-controls">
            <div className="quantity">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button className="add-btn" onClick={handleAddToCart} disabled={loading || !selectedProductId}>
              Add To Cart
            </button>
          </div>

          <div className="product-features">
            <div className="feature">
              <strong>Stock</strong>
              <span>{selectedProduct?.stock ?? 0} available</span>
            </div>
            <div className="feature">
              <strong>Formula</strong>
              <span>{selectedProduct?.variant ?? 'Balanced'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
