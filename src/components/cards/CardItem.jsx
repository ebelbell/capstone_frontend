// individual cards

import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <>
        <li className="recipe__item">
            <Link className="recipe__item__link">
            {/* The card's description and image  */}
              <figure className="recipe__item__pic-wrap">
              <img src={`/images/${src}`} alt="PB-cookies" className="recipe__item__img" />
              </figure>
              <div className="recipe__item__info">
                <h5 className="recipe__item__text"></h5>
              </div>

            </Link>
        </li>
    </>
  )
}

export default CardItem;