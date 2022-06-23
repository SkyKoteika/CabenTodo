import Button from "../Button";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="upform">
        <div className="footer-row">
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            at?
          </p>
        </div>
        <div className="footer-row">
          <input type="checkbox" name="" id="age-checkbox" />
          <span>I am 16 years old or above</span>
        </div>

        <div className="footer-row input-section">
          <input
            type="email"
            name=""
            id="email"
            required
            placeholder="Email adress"
          />
          <Button className="short-button">Submit</Button>
        </div>
      </div>
      <div className="footer-row footlist">
        <div className="footul">
          <h3>Lorem, ipsum:</h3>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div className="footul">
          <h3>Lorem, ipsum:</h3>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div className="footul">
          <h3>Lorem, ipsum:</h3>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </div>
      <p className="rights">All rights are not protected</p>
    </footer>
  );
}
export default Footer;
