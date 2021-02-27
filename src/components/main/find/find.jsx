import classes from './find.module.css';
import {connect} from 'react-redux'
import {fundCityTC as findCity} from '../../../reducers/find_reducer';
import {reduxForm,Field} from "redux-form";
import {Redirect} from 'react-router-dom';


const Find = function (props){
    function search(data){
        // debugger
        props.findCity(data.search)
    }
    if (props.onPage){
        return <Redirect to={'/about'}/>
    }
    return(
        <div className={classes.main}>
            <FindFormCT onSubmit={search}/>
        </div>
    )
}
const FindForm = function (props){
    console.log(props.error)
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={classes.searchBlock}>
            <Field type="text" component={'input'} name={'search'} placeholder={'Find city...'} className={classes.search}
                   autoComplete={'off'} />
            <button className={classes.button}></button></div>
            <span className={classes.error}>{props.error}</span>
        </form>
    )
}

const FindFormCT = reduxForm({
    form : 'find'
})(FindForm)

let state = function (state){
    return{
        onPage: state.find.onPage,
        error : state.find.error
    }
}




export default connect(state,{findCity})(Find)