import React from 'react'
import Cta from './Cta'

const Disclaimer = () => {
    return (
        <>
            <div className="pb-6 d-flex align-items-center about-page">
                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <section className='policySection'>
                <div className="row container">
                    <h1 className='policy'>Disclaimer :</h1>
                    The information contained in this Web Site has been prepared solely for the purpose of providing information about Food Processing Corporation of India (FPCI) to interested parties, and is not in any way binding on Food Processing Corporation of India (FPCI). This Web Site has been compiled in good faith by Food Processing Corporation of India (FPCI), but no representation is made or warranty given (either express or implied) as to the completeness or accuracy of the information it contains. You are therefore requested to verify this information before you act upon it by mail the concerned Officer in Food Processing Corporation of India (FPCI). By accessing this Web Site, you agree that Food Processing Corporation of India (FPCI) will not be liable for any direct or indirect loss arising from the use of the information and the material contained in this Web Site. The copyright in the material contained in this Web Site belongs to and remains solely with Food Processing Corporation of India. Your access to it does not imply a license to reproduce and/or distribute this information and you are not allowed to any such act without the prior approval of  Food Processing Corporation of India (FPCI).

                </div>
            </section>
            <Cta />
        </>
    )
}

export default Disclaimer