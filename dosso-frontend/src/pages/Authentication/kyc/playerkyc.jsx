import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, CardBody, Label, Input, Dropdown, Button, Form, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import withRouter from "components/Common/withRouter";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';

const Playerkyc = () => {
    document.title = "Player KYC";

    const [selectedFiles, setselectedFiles] = useState([]);
    const [selectedPanFiles, setselectedPanFiles] = useState([]);
    const [selectStdIdFiles, setselectStdIdFiles] = useState([]);
    const [playerType, setPlayerType] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    function handleAcceptedFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setselectedFiles(files)
    }
    function handleStdIdFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setselectStdIdFiles(files)
    }

    function handlePANFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setselectedPanFiles(files)
    }

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }

    const handlePlayerTypeSelect = (value) => {
        setPlayerType(value);
    }

    return (
        <div className='page-content'>
            <Container fluid>
                <Row className="my-2 justify-content-center">
                    <Col lg="3" className="d-grid align-content-center p-0">
                        <Card>
                            <CardBody>
                                <Form
                                    className="form-verticle"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        return false;
                                    }}
                                >
                                    <div className='d-flex justify-content-center '>
                                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                            <DropdownToggle caret >Select Player Type</DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => handlePlayerTypeSelect("student")}><i className='bx bx-user-pin'></i> Student</DropdownItem>
                                                <DropdownItem onClick={() => handlePlayerTypeSelect("business")}><i className='bx bx-briefcase-alt-2'></i> Business</DropdownItem>
                                                <DropdownItem onClick={() => handlePlayerTypeSelect("individual")}><i className='bx bx-user'></i> Individual</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>

                                    {playerType === "business" && (
                                        <div className="form-group">
                                            <Label className="form-label">GST Number</Label>
                                            <Input name="gstnumber" className="form-control border" placeholder="Enter Your GST Number" type="text" />
                                        </div>
                                    )}

                                    {playerType === "student" && (

                                        <div className="form-group border border-2 mt-2 border-secondary rounded-3 p-2">
                                            <Label className="form-label">Student ID</Label>
                                            <Input name="studentid" className="form-control border" placeholder="Enter Your Name" type="text" />

                                            <div className="mt-3 mb-2 form-label" style={{ fontSize: "12px" }}>
                                                Upload Student ID
                                            </div>
                                            
                                            <Dropzone onDrop={acceptedFiles => {
                                                handleStdIdFiles(acceptedFiles)
                                            }}
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                    <div className="dropzone mb-3">
                                                        <div
                                                            className="dz-message needsclick mt-2"
                                                            {...getRootProps()}
                                                        >
                                                            <input {...getInputProps()} />
                                                            <div className="mb-1">
                                                                <i className="display-4 text-muted bx bxs-cloud-upload" />
                                                            </div>
                                                            <h6> Tap to upload</h6>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>

                                            <div className="dropzone-previews mt-3" id="file-previews">
                                                {selectStdIdFiles.map((f, i) => {
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
                                                    )
                                                })}
                                            </div>

                                        </div>
                                    )}

                                    <div className="form-group border border-2 mt-2 border-secondary rounded-3 p-2">
                                        <Label className="form-label">Aadhaar Card Number</Label>
                                        <Input name="aadhaar" className="form-control border" placeholder="Enter aadhaar number" type="text" />

                                        <div className="mt-3 mb-2 form-label" style={{ fontSize: "12px" }}>
                                            Upload Aadhaar card Image
                                        </div>
                                        <Dropzone onDrop={acceptedFiles => {
                                            handleAcceptedFiles(acceptedFiles)
                                        }}
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                                <div className="dropzone mb-3">
                                                    <div
                                                        className="dz-message needsclick mt-2"
                                                        {...getRootProps()}
                                                    >
                                                        <input {...getInputProps()} />
                                                        <div className="mb-1">
                                                            <i className="display-4 text-muted bx bxs-cloud-upload" />
                                                        </div>
                                                        <h6> Select Both front and back to upload</h6>
                                                    </div>
                                                </div>
                                            )}
                                        </Dropzone>
                                        <div className="dropzone-previews mt-3" id="file-previews">
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
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="form-group border border-2 mt-2 border-secondary rounded-3 p-2">
                                        <Label className="form-label">PAN Number</Label>
                                        <Input name="pannumber" className="form-control border" placeholder="Enter Your PAN Number" type="text" />

                                        <div className="mt-3 mb-2 form-label" style={{ fontSize: "12px" }}>
                                            Upload Pan card Image
                                        </div>
                                        <Dropzone onDrop={acceptedFiles => {
                                            handlePANFiles(acceptedFiles)
                                        }}
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                                <div className="dropzone mb-3">
                                                    <div
                                                        className="dz-message needsclick mt-2"
                                                        {...getRootProps()}
                                                    >
                                                        <input {...getInputProps()} />
                                                        <div className="mb-1">
                                                            <i className="display-4 text-muted bx bxs-cloud-upload" />
                                                        </div>
                                                        <h6>Tap to upload</h6>
                                                    </div>
                                                </div>
                                            )}
                                        </Dropzone>
                                        <div className="dropzone-previews mt-3" id="file-previews">
                                            {selectedPanFiles.map((f, i) => {
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
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="form-group mt-3 border border-2 p-2 border-secondary border-secondary rounded-3">
                                        <div className='fw-bolder fs-5 text-dark'>Bank Details</div>
                                        <Label className="form-label">Account Number</Label>
                                        <Input name="accnumber" className="form-control border" placeholder="Enter Your Account Number" type="text" />

                                        <Label className="form-label">Account Holder Name</Label>
                                        <Input name="accname" className="form-control border" placeholder="Enter Your Name" type="text" />

                                        <Label className="form-label">IFSC Code</Label>
                                        <Input name="ifsccode" className="form-control border" placeholder="Enter IFSC Code" type="text" />
                                    </div>

                                    <div className="text-center mt-4">
                                        <Button type="submit" color="danger">
                                            Submit Documents
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default withRouter(Playerkyc);