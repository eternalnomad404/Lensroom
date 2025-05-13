// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';

const Profile3 = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center mr-2">
                <i className="fas fa-camera-retro text-yellow-500 text-xs"></i>
              </div>
              <span className="font-bold text-lg tracking-tight">LENSROOM</span>
            </div>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">For Photographers</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Explore</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Change Theme</a>
            <div className="relative group">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white cursor-pointer">
                <span className="text-sm font-medium">AM</span>
              </div>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center !rounded-button whitespace-nowrap">
                  <i className="fas fa-pen text-gray-500 w-4 mr-2"></i>
                  Edit Profile
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="md:w-1/3 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <img
                    src="/Images/Profile.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm">
                    <i className="fas fa-camera text-gray-600 text-sm"></i>
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-semibold">Alex Morgan</h2>
                <button className="mt-3 px-4 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition-colors flex items-center !rounded-button whitespace-nowrap">
                  <i className="fas fa-pen text-sm mr-2"></i>
                  Edit Profile
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-envelope text-gray-500 mt-1 w-5"></i>
                  <div className="ml-3">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm">alex.morgan@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone text-gray-500 mt-1 w-5"></i>
                  <div className="ml-3">
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-gray-500 mt-1 w-5"></i>
                  <div className="ml-3">
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Settings Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-3">
                <button className="w-full py-2.5 px-4 border border-gray-300 rounded-md text-gray-700 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  <i className="fas fa-map-marker-alt mr-2 text-gray-500"></i>
                  My Address
                </button>
                <button className="w-full py-2.5 px-4 border border-red-200 rounded-md text-red-600 flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
                  <i className="fas fa-trash-alt mr-2"></i>
                  Delete Account
                </button>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${activeTab === 'upcoming' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer !rounded-button whitespace-nowrap`}
                  >
                    Upcoming Shoots
                  </button>
                  <button
                    onClick={() => setActiveTab('completed')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${activeTab === 'completed' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer !rounded-button whitespace-nowrap`}
                  >
                    Completed Shoots
                  </button>
                  <button
                    onClick={() => setActiveTab('cancelled')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 ${activeTab === 'cancelled' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} cursor-pointer !rounded-button whitespace-nowrap`}
                  >
                    Cancelled Shoots
                  </button>
                </nav>
              </div>
              {/* Shoots Content */}
              <div className="p-6">
                {activeTab === 'upcoming' && (
                  <div className="space-y-6">
                    {/* Upcoming Shoot Card 1 */}
                    <div className="border border-gray-100 rounded-lg p-5 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-medium">Portrait Session</h3>
                          <p className="text-gray-500 text-sm">April 25, 2025 • 2:00 PM</p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">Upcoming</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="/Images/sarah.jpg"
                          alt="Sarah Johnson"
                          className="w-10 h-10 rounded-full object-cover object-top"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium">Sarah Johnson</p>
                          <p className="text-xs text-gray-500">Portrait Specialist</p>
                        </div>
                      </div>
                      <div className="flex items-start mb-5">
                        <i className="fas fa-map-marker-alt text-gray-500 mt-1"></i>
                        <p className="ml-2 text-sm text-gray-600">Golden Gate Park, San Francisco, CA</p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                          Reschedule
                        </button>
                        <button className="px-4 py-2 bg-yellow-500 rounded-md text-white hover:bg-yellow-600 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                          View Details
                        </button>
                      </div>
                    </div>
                    {/* Upcoming Shoot Card 2 */}
                    <div className="border border-gray-100 rounded-lg p-5 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-medium">Family Photo Session</h3>
                          <p className="text-gray-500 text-sm">April 27, 2025 • 10:00 AM</p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">Upcoming</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="/Images/David.jpg"
                          alt="David Wilson"
                          className="w-10 h-10 rounded-full object-cover object-top"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium">David Wilson</p>
                          <p className="text-xs text-gray-500">Family Photographer</p>
                        </div>
                      </div>
                      <div className="flex items-start mb-5">
                        <i className="fas fa-map-marker-alt text-gray-500 mt-1"></i>
                        <p className="ml-2 text-sm text-gray-600">Baker Beach, San Francisco, CA</p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                          Reschedule
                        </button>
                        <button className="px-4 py-2 bg-yellow-500 rounded-md text-white hover:bg-yellow-600 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                          View Details
                        </button>
                      </div>
                    </div>
                    {/* Upcoming Shoot Card 3 */}
                    <div className="border border-gray-100 rounded-lg p-5 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-medium">Product Photography</h3>
                          <p className="text-gray-500 text-sm">April 30, 2025 • 3:30 PM</p>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">Upcoming</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="/Images/Emily.jpg"
                          alt="Emily Zhang"
                          className="w-10 h-10 rounded-full object-cover object-top"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium">Emily Zhang</p>
                          <p className="text-xs text-gray-500">Product Photography Expert</p>
                        </div>
                      </div>
                      <div className="flex items-start mb-5">
                        <i className="fas fa-map-marker-alt text-gray-500 mt-1"></i>
                        <p className="ml-2 text-sm text-gray-600">Studio 501, Downtown San Francisco, CA</p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                          Reschedule
                        </button>
                        <button className="px-4 py-2 bg-yellow-500 rounded-md text-white hover:bg-yellow-600 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'completed' && (
                  <div className="space-y-6">
                    {/* Completed Shoot Card */}
                    <div className="border border-gray-100 rounded-lg p-5 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-medium">Wedding Photography</h3>
                          <p className="text-gray-500 text-sm">April 18, 2025 • 10:00 AM</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">Completed</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <img
                          src="/Images/Michael.jpg"
                          alt="Michael Chen"
                          className="w-10 h-10 rounded-full object-cover object-top"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium">Michael Chen</p>
                          <p className="text-xs text-gray-500">Wedding Photographer</p>
                        </div>
                      </div>
                      <div className="flex items-start mb-5">
                        <i className="fas fa-map-marker-alt text-gray-500 mt-1"></i>
                        <p className="ml-2 text-sm text-gray-600">Palace of Fine Arts, San Francisco, CA</p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button className="px-4 py-2 bg-yellow-500 rounded-md text-white hover:bg-yellow-600 text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                          View Gallery
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'cancelled' && (
                  <div className="p-10 text-center text-gray-500">
                    <i className="fas fa-calendar-times text-4xl mb-3"></i>
                    <p>You don't have any cancelled shoots.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile3;