import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { loadUsers, deletePerson } from '../service'

const Home = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        console.log("Milos")
        loadUsers().then(result => {
            setPersons(result.data)
        })
    }, [])

    const deleteUser = (id) => {
        deletePerson(id).then(result => {
            loadUsers().then(result => {
                setPersons(result.data)
            })
        })

    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Persons</h1>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">City</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map((person, index) => (
                                <tr>
                                    <th scoper="row">{index + 1}</th>
                                    <td scoper="row">{person.name}</td>
                                    <td scoper="row">{person.surname}</td>
                                    <td scoper="row">{person.city}</td>
                                    <td scoper="row">{person.address}</td>
                                    <td scoper="row">{person.phone}</td>
                                    <td>
                                        <Link className="mr-2 btn btn-primary" to={`/persons/edit/${person.id}`}>Edit</Link> <span className="ml-5"></span>
                                        <button className="btn btn-danger ml-15" onClick={() => deleteUser(person.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;