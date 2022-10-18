import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {

 
  return (
    <nav className=" navbar navbar-expand-md navbar-dark bg-alert main-nav">
      <div className="container-fluid nav-logo">
        <Link to="/" className="nav-logo-text" >
              <h4>MovieFlix </h4>
        </Link>

        <div className='logout mb-2' >
        <a  href='#logout'> SAIR</a>
      </div>
        
      </div>
      
        
     
    </nav>
  );
};

export default Navbar;