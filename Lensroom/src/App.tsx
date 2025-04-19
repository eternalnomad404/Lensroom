// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroSlides = [
    {
      id: 1,
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20photography%20scene%20with%20dramatic%20lighting%2C%20high-end%20DSLR%20camera%20capturing%20a%20beautiful%20wedding%20moment%2C%20bokeh%20background%2C%20cinematic%20composition%2C%20shallow%20depth%20of%20field%2C%20professional%20photography%20equipment%20visible%2C%20high%20resolution&width=1440&height=600&seq=1&orientation=landscape",
    },
    {
      id: 2,
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20fashion%20photography%20session%20in%20studio%2C%20model%20posing%20with%20elegant%20outfit%2C%20studio%20lighting%20equipment%20visible%2C%20photographer%20silhouette%2C%20high%20contrast%20black%20and%20white%20aesthetic%2C%20cinematic%20mood%2C%20professional%20setting&width=1440&height=600&seq=2&orientation=landscape",
    },
    {
      id: 3,
      imageUrl:
        "https://readdy.ai/api/search-image?query=professional%20landscape%20photographer%20capturing%20sunset%20over%20mountains%2C%20tripod%20setup%2C%20dramatic%20clouds%2C%20golden%20hour%20lighting%2C%20silhouette%20of%20photographer%2C%20wide%20angle%20lens%20visible%2C%20professional%20photography%20equipment%2C%20cinematic%20composition&width=1440&height=600&seq=3&orientation=landscape",
    },
  ];
  const photographers = [
    {
      id: 1,
      name: "Emma Richards",
      specialty: "Wedding Photography",
      rating: 4.9,
      profileImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20photographer%20with%20camera%2C%20neutral%20background%2C%20warm%20smile%2C%20professional%20attire%2C%20high%20quality%20portrait%2C%20studio%20lighting%2C%20clean%20composition%2C%20professional%20look&width=100&height=100&seq=4&orientation=squarish",
      portfolioImages: [
        "https://readdy.ai/api/search-image?query=elegant%20wedding%20photography%2C%20bride%20and%20groom%20in%20romantic%20pose%2C%20soft%20natural%20lighting%2C%20emotional%20moment%2C%20professional%20composition%2C%20shallow%20depth%20of%20field%2C%20wedding%20decor%20visible%2C%20high%20quality&width=120&height=80&seq=5&orientation=landscape",
        "https://readdy.ai/api/search-image?query=wedding%20ceremony%20photography%2C%20emotional%20vows%20exchange%2C%20guests%20watching%2C%20natural%20lighting%20through%20windows%2C%20professional%20composition%2C%20candid%20moment%2C%20elegant%20venue%2C%20high%20quality&width=120&height=80&seq=6&orientation=landscape",
        "https://readdy.ai/api/search-image?query=wedding%20reception%20photography%2C%20first%20dance%2C%20romantic%20lighting%2C%20elegant%20venue%2C%20professional%20composition%2C%20emotional%20moment%2C%20guests%20watching%2C%20high%20quality&width=120&height=80&seq=7&orientation=landscape",
      ],
    },
    {
      id: 2,
      name: "James Wilson",
      specialty: "Portrait & Fashion",
      rating: 4.8,
      profileImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20photographer%20with%20camera%2C%20neutral%20background%2C%20confident%20pose%2C%20professional%20attire%2C%20high%20quality%20portrait%2C%20studio%20lighting%2C%20clean%20composition%2C%20professional%20look&width=100&height=100&seq=8&orientation=squarish",
      portfolioImages: [
        "https://readdy.ai/api/search-image?query=professional%20fashion%20photography%2C%20model%20in%20stylish%20outfit%2C%20studio%20lighting%2C%20professional%20composition%2C%20fashion%20magazine%20quality%2C%20high%20contrast%2C%20clean%20background%2C%20high%20quality&width=120&height=80&seq=9&orientation=landscape",
        "https://readdy.ai/api/search-image?query=professional%20portrait%20photography%2C%20elegant%20subject%2C%20perfect%20lighting%2C%20studio%20setting%2C%20professional%20composition%2C%20fashion%20style%2C%20clean%20background%2C%20high%20quality&width=120&height=80&seq=10&orientation=landscape",
        "https://readdy.ai/api/search-image?query=editorial%20fashion%20photography%2C%20model%20in%20designer%20clothes%2C%20creative%20lighting%2C%20professional%20composition%2C%20magazine%20quality%2C%20artistic%20angle%2C%20clean%20background%2C%20high%20quality&width=120&height=80&seq=11&orientation=landscape",
      ],
    },
    {
      id: 3,
      name: "Sophia Martinez",
      specialty: "Corporate Events",
      rating: 4.7,
      profileImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20photographer%20with%20camera%2C%20neutral%20background%2C%20business%20casual%20attire%2C%20confident%20smile%2C%20high%20quality%20portrait%2C%20studio%20lighting%2C%20clean%20composition%2C%20professional%20look&width=100&height=100&seq=12&orientation=squarish",
      portfolioImages: [
        "https://readdy.ai/api/search-image?query=corporate%20event%20photography%2C%20business%20conference%2C%20professional%20speaker%20on%20stage%2C%20audience%20listening%2C%20professional%20lighting%2C%20clean%20composition%2C%20business%20setting%2C%20high%20quality&width=120&height=80&seq=13&orientation=landscape",
        "https://readdy.ai/api/search-image?query=corporate%20networking%20event%20photography%2C%20professionals%20mingling%2C%20business%20casual%20attire%2C%20venue%20lighting%2C%20professional%20composition%2C%20business%20setting%2C%20candid%20moment%2C%20high%20quality&width=120&height=80&seq=14&orientation=landscape",
        "https://readdy.ai/api/search-image?query=corporate%20award%20ceremony%20photography%2C%20executive%20receiving%20award%2C%20professional%20lighting%2C%20elegant%20venue%2C%20business%20formal%20attire%2C%20professional%20composition%2C%20emotional%20moment%2C%20high%20quality&width=120&height=80&seq=15&orientation=landscape",
      ],
    },
    {
      id: 4,
      name: "Michael Chen",
      specialty: "Product & Commercial",
      rating: 4.9,
      profileImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20asian%20male%20photographer%20with%20camera%2C%20neutral%20background%2C%20professional%20attire%2C%20confident%20pose%2C%20high%20quality%20portrait%2C%20studio%20lighting%2C%20clean%20composition%2C%20professional%20look&width=100&height=100&seq=16&orientation=squarish",
      portfolioImages: [
        "https://readdy.ai/api/search-image?query=product%20photography%2C%20luxury%20watch%20on%20minimalist%20background%2C%20perfect%20lighting%2C%20professional%20composition%2C%20commercial%20quality%2C%20studio%20setting%2C%20high%20detail%2C%20high%20quality&width=120&height=80&seq=17&orientation=landscape",
        "https://readdy.ai/api/search-image?query=commercial%20food%20photography%2C%20gourmet%20dish%2C%20perfect%20styling%2C%20professional%20lighting%2C%20advertising%20quality%2C%20studio%20setting%2C%20high%20detail%2C%20high%20quality&width=120&height=80&seq=18&orientation=landscape",
        "https://readdy.ai/api/search-image?query=product%20photography%2C%20cosmetics%20on%20minimalist%20background%2C%20perfect%20lighting%2C%20professional%20composition%2C%20commercial%20quality%2C%20studio%20setting%2C%20high%20detail%2C%20high%20quality&width=120&height=80&seq=19&orientation=landscape",
      ],
    },
    {
      id: 5,
      name: "Olivia Johnson",
      specialty: "Nature & Landscape",
      rating: 4.8,
      profileImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20photographer%20with%20camera%2C%20neutral%20background%2C%20casual%20outdoor%20attire%2C%20friendly%20smile%2C%20high%20quality%20portrait%2C%20natural%20lighting%2C%20clean%20composition%2C%20professional%20look&width=100&height=100&seq=20&orientation=squarish",
      portfolioImages: [
        "https://readdy.ai/api/search-image?query=landscape%20photography%2C%20mountain%20range%20at%20sunset%2C%20dramatic%20clouds%2C%20professional%20composition%2C%20vibrant%20colors%2C%20wide%20angle%20perspective%2C%20nature%20scenery%2C%20high%20quality&width=120&height=80&seq=21&orientation=landscape",
        "https://readdy.ai/api/search-image?query=nature%20photography%2C%20forest%20waterfall%2C%20long%20exposure%20technique%2C%20professional%20composition%2C%20lush%20greenery%2C%20natural%20lighting%2C%20serene%20atmosphere%2C%20high%20quality&width=120&height=80&seq=22&orientation=landscape",
        "https://readdy.ai/api/search-image?query=seascape%20photography%2C%20coastal%20rocks%20at%20dawn%2C%20dramatic%20sky%2C%20professional%20composition%2C%20long%20exposure%20effect%2C%20natural%20lighting%2C%20ocean%20scenery%2C%20high%20quality&width=120&height=80&seq=23&orientation=landscape",
      ],
    },
    {
      id: 6,
      name: "David Thompson",
      specialty: "Events & Parties",
      rating: 4.7,
      profileImage:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20photographer%20with%20camera%2C%20neutral%20background%2C%20smart%20casual%20attire%2C%20friendly%20expression%2C%20high%20quality%20portrait%2C%20studio%20lighting%2C%20clean%20composition%2C%20professional%20look&width=100&height=100&seq=24&orientation=squarish",
      portfolioImages: [
        "https://readdy.ai/api/search-image?query=birthday%20party%20photography%2C%20celebration%20moment%2C%20colorful%20decorations%2C%20candid%20expressions%2C%20professional%20composition%2C%20venue%20lighting%2C%20festive%20atmosphere%2C%20high%20quality&width=120&height=80&seq=25&orientation=landscape",
        "https://readdy.ai/api/search-image?query=concert%20photography%2C%20live%20music%20performance%2C%20stage%20lighting%2C%20crowd%20atmosphere%2C%20professional%20composition%2C%20dynamic%20moment%2C%20entertainment%20venue%2C%20high%20quality&width=120&height=80&seq=26&orientation=landscape",
        "https://readdy.ai/api/search-image?query=gala%20event%20photography%2C%20elegant%20attendees%2C%20venue%20decorations%2C%20professional%20lighting%2C%20formal%20atmosphere%2C%20professional%20composition%2C%20social%20gathering%2C%20high%20quality&width=120&height=80&seq=27&orientation=landscape",
      ],
    },
  ];
  const categories = [
    {
      id: 1,
      name: "Wedding",
      image:
        "https://readdy.ai/api/search-image?query=elegant%20wedding%20photography%20scene%2C%20bride%20and%20groom%20in%20beautiful%20venue%2C%20professional%20lighting%2C%20emotional%20moment%2C%20professional%20photography%20equipment%20visible%2C%20high%20end%20wedding%20decor%2C%20romantic%20atmosphere%2C%20high%20quality&width=300&height=200&seq=28&orientation=landscape",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://readdy.ai/api/search-image?query=high%20fashion%20photography%20session%2C%20model%20in%20designer%20clothes%2C%20studio%20lighting%20setup%2C%20professional%20photographer%20at%20work%2C%20fashion%20industry%20setting%2C%20editorial%20quality%2C%20creative%20composition%2C%20high%20quality&width=300&height=200&seq=29&orientation=landscape",
    },
    {
      id: 3,
      name: "Product",
      image:
        "https://readdy.ai/api/search-image?query=product%20photography%20setup%2C%20luxury%20item%20on%20minimalist%20background%2C%20professional%20lighting%20equipment%2C%20photographer%20adjusting%20camera%2C%20commercial%20studio%20setting%2C%20professional%20composition%2C%20advertising%20quality%2C%20high%20quality&width=300&height=200&seq=30&orientation=landscape",
    },
    {
      id: 4,
      name: "Corporate",
      image:
        "https://readdy.ai/api/search-image?query=corporate%20photography%20session%2C%20business%20professionals%20in%20meeting%20room%2C%20photographer%20capturing%20executive%20portraits%2C%20office%20environment%2C%20professional%20lighting%2C%20business%20setting%2C%20professional%20composition%2C%20high%20quality&width=300&height=200&seq=31&orientation=landscape",
    },
    {
      id: 5,
      name: "Events",
      image:
        "https://readdy.ai/api/search-image?query=special%20event%20photography%2C%20gala%20celebration%2C%20photographer%20capturing%20candid%20moments%2C%20elegant%20venue%2C%20professional%20lighting%2C%20social%20gathering%2C%20professional%20composition%2C%20high%20quality&width=300&height=200&seq=32&orientation=landscape",
    },
    {
      id: 6,
      name: "Portrait",
      image:
        "https://readdy.ai/api/search-image?query=portrait%20photography%20session%2C%20subject%20posing%20in%20studio%2C%20photographer%20adjusting%20lighting%2C%20professional%20backdrop%2C%20camera%20equipment%20visible%2C%20artistic%20composition%2C%20professional%20setting%2C%20high%20quality&width=300&height=200&seq=33&orientation=landscape",
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Robert",
      event: "Wedding",
      photographer: "Emma Richards",
      quote:
        "Emma captured our special day perfectly. The photos tell our love story in a way we couldn't have imagined. Every emotion, every detail was beautifully preserved.",
      image:
        "https://readdy.ai/api/search-image?query=happy%20wedding%20couple%20testimonial%2C%20elegant%20formal%20attire%2C%20neutral%20background%2C%20warm%20smiles%2C%20professional%20portrait%2C%20studio%20lighting%2C%20clean%20composition%2C%20professional%20look&width=80&height=80&seq=34&orientation=squarish",
    },
    {
      id: 2,
      name: "Tech Innovations Inc.",
      event: "Corporate Event",
      photographer: "Sophia Martinez",
      quote:
        "Sophia's professionalism and ability to capture key moments during our annual conference was outstanding. The photos perfectly represent our brand and company culture.",
      image:
        "https://readdy.ai/api/search-image?query=professional%20business%20executive%20testimonial%2C%20corporate%20attire%2C%20neutral%20background%2C%20confident%20pose%2C%20professional%20portrait%2C%20studio%20lighting%2C%20clean%20composition%2C%20professional%20look&width=80&height=80&seq=35&orientation=squarish",
    },
    {
      id: 3,
      name: "Alex Johnson",
      event: "Fashion Portfolio",
      photographer: "James Wilson",
      quote:
        "James has an incredible eye for fashion photography. He transformed my portfolio with stunning images that have helped me secure multiple modeling contracts.",
      image:
        "https://readdy.ai/api/search-image?query=fashion%20model%20testimonial%2C%20stylish%20appearance%2C%20neutral%20background%2C%20professional%20pose%2C%20high%20quality%20portrait%2C%20studio%20lighting%2C%20clean%20composition%2C%20professional%20look&width=80&height=80&seq=36&orientation=squarish",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-black bg-opacity-90 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              Lens<span className="text-yellow-500">room</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="hover:text-yellow-500 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-yellow-500 transition-colors cursor-pointer"
            >
              Photographers
            </a>
            <a
              href="#"
              className="hover:text-yellow-500 transition-colors cursor-pointer"
            >
              Categories
            </a>
            <a
              href="#"
              className="hover:text-yellow-500 transition-colors cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#"
              className="hover:text-yellow-500 transition-colors cursor-pointer"
            >
              About
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-white hover:text-yellow-500 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Log In
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Sign Up
            </button>
          </div>
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a
                href="#"
                className="hover:text-yellow-500 transition-colors py-2 cursor-pointer"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-yellow-500 transition-colors py-2 cursor-pointer"
              >
                Photographers
              </a>
              <a
                href="#"
                className="hover:text-yellow-500 transition-colors py-2 cursor-pointer"
              >
                Categories
              </a>
              <a
                href="#"
                className="hover:text-yellow-500 transition-colors py-2 cursor-pointer"
              >
                How It Works
              </a>
              <a
                href="#"
                className="hover:text-yellow-500 transition-colors py-2 cursor-pointer"
              >
                About
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <button className="px-4 py-2 border border-white text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                  Log In
                </button>
                <button className="px-4 py-2 bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <img
              src={slide.imageUrl}
              alt="Photography hero image"
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Capture Moments with the Right Photographer
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Connect with talented photographers for your special moments
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-3 bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-400 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Hire a Photographer
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold text-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Join as Photographer
            </button>
          </div>
        </div>
      </section>
      {/* Search Bar */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="">Select City</option>
                  <option value="all">All</option>
                  <option value="gurugram">Gurugram</option>
                  <option value="varanasi">Varanasi</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="delhi">Delhi</option>
                  <option value="kolkata">Kolkata</option>
                </select>
                <i className="fas fa-map-marker-alt absolute left-3 top-3.5 text-gray-400"></i>
                <i className="fas fa-chevron-down absolute right-3 top-3.5 text-gray-400"></i>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <div className="relative">
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="">Select Category</option>
                  <option value="all">All</option>
                  <option value="fashion">Fashion</option>
                  <option value="product">Product</option>
                  <option value="event">Event</option>
                  <option value="mobile">Mobile</option>
                  <option value="podcast">Podcast</option>
                </select>
                <i className="fas fa-camera absolute left-3 top-3.5 text-gray-400"></i>
                <i className="fas fa-chevron-down absolute right-3 top-3.5 text-gray-400"></i>
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date & Time
              </label>
              <div className="space-y-2">
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm cursor-pointer"
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <i className="fas fa-calendar absolute left-3 top-3.5 text-gray-400"></i>
                </div>
                <div className="relative">
                  <select
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 7 PM)</option>
                    <option value="night">Night (7 PM - 10 PM)</option>
                  </select>
                  <i className="fas fa-clock absolute left-3 top-3.5 text-gray-400"></i>
                  <i className="fas fa-chevron-down absolute right-3 top-3.5 text-gray-400"></i>
                </div>
              </div>
            </div>
            <div className="self-end">
              <button
                className="w-full md:w-auto px-8 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors rounded-lg cursor-pointer whitespace-nowrap !rounded-button"
                onClick={() => {
                  // Filter photographers based on selected criteria
                  // Show filtered results in the Featured Photographers section
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Photographers */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Photographers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated professionals ready to capture your special
            moments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographers.map((photographer) => (
            <div
              key={photographer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={photographer.profileImage}
                    alt={photographer.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{photographer.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {photographer.specialty}
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-500">
                        <i className="fas fa-star text-xs"></i>
                        <i className="fas fa-star text-xs"></i>
                        <i className="fas fa-star text-xs"></i>
                        <i className="fas fa-star text-xs"></i>
                        <i className="fas fa-star-half-alt text-xs"></i>
                      </div>
                      <span className="text-gray-600 text-xs ml-1">
                        {photographer.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {photographer.portfolioImages.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-w-3 aspect-h-2 overflow-hidden rounded-md"
                    >
                      <img
                        src={image}
                        alt={`Portfolio by ${photographer.name}`}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors rounded cursor-pointer whitespace-nowrap !rounded-button">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
            View All Photographers
          </button>
        </div>
      </section>
      {/* Photography Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Photography Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect photographer specialized in your event type
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">
                    {category.name}
                  </h3>
                  <div className="w-10 h-1 bg-yellow-500 mt-2 transition-all group-hover:w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple steps to find and book your perfect photographer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-black text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Search & Compare</h3>
            <p className="text-gray-600">
              Browse through our curated list of professional photographers.
              Filter by location, specialty, and availability.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-black text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Connect & Book</h3>
            <p className="text-gray-600">
              Chat with photographers, discuss your vision, and secure your
              booking with our safe payment system.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-black text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Capture Memories</h3>
            <p className="text-gray-600">
              Enjoy your event while your photographer captures every special
              moment. Receive professionally edited photos.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our clients say about their experience
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${index === activeTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                >
                  <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                      />
                      <div>
                        <p className="text-gray-800 text-lg italic mb-4">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-gray-600 text-sm">
                            {testimonial.event} • Photographed by{" "}
                            {testimonial.photographer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${index === activeTestimonial ? "bg-yellow-500" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Photographer Benefits */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Photographer Network
              </h2>
              <p className="text-gray-300 mb-8">
                Expand your client base and grow your photography business by
                joining our platform of professional photographers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Increased Visibility
                    </h3>
                    <p className="text-gray-300">
                      Get discovered by clients looking for your specific
                      photography style and expertise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Secure Payments</h3>
                    <p className="text-gray-300">
                      Our platform handles all payment processing, ensuring you
                      get paid promptly for your work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Professional Profile
                    </h3>
                    <p className="text-gray-300">
                      Showcase your portfolio, specialties, and client reviews
                      on your personalized profile page.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-black"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Booking Management
                    </h3>
                    <p className="text-gray-300">
                      Easily manage your schedule, client communications, and
                      bookings in one place.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-8 px-8 py-3 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                Join as Photographer
              </button>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Photographer Success
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-yellow-500 text-4xl font-bold mb-2">
                      5,000+
                    </p>
                    <p className="text-gray-300">Active Photographers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-yellow-500 text-4xl font-bold mb-2">
                      $2,500
                    </p>
                    <p className="text-gray-300">Average Monthly Earnings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-yellow-500 text-4xl font-bold mb-2">
                      25,000+
                    </p>
                    <p className="text-gray-300">Bookings Per Month</p>
                  </div>
                  <div className="text-center">
                    <p className="text-yellow-500 text-4xl font-bold mb-2">
                      98%
                    </p>
                    <p className="text-gray-300">Client Satisfaction</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-center text-gray-300 italic">
                    "Joining Lensroom has transformed my photography business.
                    I've doubled my client base in just 3 months!"
                  </p>
                  <p className="text-center text-sm mt-2">
                    — Michael Chen, Product Photographer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Lensroom</h3>
              <p className="text-gray-400 mb-4">
                Connecting talented photographers with clients looking to
                capture their special moments since 2022.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Find a Photographer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Join as Photographer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Photography Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 text-white border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm flex-1"
                />
                <button className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-r-lg hover:bg-yellow-400 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                  Subscribe
                </button>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
                <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Lensroom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default App;
