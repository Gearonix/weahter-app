import classes from './inputs.module.css';

export const Input = function ({input,meta,...props}){
    debugger
    return(
        <div className={meta.error ? classes.main : classes.errorDiv}>
        <input {...input} {...props} />
        <span className={classes.error}>{meta.error}</span>
        </div>
    )
}