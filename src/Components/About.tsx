import React from 'react'
import Cta from './Cta'

const About = () => {
    return (
        <>
            <div className="pb-6 d-flex align-items-center about-page">


                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <section className='aboutSection'>
                <div className="row container">
                    <h1 className='aboutHeading'>About Us</h1>
                    <p className='aboutPara'>A strong and dynamic food processing sector plays a vital role in reduction in the wastage of perishable agricultural produce, enhancing shelf life of food products, ensuring value addition to agricultural produce, diversification & commercialization of agriculture, generation of employment, enhancing income of farmers and creating surplus for the export of agro & processed foods. In the era of economic liberalization, all segments including; private, public and co-operative sectors have defined roles to play and the Food Processing Corporation of India (FPCI) promotes their active participation.</p>

                    <p className='aboutPara'>The Food Processing Corporation of India (FPCI) has a clear goal of attaining these objectives by facilitating and acting as a catalyst to attract quality investments from within India and abroad into this sector with the aim of making food processing a national initiative. With this overall objective, the FPCI aims to:</p>

                    <ul className='aboutUl'>
                        <li>Enhance farmer's income by better utilization and value addition of agricultural produce</li>
                        <li>Minimize wastage at all stages in the food processing chain by the development of infrastructure for storage, transportation and processing of agro-food produce</li>
                        <li>Introduce of modern technology into the food processing industries from both domestic and external sources;</li>
                        <li>Encourage R&D in food processing for product and process development and improved packaging;</li>
                        <li>Provide policy support, and support for creation of Infrastructure, capacity expansion/ Up gradation and other supportive measures form the growth of this sectors</li>
                        <li>Promote export of processed food products.</li>
                    </ul>
                </div>
            </section>
            <Cta />

        </>
    )
}

export default About