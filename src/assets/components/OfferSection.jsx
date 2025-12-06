import React from 'react'

export default function OfferSection() {
  return (
    <div className="w-full px-[100px] mx-auto px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Box 1 */}
        <div className="bg-[#DFF4FC] p-12 ">
          <h2 className="text-3xl font-semibold mb-4">Exclusive offers for you</h2>
          <p className="text-gray-600 mb-10 text-[18px] ">
            Get weekly deals, valuable health information and more.
          </p>

          <button className="border border-black px-6 py-3  font-semibold hover:bg-black hover:text-white transition">
            SIGN UP →
          </button>
        </div>

        {/* Box 2 */}
        <div className="bg-[#F8FFD9] p-12 ">
          <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-10 text-[18px]  ">
            Get weekly deals, valuable health information and more.
          </p>

          <button className="border border-black px-6 py-3  font-semibold hover:bg-black hover:text-white transition">
            JOIN FREE NOW →
          </button>
        </div>

        {/* Box 3 */}
        <div className="bg-[#FFE7EA] p-12 ">
          <h2 className="text-3xl font-semibold mb-4">Get our FREE app Now!</h2>
          <p className="text-gray-600 mb-10 text-[18px] ">
            Get weekly deals, valuable health information and more.
          </p>

          <div className="flex gap-4">
            <img
              src="/images/play-store.png"
              alt="Google Play"
              className="w-40 bg-black p-4"
            />
            <img
             
              src="/images/apple-store.png"
              alt="App Store"
              className="w-40 bg-black p-4"
            />
          </div>
        </div>

      </div>
    </div>
  );
}



