import { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./CardDetails.module.scss";
import Center from "../Center/Center";
const CardDetails = ({type}) => {
    const id= useParams().id;
    const keyc='60c10e24c73f16afac0d36ebd74c0bb7';
    const [details,setDetails]=useState({});
    let genres=[];
    try {
         genres=(details.genres).map(gen=>gen.name +"/")}
        catch(error){
        console.log('sorry');
        genres='sorry';
        };

    const fetchDetails = async ()=> {
        const res= await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${keyc}&language=en-US`);
        const data= await res.json();
        setDetails(data);
    
    }
    useEffect(fetchDetails,[]);
    
    console.log(details);
    return (<div className={classes.Container}>
        <div>
            <h1>{type==='movie'?details.title : details.name}</h1>
            <p>{ genres}</p>           
            <img src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} alt={details.title} />
        </div>
       
       
        <h2>Rating: <span>{details.vote_average}</span></h2>
        <h2>Overview:</h2>
        <p>{details.overview}</p>
    </div> );
}
 
export default CardDetails;