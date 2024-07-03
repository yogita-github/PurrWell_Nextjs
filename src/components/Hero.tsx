const Hero = () => (
  <section className="bg-orange-100 py-10">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex-1">
        <p className="text-5xl font-bold">There is nothing more important to us than your pet</p>
        <h3 className="text-gray-600 py-5">Pets are humanizing. They remind us we have an obligation and responsibility to preserve and nurture and care for all life</h3>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-pink-500 text-xl font-semibold">Make an Appointment</button>
      </div>
      <div className="flex-1">
        <img src="/home_image.png" alt="Image" className="rounded" />
      </div>
    </div>
    
    <div className="mt-10 text-center">
      <div className="flex justify-center space-x-4">
        <img src="https://picsum.photos/70" className="rounded-full w-24 h-24" alt="Avatar" />
        <img src="https://picsum.photos/80" className="rounded-full w-24 h-24" alt="Avatar" />
        <img src="https://picsum.photos/90" className="rounded-full w-24 h-24" alt="Avatar" />
        <img src="https://picsum.photos/100" className="rounded-full w-24 h-24" alt="Avatar" />
      </div>
      <p className="mt-2 text-xl font-semibold">10k+</p>
      <p className="text-gray-600">Satisfied Clients</p>
    </div>
  </section>
);

export default Hero;
