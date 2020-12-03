import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Mirá estos destinos INCREIBLES</h1>
            <div className="cards___container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explorá las cascadas escondidas en el Amazonas"
                        label="Aventura"
                        path="/servicios"
                        />
                         <CardItem
                        src="images/img-2.jpg"
                        text="Explorá las playas exclusivas en costa de Brasil"
                        label="Aventura"
                        path="/servicios"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.jpg"
                        text="Navegá por las hermosas aguas dee sus rios"
                        label="Aventura"
                        path="/servicios"
                        />
                         <CardItem
                        src="images/img-4.jpg"
                        text="Recorridos especiales para amantes del futbol"
                        label="Aventura"
                        path="/servicios"
                        />
                        <CardItem
                        src="images/img-8.jpg"
                        text="Medanos increibles que te haran sentir en el Sahara"
                        label="Aventura"
                        path="/servicios"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
