import React from 'react'


//constants
import { BUTTONDATA as data } from '../../utils/constants';

const ButtonMap = () => {
    return (

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

    )
}

export default ButtonMap