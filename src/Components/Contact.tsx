import React, { useState, useEffect, useRef } from 'react';
import '../contact.css'
//mui
import {
    styled,
    Box,
    CircularProgress
} from "@mui/material";
import axios from '../utils/axios';
import "react-toastify/dist/ReactToastify.css";
import Cta from './Cta';


const TableWrapper = styled(Box)(({ theme }) => ({
    height: "600px",
    marginTop: '1rem'
}));

type AllNews =
    {

        contactUsId: number;
        email: string;
        name: string;
        subject: string;
        phone: string;
        message: string;

    }
const Contact = () => {
    const [news, setNews] = useState<AllNews[]>([]);
    const [loading, setLoading] = useState(false);
    const [refreshlist, setRefreshList] = useState<boolean>(false);
    const isMounted = useRef(false);


    //getting all news
    useEffect(() => {
        const getAllContactUsers = async () => {

            try {
                await axios
                    .get(`/api/application/fetch-contact-us`)
                    .then((response) => {
                        if (!isMounted.current) {
                            const { body } = response.data;
                            setNews(body);
                            console.log(body);
                        }
                    });
            } catch (error) {


            }
        };
        getAllContactUsers();
        setRefreshList(false);
    }, [refreshlist]);


    return (
        <>
            <div className="pb-6 d-flex align-items-center contact-page">
                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <section className="section gray-bg" id="contactus">
                <div className="row container">
                    {
                        loading ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    pt: "5%",
                                }}
                            >
                                <CircularProgress />
                            </Box>


                        ) : (
                            <TableWrapper>
                                <h1>All Users</h1>
                                <table>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Subject</th>
                                        <th>Message</th>

                                    </tr>
                                    {
                                        news.map((item, id) => {
                                            return (
                                                <tr key={id}>
                                                    <td>{item.contactUsId}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.message}</td>

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

export default Contact