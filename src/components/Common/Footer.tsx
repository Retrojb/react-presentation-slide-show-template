import {NavLink} from "react-router-dom";
import React from "react";
import {Button} from "primereact/button";

const Footer = () => {
    return (
        <div className='grid border-3 justify-content-around'>
            <div className='col-3 border-2'>
                <div className='flex flex-column align-items-center'>
                    <div className='flex flex-column'>
                        <NavLink to='/aboutme'>About Me</NavLink>
                        <NavLink to='/contactme'>Contact Me</NavLink>
                    </div>
                </div>
            </div>
            <div className='col-3 border-2'>
                <div className='flex flex-column align-items-center'>
                    <div className='flex flex-row'>
                        <NavLink to='/'><Button icon="pi pi-linkedin" /></NavLink>
                        <NavLink to='/'><Button icon="pi pi-twitter" /></NavLink>
                        <NavLink to='/'><Button icon="pi pi-github" /></NavLink>
                    </div>
                    <p>Retrojb 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;