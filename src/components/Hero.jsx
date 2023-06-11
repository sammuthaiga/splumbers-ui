import React from 'react';
// import './styles.css';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-900 min-h-screen">
      <nav className="bg-blue-600 py-4 px-8 flex justify-between items-center">
        <div className="text-white text-lg font-bold">PlumberFinder</div>
        <ul className="flex space-x-4 text-white">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Why Us?</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>
      </nav>

      <header className="container mx-auto px-4 py-24 flex items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-white mb-4">Find the Perfect Plumber</h1>
          <p className="text-white text-lg mb-8">Quickly connect with reliable and trusted plumbers in your area.</p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded">Get Started</button>
        </div>
      </header>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What We Do</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/2 px-4 mb-8">
              <div className="bg-blue-100 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Commercial Plumbing</h3>
                <p className="text-gray-800">We provide expert commercial plumbing services for businesses of all sizes.</p>
              </div>
            </div>
            <div className="w-1/2 px-4 mb-8">
              <div className="bg-blue-100 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Sanitary Plumbing</h3>
                <p className="text-gray-800">Our experienced plumbers specialize in sanitary plumbing solutions for homes and buildings.</p>
              </div>
            </div>
            <div className="w-1/2 px-4 mb-8">
              <div className="bg-blue-100 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Repair and Maintenance</h3>
                <p className="text-gray-800">We offer reliable repair and maintenance services to keep your plumbing system in top condition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto">
          <p className="text-center">© 2023 PlumberFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

