import React from 'react'
import CompanySelector from './CompanySelector';

function Sidebar(props) {

    let style = {
        height: '100%', /* Full-height: remove this if you want "auto" height */
        width: '200px', /* Set the width of the sidebar */
        position: 'fixed', /* Fixed Sidebar (stay in place on scroll) */
        zIndex: 1, /* Stay on top */
        top: 60, /* Stay at the top */
        left: 0,
        backgroundColor: '#111', /* Black */
        overflowX: 'hidden', /* Disable horizontal scroll */
        paddingTop: '20px'
    };

    return (
        <div>
            <div className="bg-light">
                <CompanySelector companyList={props.companyList} selectCompany={props.selectCompany} />
            </div>
        </div >
    )
}

export default Sidebar;