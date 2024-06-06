import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';
import './Faq.css';  // You will add some custom CSS for the transition


const Question = ({faq , index}) => {

    const [open, setOpen] = useState(null);

    const toggle = (index) => {
      setOpen(open === index ? null : index);
    };

    return ( 
        <>
        <div className="max-w-4xl mx-auto text-right" >
          <div className="border text-white py-2 border-gray-900 rounded-md mb-4 shadow">
            <button
              onClick={() => toggle(index)}
              className={`w-full text-right p-2 font-bold text-md ${open === index ? 'text-yellow-500' : ''}`}
            >
              {faq.q}
            </button>
            <CSSTransition
              in={open === index}
              timeout={300}
              classNames="faq-transition"
              unmountOnExit
            >
              <div className="p-2 text-sm">
                {faq.a}
              </div>
            </CSSTransition>
          </div>
        </div>

        </>
     );
}
 
export default Question;