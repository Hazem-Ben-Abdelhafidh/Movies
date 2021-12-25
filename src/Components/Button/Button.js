import classes from './Button.module.scss';
const Button = (props) => {
    const change= ()=> {
       props.setType(props.type);
    }
    return ( 
        <button className={classes.Button} onClick={change}>
            {props.children}
        </button>
     );
}
 
export default Button;