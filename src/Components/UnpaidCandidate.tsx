import React, { useState, useEffect, useRef } from 'react'
import { Box, CircularProgress, styled } from '@mui/material';
import Cta from './Cta'
import axios from '../utils/axios'
type UsersList = {
    applicantName: string;
    emailId: string;
    mobileNumber: string;
    applicationId: string;
}
const TableWrapper = styled(Box)(({ theme }) => ({
    height: "600px",
    marginTop: '1rem'
}));
const UnPaidCandidate = () => {
    const isMounted = useRef(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<UsersList[]>([]);
    useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            try {
                await axios.get(`/api/application/pending-payment-applicant`).then((response) => {
                    if (!isMounted.current) {
                        const { body } = response.data;
                        setUsers(body);
                        console.log(body);

                    }
                });
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
            }
        };
        getUser();
    }, []);
    return (
        <>
            <div className="pb-6 d-flex align-items-center about-page">
                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <section className="paidCandidate">
                <div className="row container">
                    {
                        loading ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: '100vh',
                                }}
                            >
                                <CircularProgress />
                            </Box>

                        ) : (
                            <TableWrapper>
                                <h1>Users List who have not done the payment yet!</h1>
                                <table>
                                    <tr>
                                        
                                        <th>Application Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                       
                                    </tr>
                                    {
                                        users.map((item, id) => {
                                            return (
                                                <tr key={id}>
                                                    <td>{item.applicationId}</td>
                                                    <td>{item.applicantName}</td>
                                                    <td>{item.emailId}</td>
                                                    <td>{item.mobileNumber}</td>
                                                 

                                                </tr>
                                            )
                                        })
                                    }

                                </table>

                            </TableWrapper>


                        )
                    }
                </div>
            </section>
            <Cta />
        </>
    )
}

export default UnPaidCandidate