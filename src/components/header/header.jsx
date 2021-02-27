import classes from './header.module.css';

const Header = function (){
    return(
        <header className={classes.main}>
        <div className={classes.logo}></div>
        <h1 className={classes.title}>Weather App</h1>
        </header>
    )
}

export default Header