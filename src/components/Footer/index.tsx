import './footer.css'

function Footer(){
    return(
   <footer>
    <div className="upform">
      <h2>Lorem, ipsum.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, at?
      </p>
      <form action="" id="form">
        <p><input type="checkbox" name="" id="" />I am 16 years old or above</p>
        <div className='email_and_butt'>
        <input
          type="email"
          name=""
          id="email"
          size = {40}
          required
          placeholder="Email adress"
                    />
        <button type="submit" id="formbutt">Submit</button>
        </div>
      </form>
    </div>
    <div className="footlist">
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