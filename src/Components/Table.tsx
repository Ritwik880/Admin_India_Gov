import React from 'react'
import { ROW as rowData } from '../utils/constants';
import { Link } from 'react-router-dom';
const Table = () => {
    return (
        <section className="jobSection">
            <div className="row container">
                <h1>Apply For Job</h1>
                <div className="rightText">
                    <p>Application fees/Intimation Charges - For SC/ST/OBC/EWS  Rs 690/-</p>
                    <p>Other than SC/ST/OBC/EWS  Rs 990/-</p>
                    <p>[All Notification / Advertisement Details English </p>
                </div>

                <div className='tableFlow'>
                    <table>
                        <tr>
                            <th>S.No.</th>
                            <th>Post Name</th>
                            <th>No. of Vacancy</th>
                            <th>Experience</th>
                            <th>Qualification</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Apply Now</th>
                        </tr>
                        {
                            rowData.map((item, id) => {
                                return (
                                    <tr key={id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.vacancy}</td>
                                        <td>{item.exp}</td>
                                        <td>{item.qual}</td>
                                        <td>{item.age}</td>
                                        <td>{item.sal}</td>
                                        <td>
                                            <Link to='/apply-now'>
                                                <button className='applyNow' >
                                                    {item.btn}
                                                </button></Link>
                                        </td>

                                    </tr>
                                )
                            })
                        }

                    </table>

                </div>



            </div>
        </section>
    )
}

export default Table