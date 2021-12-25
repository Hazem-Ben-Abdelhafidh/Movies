import { Link } from "react-router-dom";
import classes from "./Card.module.scss";
const Card = ({id,poster,title,vote}) => {
    return ( 
            <div className={classes.Container}>
                 <Link to={`/Results/${id}`}>
                    <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="poster" className={classes.image}/>
                </Link>
                 <h3>{title}</h3>
                 <span>Rating: {vote}</span>
            </div>
     );
}
 
export default Card;