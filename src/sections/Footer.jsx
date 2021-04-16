import React from "react";
import Anchor from "../components/Anchor";
import "../styles/footer.scss";
import socialLinks from "../data/social-links.json";

export default function Footer() {
  return (
    <footer id="contact">
      <h4>
        Email: <small>abdugaffor.abdurakhimov@gmail.com</small>
      </h4>
      <div>
        {"or"}
        <h4>You can reach me through: </h4>
        {socialLinks.map((link, idx) => (
          <Anchor
            key={idx}
            href={link.link}
            text={<img alt={link.name} width="30px" src={link.icon} />}
          />
        ))}
      </div>
      <div className="copyright">
        <small>Copyright &copy; 2021 Abdug'affor Abdurahimov</small>
      </div>
    </footer>
  );
}
