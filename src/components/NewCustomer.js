import React, { useState } from "react";
import { useAlert } from 'react-alert'


export default function NewCustomer(props) {

    const [addCustomer, setAddCustomer] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("...");
    const alert = useAlert()

    function handleNewCustomerBtn() {
        setAddCustomer(true);
    }

    function handleFirstnameChange(e) {
        setFirstname(e.target.value);
    }

    function handleLastnameChange(e) {
        setLastname(e.target.value);
    }

    function handleAgeChange(e) {
        setAge(e.target.value);
    }

    function handleGenderChange(e) {
        setGender(e.target.value);
    }

    function handleSaveBtn() {

        if (firstname !== "" && lastname !== "" && age !== "") {
            props.dispatch({ type: 'addCustomer', firstname: firstname, lastname: lastname, gender: gender, age: age });
            setAddCustomer(false);
            setFirstname("");
            setLastname("");
            setGender("...");
            setAge("");
        }
        else {
            if (firstname === "" && lastname !== "" && age !== "") {
                alert.error("Please enter your firstname!");
            }
            else if (lastname === "" && firstname !== "" && age !== "") {
                alert.error("Please enter your lastname!");
            }
            else if (age === "" && lastname !== "" && firstname !== "") {
                alert.error("Please enter your age!");
            }
            else if (firstname === "" && lastname === "" && age !== "") {
                alert.error("Please enter your firstname and lastname!");
            }
            else if (firstname === "" && age === "" && lastname !== "") {
                alert.error("Please enter your firstname and age!");
            }
            else if (age === "" && lastname === "" && firstname !== "") {
                alert.error("Please enter your lastname and age!");
            }
            else if (firstname === "" && lastname === "" && age === "") {
                alert.error("Please enter your firstname, lastname and age!");
            }
        }
    }

    function handleQuitBtn() {
        setAddCustomer(false);
    }

    const newCustomerBtn = (
        <div className="new-customer-button">
            <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                onClick={handleNewCustomerBtn}
            >
                New Customer
                  </button>
        </div>
    );

    const newCustomerForm = (
        <div className="new-customer-form">
            <div className="card">
                <div className="card-body-new-customer card-body">
                    <div className="form-group row input-name">
                        <label htmlFor="firstname-edit" className="col-sm-3 col-form-label">Firstname</label>
                        <div className="col-sm-9 input-check">
                            <input
                                type="text"
                                id="firstname-edit"
                                name="firstname"
                                className="form-control form-control-sm"
                                value={firstname}
                                onChange={handleFirstnameChange}
                                required
                            ></input>
                            <span className="validity"></span>
                            <div className="invalid-feedback">
                                Please enter your firstname!
                            </div>
                        </div>
                    </div>
                    <div className="form-group row input-name">
                        <label htmlFor="lastname-edit" className="col-sm-3 col-form-label">Lastname</label>
                        <div className="col-sm-9 input-check">
                            <input
                                type="text"
                                id="lastname-edit"
                                name="lastname"
                                className="form-control form-control-sm"
                                value={lastname}
                                onChange={handleLastnameChange}
                                required
                            ></input>
                            <span className="validity"></span>
                        </div>
                    </div>
                    <div className="form-group row input-gender">
                        <label htmlFor="gender-selection" className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9 input-check">
                            <select
                                name="gender"
                                id="gender-selection"
                                className="form-control form-control-sm"
                                onChange={handleGenderChange}
                                defaultValue="..."
                                required
                            >
                                <option value="other">...</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row input-age">
                        <label htmlFor="age-edit" className="col-sm-3 col-form-label">Age</label>
                        <div className="col-sm-9 input-check">
                            <input
                                type="number"
                                id="age-edit"
                                min="1"
                                max="110"
                                name="age"
                                value={age}
                                onChange={handleAgeChange}
                                className="form-control form-control-sm"
                                required
                            ></input>
                            <span className="validity"></span>
                        </div>
                    </div>
                    <div className="btn-group" role="group" >
                        <button
                            type="button"
                            className="btn btn-light btn-sm"
                            onClick={handleSaveBtn}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-light btn-sm"
                            onClick={handleQuitBtn}
                        >
                            Quit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        );

    return addCustomer ? newCustomerForm : newCustomerBtn;

}