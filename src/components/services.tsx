const Services = () => (
  <div className="text-center py-10 bg-orange-100" id="service">
    <div className="mb-10">
      <div className="text-5xl">🐾</div>
      <h2 className="text-4xl text-orange-500 font-bold">Our Services</h2>
    </div>
    <h2 className="text-5xl mb-10">Services We Provide</h2>
    <div className="flex flex-wrap justify-center gap-10">
      <div className="bg-yellow-100 rounded-2xl shadow-lg p-5 w-64">
        <div className="w-14 h-14 mx-auto mb-5">
          <img src="/service1.png" alt="Service 1" className="rounded-full w-full h-full object-cover" />
        </div>
        <h3 className="text-2xl mb-2">Grooming</h3>
        <p className="text-gray-600 mb-4">Pet grooming involves maintaining the hygiene and appearance of your furry friend.</p>
        <a href="#" className="text-orange-500 font-bold">View Details →</a>
      </div>
      <div className="bg-yellow-100 rounded-2xl shadow-lg p-5 w-64">
        <div className="w-14 h-14 mx-auto mb-5">
          <img src="/service2.png" alt="Service 2" className="rounded-full w-full h-full object-cover" />
        </div>
        <h3 className="text-2xl mb-2">Boarding</h3>
        <p className="text-gray-600 mb-4">Pet grooming involves maintaining the hygiene and appearance of your furry friend.</p>
        <a href="#" className="text-orange-500 font-bold">View Details →</a>
      </div>
      <div className="bg-yellow-100 rounded-2xl shadow-lg p-5 w-64">
        <div className="w-14 h-14 mx-auto mb-5">
          <img src="/service3.png" alt="Service 3" className="rounded-full w-full h-full object-cover" />
        </div>
        <h3 className="text-2xl mb-2">Vaccinations</h3>
        <p className="text-gray-600 mb-4">Pet grooming involves maintaining the hygiene and appearance of your furry friend.</p>
        <a href="#" className="text-orange-500 font-bold">View Details →</a>
      </div>
    </div>
  </div>
);

export default Services;
