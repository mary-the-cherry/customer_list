import React, { useContext, useState } from "react";
import { useAlert } from 'react-alert';
import { PageContext } from './GenderContext';
import ErrorBoundary from './ErrorBoundary';



export default function CustomerCard(props) {

    const [edit, setEdit] = useState(false);
    const [firstname, setFirstname] = useState(props.firstname);
    const [lastname, setLastname] = useState(props.lastname);
    const [age, setAge] = useState(props.age);
    const [birthdayCard, setBirthdayCard] = useState(false);
    const alert = useAlert();
    const { colors } = useContext(PageContext);

    const borderColor = {
        borderColor: props.gender === 'female' ? colors.female : props.gender === 'male' ? colors.male : colors.other
    };

    function handleSaveBtn() {
        if (firstname !== "" && lastname !== "" && age !== "") {
            props.dispatch({ type: 'editCustomer', firstname: firstname, lastname: lastname, age: age, id: props.id });
            setEdit(false);
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

    function throwError() {
        throw new Error('Ich bin ein Fehler zum abfangen');
    }

    function handleEditBtn() {

        setEdit(true);
    }

    function handleDeleteBtn() {
        props.dispatch({ type:'deleteCustomer', id:props.id})
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

    function handleBirthdayBtn() {
        setBirthdayCard(true);
        props.dispatch({ type: 'sendBirthdayCard', id: props.id });
    }

    function handleCloseBtn() {
        setBirthdayCard(false);
    }

    const editCustomer = (
        <div className="card edit-customer">
                  <div className="card-body">
                      <div className="form-group row input-edit-name">
                          <label htmlFor="firstname-edit" className="col-lg-4 col-form-label">Firstname</label>
                          <div className="col-lg-8 input-check">
                              <input
                            type="text"
                            id="firstname-edit"
                            className="form-control form-control-sm"
                            name="firstname"
                            value={firstname}
                            onChange={handleFirstnameChange}
                              ></input>
                          </div>
                      </div>
                      <div className="form-group row input-edit-name">
                          <label htmlFor="lastname-edit" className="col-lg-4 col-form-label">Lastname</label>
                          <div className="col-lg-8 input-check">
                              <input
                                type="text"
                                id="lastname-edit"
                                className="form-control form-control-sm"
                                name="lastname"
                                value={lastname}
                                onChange={handleLastnameChange}
                              ></input>
                          </div>
                      </div>
                      <div className="form-group row input-edit-age">
                          <label htmlFor="age-edit" className="col-lg-4 col-form-label">Age</label>
                          <div className="col-lg-8 input-check">
                              <input
                                type="number"
                                id="age-edit"
                                min="1"
                                max="110"
                                name="age"
                                className="form-control form-control-sm"
                                value={age}
                                onChange={handleAgeChange}
                              ></input>
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
                                onClick={handleDeleteBtn}
                            >Delete<span className="visually-hidden">{props.firstname} {props.lastname}</span>
                    </button>
               
                      </div>
                  </div>
              </div>
    );

    const showCustomer = (
        <div className="card" style={borderColor}>
                <div className="card-body">
                <h2 className="card-title">{props.firstname} {props.lastname}</h2>
             
                {props.age === '36' ? throwError() : <p className="card-text">Age: {props.age}</p>}
                    <div>
                        <button
                            className="btn btn-outline-dark btn-lg"
                            type="button"
                            onClick={handleBirthdayBtn}
                        >
                            Send Birthday Card<span className="visually-hidden"> to Maren Meyer</span>
                        </button>
                    </div>
                    <div className="btn-group" role="group" >
                        <button
                            type="button"
                            className="btn btn-light btn-sm"
                            onClick={handleEditBtn}
                        >
                            Edit <span className="visually-hidden">{props.firstname} {props.lastname}</span>
                        </button>
                        <button
                            type="button"
                            className="btn btn-light btn-sm"
                            onClick={handleDeleteBtn}
                        >
                            Delete <span className="visually-hidden">{props.firstname} {props.lastname}</span>
                        </button>
                    </div>
                </div>
            {birthdayCard &&
                <div className="birthdayCard-full">
                    <div className="birthdayCard-body">
                        <div className="birthdayCard-wish">
                            <h2>Happy Birthday {props.firstname}</h2>
                            <p className="birthdaywish">The secret to staying young is lying about your age.</p>
                            <p className="birthdayTextEnding">Best wishes!</p>
                            <button
                                className="btn btn-outline-light btn-sm"
                                onClick={handleCloseBtn}
                            >
                                Close
                        </button>
                        </div>
                    </div>
                </div>
            }
            </div>
            
        );

    return edit ? editCustomer : showCustomer;
}