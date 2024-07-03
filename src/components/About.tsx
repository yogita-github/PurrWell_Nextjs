const About = () => (
  <section className="bg-white py-10" id="about">
    <div className="container mx-auto text-center">
      <div className="mb-10">
        <div className="text-5xl">💜</div>
        <h2 className="text-4xl text-orange-500 font-bold">About Us</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 pr-10">
          <img src="https://picsum.photos/300" className="rounded" alt="About Us" />
        </div>
        <div className="w-1/2">
          <p className="text-lg">We are passionate about providing the best services to your pets. Our team of professionals ensures the highest standards of care and comfort.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
