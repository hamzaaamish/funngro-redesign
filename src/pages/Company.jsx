function Company(){
  return(
    <div className="bg-[#071b16] text-white">


      {/* HERO */}

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl font-bold">
          Hire India's Young Creative Talent
        </h1>

        <p className="max-w-2xl mt-6 text-xl text-gray-300">
          Connect with skilled teenagers and get your projects completed
          faster with fresh ideas.
        </p>


        <button className="mt-8 bg-green-500 text-black font-bold px-8 py-4 rounded-full">
          Hire Talent
        </button>

      </section>



      {/* BENEFITS */}

      <section className="py-20 px-10">

        <h2 className="text-center text-4xl font-bold">
          Why Companies Choose Funngro
        </h2>


        <div className="grid md:grid-cols-3 gap-8 mt-12">


          <div className="bg-[#12352d] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              Affordable Talent
            </h3>

            <p className="mt-4 text-gray-300">
              Complete business projects without high hiring costs.
            </p>
          </div>



          <div className="bg-[#12352d] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              Fast Delivery
            </h3>

            <p className="mt-4 text-gray-300">
              Young creators bring speed and creativity together.
            </p>
          </div>



          <div className="bg-[#12352d] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              Future Ready
            </h3>

            <p className="mt-4 text-gray-300">
              Support the next generation while getting quality work.
            </p>
          </div>


        </div>

      </section>


    </div>
  )
}


export default Company;