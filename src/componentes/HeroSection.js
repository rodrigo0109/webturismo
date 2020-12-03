import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>LA AVENTURA ESPERA</h1>
            <p>¿Que estás esperando?</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                EMPIEZA YA
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                VER TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection

