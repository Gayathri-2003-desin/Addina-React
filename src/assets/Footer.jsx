import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* -------- LEFT SECTION -------- */}
        <div className="flex flex-col justify-around">
      <div className='flex  text-white' >
       <img src="/images/logo-light.svg" alt="logo" className="w-40" />
      </div>

          <p className="text-gray-400 leading-relaxed mb-6">
            It helps designers plan out where the content will sit, the content to be written and approved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Facebook className="text-white" size={20} />
            </span>
            <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Twitter className="text-white" size={20} />
            </span>
            <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Linkedin className="text-white" size={20} />
            </span>
            <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Instagram className="text-white" size={20} />
            </span>
          </div>
        </div>

        {/* -------- SERVICES -------- */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Log In</li>
            <li>Wishlist</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Shopping FAQs</li>
          </ul>
        </div>

        {/* -------- COMPANY -------- */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Company</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About us</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* -------- CONTACT -------- */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <p className="text-gray-400 mb-6">
            4517 Washington Ave.<br />
            Manchester, Kentucky 39495
          </p>

          {/* Address */}
          <div className="flex items-center mb-5">
            <span className="w-12 h-12 rounded-full bg-[#C6A36C]/20 flex items-center justify-center mr-4">
              <MapPin className="text-[#C6A36C]" />
            </span>
            <p className="text-gray-300">711–2880 Nulla St.</p>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-5">
            <span className="w-12 h-12 rounded-full bg-[#C6A36C]/20 flex items-center justify-center mr-4">
              <Phone className="text-[#C6A36C]" />
            </span>
            <div>
              <p className="text-gray-300">+964 742 44 763</p>
              <p className="text-gray-500 text-sm">Mon – Sat: 9 AM – 5 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* -------- BOTTOM BAR -------- */}
      <div className="border-t border-white/10 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left text */}
          <p className="text-gray-400">
            © All Copyright 2024 by Addina
          </p>

          {/* Payment images */}
          <div className="flex items-center space-x-6">
            <img src="/images/payoneer.png" alt="Payoneer" className="h-10" />
            <img src="/images/maser.png" alt="Mastercard" className="h-10" />
            <img src="/images/paypal.png" alt="PayPal" className="h-10" />
          </div>

          {/* Policies */}
          <div className="flex items-center text-gray-400 space-x-4">
            <span>Terms & Condition</span>
            <span>|</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
