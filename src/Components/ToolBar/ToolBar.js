import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import SearchBar from './SearchBar/SearchBar';
import classes from './ToolBar.module.scss';
const ToolBar = () => {
    return ( 
        <header className={classes.header} >
            <Link to="/"><h1>Movies</h1></Link>
            
            <SearchBar/>
            <Nav/>
        </header>
     );
}
 
export default ToolBar;