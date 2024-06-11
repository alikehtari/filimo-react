import { createContext,  useEffect, useState } from "react";
import Faq from "../Faq/Faq";
import Header from "../Header/Header";
import Popular from "../Popular/Popular";
import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import axios from 'axios';
export const myContext = createContext();

const Home = () => {
    const [sliders,setSliders]=useState([]);
    const [faqs,setFaqs]=useState([]);

    const fetchSliders= async ()=>{
        try {
            const response = await axios.get('https://filimo.alikehtari.ir/api/v1/slider/');
            setSliders(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const fetchFaqs= async ()=>{
        try {
            const response = await axios.get('https://filimo.alikehtari.ir/api/v1/faqs/');
            setFaqs(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(()=>{
        fetchSliders()
        fetchFaqs()
    },[])

    return ( 
        <>
        <myContext.Provider value= {{sliders , faqs}}>
            <Header />
            <Slider />
            <Popular />
            <Section />
            <Faq/>

        </myContext.Provider>
        </>
     );
}
 
export default Home;