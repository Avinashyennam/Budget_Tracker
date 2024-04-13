import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//import logo from './logo.svg';
// import logo from '/public/logo-no-background.png;'
// import './App.css';

// function App() {
//   return (
    // <div className='background'>
    //   <div className='flex justify-evenly'>
    //     <div>
    //       <img src={logo} alt='not found' />
    //     </div>
    //     <div>Profile</div>
    //   </div>
    //       <div className="flex gap-5 w-full h-screen p-5 sm:flex-col">
    //         <div className="w-1/2 flex flex-col gap-5">
    //           <div className="w-full border-2 border-black h-1/3 bg-blue">Total</div>
    //           <div className="w-full border border-black h-3/5 bg-lightblue">Daily</div>
    //         </div>
    //         <div className="w-1/2 border border-black bg-skyblue">Txn</div>
    //       </div>
    //       <div className='bg-palepink'>Graphs</div>
    // </div>

//   );
// }

// export default App;
