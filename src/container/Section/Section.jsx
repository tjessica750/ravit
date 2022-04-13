import React from 'react';
import './Section.css'

const Section = ({ }) => {
    return (
        <div className="">
            <div className="row">
                <div className="col-md-6 col-xs-12 text-left">
                    <img src="https://www.stratusmedia.io/img/desarrollo-aplicacion-movil.png"
                        alt="img" class="img-movil"></img>
                    <div class="caption">
                        <p className='weight'>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45.</p>
                    </div>
                </div>
                <div id="p" className="col-md-6 col-xs-12 text-left">
                    <h4 className='weight'>The standard Lorem Ipsum passage, used since the 1500s</h4>
                     <br />
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <br />
            <div className="row line">
                <div className="col ">
                    <div className='text-content'>
                        <h2 className='dashes-to-title weight'> <span>What We Do</span></h2>
                        <br />
                        <p>Through our custom Agile development method, we bring your mobile and web app ideas to reality.</p>
                        <p>We stand out for our top development skills but we are much more than that. We are a genuine strategic business partner.</p>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            {/* publicidad*/}
            <div class="row line">
                <div class="col-xs-12">
                    <h3 className='weight'>1914 translation by H.</h3>
                    <div class="menu-publicidad">
                        <div class="publicidad">
                            <a
                                href="https://economipedia.com/definiciones/swift.html">
                                <h2 class="numeros">1</h2>
                                <span>
                                    SWIFT
                                </span>
                            </a>
                        </div>
                        <div class="publicidad">
                            <a
                                href="https://www.apple.com/co/">
                                <h2 class="numeros">2</h2>
                                <span>
                                    Apple (Colombia)
                                </span>
                            </a>
                        </div>
                        <div class="publicidad">
                            <a
                                href="https://www.apple.com/co/mac/">
                                <h2 class="numeros">3</h2>
                                <span>
                                    Mac - Apple (CO)
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container  letter_type">
                <div className="row line ">
                    <div class="col-xs-12 line">
                        <h4 className='weight'>Mobile and Web Apps for Startups and Enterprises</h4>
                    </div>
                </div>
                <div className="row line">
                    <div className="col-sm-3">
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span className='end-to-end__services'>
                                    Custom app development
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span>
                                    Product Ideation
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span>
                                    eCommerce solutions
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span>
                                    DevOps services
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span>
                                    Web Development
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span>
                                    Product design (UX/UI)
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span>
                                    Minimum Viable Product (MVP)
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span>
                                    Quality Assurance
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span >
                                    IT staff augmentation
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                        <div className="row line item">
                            <a href="https://www.apple.com/co/" className='end-to-end__link'>
                                <span>
                                    Product Discovery
                                </span>
                                <hr className='short-line' />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src="https://us.123rf.com/450wm/yupiramos/yupiramos1907/yupiramos190723986/126533282-mujer-y-hombre-con-ilustraci%C3%B3n-de-vector-de-tecnolog%C3%ADa-de-medios-de-tel%C3%A9fono-inteligente.jpg?ver=6"
                            alt="img" class=""></img>
                        <p className='weight'>which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section;