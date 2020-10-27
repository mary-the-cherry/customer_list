# Customer List

## Purpose

Api to learn react functionalities:
- UseReduce Hook
- UseContext Hook
- UseRef Hook
- use react-error-boundary npm package

## The API

Single side API of Customer Cards

Funcionality(implemented via UseReduce Hook):
- Add a new Customer
- Change the name of a customer
- Change the age of a customer
- Send a personal birthdaycard via a button (Then the age increment automatically) 

The border of each customer is depending on the gender(implemented with a useContext hook):
- blue: male
- pink: female
- yellow: other

Adapted for keybord users(implemendet with the UseRef Hook)

## Component Overview

- CustomerCard: Creates each single card
- NewCustomer: Creates the form to add a new Customer
- GenderContext: Provides the colors for the borderlines
 