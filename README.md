# React useReducer Example Challenge

This simple react program presents a bank account with various transactions
following the rules listed below.  

![SimpleBankAccountScreenShot.png](./Documentation/SimpleBankAccountScreenshot.png)

**React Features Demonstrated**

- useReducer hook - consolidates app logic in the reducer function
- Components use the "dispatch" function to send an action with a type and an optional payload to the reducer function
- Break UI into components so Main app 

This app was constructed as part of the [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/) on Udemy.com by [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/).  This is a student challenge, where the student is given instructions below, and then implements the app themselves. 

## INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer
   NOTE: This was handled by hiding all buttons except open when the account is closed.

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state

## Setup and Running

In order to run this app you will need the following

1. Install [Node.js](https://nodejs.org/en) for local development.

2. run npm install in the app folder

3. In a terminal run `npm start` to Start the App

4. open a local browser at http://localhost:3000

# Ports

- http://localhost:3000 - Default React APP port

# Create-React-App Readme

This app was bootstrapped using `npx create-reac-app@5 react-quiz`The default readme for react apps is found at [ReadmeReact.md](./ReadmeReact.md)

### Markdown Syntax

This file is a Markdown file, which is a plaintext file that can be rendered into HTML and is capable of containing hyperlinks, images, tables and other formatting syntax. See the [GitHub Document Writing](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) page for more information.
