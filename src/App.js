import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {ToastContainer} from 'react-toastify';
import ClaimAirdrop from './Screens/ClaimAirdrop';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ClaimAirdrop />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    >

    </ToastContainer>
    </>
  );
}

export default App;
