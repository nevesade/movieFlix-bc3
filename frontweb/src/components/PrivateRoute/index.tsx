/* import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'utils/auth';

type Props = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ children, path }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute; */



import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'utils/auth';

 
type Props = {
  children: React.ReactNode;
  path: string;
};
 
const PrivateRoute = ({ children, path }: Props) => {
 
  return (
    <Route
      path={path}
      render={() =>
        isAuthenticated() ?  <>{children}</> : <Redirect to="/" />
      }
    />
  );
};
 
export default PrivateRoute;
