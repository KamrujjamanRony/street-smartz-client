import React from 'react';
import clients from '../../assets/icons/group.png';
import revenue from '../../assets/icons/money.png';
import reviews from '../../assets/icons/rating.png';
import tools from '../../assets/icons/tools.png';
import BusinessSummaryCard from './BusinessSummaryCard';

const BusinessSummary = () => {
    return (
        <div className='mt-20 bg-gray-100 p-20'>
            <p className='text-5xl font-bold tracking-widest text-primary text-center mb-12 uppercase'>Business Summery</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 container mx-auto'>
                <BusinessSummaryCard count="100k+" name="Happy Clients" img={clients}></BusinessSummaryCard>
                <BusinessSummaryCard count="120M+" name="Annual Revenue" img={revenue}></BusinessSummaryCard>
                <BusinessSummaryCard count="133k+" name="Reviews" img={reviews}></BusinessSummaryCard>
                <BusinessSummaryCard count="10k+" name="Order History" img={tools}></BusinessSummaryCard>
            </div>
        </div>
    );
};

export default BusinessSummary;