import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendEmail = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8081/api/emails/send?recipientEmail=${encodeURIComponent(recipient)}&subject=${encodeURIComponent(subject)}`, {
        method: 'POST',
        headers: {
          'Admin': 'Admin'
        }
      });

      if (!response.ok) {
        throw new Error('Error sending email');
      }

      toast.success('Email sent successfully');

      setRecipient('');
      setSubject('');
    } catch (error) {
      toast.error('Error sending email: ' + error.message);
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipient: </label>
          <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
        </div>
        <div>
          <label>Subject: </label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <button type="submit">Send Email</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SendEmail;
                