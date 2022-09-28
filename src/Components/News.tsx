import React, { useState } from 'react';
import '../contact.css'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import * as Yup from 'yup';

// import axios from '../utils/axios';
import axios from 'axios';
import FormProvider from './hook-form/FormProvider';
import RHFTextField from './hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import "react-toastify/dist/ReactToastify.css";
import Cta from './Cta';
// import { LoadingButton } from "@mui/lab";

type ProfileValuesProps = {
    id: number,
    news: string,
    newsId: number

};
const News = () => {

    const ProfileSchema = Yup.object().shape({
        news: Yup.string().required('News is required'),
    });

    const defaultValues = {
        id: 0,
        newId: 0,
        news: '',

    };
    const methods = useForm<ProfileValuesProps>({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data: ProfileValuesProps) => {
        try {

            const response = await axios.post('http://localhost:9090/api/application/add-news', {
                news: data.news
            });
            const { message } = response.data;
            toast.success("News generated successfully!");
        } catch (error: any) {
            console.log(error);

            toast.error("Something went wrong!");
        }
    };
    return (
        <>
            <div className="pb-6 d-flex align-items-center about-page">
                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                    </div>
                </div>
            </div>
            <section className="section gray-bg" id="contactus">
                <ToastContainer position="top-center" />
                <div className="row container">
                    <div className="contact-form">
                        <h5 className='genearteHead'>Generate News</h5>
                        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <RHFTextField name="news" label="" placeholder='Enter news*' />
                                </Form.Group>
                            </Row>
                            <Button type="submit" className="contactPageBtn">  Generate News</Button>
                        </FormProvider>
                    </div>



                </div>
            </section>
            <Cta />
        </>
    )
}

export default News