import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from 'framer-motion';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Debit() {
    const [txn, setTxn] = useState({
        amount: '',
        desc: '',
        date: '',
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setTxn({
            ...txn,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(txn);
        const url = `${window.location.origin}/debit`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(txn),
            });
            console.log(response);
            if (response.ok) {
                setTxn({
                    amount: '',
                    desc: '',
                    date: '',
                });
            }
        }
        catch (e) {
            console.log("error: ", e);
        }


    }

    // useInView, useAnimation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    });

    return (
        <div ref={ref}>
            <div className="flex justify-center items-center">
                <motion.div
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}

                    // variants={{
                    //     hidden: {opacity:0, y:75},
                    //     visible: {opacity:1, y:0},
                    // }}
                    // initial="hidden"
                    // animate={mainControls}
                    // transition={{duration:0.5, delay:0.25}}

                    className="flex justify-center gap-12 sm:w-full w-1/2"
                >
                    <div className="flex items-end">
                        <Link to='/'><FontAwesomeIcon icon={faChevronLeft} style={{ width: 20, height: 30 }} /></Link>

                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='mt-8'>
                            <img src='/budget-high-resolution-logo-black-transparent.png' alt='not found' width={125} height={125} />
                        </div>
                        <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-#D91818 to-#A11919 textcolor'>Tracker</h1>
                    </div>
                </motion.div>
            </div>

            <div>
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col gap-6 items-center py-10 my-20"
                    onSubmit={handleSubmit}
                >
                    <input type="number" name="amount" value={txn.amount} placeholder="Add amount" className="border border-black px-4 text-xl rounded-lg w-2/5 sm:w-4/5 h-12" onChange={handleInput} />
                    <input type="text" name="desc" value={txn.desc} placeholder="Add Description" className="border border-black px-4 text-xl rounded-lg w-2/5 sm:w-4/5 h-12" onChange={handleInput} />
                    <input type="date" name="date" value={txn.date} onChange={handleInput} />
                    <button className="bg-[#FD0202] text-white text-2xl rounded-lg w-1/5 sm:w-2/5 h-12">Add</button>
                </motion.form>
            </div>
        </div>
    )
}