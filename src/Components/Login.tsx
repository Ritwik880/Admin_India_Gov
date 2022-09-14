import React, { useState, useRef, useEffect } from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input';
import { InputAdornment, IconButton } from '@mui/material';
import { Form } from 'react-bootstrap';
import { BiLock } from 'react-icons/bi';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import axios from '../utils/axios';
import FormProvider from './hook-form/FormProvider';
import RHFTextField from './hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Iconify from './Iconify';
import { IoCallOutline } from 'react-icons/io5'
import '../login.css'
import Cta from './Cta';

type ProfileValuesProps = {
    userPassword: string;
    phone_number: number;

};

const Login = () => {
    // const [eventDetails, setEventDetails] = useState<EventDetailType>({
    //     name: '',
    //     date_display: '',
    //   });
    const isMounted = useRef(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const ProfileSchema = Yup.object().shape({
        phone_number: Yup.number().required('Phone Number is required'),
        userPassword: Yup.string().required('Password is required'),
    });

    const defaultValues = {
        phone_number: 0,
        userPassword: '',

    };
    const methods = useForm<ProfileValuesProps>({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const { handleSubmit, setValue } = methods;



    const onSubmit = async (data: ProfileValuesProps) => {
        const profileForm = new FormData();
        profileForm.append('userPassword', data.userPassword);
        if (phoneNumber) {
            profileForm.append('phone_number', phoneNumber);
            if (isValidPhoneNumber(phoneNumber)) {
                try {

                    const response = await axios.get('/api/application/login', {
                        params: {
                            profileForm
                        }
                    });
                    const { message } = response.data;
                    toast.success(message);
                } catch (error: any) {
                    toast.error("Something went wrong!");
                }
            } else {
                toast.error('Please enter a valid phone number!');
            }
        }
        else {
            profileForm.append('phone_number', '');
            try {
                const response = await axios.get('/api/application/login', {
                    params: {
                        profileForm
                    }
                });
                const { message } = response.data;
                toast.success(message);
            } catch (error) {
                toast.error('Something went wrong!');
            }
        }
    }

    useEffect(() => {
        const getProfileDetails = async () => {
            try {
                const response = await axios.get('/api/application/login');
                const { data } = response.data;
                if (!isMounted.current) {
                    console.log(data);


                }
            } catch (error) {
                console.error(error);
                toast.error("Something went wrong!");
            }
        };
        getProfileDetails();

        return () => {
            isMounted.current = true;
        };
    }, []);

    return (
        <>
            <section className='signupForm'>
                <div className="row container">
                    <ToastContainer position="top-center" />
                    <div className="formLayout">
                        <p className='signupHeader'>Welcome</p>

                        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='formLabel'> <IoCallOutline className='signupIcon' />
                                    Email Mobile Number</Form.Label>

                                <RHFTextField name="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} label="" placeholder='Enter your number*' />


                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='formLabel'> <BiLock className='signupIcon' />
                                    Password</Form.Label>
                                <RHFTextField
                                    name="userPassword"
                                    label=""
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter your password'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    <Iconify
                                                        icon={
                                                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                                                        }
                                                    />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Form.Group>
                            <button className='signupBtn' type='submit'>Login</button>
                            <div className="twoText">
                                <a className='forgotPassword' href="#">Forgot password ?</a>

                            </div>
                        </FormProvider>



                    </div>

                </div>
            </section>
            <Cta />
        </>
    )
}

export default Login