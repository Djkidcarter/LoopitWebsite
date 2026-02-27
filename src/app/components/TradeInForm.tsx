import { useState, FormEvent } from 'react';

export function TradeInForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    deviceType: '',
    deviceCondition: '',
    purchaseYear: '',
    estimatedPrice: '',
    deviceDetails: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        deviceType: '',
        deviceCondition: '',
        purchaseYear: '',
        estimatedPrice: '',
        deviceDetails: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 sm:p-10 border border-gray-100 relative overflow-hidden">
        {/* Decorative gradient corner */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-bl-full -z-0"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-tr-full -z-0"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Get Your Quote</h3>
        
          {isSubmitted ? (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="text-green-600 text-lg font-medium mb-2">✓ Quote Submitted Successfully!</div>
              <p className="text-gray-600">We'll review your device and get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              </div>

              {/* Contact Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              </div>

              {/* Device Type and Condition Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Device Type
                  </label>
                  <select
                    id="deviceType"
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3d%2210%22%20height%3d%226%22%20viewBox%3d%220%200%2010%206%22%20fill%3d%22none%22%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%3e%3cpath%20d%3d%22M1%201L5%205L9%201%22%20stroke%3d%22%23666%22%20stroke-width%3d%221.5%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%2f%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_1rem_center]"
                    style={{ borderRadius: '8px' }}
                  >
                    <option value="">Select device type</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="laptop">Laptop / Computer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="deviceCondition" className="block text-sm font-medium text-gray-700 mb-2">
                    Device Condition
                  </label>
                  <select
                    id="deviceCondition"
                    name="deviceCondition"
                    value={formData.deviceCondition}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3d%2210%22%20height%3d%226%22%20viewBox%3d%220%200%2010%206%22%20fill%3d%22none%22%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%3e%3cpath%20d%3d%22M1%201L5%205L9%201%22%20stroke%3d%22%23666%22%20stroke-width%3d%221.5%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%2f%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_1rem_center]"
                    style={{ borderRadius: '8px' }}
                  >
                    <option value="">Select condition</option>
                    <option value="new">New</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="damaged">Damaged</option>
                  </select>
                </div>
              </div>

              {/* Purchase Year and Estimated Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="purchaseYear" className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase Year
                  </label>
                  <input
                    type="text"
                    id="purchaseYear"
                    name="purchaseYear"
                    value={formData.purchaseYear}
                    onChange={handleChange}
                    placeholder="e.g., 2023"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
                <div>
                  <label htmlFor="estimatedPrice" className="block text-sm font-medium text-gray-700 mb-2">
                    Seller's Estimated Price
                  </label>
                  <input
                    type="text"
                    id="estimatedPrice"
                    name="estimatedPrice"
                    value={formData.estimatedPrice}
                    onChange={handleChange}
                    placeholder="€"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              </div>

              {/* Device Details Textarea */}
              <div>
                <label htmlFor="deviceDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Device Details
                </label>
                <textarea
                  id="deviceDetails"
                  name="deviceDetails"
                  value={formData.deviceDetails}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Please provide additional details about your device (model, specs, any issues, etc.)"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  style={{ borderRadius: '8px' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                style={{ borderRadius: '8px' }}
              >
                Submit Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}