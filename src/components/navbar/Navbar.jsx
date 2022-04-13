import React, { Fragment } from 'react';
import './navbar.css'


const navbar = ({ icon, title, pages }) => {
  return (
    <Fragment>
      <nav id="menu" className="navbar navbar-expand-lg navbar-light bg-white fixed-top" >
        <div className='container ' style={{ display: 'flex', justifyContent: 'space-between', minWidth: '500px' }}>
          <div >
            <a href=""><img src={icon} alt="" width="100" height="80" class="d-inline-block align-text-top" /></a>
            <a className="navbar-brand" href="#">{title}</a>
          </div>
          <div class="">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {pages.map((page, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <a className={page.class} aria-current="page" href="#">{page.name}</a>
                    </li>
                  )
                })}
              </ul>
            
            </div>
          </div>

        </div>
      </nav>

    </Fragment>

  );

}

export default navbar;
