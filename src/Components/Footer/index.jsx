import React from "react";
 import { Link } from 'react-router-dom';

const Footer=()=>{
    return(
        <div class="footer-copyright navbar-dark bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div class="copyright-text">
                        <p>Copyright &copy; 2018, All Right Reserved</p>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-lg-block text-center text-right">
                    <div class="footer-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">Terms</Link></li>
                            <li><Link to="#">Privacy policy</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer