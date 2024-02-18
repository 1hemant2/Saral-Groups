import React from 'react'
import ProtectedPage from '../component/ProtectedPage';
import data from '../Data/data.json';
// import { useEffect } from 'react';
import Footer from './Footer';
import PropertiesBox from '../component/PropertiesBox';

const Properties = () => {
    const properties = data.properties;
    return (
        <div>
            <div className="sm:hidden">
                <div>
                    <ProtectedPage></ProtectedPage>
                </div>
                <div className='pt-10 mt-4'>
                    <h3 className='mt-8 text-2xl font-semibold'>Avilable Properties</h3>
                </div>
                <div>
                    {
                        properties.map((d) => (
                            <>
                                <div className='m-3'>
                                    <PropertiesBox name={d.name} rent={d.rent} image_url={d.image_url} about={d.about} id={d.id}></PropertiesBox>
                                </div>
                            </>
                        ))
                    }
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>

            <div className='hidden sm:flex'>
                <div className='flex flex-col'>
                    <div>
                        <ProtectedPage></ProtectedPage>
                    </div>
                    <div className='pt-10 mt-4'>
                        <h3 className='mt-8 text-2xl font-semibold'>Avilable Properties</h3>
                    </div>
                    <div className='grid grid-cols-3'>
                        {
                            properties.map((d) => (
                                <>
                                    <div className='m-3'>
                                        <PropertiesBox name={d.name} rent={d.rent} image_url={d.image_url} about={d.about} id={d.id}></PropertiesBox>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Properties;