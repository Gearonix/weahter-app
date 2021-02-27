import classes from './main.module.css';
import {Route,Switch,Redirect} from "react-router-dom";
import Find from "./find/find";
import About from "./about/about";
import Error404 from "./others/error404/error404";

const Main = function (){
    return(
        <main className={classes.main}>
            <Switch>
            <Route path={'/find'} component={Find} />
            <Route path={'/about'} component={About} />
            <Route exact path={'/'} render={() => <Redirect to={'/find' } />} />
            <Error404 />
            </Switch>
        </main>
    )
}

export default Main