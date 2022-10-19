
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, getTokenData } from 'utils/auth';
import { removeAuthData } from 'utils/storage';
import history from 'utils/history';
import './styles.css';
import { AuthContext } from 'AutContext';




const Navbar = () => {
  const {authContextData, setAuthContextData } = useContext(AuthContext );

  

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

 
  return (
    <nav className=" navbar navbar-expand-md navbar-dark bg-alert main-nav">
      <div className="container-fluid nav-logo">
        <Link to="/" className="nav-logo-text"  >
              <h4>MovieFlix </h4>
        </Link>

      
        {authContextData.authenticated ?  (
            <>
               <div className='logout mb-2' >
                
                
               <a href="#logout" onClick={handleLogoutClick}>
                Sair
              </a>
              
               </div>
             

            
              
            </>
          )  : '' }
    
        
      </div>

 
      
        
     
    </nav>
  );
};

export default Navbar;