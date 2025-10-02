import React from 'react'

const Section3 = () => {
  return (
    <section className='relative mt-36 h-auto md:h-screen bg-[url(/reservation-bg.jpg)] bg-cover bg-center w-full flex items-center justify-center px-6'>
     
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl w-full py-12">
       
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className='text-white font-bold text-3xl md:text-5xl leading-snug'>
            Reserve Your Seats <br /> 
            to Confirm if You Come with Your Family
          </h1>
          <p className="text-gray-300 mt-4">
            Fill in the form to book your reservation and make sure your family is included.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input 
              type="number" 
              placeholder="Number of Seats" 
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea 
              placeholder="Additional Notes" 
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="3"
            ></textarea>
            <button 
              type="submit" 
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Section3

