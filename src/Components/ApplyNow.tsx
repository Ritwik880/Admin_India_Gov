import React, { useEffect, useState, useRef } from 'react';
// @ts-ignore
// import Files from 'react-files';

import * as Yup from 'yup';

import axios from '../utils/axios';
import { ToastContainer, toast } from "react-toastify";
import { Select, MenuItem, styled, Typography, InputLabel } from '@mui/material';
import FormProvider from './hook-form/FormProvider';
import RHFTextField from './hook-form/RHFTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type ProfileValuesProps = {
    applicationId: number;
    applicantName: string;
    fatherName: string;
    motherName: string;
    dateOfBirth: string;
    category: string;
    gender: string;
    religion: string;
    houseNumber: string;
    area: string;
    city: string;
    counry: string;
    pincode: string;
    road: string;
    state: string;
    emailId: string;
    mobileNumber: string;
    aadharNumber: string;
    alternateEmailId: string;
    alternateMobileNumber: string;
    pancard: string;
    academicQualificationId: string;
    board: string;
    className: string;
    passingYear: string;
    percentage: string;
    schoolName: string;
    courseName: string;
    courseType: string;
    higherQualificationId: string;
    passingYearHQ: string;
    percentageHQ: string;
    specialization: string;
    exp: string;
    total_experience: string;
    companyName: string;
    designation: string;
    location: string;
    durationFrom: string;
    durationTo: string;
    afterSubmit?: string;

};
const ApplyNow = () => {
    const [file, setFile] = useState<string | Blob>('');
    const [frontFile, setFrontFile] = useState<string | Blob>("");
    const [backFile, setBackFile] = useState<string | Blob>("");
    const [fileName, setFileName] = React.useState<string>('');
    const [item, setItem] = useState("");
    const [gender, setGender] = useState("");
    const [state, setState] = useState("");
    const [exp, setExp] = useState("");
    const [addRow, setAddRow] = useState(false);
    const [addHQ, setAddHQ] = useState(false);
    const [addTE, setAddTE] = useState(false);
    const [row, setRow] = useState(0);

    const ProfileSchema = Yup.object().shape({
        applicantName: Yup.string().required('Applicant name is required'),
        fatherName: Yup.string().required('Applicant father name is required'),
        motherName: Yup.string().required('Applicant mother name is required'),
        dateOfBirth: Yup.string().required('Applicant date of birth name is required'),
        houseNumber: Yup.string().required('Applicant House Number is required'),
        road: Yup.string().required('Applicant road name is required'),
        area: Yup.string().required('Applicant area name is required'),
        pincode: Yup.string().required('Applicant pincode is required'),
        emailId: Yup.string().required('Applicant email Id is required'),
        mobileNumber: Yup.string().required('Applicant mobile number is required'),
        aadharNumber: Yup.string().required('Applicant aadhar number is required'),
        alternateEmailId: Yup.string().required('Applicant alternate email Id is required'),
        alternateMobileNumber: Yup.string().required('Applicant alternate mobile number is required'),
        pancard: Yup.string().required('Applicant pancard number is required'),
        board: Yup.string().required('Applicant board name is required'),
        className: Yup.string().required('Applicant className is required'),
        passingYear: Yup.string().required('Applicant passingYear is required'),
        percentage: Yup.string().required('Applicant percentage is required'),
        schoolName: Yup.string().required('Applicant schoolName is required'),
        courseName: Yup.string().required('Applicant courseName is required'),
        courseType: Yup.string().required('Applicant courseType is required'),
        passingYearHQ: Yup.string().required('Applicant passingYear is required'),
        total_experience: Yup.string().required('Applicant Total Experience is required'),
        companyName: Yup.string().required('Applicant companyName is required'),
        designation: Yup.string().required('Applicant designation is required'),
        location: Yup.string().required('Applicant location is required'),
        durationFrom: Yup.string().required('Applicant durationFrom is required'),
        durationTo: Yup.string().required('Applicant durationTo is required'),
    });

    const defaultValues = {
        applicantName: '',
        fatherName: '',
        motherName: '',
        dateOfBirth: '',
        houseNumber: '',
        pincode: '',
        road: '',
        area: '',
        category: '',
        gender: '',
        religion: '',
        emailId: '',
        aadharNumber: '',
        mobileNumber: '',
        alternateEmailId: '',
        alternateMobileNumber: '',
        pancard: '',
        board: '',
        className: '',
        passingYear: '',
        percentage: '',
        schoolName: '',
        courseName: '',
        courseType: '',
        passingYearHQ: '',
        total_experience: '',
        companyName: '',
        designation: '',
        location: '',
        durationFrom: '',
        durationTo: '',

    };
    const methods = useForm<ProfileValuesProps>({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const { handleSubmit, setValue } = methods;


    const onSubmit = async (data: ProfileValuesProps) => {
        const profileForm = new FormData();

        profileForm.append('applicantName', data.applicantName);
        profileForm.append('fatherName', data.fatherName);
        profileForm.append('motherName', data.motherName);
        profileForm.append('dateOfBirth', data.dateOfBirth);
        profileForm.append('religion', data.religion);
        profileForm.append('houseNumber', data.houseNumber);
        profileForm.append('road', data.road);
        profileForm.append('area', data.area);
        profileForm.append('state', data.state);
        profileForm.append('pincode', data.pincode);
        profileForm.append('emailId', data.emailId);
        profileForm.append('mobileNumber', data.mobileNumber);
        profileForm.append('aadharNumber', data.aadharNumber);
        profileForm.append('alternateEmailId', data.alternateEmailId);
        profileForm.append('alternateMobileNumber', data.alternateMobileNumber);
        profileForm.append('pancard', data.pancard);
        profileForm.append('percentage', data.percentage);
        profileForm.append('schoolName', data.schoolName);
        profileForm.append('courseName', data.courseName);
        profileForm.append('courseType', data.courseType);
        profileForm.append('passingYear', data.passingYear);
        profileForm.append('passingYearHQ', data.passingYearHQ);
        profileForm.append('total_experience', data.total_experience);
        profileForm.append('companyName', data.companyName);
        profileForm.append('designation', data.designation);
        profileForm.append('location', data.location);
        profileForm.append('durationFrom', data.durationFrom);
        profileForm.append('durationTo', data.durationTo);
        exp && profileForm.append('experience', exp);
        gender && profileForm.append('gender', gender);
        item && profileForm.append('category', item);
        state && profileForm.append('category', state);
        frontFile && profileForm.append("photo", frontFile);
        backFile && profileForm.append("signature", backFile);
        try {
            const response = await axios.post('/api/application/save-application-details', profileForm);
            const { message, data } = response.data;
            toast.success(message);
        } catch (error: any) {

            toast.error("Something went wrong!");
        }
    };

    const onFilesChange = (files: any) => {
        setFileName(files.map((filename: any) => filename.preview.url));
        setFile(files[0]);
    };

    const onFilesError = (error: any, file: any) => {
        console.log('error code ' + error.code + ': ' + error.message);
    };

    const handleAddRow = () => {
        setAddRow(true);
        setRow(row + 1);
    }

    const handleAddHQ = () => {
        setAddHQ(true);

    }
    const handleAddTE = () => {
        setAddTE(true);

    }
    return (
        <section className='formSection'>
            <div className="row container">
                <ToastContainer position="top-center" />
                <h1 className='formHead'>Application Form for Store Supervisor</h1>
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <div className="parentForm">
                        <h2 className='footerFormHead'>Personal Details</h2>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name <span className="must-filed">*</span></label>

                                <RHFTextField name="applicantName" label="" placeholder='Enter Name' />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Father Name <span className="must-filed">*</span></label>

                                <RHFTextField name="fatherName" label="" placeholder='Enter FatherName' />
                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mother Name <span className="must-filed">*</span></label>

                                <RHFTextField name="motherName" label="" placeholder='Enter MotherName' />
                            </div>

                        </div>

                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Date Of Birth <span className="must-filed">*</span></label>
                                <RHFTextField name="dateOfBirth" label="" placeholder='dd/mm/yyyy' />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select labelId='demo-simple-select-label' label="Gender" name='gender' value={gender} onChange={(e) => setGender(e.target.value)} className="form-select" id="state" required>
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Category <span className="must-filed">*</span></label>
                                <Select value={item} onChange={(e) => setItem(e.target.value)} name='category' className="form-select" id="state" required>
                                    <MenuItem value="General">General</MenuItem>
                                    <MenuItem value="OBC">OBC</MenuItem>
                                    <MenuItem value="ST">ST</MenuItem>
                                    <MenuItem value="SC">SC</MenuItem>
                                    <MenuItem value="EWS">EWS</MenuItem>
                                    <MenuItem value="others">others</MenuItem>
                                </Select>
                            </div>


                        </div>
                    </div>

                    <div className="parentForm">
                        <h2 className='footerFormHead'>Permanent Address</h2>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">House No/Apartment Name/Block No <span className="must-filed">*</span></label>
                                <RHFTextField name="houseNumber" label="" placeholder='House No/Apartment Name/Block N' />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Road/Street/Lane <span className="must-filed">*</span></label>

                                <RHFTextField name="road" label="" placeholder='Road/Street/Lane' />
                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Area/Landmark <span className="must-filed">*</span></label>

                                <RHFTextField name="area" label="" placeholder='Area/Landmark' />
                            </div>

                        </div>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Country <span className="must-filed">*</span></label>
                                <RHFTextField name="road" value='India' label="" disabled />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">State <span className="must-filed">*</span></label>
                                <Select name="state" value={state} onChange={(e) => setState(e.target.value)} required className="form-control">
                                    <MenuItem>--select--</MenuItem>
                                    <MenuItem value="Andaman and Nicobar Islands"  >Andaman and Nicobar Islands</MenuItem>
                                    <MenuItem value="Andhra Pradesh"  >Andhra Pradesh</MenuItem>
                                    <MenuItem value="Arunachal Pradesh"  >Arunachal Pradesh</MenuItem>
                                    <MenuItem value="Assam"  >Assam</MenuItem>
                                    <MenuItem value="Bihar"  >Bihar</MenuItem>
                                    <MenuItem value="Chandigarh"  >Chandigarh</MenuItem>
                                    <MenuItem value="Chhattisgarh"  >Chhattisgarh</MenuItem>
                                    <MenuItem value="Dadra and Nagar Haveli"  >Dadra and Nagar Haveli</MenuItem>
                                    <MenuItem value="Daman and Diu"  >Daman and Diu</MenuItem>
                                    <MenuItem value="Delhi"  >Delhi</MenuItem>
                                    <MenuItem value="Goa"  >Goa</MenuItem>
                                    <MenuItem value="Gujarat"  >Gujarat</MenuItem>
                                    <MenuItem value="Haryana"  >Haryana</MenuItem>
                                    <MenuItem value="Himachal Pradesh"  >Himachal Pradesh</MenuItem>
                                    <MenuItem value="Jammu and Kashmir"  >Jammu and Kashmir</MenuItem>
                                    <MenuItem value="Jharkhand"  >Jharkhand</MenuItem>
                                    <MenuItem value="Karnataka"  >Karnataka</MenuItem>
                                    <MenuItem value="Kenmore"  >Kenmore</MenuItem>
                                    <MenuItem value="Kerala"  >Kerala</MenuItem>
                                    <MenuItem value="Lakshadweep"  >Lakshadweep</MenuItem>
                                    <MenuItem value="Madhya Pradesh"  >Madhya Pradesh</MenuItem>
                                    <MenuItem value="Maharashtra"  >Maharashtra</MenuItem>
                                    <MenuItem value="Manipur"  >Manipur</MenuItem>
                                    <MenuItem value="Meghalaya"  >Meghalaya</MenuItem>
                                    <MenuItem value="Mizoram"  >Mizoram</MenuItem>
                                    <MenuItem value="Nagaland"  >Nagaland</MenuItem>
                                    <MenuItem value="Narora"  >Narora</MenuItem>
                                    <MenuItem value="Natwar"  >Natwar</MenuItem>
                                    <MenuItem value="Odisha"  >Odisha</MenuItem>
                                    <MenuItem value="Paschim Medinipur"  >Paschim Medinipur</MenuItem>
                                    <MenuItem value="Pondicherry"  >Pondicherry</MenuItem>
                                    <MenuItem value="Punjab"  >Punjab</MenuItem>
                                    <MenuItem value="Rajasthan"  >Rajasthan</MenuItem>
                                    <MenuItem value="Sikkim"  >Sikkim</MenuItem>
                                    <MenuItem value="Tamil Nadu"  >Tamil Nadu</MenuItem>
                                    <MenuItem value="Telangana"  >Telangana</MenuItem>
                                    <MenuItem value="Tripura"  >Tripura</MenuItem>
                                    <MenuItem value="Uttar Pradesh"  >Uttar Pradesh</MenuItem>
                                    <MenuItem value="Uttarakhand"  >Uttarakhand</MenuItem>
                                    <MenuItem value="Vaishali"  >Vaishali</MenuItem>
                                    <MenuItem value="West Bengal"  >West Bengal</MenuItem>
                                </Select>
                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">City <span className="must-filed">*</span></label>
                                <RHFTextField name="city" label="" placeholder='City' />
                            </div>


                        </div>

                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Pincode <span className="must-filed">*</span></label>
                                <RHFTextField name="pincode" label="" placeholder='PinCode' />
                            </div>
                        </div>
                        <hr />
                        <h2 className='footerFormHead'>Present/Correspondence Address</h2>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">House No/Apartment Name/Block No <span className="must-filed">*</span></label>
                                <RHFTextField name="houseNumber" label="" placeholder='House No/Apartment Name/Block N' />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Road/Street/Lane <span className="must-filed">*</span></label>

                                <RHFTextField name="road" label="" placeholder='Road/Street/Lane' />
                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Area/Landmark <span className="must-filed">*</span></label>

                                <RHFTextField name="area" label="" placeholder='Area/Landmark' />
                            </div>


                        </div>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Country <span className="must-filed">*</span></label>
                                <RHFTextField name="road" value='India' label="" disabled />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">State <span className="must-filed">*</span></label>
                                <Select name="state" value={state} onChange={(e) => setState(e.target.value)} required className="form-control">
                                    <MenuItem>--select--</MenuItem>
                                    <MenuItem value="Andaman and Nicobar Islands"  >Andaman and Nicobar Islands</MenuItem>
                                    <MenuItem value="Andhra Pradesh"  >Andhra Pradesh</MenuItem>
                                    <MenuItem value="Arunachal Pradesh"  >Arunachal Pradesh</MenuItem>
                                    <MenuItem value="Assam"  >Assam</MenuItem>
                                    <MenuItem value="Bihar"  >Bihar</MenuItem>
                                    <MenuItem value="Chandigarh"  >Chandigarh</MenuItem>
                                    <MenuItem value="Chhattisgarh"  >Chhattisgarh</MenuItem>
                                    <MenuItem value="Dadra and Nagar Haveli"  >Dadra and Nagar Haveli</MenuItem>
                                    <MenuItem value="Daman and Diu"  >Daman and Diu</MenuItem>
                                    <MenuItem value="Delhi"  >Delhi</MenuItem>
                                    <MenuItem value="Goa"  >Goa</MenuItem>
                                    <MenuItem value="Gujarat"  >Gujarat</MenuItem>
                                    <MenuItem value="Haryana"  >Haryana</MenuItem>
                                    <MenuItem value="Himachal Pradesh"  >Himachal Pradesh</MenuItem>
                                    <MenuItem value="Jammu and Kashmir"  >Jammu and Kashmir</MenuItem>
                                    <MenuItem value="Jharkhand"  >Jharkhand</MenuItem>
                                    <MenuItem value="Karnataka"  >Karnataka</MenuItem>
                                    <MenuItem value="Kenmore"  >Kenmore</MenuItem>
                                    <MenuItem value="Kerala"  >Kerala</MenuItem>
                                    <MenuItem value="Lakshadweep"  >Lakshadweep</MenuItem>
                                    <MenuItem value="Madhya Pradesh"  >Madhya Pradesh</MenuItem>
                                    <MenuItem value="Maharashtra"  >Maharashtra</MenuItem>
                                    <MenuItem value="Manipur"  >Manipur</MenuItem>
                                    <MenuItem value="Meghalaya"  >Meghalaya</MenuItem>
                                    <MenuItem value="Mizoram"  >Mizoram</MenuItem>
                                    <MenuItem value="Nagaland"  >Nagaland</MenuItem>
                                    <MenuItem value="Narora"  >Narora</MenuItem>
                                    <MenuItem value="Natwar"  >Natwar</MenuItem>
                                    <MenuItem value="Odisha"  >Odisha</MenuItem>
                                    <MenuItem value="Paschim Medinipur"  >Paschim Medinipur</MenuItem>
                                    <MenuItem value="Pondicherry"  >Pondicherry</MenuItem>
                                    <MenuItem value="Punjab"  >Punjab</MenuItem>
                                    <MenuItem value="Rajasthan"  >Rajasthan</MenuItem>
                                    <MenuItem value="Sikkim"  >Sikkim</MenuItem>
                                    <MenuItem value="Tamil Nadu"  >Tamil Nadu</MenuItem>
                                    <MenuItem value="Telangana"  >Telangana</MenuItem>
                                    <MenuItem value="Tripura"  >Tripura</MenuItem>
                                    <MenuItem value="Uttar Pradesh"  >Uttar Pradesh</MenuItem>
                                    <MenuItem value="Uttarakhand"  >Uttarakhand</MenuItem>
                                    <MenuItem value="Vaishali"  >Vaishali</MenuItem>
                                    <MenuItem value="West Bengal"  >West Bengal</MenuItem>
                                </Select>
                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">City <span className="must-filed">*</span></label>
                                <RHFTextField name="city" label="" placeholder='City' />
                            </div>


                        </div>

                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Pincode <span className="must-filed">*</span></label>
                                <RHFTextField name="pincode" label="" placeholder='PinCode' />
                            </div>
                        </div>

                    </div>
                    <div className="parentForm">
                        <h2 className='footerFormHead'>Contact Details</h2>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email ID <span className="must-filed">*</span></label>

                                <RHFTextField name="emailId" label="" placeholder='Email ID' />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile No <span className="must-filed">*</span></label>

                                <RHFTextField name="mobileNumber" label="" placeholder='Mobile No' />
                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Aadhar No <span className="must-filed">*</span></label>
                                <RHFTextField name="aadharNumber" label="" placeholder='Aadhar No' />
                            </div>

                        </div>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Alternate Email ID</label>

                                <RHFTextField name="alternateEmailId" label="" placeholder='Alternate Email ID' />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Alternate Mobile No</label>

                                <RHFTextField name="alternateMobileNumber" label="" placeholder='Alternate Mobile No' />
                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Pancard No.</label>

                                <RHFTextField name="pancard" label="" placeholder='Pancard No' />
                            </div>


                        </div>



                    </div>

                    <div className="parentForm">
                        <h2 className='footerFormHead' id="add-modal-label">Academic Qualification
                        </h2>

                        <div className="formBox">

                            <div className="form-group col-md-12 col-lg-12 tableFlow">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Class	</th>
                                            <th>School Name	</th>
                                            <th>Board		</th>
                                            <th>% Mark		</th>
                                            <th>Passing Year

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="add_row_div_experience">
                                        {
                                            addRow &&

                                            <tr>
                                                <td> <RHFTextField name="board" label="" placeholder='Board Name' /></td>
                                                <td> <RHFTextField name="className" label="" placeholder='Class Name' /></td>
                                                <td> <RHFTextField name="passingYear" label="" placeholder='Passing Year' /></td>
                                                <td> <RHFTextField name="percentage" label="" placeholder='Percentage' /></td>
                                                <td> <RHFTextField name="schoolName" label="" placeholder='School Name' /></td>
                                            </tr>

                                        }
                                    </tbody>
                                </table>
                                <button onClick={handleAddRow} type="button" className="add-more-row-experience"><i className="fa fa-plus-circle"></i> Add New</button>
                            </div>


                        </div>


                    </div>

                    <div className="parentForm">
                        <h2 className='footerFormHead' id="add-modal-label">Higher Qualification
                        </h2>

                        <div className="formBox">

                            <div className="form-group col-md-12 col-lg-12 tableFlow">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Course Name</th>
                                            <th>Specialization</th>
                                            <th>% Mark	</th>
                                            <th>Passing Year	</th>
                                            <th>Course Type
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="add_row_div_experience">
                                        {
                                            addHQ &&

                                            <tr>
                                                <td> <RHFTextField name="board" label="" placeholder='Board Name' /></td>
                                                <td> <RHFTextField name="className" label="" placeholder='Class Name' /></td>
                                                <td> <RHFTextField name="percentage" label="" placeholder='Percentage' /></td>
                                                <td> <RHFTextField name="passingYear" label="" placeholder='Passing Year' /></td>
                                                <td> <RHFTextField name="schoolName" label="" placeholder='School Name' /></td>
                                            </tr>

                                        }

                                    </tbody>
                                </table>
                                <button onClick={handleAddHQ} type="button" className="add-more-row-experience"><i className="fa fa-plus-circle"></i> Add New</button>
                            </div>


                        </div>


                    </div>

                    <div className="parentForm">
                        <h2 className='footerFormHead' id="add-modal-label">Experience Details</h2>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Experience</label>
                                <Select value={exp} onChange={(e) => setExp(e.target.value)} className="form-control select-experience" name="experience">
                                    <MenuItem value="">--select--</MenuItem>
                                    <MenuItem value="yes"  >Yes</MenuItem>
                                    <MenuItem value="no"  >No</MenuItem>
                                </Select>

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Total Experience(IN YEAR)</label>
                                <RHFTextField type="number" name="total_experience" label="" placeholder='Total Experience(IN YEAR)' />
                            </div>


                        </div>
                        <div className="formBox">

                            <div className="form-group col-md-12 col-lg-12 tableFlow">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Company Name</th>
                                            <th>Designation</th>
                                            <th>Location</th>
                                            <th>Duration From</th>
                                            <th>Duration To</th>
                                        </tr>
                                    </thead>
                                    <tbody className="add_row_div_experience">
                                        {
                                            addTE &&

                                            <tr>
                                                <td> <RHFTextField name="companyName" label="" placeholder='Company Name' /></td>
                                                <td> <RHFTextField name="designation" label="" placeholder='Designation' /></td>
                                                <td> <RHFTextField name="location" label="" placeholder='Location' /></td>
                                                <td> <RHFTextField name="durationFrom" label="" placeholder='Duration From' /></td>
                                                <td> <RHFTextField name="durationTo" label="" placeholder='Duration To' /></td>
                                            </tr>

                                        }

                                    </tbody>
                                </table>
                                <button onClick={handleAddTE} type="button" className="add-more-row-experience"><i className="fa fa-plus-circle"></i> Add New</button>
                            </div>


                        </div>


                    </div>

                    <div className="parentForm">
                        <h2 className='footerFormHead' id="add-modal-label">Uplaod Documents <span className="must-filed"><span className="must-filed">*</span></span></h2>
                        <div className="formBox">
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Upload Photo <span className="must-filed">*</span></label>
                                <input onChange={(e) => setFrontFile(e.target.value)} type="file" className="form-control file-max-upload" id="add-Photo" accept=".jpeg" name="photo" required />

                            </div>
                            <div className="mb-3 col-lg-3 col-md-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Upload Signature <span className="must-filed">*</span></label>
                                <input type="file" className="form-control file-max-upload" id="add-Sign" accept=".jpeg" required name="signature" />
                            </div>
                        </div>
                    </div>


                    <div className="submitFormData">
                        <button type="submit" onClick={handleSubmit(onSubmit)} className="formSubmit">Submit</button>
                        <button className="formSubmit" onClick={handleSubmit(onSubmit)}>Save</button>
                    </div>


                </FormProvider>

            </div>
        </section>
    )
}

export default ApplyNow