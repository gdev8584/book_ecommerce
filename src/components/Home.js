import React, { useState } from 'react'
import list from '../source'
import Card from './Card'

const Home = ({handleClick}) => {
    // Here I use uplifting the data:
    // const [cart, setCart] = useState([]);
    // const handleClick = (item) =>{
    //     cart.push(item);
    //     console.log(cart)
    // }

  return (
    <section>
        <div className="container">
            <div className="row mt-2">
        {
            list.map((item)=>(
                <Card key={item.id} item={item} handleClick={handleClick} />
            ))
        }
         </div>
        </div>
    </section>
  )
}

export default Home