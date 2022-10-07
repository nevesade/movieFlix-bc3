import Navbar from "components/Navbar";
import Home from "pages/Home";
import MovieDetails from "pages/Private/MovieDetails";
import MovieCatalog from "pages/Private/MoviesCatalog";
import { BrowserRouter, Route,Switch } from 'react-router-dom';



const Routes = () => (

    <BrowserRouter >
        <Navbar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/movies" exact>
                <MovieCatalog/>
            </Route>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/movies/:movieId" >
                <MovieDetails/>
            </Route>

        </Switch>
        
        
    </BrowserRouter>
);


export default Routes;