import React from 'react';
import Banner from './Banner';
import Inventory from '../Inventories/Inventory';
import Brands from './Brands';
import useInventoryItems from '../../hooks/useInventoryItems';
import BusinessSummary from '../Home/BusinessSummary';
import Comparison from '../Comparison/Comparison';
import Policy from '../Home/Policy';
import Testimonials from '../Home/Testimonials';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    const [inventoryItems] = useInventoryItems();
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <div className='container mx-auto'>
                <h1 className='text-5xl font-bold tracking-widest text-primary text-center m-5 uppercase'>Inventory Items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-20'>
                    {
                        inventoryItems.map(inventoryItem => <Inventory
                            key={inventoryItem._id}
                            inventoryItem={inventoryItem}
                        ></Inventory>).slice(0,6)
                    }
                </div>
                <div className='relative h-32'>
                <Link to='/manage-inventory'><button className='btn btn-primary absolute bottom-0 right-0'>Manage Inventories <HiArrowNarrowRight/></button></Link>
                </div>
                
            </div>
            <BusinessSummary></BusinessSummary>
            <Comparison></Comparison>
            <Policy></Policy>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;