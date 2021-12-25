import { useContext, useEffect, useState } from 'react';
import classes from './SearchResults.module.scss';
import { MovieContext } from '../../MovieContext';
import Card from '../Card/Card';
const SearchResults = () => {
    const {input,query}= useContext(MovieContext);
    const [queryValue,setQueryValue]= query;
    const keyc='60c10e24c73f16afac0d36ebd74c0bb7';
    const [tmovies,setTmovies]=useState([]);
    let moviesu;
  
    const searchResults= async ()=> {
       try{
      const res= await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${keyc}&query=${queryValue}`);
      const data= await res.json();
      setTmovies(data.results);}
      catch(err) {
          console.log('error');
      }
    }
    
    useEffect(searchResults,[queryValue]);
    moviesu=tmovies.map(movie=>{
        return ( movie.poster_path === null ? null :
        <Card key={movie.id} 
            id={movie.id} 
            poster={movie.poster_path} 
            title={movie.title} 
            vote={movie.vote_average}/>)
           
        
    })
    console.log(query);

    
    return ( 
        <div className={classes.Results}>
            {moviesu}
        </div>
     );
}
 
export default SearchResults;