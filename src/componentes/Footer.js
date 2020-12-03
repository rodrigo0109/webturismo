import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Suscribite y recibí los mejores paquetes!
                </p>
                <p className="footer-subscription-text">
                    Podés darte de baja en cualquier momento
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Suscribirse</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre nosotros</h2>
                        <Link to='/sign-up'>Cómo funciona</Link>
                        <Link to='/'>Testimonios</Link>
                        <Link to='/'>Descuentos</Link>
                        <Link to='/'>Política de privacidad</Link>
                        <Link to='/'>Términos de servicio</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contacto</h2>
                        <Link to='/sign-up'>Contacto</Link>
                        <Link to='/'>Soporte</Link>
                        <Link to='/'>Destinos</Link>
                        <Link to='/'>Patrocinadores</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/'>Video</Link>
                        <Link to='/'>Embajadores</Link>
                        <Link to='/'>Agencia</Link>
                        <Link to='/'>Influencers</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Redes socialess</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>

                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>EXP <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>EXP&copy; 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
