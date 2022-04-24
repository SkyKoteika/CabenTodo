import Maining from '../../images/Maining2.png'
import './MainPage.css'


function MainPage() {

    return (
      <div className="upper">
        <div id="uppertext">
          <h1>Caben-Todo Shopping Website</h1>
          
        </div>
        <img src={Maining} alt="Main Image" className="bigimg" />
      </div>
    );
  }
  
  export default MainPage;