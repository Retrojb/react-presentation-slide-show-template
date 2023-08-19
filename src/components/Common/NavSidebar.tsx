import React, {useState} from "react";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { NavLink } from "react-router-dom";

const  NavSidebar = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );
    return (
        <div className={'card flex justify-content-between border-3'}>
            <Sidebar visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
                <h2>RetroJB Presentation</h2>
                <ul>
                    <li className=''><NavLink to='/intro' className=''>Introduction</NavLink></li>
                    <li className=''><NavLink to='/aboutme' className=''>About Me</NavLink></li>
                    <li className=''><NavLink to='/slides' className=''>Presentation</NavLink></li>
                    <li className=''><NavLink to='/contactme' className=''>Contact Me</NavLink></li>
                </ul>
            </Sidebar>
            <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
            <NavLink to='/'><Button icon="pi pi-home"  /></NavLink>
        </div>
    )
}

export default NavSidebar;