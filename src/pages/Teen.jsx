import { motion } from "framer-motion";

function Teen() {
  return (
    <div className="bg-[#071b16] text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-6xl font-bold">
            Turn Your Skills Into Income 🚀
          </h1>

          <p className="max-w-2xl mt-6 text-xl text-gray-300">
            Funngro helps teenagers work on real company projects,
            gain experience and start earning early.
          </p>

          <button className="mt-8 bg-green-500 text-black font-bold px-8 py-4 rounded-full">
            Explore Projects
          </button>

        </motion.div>

      </section>



      {/* SKILLS */}

      <section className="py-20 px-10">

        <h2 className="text-4xl text-center font-bold">
          Start with your skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {[
            "Website Development",
            "Content Writing",
            "Graphic Design",
            "App Testing",
            "Social Media",
            "Video Editing",
          ].map((item) => (
            <div 
              key={item}
              className="bg-[#12352d] p-8 rounded-2xl text-center text-xl hover:scale-105 transition"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Teen;