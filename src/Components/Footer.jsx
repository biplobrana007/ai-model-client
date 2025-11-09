import React from "react";
import Logo from "./Logo";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <footer className="footer footer-horizontal footer-center  text-primary-content p-10">
          <aside>
            <Logo></Logo>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            <Link
              className="text-3xl"
              to="https://github.com/biplobrana007/ai-model-client.git"
            >
              <FaGithub></FaGithub>
            </Link>
          </aside>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
