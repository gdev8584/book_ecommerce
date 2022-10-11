import React from 'react'

const Card = ({item, handleClick}) => {
    const {id, title, author, price, img} = item;
  return (
    <div className="col mt-3">
            <div className="card mx-auto" style={{width: "16rem"}}>
        <img style={{height: "300px"}} src={img} className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{author}</p>
            <p className='card-text'>₹ {price}</p>
            <button onClick={()=>handleClick(item)} className="btn btn-primary">Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default Card