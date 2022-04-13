import React from 'react';
import './Header.css'
import Navbar from '../../components/navbar/Navbar';
import icon from '../../resources/icon.PNG';

const header = ({}) =>{
return (
    <div className="">
         <Navbar title={''} icon={icon} pages={[{name:'Home', class:'nav-link active'},{name:'About', class:'nav-link active'},{name:'Services', class:'nav-link active'}, {name:'Our Work', class:'nav-link active'}]} />
    </div>
)
}
export default header;