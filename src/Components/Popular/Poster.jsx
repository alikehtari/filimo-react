import React, { useState, useEffect } from 'react';
import BuyButton from '../Buttons/BuyButton';

const Poster = ({films}) => {

    const [selectedImage, setSelectedImage] = useState(0);
    const [shownFilm, setShownFilm] = useState(null);
    useEffect(() => {
        // Check if films is not empty
        if (films && films.length > 0) {
            setShownFilm(films[selectedImage]);
        }
    }, [films, selectedImage]);

    const handleImageClick = (index) => {
        setSelectedImage(index);
        setShownFilm(films[index]);
    };

    const imageClass = 'flex justify-center cruser-pointer'

    return ( 
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-3  md:grid-cols-6 gap-4">
                    {films.map((film, index) => (
                    <div 
                        key={index} 
                        className={`${imageClass} ${selectedImage === index ? 'border-2  border-white transform scale-105' : ''}`}
                        onClick={() => handleImageClick(index)}
                    >
                        <img 
                        src={film.image} 
                        alt={`Gallery ${index + 1}`} 
                        className="w-full h-auto object-cover cursor-pointer" 
                        />
                    </div>
                    ))}
                </div>
            </div>

            {shownFilm && (
                <div  style={{backgroundImage: `url(${shownFilm.poster})` }} className=' relative justify-center flex bg-cover  bg-center'>
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50"> 
                        
                    </div>

                    <div className='w-full xl:w-[1300px] mb-5 z-10 '>
                            <div className='m-1 p-1'>
                                <h5 className='text-white mb-4'>{shownFilm.title}</h5>
                                <p className='text-sm text-gray-400'> کارگردان: {shownFilm.director} </p>
                                <div className='text-white text-sm flex gap-4 items-center'>
                                {
                                    shownFilm.genres.map((genre, index) => (
                                        <p key={index} className='bg-gray-800 rounded-full px-2 py-1'>
                                        {genre}
                                        </p>
                                    ))
                                }

                                </div>

                                <p className='text-white text-sm'>
                                    {shownFilm.des}
                                </p>
                                <div className=' flex justify-between mb-2'>
                                <BuyButton />

                                </div>
                                <p className='text-white text-sm mb-2'>
                                {shownFilm.info}

                                </p>

                            </div>

                    </div>
                </div>
            )}



        </>
     );
}
 
export default Poster;