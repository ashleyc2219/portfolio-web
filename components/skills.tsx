import React from "react";
import {
  FaLaptop,
  FaTabletAlt,
  FaTv,
  FaHeadphones,
  FaPrint,
  FaKeyboard,
  FaShieldAlt,
  FaTag,
} from "react-icons/fa"; // Example icons

const Skills = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-4 text-center md:mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">My Skills</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 p-4 md:grid-cols-4">
          {/* Card 1 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50">
            <FaLaptop className="mb-3 text-3xl text-blue-600" />
            <span className="text-gray-800">Laptops & Computers</span>
          </div>

          {/* Card 2 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50">
            <FaTv className="mb-3 text-3xl text-blue-600" />
            <span className="text-gray-800">TV</span>
          </div>

          {/* Card 3 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50">
            <FaTabletAlt className="mb-3 text-3xl text-blue-600" />
            <span className="text-gray-800">Tablets</span>
          </div>

          {/* Card 4 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50">
            <FaHeadphones className="mb-3 text-3xl text-blue-600" />
            <span className="text-gray-800">Audio</span>
          </div>

          {/* Card 5 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50">
            <FaPrint className="mb-3 text-3xl text-blue-600" />
            <span className="text-gray-800">Printers</span>
          </div>

          {/* Card 6 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50">
            <FaKeyboard className="mb-3 text-3xl text-blue-600" />
            <span className="text-gray-800">Computer Accessories</span>
          </div>

          {/* Card 7 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50">
            <FaShieldAlt className="mb-3 text-3xl text-blue-600" />
            <span className="text-gray-800">Security & Wi-Fi</span>
          </div>

          {/* Card 8 */}
          <div className="flex transform flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50">
            <FaTag className="mb-3 text-3xl text-blue-600" />
            <span className="text-gray-800">Deals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
