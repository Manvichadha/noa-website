"use client";

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">We're in the business of giving you back your business</h1>
          <p className="text-lg mb-8">We help you reclaim your time and focus on what matters most.</p>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-navy-500 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">The Story</h2>
          <p>Noa's narrative goes here...</p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
          <ul>
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
            <li>Bullet point 4</li>
          </ul>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-navy-500 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p>4-step process timeline goes here...</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded">Book Free Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default About;