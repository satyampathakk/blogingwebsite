import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewPostForm from "../components/NewPostForm";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SubmitForm() {
  const history = useNavigate();
  const url = 'http://127.0.0.1:8000/blog';

  async function onSubmit(data) {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      let response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let responseData = await response.json();

      alert('Server replied');
      history('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navbar />
      <NewPostForm onSubmit={onSubmit} />
      <Footer />
    </>
  );
}

export default SubmitForm;
