import React from 'react'
import Cta from './Cta'

const Refund = () => {
    return (
        <>
            <div className="pb-6 d-flex align-items-center refund-page">


                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <section className='refundSection'>
                <div className="row container">
                    <h1 className='refundHead'>Refund Policy</h1>
                    <p className='aboutPara'>To process the Applications Indian Skill Development Organization charges Nominal Application Fee/Intimation Charges for all its openings. Application Fee/Intimation Charges or any type of Application Fee is Non-Refundable and payment of fee does not guarantee selection of candidate for aforesaid job.Application Fee/Intimation Charges is being charged to ensure the smooth process of Interview of ‘Interested/short-listed candidates only’. ISDO gives chance to all short-listed eligible candidates to appear in the screening/interview and for the same, we schedule interviews for all selected/short-listed candidates. Any cancellation or refund request will not be considered.</p>


                </div>
            </section>
            <Cta />
        </>
    )
}

export default Refund