import classes from './Nav.module.scss';
const Nav = () => {
    return ( 
        <nav className={classes.Nav}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Movie db</a></li>
            </ul>
        </nav>
     );
}
 
export default Nav;