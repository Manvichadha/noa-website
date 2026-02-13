"use client";

const ClientSite = ({ params }: { params: { subdomain: string } }) => {
  const { subdomain } = params;

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">{subdomain}'s Website</h1>
          <p className="text-lg mb-8">Welcome to {subdomain}'s website.</p>
        </div>
      </section>

      {/* About section */}
      <section className="bg-navy-500 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>About {subdomain} goes here...</p>
        </div>
      </section>

      {/* Services (checkboxes from DB) */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          {/* Services checkboxes go here */}
          <p>Services</p>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-navy-500 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          {/* Contact form goes here */}
          <p>Contact Form</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default ClientSite;