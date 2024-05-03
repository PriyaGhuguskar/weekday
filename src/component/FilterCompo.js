import React from 'react'

import Filter from './Filter';
import { TextField } from '@mui/material';

const FilterCompo = ({ role, setRole, location, setLocation, company, setCompany }) => {
    const rolesArray = [
        "Backend",
        "Frontend",
        "Full Stack",
        "IOS",
        "Flutter",
        "React Native",
        "Andriod",
        "Dev-Ops"
    ];

    const locationsArray = [
        "India",
        "Delhi",
        "Delhi Ncr",
        "Mumbai",
        "Remote",
        "Chennai",
        "Bangalore",
    ];
    const NoOfEmployee = [
        '1-10', '11-20', '21-50', '51-200', '500+'
    ]

    return (
        <div className='flex gap-2'>
            <Filter name="Roles" options={rolesArray} value={role} setValue={setRole} />
            <Filter name="Locations" options={locationsArray} value={location} setValue={setLocation} />
            <TextField value={company} onChange={(e) => setCompany(e.target.value)} label='Search Company Name' />
        </div>


    );
};

export default FilterCompo