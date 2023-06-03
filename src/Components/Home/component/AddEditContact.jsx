
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const countryData = [
    { label: "Australia", value: "Australia" },
    { label: "Bolivia", value: "Bolivia" },
    { label: "Cambodia", value: "Cambodia" },
    { label: "Iceland", value: "Iceland" },
    { label: "India", value: "India" },
    { label: "Indonesia", value: "Indonesia" },
    { label: "Ireland", value: "Ireland" },
    { label: "Italy", value: "Italy" },
    { label: "Japan", value: "Japan" },
]

const AddEditContact = ({ contacts, addContact, updateContact }) => {
    console.log("contacts", contacts);
    const navigate = useNavigate();
    const { id } = useParams();
    const [contactValue, setContactValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: '',
        address: "",
        city: "",
        state: "",
        country: "",
        postalCode: ""
    })

    useEffect(() => {
        if (id && contacts.length > 0) {
            const contact = contacts.find((contact) => contact.id === id);
            if (contact) {
                setContactValue(contact)
            }
        }
    }, [id, contacts]);

    const handleOnchange = (event) => {
        const { name, value } = event.target;
        setContactValue({ ...contactValue, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id){
        }
        const contactData = {
            ...contactValue,
            id: id || Math.random().toString(36).substr(2, 9)
        };
       
        console.log("contact", contactData);

        if (id) {
            updateContact(contactData);
        } else {
            addContact(contactData);
        }
        navigate('/');
    };


    return (
        <div className='add-edit-contact'>
            <div className='row add-edit-title'>
                <div className='col-8'>
                    <h2>{id ? 'Edit Contact' : 'Add Contact'}</h2>
                </div>
                <div className='col-4 back-btn'>
                    <Link to="/" className="btn btn-secondary">Back</Link>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={contactValue.firstName}
                                name='firstName'
                                onChange={handleOnchange}
                            />
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={contactValue.lastName}
                                name='lastName'
                                onChange={handleOnchange}
                            />
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={contactValue.email}
                                name='email'
                                onChange={handleOnchange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>Phone number</label>
                            <input
                                type="text"
                                className="form-control"
                                value={contactValue.phoneNumber}
                                name='phoneNumber'
                                onChange={handleOnchange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                value={contactValue.address}
                                name='address'
                                onChange={handleOnchange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>City</label>
                            <input
                                type="text"
                                className="form-control"
                                value={contactValue.city}
                                name='city'
                                onChange={handleOnchange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>State</label>
                            <input
                                type="text"
                                className="form-control"
                                value={contactValue.state}
                                name='state'
                                onChange={handleOnchange}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>Country</label>
                            <select onChange={handleOnchange} name="country" className="form-select" aria-label="Country">
                                <option selected>Please select</option>
                                {countryData.map((opt, i) => {
                                    return <option key={i} value={opt.value} selected={opt.value === contactValue.country}>{opt.label}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6 col-xs-12 col-sm-12'>
                        <div className="form-group mb-3">
                            <label>Postal code</label>
                            <input
                                type="number"
                                className="form-control"
                                value={contactValue.postalCode}
                                name='postalCode'
                                onChange={handleOnchange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='submit-btn pb-5'>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form >
        </div >
    );
}

export default AddEditContact;
