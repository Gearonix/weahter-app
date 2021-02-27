import classes from './about.module.css';
import {connect} from "react-redux";
import Preloader from "../others/preloader/preloader";
import { Redirect} from 'react-router-dom';
import {toFind_ac as toFind} from './../../../reducers/find_reducer';

const About = function (props){
    // debugger
    if (!props.data){
        return  <Redirect to={'/find'} />
    }
    if (!props.onPage){
        return <Redirect to={'/find'} />
    }
    function cels(number){
        return Math.round(number-273.15)
    }
    let imageUrl = `http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`
    // debugger
    let current = new Date();
    let mounth = current.getMonth()+1
    let date = current.getDate()+'.' + mounth +'.'+current.getFullYear()
    console.log(date)
    return(
        <div className={classes.main}>
            <button onClick={() => props.toFind(false)} className={classes.exit}></button>
            <div className={classes.block}>
            <div className={classes.item}>
            <h3 className={classes.name}>{props.data.name}</h3>
            <h4 className={classes.date}>{date}</h4>
            <h4 className={classes.description}>{props.data.weather[0].main}</h4>
            <div className={classes.itemBlock}>
                <img src={imageUrl} alt="" className={classes.image}/>
                <h3 className={classes.temp}>{cels(props.data.main.temp)}&#186;</h3>
            </div>
            <div className={classes.minAndMaxBlock}>
                <h3>{cels(props.data.main.temp_min)}&#186;</h3>
                <h3>{cels(props.data.main.temp_max)}&#186;</h3>
            </div>
            </div>
            <div className={classes.item}>
                <h3 className={classes.himidity+' '+classes.descItem}>Himidity: {props.data.main.humidity}%</h3>
                <h3 className={classes.wind+' '+classes.descItem}>Wind: {props.data.wind.speed}M/S</h3>
                <h3 className={classes.cloudy+' '+classes.descItem}>Cloudy: {props.data.clouds.all}%</h3>
                <h3 className={classes.visibility+' '+classes.descItem}>Visibility: {Math.round(props.data.visibility/1000)}km</h3>
            </div>
            </div>
        </div>
    )
}

let state = function (state){
    return {
        data: state.find.data,
        onPage: state.find.onPage
    }
}

export default connect(state,{toFind})(About)