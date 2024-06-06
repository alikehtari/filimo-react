import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Poster from './Poster';



const Popular = () => {

    const [films, setFilms] = useState([]);
    useEffect(() => {
        const fetchFilms = async () => {
          try {
            const response = await axios.get('https://filimo.alikehtari.ir/api/v1/movies/');
            setFilms(response.data);
          } catch (error) {
            console.error('Error fetching films:', error);
          }
        };
    
        fetchFilms();
      }, []);

    const [series, setSeries] = useState([]);
    useEffect(() => {
        const fetchSeries = async () => {
          try {
            const response = await axios.get('https://filimo.alikehtari.ir/api/v1/series/');
            setSeries(response.data);
          } catch (error) {
            console.error('Error fetching series:', error);
          }
        };
    
        fetchSeries();
      }, []);



    const [activeMedia, setActiveMedia] = useState('movie'); // Initial state

    const handleClick = (media) => {
      setActiveMedia(media);
    };

    return ( 
        <div className='bg-darkestGray'>
            <div className=" justify-center flex">
                <div className="flex gap-4  items-center w-full xl:w-[1300px]">
                    <div className="text-white font-bold">
                        <h5>
                        محبوب‌ترین‌های فیلیمو
                        </h5>

                    </div>
                    <div className="text-white border border-1-1 flex gap-1 font-bold rounded-full ">
                        <div
                            id="series"
                            className={`rounded-full px-2 cursor-pointer w-1/2 ${activeMedia === 'series' ? 'bg-gray-500' : ''}`}
                            onClick={() => handleClick('series')}
                        >
                            <span>سریال</span>
                        </div>
                        <div
                            id="movie"
                            className={`rounded-full px-2 cursor-pointer w-1/2 ${activeMedia === 'movie' ? 'bg-gray-500' : ''}`}
                            onClick={() => handleClick('movie')}
                        >
                            <span>فیلم</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className={` ${activeMedia === 'movie' ? ' ' : 'hidden'}`}>
                <Poster  films={films} />
            </div>
            <div className={` ${activeMedia === 'series' ? ' ' : 'hidden'}`}>
                <Poster  films={series} />
            </div>


        </div>

     );
}
 
export default Popular;