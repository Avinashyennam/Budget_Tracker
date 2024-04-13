import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(()=>{
    fetch(`${window.location.origin}/getData`)
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      // console.log(data);
      setData(data);
      // setLoading(false);
    })
  },[]);
  console.log(data);

  const limitedData = data.slice(0,15);

  return (
    <div className='background flex flex-col gap-6'>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center items-center'
      >
        <div className='mt-8'>
          <img src='/budget-high-resolution-logo-black-transparent.png' alt='not found' width={125} height={125} />
        </div>
        <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-#D91818 to-#A11919 textcolor'>Tracker</h1>
      </motion.div>
      <div className="flex justify-around gap-5 w-full p-4 sm:flex-col mt-10 sm:mt-0">
        {/* for total balance container */}
        <motion.div
          className='w-1/3 sm:w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="w-full border border-black rounded-lg py-6 flex flex-col gap-2 items-center justify-center">
            <p className='text-2xl font-normal'>Current balance: </p>
            <div className='flex gap-1'>
              <FontAwesomeIcon icon={faIndianRupeeSign} style={{ width: "20px", height: "40px", color: "black" }} />
              <h2 className='text-3xl font-bold text-black'>5000.00</h2>
            </div>
          </div>

          <div className="w-full py-6 flex items-center justify-center gap-3 text-white">
            <Link to="/credit" className='w-1/3'><button className='bg-[#2fba31] w-full py-2 rounded-lg text-2xl'>Credit</button></Link>

            <Link to="/debit" className='w-1/3'><button className='bg-[#FD0202] w-full py-2 rounded-lg text-2xl'>Debit</button></Link>
          </div>
        </motion.div>

        <motion.div
          className="w-2/5 px-4 flex flex-col gap-6 sm:w-full"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ ease: 'linear', duration: 0.5, delay: 0.5, type: 'spring', stiffness: 40 }}
        >
          <div className='flex justify-between text-xl font-medium'>
            <h3 className='text-[#A11919] text-2xl'>Description</h3>
            <div className='w-1/2 flex items-center justify-around border border-black'>
              <h4>Filter </h4>
              <h4>All</h4>
              <FontAwesomeIcon icon={faCaretDown} style={{ width: "20px", height: "20px" }} />
            </div>
          </div>
          <div>
            <ul className='flex flex-col gap-4'>

              {limitedData.map((item)=>(
                <li id={item.id} className='flex justify-between px-3'>
                  <span>
                    <h4 className='text-2xl font-semibold'>{item.description}</h4>
                    <p className='text-xl'>{item.date}</p>
                  </span>
                  <span className=' flex items-center gap-3'>
                    <FontAwesomeIcon icon={faIndianRupeeSign} style={{ width: 17, height: 30 }} />
                    <h4 className='text-3xl font-semibold text-red-600'>{item.amount}</h4>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <div className='bg-palepink'>Graphs</div>
    </div>
  );
}

export default App;
