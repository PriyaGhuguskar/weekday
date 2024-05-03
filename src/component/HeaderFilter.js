import React, { useState } from 'react'
import FilterCompo from './FilterCompo';
const HeaderFilter = () => {
    const [role, setRole] = useState([]);
    const [location, setLocation] = useState([]);
    const [company, setCompany] = useState('');
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            <FilterCompo
                role={role}
                setRole={setRole}
                location={location}
                setLocation={setLocation}
                company={company}
                setCompany={setCompany} />
        </div>
    )
}

export default HeaderFilter