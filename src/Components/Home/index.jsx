// ContactList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowUp from "../../assets/images/arrow-up.svg";
import ArrowDown from "../../assets/images/arrow-down.svg";

const ContactList = ({ contacts }) => {
    const [sortConfig, setSortConfig] = useState({ field: null, order: null });

console.log("sortConfig", sortConfig);

    const handleSort = (field) => {
        let order = 'asc';
        if (sortConfig.field === field && sortConfig.order === 'asc') {
            order = 'desc';
        }
        setSortConfig({ field, order });
    };

    const sortedContacts = contacts.slice().sort((a, b) => {
        if (sortConfig.field && sortConfig.order) {
            if (a[sortConfig.field] < b[sortConfig.field]) {
                return sortConfig.order === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.field] > b[sortConfig.field]) {
                return sortConfig.order === 'asc' ? 1 : -1;
            }
        }
        return 0;
    })

    const getSortIcon = (column) => {
        if (sortConfig.field === column) {
            return sortConfig.order === 'asc'  ? ArrowDown: ArrowUp;
        }
        return ArrowDown;
      };

    return (
        <div className='contact-list'>
            <div className='row heading-section'>
                <div className='col-6'>
                    <h2>Contact List</h2>
                </div>
                <div className='col-6 back-btn'>
                <Link to="/add" className="btn btn-primary">Add Contact</Link>
                </div>
            </div>
            <div class="table-responsive"> 
            <table className="contact-table table table-bordered table-striped">
                <thead>
                    <tr>
                        <th className="cursor-pointer" onClick={() => handleSort('firstName')}>First name <span><img height={16} width={16} src={getSortIcon('firstName')}/></span></th>
                        <th className="cursor-pointer" onClick={() => handleSort('lastName')}>Last name <span><img height={16} width={16} src={getSortIcon('lastName')}/></span></th>
                        <th className="cursor-pointer" onClick={() => handleSort('email')}>Email<span><img height={16} width={16} src={getSortIcon('email')}/></span></th>
                        <th className="cursor-pointer" onClick={() => handleSort('phoneNumber')}>Phone number<span><img height={16} width={16} src={getSortIcon('phoneNumber')}/></span></th>
                        <th className="cursor-pointer" onClick={() => handleSort('address')}>Address<span><img height={16} width={16} src={getSortIcon('address')}/></span></th>
                        <th className="cursor-pointer" onClick={() => handleSort('city')}>City<span><img height={16} width={16} src={getSortIcon('city')}/></span></th>
                        <th className="cursor-pointer" onClick={() => handleSort('state')}>State<span><img height={16} width={16} src={getSortIcon('state')}/></span></th>
                        <th className="cursor-pointer" onClick={() => handleSort('country')}>Country<span><img height={16} width={16} src={getSortIcon('country')}/></span></th>
                        <th className="cursor-pointer" onClick={() => handleSort('postalCode')}>PostalCode<span><img height={16} width={16} src={getSortIcon('postalCode')}/></span></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedContacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.address}</td>
                            <td>{contact.city}</td>
                            <td>{contact.state}</td>
                            <td>{contact.country}</td>
                            <td>{contact.postalCode}</td>
                            <td>
                                <Link to={`/edit/${contact.id}`} className="btn btn-primary mr-2">Edit</Link>
                                <Link to={`/map`} state={contact} className="btn btn-primary list-view-map-btn">Map</Link>
                            </td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
            </div>
            {sortedContacts.length >=1 ? ""
             :
             <div className='row'>
                <div className='col-12 text-center'>
                <h5>No data found!</h5>
                </div>
             </div>}

        </div>
    );
}

export default ContactList;
