import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import CheckoutModal from './checkOut';
import './Shop.css';

const getCartItems = (cartData) => {
  if (Array.isArray(cartData)) return cartData;
  return cartData?.items ?? [];
};

const getItemPrice = (item) => Number(item.price ?? item.product_price ?? 0);

const getItemSubtotal = (item) => {
  if (item.subtotal !== undefined) return Number(item.subtotal);
  return getItemPrice(item) * Number(item.quantity ?? 1);
};

const Cart = () => {
  const [cartData, setCartData] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      setLoading(true);
      const data = await api.cart.get();
      setCartData(data);
      setError('');
    } catch (err) {
      if (err.message.toLowerCase().includes('not authenticated') || err.message.toLowerCase().includes('unauthorized')) {
        navigate('/login');
        return;
      }

      setError(err.message || 'Failed to load cart');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const items = getCartItems(cartData);
  const total = Number(cartData.total ?? items.reduce((sum, item) => sum + getItemSubtotal(item), 0));

  const handleRemove = async (itemId) => {
    try {
      await api.cart.remove(itemId);
      fetchCart();
    } catch (err) {
      setError(err.message || 'Failed to remove item');
    }
  };

  const handleClear = async () => {
    try {
      await api.cart.clear();
      setCartData({ items: [], total: 0 });
    } catch (err) {
      setError(err.message || 'Failed to clear cart');
    }
  };

  return (
    <section className="shop-section">
      <div className="shop-list-container" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="product-title">Your Cart</h1>

        {loading && <p>Loading cart...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          !loading && (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="cart-item"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px',
                      borderBottom: '1px solid #eee',
                    }}
                  >
                    <div>
                      <h3>{item.product_name ?? item.name ?? 'Hydra Drink'}</h3>
                      <p>{item.product_variant ?? item.variant ?? ''}</p>
                      <p>
                        Qty: {item.quantity} x Ksh {getItemPrice(item)}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <p style={{ fontWeight: 'bold' }}>Ksh {getItemSubtotal(item)}</p>
                      <button
                        onClick={() => handleRemove(item.id)}
                        style={{
                          background: '#d11a2a',
                          color: 'white',
                          border: 'none',
                          padding: '8px 12px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary" style={{ marginTop: '40px', textAlign: 'right' }}>
                <h2>Total: Ksh {total}</h2>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '20px' }}>
                  <button
                    onClick={handleClear}
                    style={{
                      background: '#666',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    Clear Cart
                  </button>
                  <button
                    className="add-btn"
                    style={{ width: 'auto', padding: '10px 30px' }}
                    onClick={() => setIsCheckoutOpen(true)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )
        )}
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={items}
        total={total}
        onComplete={handleClear}
      />
    </section>
  );
};

export default Cart;
