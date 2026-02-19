const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          {/* Logo + Tagline */}
          <p>BleuKei - Stop Wasting Time. Start Growing Your Business.</p>
        </div>

        <div className="flex space-x-4 mb-4">
          {/* Quick Links */}
          <a href="/about">About</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/still-curious">Still Curious?</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="flex space-x-4 mb-4">
          {/* Social Icons */}
          <a href="https://www.linkedin.com/in/noabberger/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/noableu/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <div className="mb-4">
          {/* Email Button */}
          <a href="mailto:NB@noaberger.com">NB@noaberger.com</a>
        </div>

        <div className="flex space-x-4">
          {/* 5 Service Icons */}
          <p>Service Icons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;