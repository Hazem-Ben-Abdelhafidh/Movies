import classes from './SearchBar.module.scss';
import {BsSearch} from 'react-icons/bs';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { MovieContext } from '../../../MovieContext';
const SearchBar = () => {
    const {input,query}= useContext(MovieContext);
    const [queryValue,setQueryValue]= query;
    const [inputValue,setInputValue] = input;
    const history= useHistory();
    const submitHandler=(e)=> {
        e.preventDefault();
        setQueryValue(inputValue);
        history.push(`/Results`);
    }
    return ( 
        <div >
            <form className={classes.SearchBar} onSubmit={submitHandler} >

                <input type="text" placeholder="..." value={inputValue} onChange={e=>setInputValue(e.target.value)} required  />
                <button>
                    <BsSearch/>
                </button>
            </form>
                
        </div>
     );
}

 
export default SearchBar;