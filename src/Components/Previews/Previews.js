import { useState } from "react";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import Center from "../Center/Center";

const Previews = ({type,setType}) => {

    return ( 
      <div>
        <Center>
          <Button type='movie' setType={setType}>Movies</Button>
          <Button type='tv' setType={setType}>Series</Button>
        </Center>
        <Carousel type={type} critiria='popular'/>
        <Carousel type={type} critiria='top_rated'/>
     </div> );
}
 
export default Previews;