// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';

const Booking = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, name: 'Home', address: 'San Francisco, CA' },
    { id: 2, name: 'Work', address: 'Palo Alto, CA' },
    { id: 3, name: 'Other', address: 'Oakland, CA' }
  ]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [editingAddress, setEditingAddress] = useState(null);
  const [skuCount, setSkuCount] = useState(10);
  const [totalPrice, setTotalPrice] = useState(0);
  const [payLater, setPayLater] = useState(false);
  const [error, setError] = useState('');

  const calculatePrice = (count) => {
    if (count >= 10 && count < 20) return count * 350;
    if (count >= 20 && count < 35) return count * 200;
    if (count >= 35) return count * 250;
    return 0;
  };

  useEffect(() => {
    setTotalPrice(calculatePrice(skuCount));
  }, [skuCount]);

  const handleSkuChange = (count) => {
    if (count < 10) {
      setError('Minimum 10 SKUs required');
    } else {
      setError('');
    }
    setSkuCount(count);
  };

  const handleAddressChange = (e) => {
    setSelectedAddress(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-10">
            <div className="bg-black p-2 rounded-md mr-2">
              <i className="fas fa-camera text-white"></i>
            </div>
            <span className="font-bold text-lg">LENSROOM</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">For Photographers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Explore</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Change Theme</a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-medium">
            AM
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h1 className="text-2xl font-bold mb-6">Confirm Your Photographer Booking</h1>
              
              {/* Address Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Delivery Address</label>
                <div className="space-y-4">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                      <div className="flex-1">
                        <div className="font-medium">{addr.name}</div>
                        <div className="text-sm text-gray-600">{addr.address}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <button
                            onClick={() => {
                              setSelectedAddress(selectedAddress === addr.address ? '' : addr.address);
                            }}
                            className={`px-4 py-1.5 rounded-button text-sm whitespace-nowrap ${
                              selectedAddress === addr.address
                                ? 'bg-gray-800 text-white'
                                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {selectedAddress === addr.address ? 'Selected' : 'Select'}
                          </button>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setEditingAddress(addr)}
                            className="text-gray-600 hover:text-yellow-500 transition-colors"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            onClick={() => {
                              setAddresses(addresses.filter(a => a.id !== addr.id));
                            }}
                            className="text-gray-600 hover:text-red-500 transition-colors"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {editingAddress ? (
                    <div className="space-y-3 bg-white p-4 rounded-md border border-gray-200">
                      <input
                        type="text"
                        placeholder="Address Name (e.g., Home, Work)"
                        value={editingAddress.name}
                        onChange={(e) => setEditingAddress({...editingAddress, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                      <input
                        type="text"
                        placeholder="Full Address"
                        value={editingAddress.address}
                        onChange={(e) => setEditingAddress({...editingAddress, address: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                      <div className="flex space-x-2">
                        <button
                          className="bg-gray-800 text-white px-4 py-2 rounded-button hover:bg-gray-900 transition-colors whitespace-nowrap"
                          onClick={() => {
                            if (editingAddress.name.trim() && editingAddress.address.trim()) {
                              setAddresses(addresses.map(a => a.id === editingAddress.id ? editingAddress : a));
                              setEditingAddress(null);
                            }
                          }}
                        >
                          Save Changes
                        </button>
                        <button
                          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-button hover:bg-gray-300 transition-colors whitespace-nowrap"
                          onClick={() => setEditingAddress(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        const newId = Math.max(...addresses.map(a => a.id)) + 1;
                        setEditingAddress({ id: newId, name: '', address: '' });
                      }}
                      className="w-full p-3 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
                    >
                      <i className="fas fa-plus mr-2"></i>
                      Add New Address
                    </button>
                  )}
                </div>
              </div>

              {/* SKU Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Number of SKUs</label>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-center mb-4">
                    <button
                      className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                      onClick={() => handleSkuChange(Math.max(10, skuCount - 1))}
                    >
                      <i className="fas fa-minus text-gray-600"></i>
                    </button>
                    <input
                      type="number"
                      min="10"
                      value={skuCount}
                      onChange={(e) => handleSkuChange(parseInt(e.target.value) || 0)}
                      className="w-24 h-16 mx-4 text-center text-2xl font-bold bg-white rounded-lg shadow-sm border-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button
                      className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                      onClick={() => handleSkuChange(skuCount + 1)}
                    >
                      <i className="fas fa-plus text-gray-600"></i>
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      onClick={() => handleSkuChange(10)}
                      className={`bg-white p-4 rounded-lg text-center shadow-sm cursor-pointer transition-all hover:shadow-md ${skuCount === 10 ? 'ring-2 ring-gray-800' : ''}`}
                    >
                      <div className="text-lg font-bold text-gray-800">10 SKUs</div>
                      <div className="text-sm text-gray-600">₹350/SKU</div>
                    </div>
                    <div
                      onClick={() => handleSkuChange(20)}
                      className={`bg-white p-4 rounded-lg text-center shadow-sm cursor-pointer transition-all hover:shadow-md ${skuCount === 20 ? 'ring-2 ring-gray-800' : ''}`}
                    >
                      <div className="text-lg font-bold text-gray-800">20 SKUs</div>
                      <div className="text-sm text-gray-600">₹200/SKU</div>
                    </div>
                    <div
                      onClick={() => handleSkuChange(35)}
                      className={`bg-white p-4 rounded-lg text-center shadow-sm cursor-pointer transition-all hover:shadow-md ${skuCount === 35 ? 'ring-2 ring-gray-800' : ''}`}
                    >
                      <div className="text-lg font-bold text-gray-800">35 SKUs</div>
                      <div className="text-sm text-gray-600">₹250/SKU</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              {/* Photographer Details */}
              <div className="flex flex-col mb-6">
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4">
                    <img src="/api/placeholder/64/64" alt="Photographer" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Alex Mitchell</h3>
                    <p className="text-gray-600">Professional Product Photographer</p>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center text-gray-800">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <span className="ml-2 text-gray-600">(4.8)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-gray-600 text-sm">Experience</span>
                      <p className="font-medium">8+ Years</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Projects Completed</span>
                      <p className="font-medium">500+</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Specialization</span>
                      <p className="font-medium">Product & E-commerce</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Response Time</span>
                      <p className="font-medium">Under 2 hours</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Expert in product photography with advanced post-processing skills. Specialized in creating high-quality e-commerce ready photos.</p>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-6">
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => setPayLater(false)}
                    className={`flex-1 py-3 rounded-button font-medium transition-colors whitespace-nowrap ${!payLater ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Pay Now
                  </button>
                  <button
                    onClick={() => setPayLater(true)}
                    className={`flex-1 py-3 rounded-button font-medium transition-colors whitespace-nowrap ${payLater ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    Pay After Shoot
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  {!payLater && (
                    <div className="flex justify-between mb-2">
                      <span>Base Price ({skuCount} SKUs)</span>
                      <span>₹ {totalPrice}</span>
                    </div>
                  )}
                  {payLater && (
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">
                        <i className="fas fa-info-circle mr-2"></i>
                        Full payment of ₹{totalPrice} will be collected after the shoot
                      </div>
                    </div>
                  )}
                  <div className="border-t border-gray-300 my-2"></div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹ {payLater ? 250 : totalPrice + 250}</span>
                  </div>
                </div>
                {/* Proceed Button */}
                <button className="w-full bg-black text-white py-3 rounded-button font-medium hover:bg-black transition-colors whitespace-nowrap cursor-pointer">
                  {payLater ? 'Pay Service Fee' : 'Proceed to Payment'}
                </button>
              </div>

              {/* Footer Links */}
              <div className="mt-6 text-center text-sm text-gray-600">
                By proceeding, you agree to our
                <a href="#" className="text-gray-800 hover:underline ml-1">Terms & Conditions</a>
                <span className="mx-1">and</span>
                <a href="#" className="text-gray-800 hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-black p-2 rounded-md mr-2">
                  <i className="fas fa-camera text-white"></i>
                </div>
                <span className="font-bold text-lg">LENSROOM</span>
              </div>
              <p className="text-gray-600 text-sm">Professional product photography made easy and affordable for your business.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-800">About Us</a></li>
                <li><a href="#" className="hover:text-gray-800">Careers</a></li>
                <li><a href="#" className="hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="hover:text-gray-800">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Payment Methods</h4>
              <div className="flex space-x-4 text-gray-400">
                <i className="fab fa-cc-visa text-2xl"></i>
                <i className="fab fa-cc-mastercard text-2xl"></i>
                <i className="fab fa-cc-amex text-2xl"></i>
                <i className="fab fa-paypal text-2xl"></i>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Lensroom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Booking;