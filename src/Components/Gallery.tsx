import React from 'react'
import { IMAGES as data } from '../utils/constants'
import Cta from './Cta'
const Gallery = () => {
    return (
        <>
            <div className="pb-6 d-flex align-items-center about-page">
                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <section className='outerGallery'>
                <div className="row container">
                    <h1>Gallery</h1>

                    {
                        data.map((item, id) => {
                            return (
                                <div className='col-lg-3 col-md-12' key={id} style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={item.image} alt="gallery_images" />

                                </div>
                            )
                        })
                    }




                </div>
            </section>
            <Cta />
        </>
    )
}

export default Gallery