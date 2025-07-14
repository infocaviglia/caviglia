'use client'
import React from 'react';

const Ubicacion = () => {
    return (
        <section id="ubicacion" className="mx-auto w-full">
            <article className='flex flex-col items-center justify-center py-2 m-2 w-full'>
                <h2 className="mb-4 text-3xl md:text-4xl text-center md:text-start tracking-tight font-extrabold text-tertiary uppercase">¿Dónde nos encontras?</h2>
                <div className="px-10 py-1 mb-2 text-center bg-tertiary uppercase"></div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.026565567246!2d-57.58252812336558!3d-37.976509343357975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9147152be51%3A0xbb84e08715f0b6ec!2sCaviglia%20repuestos!5e0!3m2!1ses!2sar!4v1752512005583!5m2!1ses!2sar"
                    height="450"
                    allowFullScreen={true}
                    className='w-full pr-4'
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title='Ubicacion de Local'
                ></iframe>
            </article>
        </section>
    );
};

export default Ubicacion;
