import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { loadPerson, updatePerson } from '../service'

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [person, setPerson] = useState({
        name: "",
        surname: "",
        createdDate: "",
        city: "",
        address: "",
        phone: "",
        title: ""
    })
    const { name, surname, createdDate, city, address, phone, title } = person
    const onInputChange = e => {
        setPerson({ ...person, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async e => {
        e.preventDefault()
        updatePerson(id, person).then((result) => {
            navigate('/');
        })
    }

    const loadUser = async () => {
        loadPerson(id).then((result) => {
            setPerson(result.data)
        })
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg mb-2"
                            placeholder="Enter your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-2"
                            placeholder="Enter your Surname"
                            name="surname"
                            value={surname}
                            onChange={e => onInputChange(e)}
                        />
                        <input
                            type="date"
                            className="form-control form-control-lg mb-2"
                            placeholder="Enter your Created Date"
                            name="createdDate"
                            value={createdDate}
                            onChange={e => onInputChange(e)}
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-2"
                            placeholder="Enter your City"
                            name="city"
                            value={city}
                            onChange={e => onInputChange(e)}
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-2"
                            placeholder="Enter your Address"
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)}
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-2"
                            placeholder="Enter your Phone"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                        <input
                            type="text"
                            className="form-control form-control-lg mb-2"
                            placeholder="Enter your Title"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary form-control form-control-lg">Edit Person</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;