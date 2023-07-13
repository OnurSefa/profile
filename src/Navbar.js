import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar">
                <div className="navbarPages">
                    <div className="navbarPage">
                        <NavLink className="navbarProfile" to="/">
                            <div className="navbarProfileInner">
                                Home
                            </div>
                        </NavLink>
                    </div>
                    <div className="navbarPage">
                        <NavLink className="navbarProfile" to="/art">
                            <div className="navbarProfileInner">
                                Art
                            </div>
                        </NavLink>
                    </div>
                    <div className="navbarPage">
                        <NavLink className="navbarProfile" to="/projects">
                            <div className="navbarProfileInner">
                                Projects
                            </div>
                        </NavLink>
                    </div>
                    {/* <div className="navbarPage">
                        <NavLink className="navbarProfile" to="/writings">
                            <div className="navbarProfileInner">
                                Writings
                            </div>
                        </NavLink>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navigation