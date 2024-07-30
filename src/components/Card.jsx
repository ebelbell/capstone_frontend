import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card(props) {
  return (
    <div className="cards">
        {/* Cards container. Wraps all of the <li>s and the card container */}
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {/* pass in the card component */}
                    <CardItem 
                        src="flourless-peanut-butter-cookies-4.jpg" 
                        text="Peanut Butter cookies"
                        label="food__dessert"
                        path="/recipe/:id"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card;