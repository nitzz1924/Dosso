import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StudentRegistration = () => {

    //meta title
    document.title = "Student Registration";

    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const [selectedFiles, setselectedFiles] = useState([]);

    const startDateChange = date => {
        setstartDate(date);
    };

    const endDateChange = date => {
        setendDate(date);
    };

    function handleAcceptedFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size)
            })
        );

        setselectedFiles(files);
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">Student Registration</CardTitle>
                                    <Form>
                                        <FormGroup className="mb-4" row>

                                            <Col lg="4">
                                                <Label
                                                    htmlFor="Studentname"
                                                    className="text-warning"
                                                >
                                                    Student Name
                                                </Label>
                                                <Input
                                                    id="Studentname"
                                                    name="Studentname"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Student Name..."
                                                />
                                            </Col>

                                            <Col lg="4">
                                                <Label
                                                    htmlFor="ReferenceID"
                                                    className="text-warning"
                                                >
                                                    Reference 
                                                </Label>
                                                <Input
                                                    id="ReferenceID"
                                                    name="ReferenceID"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Refer ID..."
                                                />
                                            </Col>
                                            <Col lg="4">
                                                <Label
                                                    htmlFor="Email"
                                                    className="text-warning"
                                                >
                                                    Email Address
                                                </Label>
                                                <Input
                                                    id="Email"
                                                    name="Email"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Email Address..."
                                                />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="mb-4 py-3" row>
                                            <Col lg="4">
                                                <Label
                                                    htmlFor="Institutename"
                                                    className="text-warning"
                                                >
                                                    Institute name
                                                </Label>
                                                <Input
                                                    id="Institutename"
                                                    name="Institutename"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Institute name..."
                                                />

                                                <Label
                                                    htmlFor="PhoneNumber"
                                                    className="text-warning"
                                                >
                                                    Phone Number
                                                </Label>
                                                <Input
                                                    id="PhoneNumber"
                                                    name="PhoneNumber"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Phone Number..."
                                                />

                                                <Label
                                                    htmlFor="AadharID"
                                                    className="text-warning"
                                                >
                                                    Aadhar Card ID
                                                </Label>
                                                <Input
                                                    id="AadharID"
                                                    name="AadharID"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Refer ID..."
                                                />
                                            </Col>

                                            <Col lg="4">
                                                <Label className="text-warning">
                                                    Upload Aadhar Card Image
                                                </Label>
                                                <Form>
                                                    <Dropzone
                                                        onDrop={acceptedFiles => {
                                                            handleAcceptedFiles(acceptedFiles);
                                                        }}
                                                    >
                                                        {({ getRootProps, getInputProps }) => (
                                                            <div className="dropzone">
                                                                <div
                                                                    className="dz-message needsclick"
                                                                    {...getRootProps()}
                                                                >
                                                                    <input {...getInputProps()} />
                                                                    <div className="dz-message needsclick">
                                                                        <div className="mb-3">
                                                                            <i className="display-4 text-muted bx bxs-cloud-upload" />
                                                                        </div>
                                                                        <h4>Drop files here or click to upload.</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Dropzone>
                                                    <div
                                                        className="dropzone-previews mt-3"
                                                        id="file-previews"
                                                    >
                                                        {selectedFiles.map((f, i) => {
                                                            return (
                                                                <Card
                                                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                    key={i + "-file"}
                                                                >
                                                                    <div className="p-2">
                                                                        <Row className="align-items-center">
                                                                            <Col className="col-auto">
                                                                                <img
                                                                                    data-dz-thumbnail=""
                                                                                    height="80"
                                                                                    className="avatar-sm rounded bg-light"
                                                                                    alt={f.name}
                                                                                    src={f.preview}
                                                                                />
                                                                            </Col>
                                                                            <Col>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="text-muted font-weight-bold"
                                                                                >
                                                                                    {f.name}
                                                                                </Link>
                                                                                <p className="mb-0">
                                                                                    <strong>{f.formattedSize}</strong>
                                                                                </p>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Card>
                                                            );
                                                        })}
                                                    </div>
                                                </Form>
                                            </Col>

                                        </FormGroup>
                                        <FormGroup className="mb-4">

                                        </FormGroup>

                                        <FormGroup className="mb-4" row>
                                            <Label
                                                htmlFor="Qualification"
                                                className="text-warning"
                                            >
                                                Last Qualification
                                            </Label>
                                            <Col lg="4">
                                                <Input
                                                    id="Qualification"
                                                    name="Qualification"
                                                    type="text"
                                                    placeholder="Enter Project Budget..."
                                                    className="form-control"
                                                />
                                            </Col>
                                            <Label
                                                htmlFor="Qualification"
                                                className="text-warning"
                                            >
                                                Address
                                            </Label>
                                            <Col lg="4">
                                                <Input
                                                    id="Qualification"
                                                    name="Qualification"
                                                    type="text"
                                                    placeholder="Enter Project Budget..."
                                                    className="form-control"
                                                />
                                            </Col>

                                            <Label className="text-warning">
                                            Update Student ID Image
                                        </Label>
                                        <Col lg="4">
                                            <Form>
                                                <Dropzone
                                                    onDrop={acceptedFiles => {
                                                        handleAcceptedFiles(acceptedFiles);
                                                    }}
                                                >
                                                    {({ getRootProps, getInputProps }) => (
                                                        <div className="dropzone">
                                                            <div
                                                                className="dz-message needsclick"
                                                                {...getRootProps()}
                                                            >
                                                                <input {...getInputProps()} />
                                                                <div className="dz-message needsclick">
                                                                    <div className="mb-3">
                                                                        <i className="display-4 text-muted bx bxs-cloud-upload" />
                                                                    </div>
                                                                    <h4>Drop files here or click to upload.</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Dropzone>
                                                <div
                                                    className="dropzone-previews mt-3"
                                                    id="file-previews"
                                                >
                                                    {selectedFiles.map((f, i) => {
                                                        return (
                                                            <Card
                                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                key={i + "-file"}
                                                            >
                                                                <div className="p-2">
                                                                    <Row className="align-items-center">
                                                                        <Col className="col-auto">
                                                                            <img
                                                                                data-dz-thumbnail=""
                                                                                height="80"
                                                                                className="avatar-sm rounded bg-light"
                                                                                alt={f.name}
                                                                                src={f.preview}
                                                                            />
                                                                        </Col>
                                                                        <Col>
                                                                            <Link
                                                                                to="#"
                                                                                className="text-muted font-weight-bold"
                                                                            >
                                                                                {f.name}
                                                                            </Link>
                                                                            <p className="mb-0">
                                                                                <strong>{f.formattedSize}</strong>
                                                                            </p>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Card>
                                                        );
                                                    })}
                                                </div>
                                            </Form>
                                        </Col>
                                        </FormGroup>
                                    </Form>

                                    <Row className="mb-4">
                                        
                                    </Row>

                                    <Row className="justify-content-end">
                                        <Col lg="10">
                                            <Button type="submit" color="primary">
                                                Register
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default StudentRegistration;
