import React from 'react';
import { Link } from 'react-router-dom';
import "./LogIn.scss"
import LoginFormik from './LoginFormik/LoginFormik';
function LogIn() {
    return (
        <section className='Section_login'>
            <div className='login_width'>
                <div className='login_img_box'>
                    <img class="login_logo" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
                </div>

                <div className='login_box'>
                    <p className='ligin_box_p'>Facebook-a daxil olun</p>
                    <LoginFormik />
                    <div className='login_link'>
                        <Link>Hesabinizi unutmusunuz?</Link>
                        <Link to={"/register"}>Facebook-da qeydiyyatdan keçin</Link>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default LogIn