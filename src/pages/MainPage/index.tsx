import './MainPage.css'
import SaleSliderBuilder from '../../components/Sliders/SaleSliderBuilder';

const MainPage = () => {

    return (
      <div className="upper">
        <div id="uppertext">
          <h1>Caben-Todo Shopping Website</h1>
          
        </div>
        <SaleSliderBuilder/>
      </div>
    );
  }
  
  export default MainPage;