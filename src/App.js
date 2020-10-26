import React, {useReducer} from 'react';
import CustomerCard from './components/CustomerCard';
import NewCustomer from './components/NewCustomer';
import PageContextProvider from './components/GenderContext';
import { nanoid } from 'nanoid';
import ErrorBoundary from './components/ErrorBoundary';

const CUST_LIST = [
    { firstname: "Maren", lastname: "Meyer", gender: "female", age: "30" , id:"1"},
    { firstname: "Svenja", lastname: "Meyer", gender: "female", age: "33", id:"2"},
    { firstname: "Guido", lastname: "De Marco", gender: "male", age: "34", id: "3" },
    { firstname: "Maren", lastname: "Meyer", gender: "female", age: "30", id: "4" },
    { firstname: "Svenja", lastname: "Meyer", gender: "female", age: "33", id: "5" },
    { firstname: "Guido", lastname: "De Marco", gender: "male", age: "34", id: "6" },
    { firstname: "Guido", lastname: "De Marco", gender: "male", age: "34", id: "7" }
];

function chunk(arr, len) {
    var chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
}

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}


function App() {

    const [customer, dispatch] = useReducer(actionsCustomerList, CUST_LIST);
    
    const customerList = chunk(customer, 3).map((chunk,index) => {
        return (
            <div className="card-deck" key={index}>
                {chunk.map(person => (
                        <CustomerCard
                            firstname={person.firstname}
                            lastname={person.lastname}
                            gender={person.gender}
                            age={person.age}
                            id={person.id}
                            key={person.id}
                            dispatch={dispatch}
                        />
                ))}
            </div>
        );
    });

    function actionsCustomerList(customer, action) {

        switch (action.type) {
            case 'addCustomer':
                const newCustomer = {
                    firstname: action.firstname,
                    lastname: action.lastname,
                    gender: action.gender,
                    age: action.age,
                    id: nanoid()
                }
                return ([...customer, newCustomer]);
            case 'deleteCustomer':
                return (customer.filter(person => person.id !== action.id));
            case 'editCustomer':
                return customer.map(person => {
                    if (person.id === action.id) {
                        return {...person, firstname: action.firstname, lastname: action.lastname, age: action.age}
                    }
                    return person;
                });
            case 'sendBirthdayCard':
                return customer.map(person => {
                    if (person.id === action.id) {
                        return { ...person, age: parseInt(person.age) +1 }
                    }
                    return person;
                });
            default:
                throw new Error ('Action is not existing!');
        }
    }

    return (
        <ErrorBoundary>
        <PageContextProvider>
            <div className="App container">
                <header >
                    <h1 className="title-api">Customer List</h1>
                    <h3 className="subtitle-api">All you customers on one view!</h3>
                </header>
                {customerList}  
                <div className="new-customer">
                <NewCustomer
                  dispatch={dispatch}
                />
                </div>
                </div>
                
            </PageContextProvider>
        </ErrorBoundary>
  );
}

export default App;
