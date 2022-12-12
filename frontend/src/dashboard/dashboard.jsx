import React from 'react';
import './dashboard.css'
import Navbar from '../components/navbar/navbar'
import EnhancedTable from '../components/table/table'
const Dashboard = () => {

    return (
        <>
            <div className='program'>
                PROGRAM
            </div>
            <Navbar />
            <EnhancedTable />
        </>
    )
}
export default Dashboard

