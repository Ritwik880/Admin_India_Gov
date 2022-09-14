import React from 'react';
import Cta from './Cta';
import Notification from './elements/Notification';
import Table from './Table'
const Home = () => {

    return (
        <>
            <div className="pb-6 d-flex align-items-center home-page">
                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <Notification />
            <Table />
            <Cta />


        </>
    )
}

export default Home