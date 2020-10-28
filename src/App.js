import React, { useReducer } from "react";
import CustomerCard from "./components/CustomerCard";
import NewCustomer from "./components/NewCustomer";
import ColorContextProvider from "./components/GenderContext";
import { nanoid } from "nanoid";
import { ErrorBoundary } from "react-error-boundary";

//Defaultlist of customers
const CUST_LIST = [
  {
    firstname: "Harry",
    lastname: "Potter",
    gender: "male",
    age: "30",
    id: "1",
  },
  {
    firstname: "Mary",
    lastname: "Poppins",
    gender: "female",
    age: "45",
    id: "2",
  },
  {
    firstname: "Hermione",
    lastname: "Granger",
    gender: "female",
    age: "30",
    id: "3",
  },
];

function chunk(arr, len) {
  /*
   * Chunk any array in smaller array: arr --> Array, len: length of subarray
   */
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}

function ErrorFallback({ error, resetErrorBoundary }) {
  /*
   * Fallback for all errors whch occur while rendering
   */
  return (
    <div className="error-message" role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

function App() {
  const [customer, dispatch] = useReducer(actionsCustomerList, CUST_LIST); //global customerlist

  const customerList = chunk(customer, 3).map((chunk, index) => {
    /*
     * function to create a card for each customer
     */
    return (
      <div className="card-deck" key={index}>
        {chunk.map((person) => (
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
    /*
     * possible actions to the customerlist
     */
    switch (action.type) {
      case "addCustomer":
        const newCustomer = {
          firstname: action.firstname,
          lastname: action.lastname,
          gender: action.gender,
          age: action.age,
          id: nanoid(),
        };
        return [...customer, newCustomer];
      case "deleteCustomer":
        return customer.filter((person) => person.id !== action.id);
      case "editCustomer":
        return customer.map((person) => {
          if (person.id === action.id) {
            return {
              ...person,
              firstname: action.firstname,
              lastname: action.lastname,
              age: action.age,
            };
          }
          return person;
        });
      case "sendBirthdayCard":
        return customer.map((person) => {
          if (person.id === action.id) {
            return { ...person, age: parseInt(person.age) + 1 };
          }
          return person;
        });
      default:
        throw new Error("Action is not existing!");
    }
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <ColorContextProvider>
        <div className="App container">
          <header>
            <h1 className="title-api">Customer List</h1>
            <h3 className="subtitle-api">All you customers on one view!</h3>
          </header>
          {customerList}
          <div className="new-customer">
            <NewCustomer dispatch={dispatch} />
          </div>
        </div>
      </ColorContextProvider>
    </ErrorBoundary>
  );
}

export default App;
