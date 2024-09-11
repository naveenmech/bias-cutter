// components/Footer.js
import Link from "next/link";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 rounded-bl-[20px] rounded-br-[20px] ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 px-4">
        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p>
            Email:
            <a
              href="mailto:vas.naveekumar99@gmail.com"
              className="text-blue-400"
            >
              vas.naveekumar99@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <a href="tel:+919842850819" className="text-blue-400">
              +91 9842850819
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/naveenkumar-a-b0b172278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              linkedin.com/in/naveenkumar-a
            </a>
          </p>
        </div>

        {/* Copyright and Name */}
        <div className="text-center lg:text-right">
          <p className="text-white">
            &copy; {currentYear} NAVEENKUMAR A | SOFTWARE DEVELOPER
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
