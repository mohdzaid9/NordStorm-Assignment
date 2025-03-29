import { FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 mt-16">
      <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div>
          <h4 className="font-bold mb-4 text-red-300 text-3xl">Customer Service</h4>
          <ul className="space-y-2 text-xl">
            <li>Order Status</li>
            <li>Guest Returns</li>
            <li>Shipping & Return Policy</li>
            <li>Gift Cards</li>
            <li>Product Recalls</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-red-300 text-3xl">About Us</h4>
          <ul className="space-y-2 text-xl">
            <li>About Our Brand</li>
            <li>The Nordy Club</li>
            <li>Store Locator</li>
            <li>All Brands</li>
            <li>Careers</li>
            <li>Get Email Updates</li>
            <li>Nordstrom Blog</li>
            <li>Nordy Podcast</li>
            <li>Store Openings</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-red-300 text-3xl">Nordstrom Rack & The Community</h4>
          <ul className="space-y-2 text-xl">
            <li>Corporate Social Responsibility</li>
            <li>Diversity, Equity, Inclusion & Belonging</li>
            <li>Big Brothers Big Sisters</li>
            <li>Donate Clothes</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-red-300 text-3xl">Nordstrom Card</h4>
          <ul className="space-y-2 text-xl">
            <li>Apply for a Nordstrom Card</li>
            <li>Pay My Bill</li>
            <li>Manage my Nordstrom Card</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-red-300 text-3xl">Nordstrom, Inc.</h4>
          <ul className="space-y-2 text-xl">
            <li>Nordstrom</li>
            <li>HauteLook</li>
            <li>Investor Relations</li>
            <li>Press Releases</li>
            <li>Nordstrom Media Network</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-xl" />
            <RxCross2 className="text-xl" />
            <FaPinterestP className="text-xl" />
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>Privacy</p>
          <p>Your Privacy Rights <span className="ml-1">🔒</span></p>
          <p>Terms & Conditions</p>
          <p>California Supply Chain Act</p>
          <p>&copy;2025 Nordstrom Rack</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
