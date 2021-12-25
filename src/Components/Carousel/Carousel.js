import classes from './Carousel.module.scss';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = ({type,critiria}) => {

    const keyc='60c10e24c73f16afac0d36ebd74c0bb7';
    const [tmovies,setTmovies]=useState([]);
    let moviesu;
  
    const movies= async ()=> {
      const res= await fetch(`https://api.themoviedb.org/3/${type}/${critiria}?api_key=${keyc}`);
      const data= await res.json();
      setTmovies(data.results);
      console.log(data.results);
    }
  
    
    useEffect(movies,[type]);

  
  
    moviesu=(
    
  
      <div className={classes.Container}>
        {tmovies.map(movie=>{
          
          return(
            <SwiperSlide>
              <Card key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={type==='movie'? movie.title: movie.name}
                    vote={movie.vote_average}/>
           </SwiperSlide>
    )
        })}
      </div>)
    
   
  
   
    return (
      <div className={classes.Carousel}>
        <h2>{critiria}</h2>
        <Swiper
        spaceBetween={20}
        slidesPerView={5}
        navigation
      >
      {moviesu}
      </Swiper> 
      </div>
    );
  }

 
export default Carousel;