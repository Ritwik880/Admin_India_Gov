import React, { useState } from 'react';
import '../contact.css'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import * as Yup from 'yup';

import axios from '../utils/axios';
import FormProvider from './hook-form/FormProvider';
import RHFTextField from './hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import "react-toastify/dist/ReactToastify.css";
import Cta from './Cta';

type ProfileValuesProps = {
    name: string;
    email: string;
    subject: string;
    phone: string;
    message: string;

};
const Contact = () => {

    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        phone: Yup.string().required('Phone is required'),
        message: Yup.string().required('Message is required'),
    });

    const defaultValues = {
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',

    };
    const methods = useForm<ProfileValuesProps>({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const { handleSubmit, setValue } = methods;

    const onSubmit = async (data: ProfileValuesProps) => {
        const profileForm = new FormData();

        profileForm.append('name', data.name);
        profileForm.append('email', data.email);
        profileForm.append('subject', data.subject);
        profileForm.append('phone', data.phone);
        profileForm.append('message', data.message);
        try {

            const response = await axios.post('/api/application/save-application-details', profileForm);
            const { message } = response.data;
            toast.success("Success");
        } catch (error: any) {
            toast.error("Something went wrong!");
        }
    };
    return (
        <>
            <div className="pb-6 d-flex align-items-center contact-page">
                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <section className="section gray-bg" id="contactus">
                <ToastContainer position="top-center" />
                <div className="row container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>Get In Touch</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-md-7 col-lg-8 m-15px-tb">
                            <h5>HAVE ANY QUERY?</h5>
                            <div className="contact-form">
                                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col>


                                            <RHFTextField name="name" label="" placeholder='Enter Name*' />
                                        </Col>
                                        <Col className="inPhone">


                                            <RHFTextField name="email" label="" placeholder='Enter Email*' />
                                        </Col>
                                    </Row>
                                    <Row className="my-2">
                                        <Col>

                                            <RHFTextField name="subject" label="" placeholder='Enter Subject*' />
                                        </Col>
                                        <Col className="inPhone">

                                            <RHFTextField name="phone" label="" placeholder='Enter Phone*' />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">


                                            <RHFTextField name="message" label="" placeholder='Enter Message*' />
                                        </Form.Group>
                                    </Row>
                                    <Button type="submit" className="contactPageBtn">SEND YOUR MESSAGE</Button>
                                </FormProvider>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4 m-15px-tb mobileView">
                            <div className="contact-name">
                                <h5>Mail</h5>
                                <p>helpcenter@isdoindia.org</p>
                            </div>
                            <div className="contact-name">
                                <h5>Visit Our Office</h5>
                                <p>Nelson Mandela Marg, Vasant Kunj, New Delhi -110067</p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </>
    )
}

export default Contact