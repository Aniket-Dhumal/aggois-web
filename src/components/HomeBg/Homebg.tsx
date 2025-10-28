import './Homebg.css';
import { Image } from 'react-bootstrap';
import trackter from '../../assets/images/trackter_vehicle.png';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../assets/images/HomeBg5.jpg'

const Homebg: React.FC = () => {
  const navigate = useNavigate();

  const redirectProduct=()=>{
    navigate('/product');
  }
  return (
    <div className="container-fluid" id='homebg' style={{backgroundImage:`url(${bgImg})`}}>
      <div className="homebg">
        <div className="homebg-content">
          <div className="homebg-title">
            De-Risking Agriculture
          </div>
          <div className="homebg-text">
            Platform for financial requirements of Bharat.
            Born out of desire to give farmers an endurable future.
          </div>
          <div className="homebg-fondOut">
            <button onClick={redirectProduct} className='homebg-findOut-btn'>Explore More</button>
          </div>
        </div>
      </div>

      <div className='trackter'>
          <Image src={trackter} className='trackter-img' fluid/>
      </div>
    </div>
  );  
};

export default Homebg;