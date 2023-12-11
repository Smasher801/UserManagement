"use client";
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
// import { httpAxios } from "@/helper/httpHelper";
import { currentUser } from "@/services/userService";

export const UserCont = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(undefined);

  // going to make an api call

  useEffect(() => {
    // when we are refreshing even after the user is logged out
    // this useEffect is running and setting user as something
    // so this is a problem of middleware
    // so we handle that there
    async function loading() {
      try {
        const logUser = await currentUser();
        console.log(logUser);
        setUser({ ...logUser });
      } catch (error) {
        console.log(error);
        // toast.error("error in loading current user");
        setUser(undefined);
      }
    }
    if (!user) loading();
    // loading();
  }, []);

  return (
    <UserCont.Provider value={{ user, setUser }}>
      {" "}
      {children}{" "}
    </UserCont.Provider>
  );
};

export default UserContext;

/* 
    

 import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {

   const [userFirstname, setUserFirstname] = useState('Coder');
  const [userLastname, setUserLastname] = useState('Byte');
  const [userPhone, setUserPhone] = useState('8885559999');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ userFirstname, userLastname, userPhone });
  };

  return (
   <form onSubmit={handleFormSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={userFirstname}
        onChange={(e) => setUserFirstname(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={userLastname}
        onChange={(e) => setUserLastname(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

function InformationTable({phoneBookEntries}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
       <tbody>
        {phoneBookEntries.map((entry, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{entry.userFirstname}</td>
            <td style={style.tableCell}>{entry.userLastname}</td>
            <td style={style.tableCell}>{entry.userPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {
   const [phoneBookEntries, setPhoneBookEntries] = useState([]);

  const addEntryToPhoneBook = (newEntry) => {
    const updatedEntries = [...phoneBookEntries, newEntry];
    updatedEntries.sort((a, b) => a.userLastname.localeCompare(b.userLastname));
    setPhoneBookEntries(updatedEntries);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable phoneBookEntries={phoneBookEntries} />
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);



*/
