import React, { Fragment } from 'react';
import './Footer.css';
import icon from '../../resources/icon.PNG';


const Footer = () => {
    return (
        <Fragment>
            <br />
            <div className="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <footer class="">
                            <div class="">
                                <div className="row line">
                                    <br />
                                    <div className="col-sm-4">
                                        <a href=""><img src={icon} alt="" width="100" height="80" class="d-inline-block align-text-top" /></a>
                                        <div class="phone">
                                            <p>
                                                Call us: (57) (5) 333-3333 /
                                                999-999-9999
                                            </p>
                                            Teléfono:
                                            (1)
                                            333 3333
                                        </div>
                                    </div>
                                    <div className="col-sm-2 ">
                                        <div className="row ">
                                            <h5>Our Specialities</h5>
                                        </div>
                                        <div className="row ">
                                            <p>EdTech</p>
                                        </div>
                                        <div className="row ">
                                            <p>FinTech</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="row ">
                                            <h5>Locations</h5>
                                        </div>
                                        <div className="row ">
                                            <p>Barranquilla, CO</p>
                                        </div>
                                        <div className="row ">
                                            <p>Bogota, CO</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="row ">
                                            <h5>Partners</h5>
                                        </div>
                                        <div className="row ">
                                            <p>AWS Partners</p>
                                        </div>
                                        <div className="row ">
                                            <p>Partner with Ravit</p>
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                    </div>
                                </div>
                                {/* <div class="panel-footer line"> <a href="https://www.Ravit/">https://www.Ravit.co/</a>
                                </div> */}
                            </div>
                            <br />
                        </footer>
                    </div>
                </div>
            </div>


        </Fragment>
    );
}
export default Footer;
