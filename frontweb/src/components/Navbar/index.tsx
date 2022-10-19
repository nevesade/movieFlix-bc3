
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, getTokenData, TokenData } from 'utils/auth';
import { removeAuthData } from 'utils/storage';
import history from 'utils/history';
import './styles.css';
import { AuthContext } from 'AutContext';


type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};


const Navbar = () => {

  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });



  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
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

      
        {authData.authenticated ?  (
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