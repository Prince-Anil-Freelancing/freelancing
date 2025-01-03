import React from 'react';
// import './ContactTable.css';

function Contact() {
  return (
    <table className="App-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john.doe@example.com</td>
          <td>Hello!</td>
          <td>2025-01-03</td>
          <td><button className="action-button">Action</button></td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
}

export default Contact;
