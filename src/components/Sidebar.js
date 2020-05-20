import React from 'react'
import CompanySelector from './CompanySelector';

function Sidebar(props) {

    return (
        <div>
            <CompanySelector companyList={props.companyList} selectCompany={props.selectCompany} />
        </div >
    )
}

export default Sidebar;