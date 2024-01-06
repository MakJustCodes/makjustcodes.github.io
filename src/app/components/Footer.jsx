import React from "react";
const footerTextCenter = "p-4 text-center";
const heartColor = "text-red-500";

const Footer = () => {
  return (
    <footer className={footerTextCenter}>
      <br></br>
      <br></br>
      <br></br>
      Made with <span className={heartColor}>&#10084;</span> by{" "}
      <a
        href="https://makenson.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Makenson Noel
      </a>
    </footer>
  );
};

export default Footer;
