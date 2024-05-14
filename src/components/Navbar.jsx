import React from "react";
import 'boxicons';
import './Navbar.css';
export default function Navbar() {
    
    const navClicked = () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('show-menu');

    }
    return (
        <header className="">
                <nav className="">
                    <ul className={"nav-links"}>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href={"#home"}>
                                <div className={"icon"}><i className='bx bx-home-alt-2'></i></div>
                                <span>Home</span></a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href={"#about"}>
                                <div className={"icon"}><i className='bx bx-info-circle'></i></div>
                                <span>About</span></a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href={"#skills"}>
                                <div className={"icon"}><i className='bx bx-code-alt'></i></div>
                                <span>Skills</span></a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"} href={"#projects-sec"}>
                                <div className={"icon"}><i className='bx bx-paperclip'></i></div>
                                <span>Projects</span></a>
                        </li>
                    </ul>
                </nav>
                <label htmlFor="nav_check" className="hamburger" onClick={navClicked}>
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
        </header>
    );
}