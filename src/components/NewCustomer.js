import React, { useState, useRef, useEffect } from "react";
import { useAlert } from 'react-alert'

function usePrevious(value) {
    /*
     * function to get the previous value of a state
     */
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function NewCustomer(props) {

    const [addCustomer, setAddCustomer] = useState(false);          //state to save which view is shown: add Customerview or just a button  
    const [firstname, setFirstname] = useState("");                 //state of the controlled input component firstname
    const [lastname, setLastname] = useState("");                   //state of the controlled input component lastname
    const [age, setAge] = useState("");                             //state of the controlled input component age
    const [gender, setGender] = useState("...");                    //state of the controlled input component gender
    const alert = useAlert()                                        //use alert lib to show an alert
    const addCustomerBtnRef = useRef(null);                         //useRef to improve keyboard accessibility 
    const inputCustomerRef = useRef(null);                          //useRef to improve keyboard accessibility 
    const addedCustomer = usePrevious(addCustomer);                 //Previous value of addCustomer

    useEffect(() => {
        /*
         *for keyboard accessibility focus is changed between addCustomer Button and first input of the new customer form
         */
        if (!addedCustomer && addCustomer) {
            inputCustomerRef.current.focus();
        }
        if (addedCustomer && !addCustomer) {
            addCustomerBtnRef.current.focus();
        }
    }, [addedCustomer, addCustomer]);

    
    function handleNewCustomerBtn() {
        /*
         *changes value of addCustomer so that the form for the new customer is rendered
         */
        setAddCustomer(true);
    }

    // function to handle controlled input
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
        /*
         * if an input field is empty, the form will not be submitted and an alert will be shown
         */

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
        /*
         * sets the addCustomer to false so the the AddCostomer Button is rendered (no new Customer as added)
         */
        setAddCustomer(false);
    }

    //rendered new customer Button
    const newCustomerBtn = (
        <div className="new-customer-button">
            <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                onClick={handleNewCustomerBtn}
                ref={addCustomerBtnRef}
            >
                New Customer
                  </button>
        </div>
    );

    //rendered new customer form with inputfield for: firstname,secondname,age and gender
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
                                ref={inputCustomerRef}
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

    //depending in addCustomer the add customer button is shown or the add customer form
    return addCustomer ? newCustomerForm : newCustomerBtn;

}