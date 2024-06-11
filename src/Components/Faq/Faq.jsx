import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Question from './Question';
import { myContext } from '../Home/Home';

const Faq = () => {
  // const [faqs, setFaqs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios.get('https://filimo.alikehtari.ir/api/v1/faqs/')
  //     .then(response => {
  //       setFaqs(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="bg-darkestGray py-4 px-1 flex items-center justify-center n">
  //       <p className="text-white text-xl">Loading...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="bg-darkestGray py-4 px-1 flex items-center justify-center ">
  //       <p className="text-red-500 text-xl">Error loading FAQs</p>
  //     </div>
  //   );
  // }
  const {faqs} = useContext(myContext);

  return (
    
    <div className='bg-darkestGray py-4 px-1'>
        <div className='mx-w-md m-auto text-center text-white'>
            <h4>سوالات متداول</h4>

        </div>
      {faqs.map((faq, index) => (
        <Question faq={faq} index={index} key={index} />
      ))}
    </div>
  );
};

export default Faq;

