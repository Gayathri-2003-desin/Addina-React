import React from 'react'

const AppointmentForm = () => {
  return (
    <div className="bg-[#b89266] p-10  h-full">
      
      <form className="max-w-5xl mx-auto space-y-6">

        
        <div className="grid md:grid-cols-2 gap-6 ">
          <input
            type="text"
            placeholder="Full Name*"
            className="form-input px-5 py-3 bg-white"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="form-input px-5 py-3 bg-white"
          />
        </div>

        
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="tel"
            placeholder="Phone Number"
            className="form-input px-5 py-3 bg-white "
          />

          <div className="relative">
            <input
              type="date"
              className="form-input w-full px-5 py-3 bg-white"
            />
          </div>
        </div>

       
        <div className="grid md:grid-cols-2 gap-6">
          <select className="form-input appearance-none px-5 py-3 bg-white">
            <option>Pediatric Clinic</option>
          </select>

          <select className="form-input appearance-none px-5 py-3 bg-white">
            <option>Choose Doctor</option>
          </select>
        </div>

       
        <textarea
          placeholder="Your Message"
          rows="6"
          className="form-input resize-none px-5 py-3 bg-white w-full"
        />

      
        <button type="submit" className="flex items-center gap-2 text-white font-semibold tracking-wide hover:opacity-80 transition" >
          SEND NOW
          <span className="text-xl">→</span>
        </button>

      </form>
    </div>
  );
};

export default AppointmentForm;



