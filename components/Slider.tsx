import React, {useState} from 'react'
// import "./Slider.css"
// import BtnSlider from "./BtnSlider"
import animeItems from "../data/items.json"
import {Card} from 'react-bootstrap';
type AnimeItemProps = {
    id: number,
    name: string,
    discription: string,
    imgUrl: string
  }


  export function Slider({id,name,discription,imgUrl}: AnimeItemProps) {
       const [currentSlide, setCurrentSlide] = useState(0)

    function nextSlide () {
        if (currentSlide !== animeItems.length) {
            setCurrentSlide(currentSlide + 1)
        } else if (currentSlide === animeItems.length){
            setCurrentSlide(1)
        }
    }

    function prevSlide () {
        if (currentSlide !== 1){
            setCurrentSlide(currentSlide - 1)
        } else if(currentSlide === 1){
            setCurrentSlide(animeItems.length)
        }
    }

    return(
        <div className='container-slider'>
            {animeItems.map((obj,index) => {
                return (
                    <Card key={obj.id}
                    className=''>
                        <img src={imgUrl}></img>
                    </Card>
                     
                )
            })
}</div>
) 
}