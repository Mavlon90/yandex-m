import React from 'react'

export default function Goods(props) {
    return (
        <div className="productsBorder">
        <article>
           
        <a href={props.productLink}>
        <img src={props.imgUrl} alt=""/><br/>
           <div className="colorAmount"> <strong>{props.price}</strong>
            <span>₽</span>
            <span>{props.money}</span></div>
             <div>{props.productName}</div>
             </a>
        </article>
    </div>
    )
}
