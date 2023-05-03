import React from 'react';
import '../App.css';
import './ContactInfoSection.css';

function ContactInfoSection() {

    var theme = localStorage.getItem("theme");

    console.log(theme);


    return (

        <div className={`info-container-${theme}`}>

            <div className='infoboxes-container'>

                <ul className='list_boxes'>
                    
                        <div className='infobox'>

                            <div className='textbox'>
                                <hc>Phone</hc>
                            </div>

                            <iconPhone className='textbox'>
                                <i className="fas fa-phone"></i>
                            </iconPhone>

                            <div className='textbox'>
                                <hc2>0700907172</hc2>
                            </div>

                        </div>
                    



                    <div className='infobox'>

                        <div className='textbox'>
                            <hc>Email</hc>
                        </div>

                        <iconMail className='textbox'>
                            <i className="fas fa-envelope"></i>
                        </iconMail>

                        <div className='textbox'>
                            <hc2>filip.pennsater@gmail.com</hc2>
                        </div>

                    </div>



                </ul>



            </div>

        </div>

    )
}

export default ContactInfoSection