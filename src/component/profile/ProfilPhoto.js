import myImage from './profilephoto.png';
import '../../App.css';


function Image() {
    return (
      <div className="image">
        <img src={myImage}  alt="myphoto" width={300} height={300} />
      </div>
    );
  }
  
  export default Image;