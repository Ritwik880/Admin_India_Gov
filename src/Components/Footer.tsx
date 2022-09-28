import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (

        <>
            <footer className='footer'>
                <div className='row container'>
                    <div className='footerItems'>
                        <Link to='/disclaimer' className='linkFooterItem'>
                            Disclaimer
                        </Link>

                        <Link to='/copyright' className='linkFooterItem'>
                            Copyright Policy
                        </Link>


                        <Link to='/privacy-policy' className='linkFooterItem'>
                            Privacy Policy
                        </Link>


                        <Link to='/terms-condition' className='linkFooterItem'>
                            Terms & Conditions
                        </Link>


                        <Link to='/refund-policy' className='linkFooterItem'>
                            Refund Policy
                        </Link>
                    </div>


                </div>
            </footer>
        </>

    )
}

export default Footer