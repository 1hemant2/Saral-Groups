import React from 'react'
import { useParams } from 'react-router-dom';
import ProtectedPage from '../component/ProtectedPage';
import Footer from './Footer';
import data from '../Data/data.json'
import Button2 from '../component/Button2';
import BoxOffer from '../component/BoxOffer';
const PropertiesDetial = () => {
    const param = useParams();
    const id = parseInt(param, 10);
    console.log(param);
    const property = data.properties;
    console.log(property);
    return (
        <>
            <div>
                <ProtectedPage></ProtectedPage>
            </div>
            <div>
                {
                    property.map((d) => (
                        d.id === id ?
                            <div>
                                <img src={d.image_url} alt="" />
                                <div>{d.name}</div>
                                <Button2 text={"Enqurie Now"}></Button2>
                                <div>starting at €{d.rent}/month</div>
                                <p>Special Offer</p>
                                <BoxOffer></BoxOffer>
                                <BoxOffer></BoxOffer>
                                <h2>About</h2>
                                <p>{d.about}</p>
                                <hr />
                            </div> : ''
                    ))
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>

    )
}

export default PropertiesDetial;