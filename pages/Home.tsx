import { Slider } from "../components/Slider"
import animeItems from "../data/items.json"



export function Home () {
    return (
   <div>
      <h1>Hello</h1>
      <div>
         {animeItems.map(item => (
         <div key={item.id}><Slider {...item}/></div>
         ))}
       
      </div>
    </div>
    )
}