import React, { useState, useEffect, useRef } from 'react'
import { Box, CircularProgress } from '@mui/material';
import Cta from './Cta'
import axios from 'axios';
type UsersList = {
    applicantName: string
}
const PaidCandidate = () => {
    const isMounted = useRef(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<UsersList[]>([]);
    useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            try {
                await axios.post(`/api/application/fetch-application-details`).then((response) => {
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
                            <div className="usersList">
                                <h1>Users List who have done the payment</h1>
                                <ul>
                                    {
                                        users.map((item, id) => {
                                            return (
                                                <>
                                                    <li key={id}>
                                                        {item.applicantName}
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        )
                    }
                </div>
            </section>
            <Cta />
        </>
    )
}

export default PaidCandidate