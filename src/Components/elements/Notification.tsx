import React from 'react'
import { BUTTONDATA as data } from '../../utils/constants';
const Notification = () => {


    return (
        <>

            <section className='noti'>
                {/* <ButtonMap /> */}
                <div className='mapButtons'>
                    {
                        data.map((item, i) => {
                            return (
                                <button key={i} className='mapData'>
                                    {item.title}
                                </button>
                            )
                        })
                    }

                </div>

                <div className="box">
                    <div className="head">
                        <h1 style={{ fontSize: '2rem' }}> What's new</h1>
                    </div>
                    <div className="text">
                        <p className='textPara'>No Notification Found!</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Notification