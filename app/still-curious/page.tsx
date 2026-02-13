"use client";

const StillCurious = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Everything you need to know</h1>
          <p className="text-lg mb-8">Find answers to your questions and discover valuable resources.</p>
        </div>
      </section>

      {/* FAQ accordion (10 questions) */}
      <section className="bg-navy-500 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          {/* FAQ accordion goes here */}
          <p>FAQ accordion</p>
        </div>
      </section>

      {/* 2-Minute Visibility Quiz (8-10 questions, scoring, results with CTA) */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">2-Minute Visibility Quiz</h2>
          {/* Quiz goes here */}
          <p>Quiz</p>
        </div>
      </section>

      {/* Free Resources (5 downloadable items with email capture) */}
      <section className="bg-navy-500 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Free Resources</h2>
          {/* Resources with email capture go here */}
          <p>Resources</p>
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

export default StillCurious;