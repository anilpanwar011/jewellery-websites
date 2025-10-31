
import React, { useState, useMemo } from 'react';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import Header from './comman/Header';
import JewelleryNav from './comman/JewelleryNav';
import Footer from './comman/Footer';

export default function Cart({ initialItems }) {
  const sampleItems = [
    {
      id: 1,
      title: 'Oak Coffee Table',
      variant: 'Walnut finish',
      price: 2499,
      qty: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIJjzvK9aP3igiWYP3dlccycdh1xWWpLDiQ&s',
    },
    {
      id: 2,
      title: 'Cushion (Set of 2)',
      variant: 'Grey',
      price: 799,
      qty: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmujYCc4IT2595iQSKaC5q2xyBwo0PIaLFg&s',
    },
     {
      id: 3,
      title: 'Cushion (Set of 3)',
      variant: 'Grey',
      price: 799,
      qty: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc-zpipyVBKKeNzLGGeR90K_DT9pmxzzN3Q&s',
    },
  ];

  const [items, setItems] = useState(initialItems ?? sampleItems);

  const changeQty = (id, delta) => {
    setItems(prev =>
      prev.map(it => (it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it))
    );
  };

  const removeItem = id => setItems(prev => prev.filter(it => it.id !== id));

  const subtotal = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items]);
  const shipping = subtotal > 1999 || subtotal === 0 ? 0 : 149;
  const discount = subtotal > 4999 ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal + shipping - discount;

  return (
    <>
    <Header/>
    <JewelleryNav/>
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Your Cart</h2>

      {/* Empty cart */}
      {items.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-lg font-medium">Your cart is empty</p>
          <p className="text-sm text-gray-500 mt-2">Add products to see them here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-sm">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.variant}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{item.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">each</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changeQty(item.id, -1)}
                        aria-label={`Decrease ${item.title}`}
                        className="p-2 rounded-md border hover:bg-gray-100"
                      >
                        <FaMinus />
                      </button>
                      <div className="w-10 text-center">{item.qty}</div>
                      <button
                        onClick={() => changeQty(item.id, +1)}
                        aria-label={`Increase ${item.title}`}
                        className="p-2 rounded-md border hover:bg-gray-100"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="font-medium">₹{(item.price * item.qty).toLocaleString()}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-md hover:bg-red-50 text-red-600"
                        aria-label={`Remove ${item.title}`}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="bg-gray-50 p-4 rounded-lg h-fit">
            <h4 className="text-lg font-medium mb-4">Order Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-700">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}

              <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full mt-4 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">
              Proceed to Checkout
            </button>

            <button className="w-full mt-3 py-2 rounded-lg border border-gray-200 text-sm">
              Continue Shopping
            </button>

            <p className="text-xs text-gray-500 mt-3">Secure checkout • Easy returns • COD available</p>
          </aside>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}
