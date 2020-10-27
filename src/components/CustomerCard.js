import React, { useContext, useState, useRef, useEffect } from "react";
import { useAlert } from 'react-alert';
import { ColorContext } from './GenderContext';

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

export default function CustomerCard(props) {

    const [edit, setEdit] = useState(false);                            //state to save value which view will be shown
    const [firstname, setFirstname] = useState(props.firstname);        //state of the controlled input component firstname
    const [lastname, setLastname] = useState(props.lastname);           //state of the controlled input component lastname
    const [age, setAge] = useState(props.age);                          //state of the controlled input component age
    const [birthdayCard, setBirthdayCard] = useState(false);            //state to save value if a birthdayCard or just a send birthdaycard button is shown
    const alert = useAlert();                                           //use alert lib to show an alert
    const { colors } = useContext(ColorContext);                        //get the colors out of the Context ColorGender
    const editFieldRef = useRef(null);                                  //useRef to improve keyboard accessibility 
    const editButtonRef = useRef(null);                                 //useRef to improve keyboard accessibility 
    const sendBCardBtnRef = useRef(null);                               //useRef to improve keyboard accessibility 
    const closeBCardBtnRef = useRef(null);                              //useRef to improve keyboard accessibility 
    const wasEditing = usePrevious(edit);                               //Previous value of edit
    const wasSendingBCard = usePrevious(birthdayCard);                  ////Previous value of birthdayCard

    const borderColor = {
        /*
         *define depending on the gender which border color for the card is used
         */
        borderColor: props.gender === 'female' ? colors.female : props.gender === 'male' ? colors.male : colors.other
    };

    useEffect(() => {
        /*
         *for keyboard accessibility focus is changed between first edit field and the edit button
         */
        if (!wasEditing && edit) {
            editFieldRef.current.focus();
        }
        if (wasEditing && !edit) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, edit]);

    useEffect(() => {
        /*
         *for keyboard accessibility focus is changed between close button of the bithday card the send birthday card button
         */
        if (!wasSendingBCard && birthdayCard){
            closeBCardBtnRef.current.focus();
        }
        if (wasSendingBCard && !birthdayCard) {
            sendBCardBtnRef.current.focus();
        }
    }, [birthdayCard, wasSendingBCard]);

    function handleSaveBtn() {
    /*
     * if an input field is empty, the form will not be submitted and an alert will be shown 
     * if all inputs are correct the changes of the customer via a reducer are suubmitted
     */
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

    function handleEditBtn() {
        /*
         * sets the edit to true so the the edit function of the customer will be rendered
         */
        setEdit(true);
    }

    function handleDeleteBtn() {
        /*
         * calls the Reducer to delete this Customer
         */
        props.dispatch({ type:'deleteCustomer', id:props.id})
    }

    // functions to handle the controlled input
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
        /*
         * State BirthdayCard is set true and so a Birthday Card is rendered and the age of the customer is increased 
         */
        setBirthdayCard(true);
        props.dispatch({ type: 'sendBirthdayCard', id: props.id });
    }

    function handleCloseBtn() {
        /*
         * State BirthdayCard is set false, so just the send birthday card button is displayed
         */
        setBirthdayCard(false);
    }

    //function to render the edit customer form
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
                            ref={editFieldRef}
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

    //function to render the customer card
    const showCustomer = (
        <div className="card" style={borderColor}>
                <div className="card-body">
                <h2 className="card-title">{props.firstname} {props.lastname}</h2>
                 <p className="card-text">Age: {props.age}</p>
                    <div>
                        <button
                        className="btn btn-outline-dark btn-lg"
                        type="button"
                        onClick={handleBirthdayBtn}
                        ref={sendBCardBtnRef}
                        >
                            Send Birthday Card<span className="visually-hidden"> to Maren Meyer</span>
                        </button>
                    </div>
                    <div className="btn-group" role="group" >
                        <button
                            type="button"
                            className="btn btn-light btn-sm"
                            onClick={handleEditBtn}
                            ref={editButtonRef}
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
                            ref={closeBCardBtnRef}
                            >
                                Close
                        </button>
                        </div>
                    </div>
                </div>
            }
            </div>
            
        );

    //depending on the state edit a customer is shown or a editable customer form
    return edit ? editCustomer : showCustomer;
}