import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-md navbar-dark bg-alert main-nav">
      <div className="container-fluid nav-logo">
        <a href="link" className="nav-logo-text">
          <h4>MovieFlix </h4>
        </a>

        <div className='logout mb-2' >
        <a  href='#logout'> SAIR</a>
      </div>
        
      </div>
      
        
     
    </nav>
  );
};

export default Navbar;
