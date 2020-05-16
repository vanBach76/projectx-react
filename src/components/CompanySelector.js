import React from 'react';

function CompanySelector({ companyList, selectCompany }) {

    let selectableCompanies = companyList.map((company) => (
        <div key={company.name}>
            <li className="list-group-item list-group-item-action bg-light">
                <button className="list-group-item list-group-item-action bg-light" onClick={() => selectCompany(company)}>
                    {company.name}
                </button>
            </li>
        </div>
    ));

    return (
        <div className="bg-light sidebar-wrapper float-left" >
            <ul className="list-group list-group-flush  bg-light">
                {selectableCompanies}
            </ul>
        </div>
    );
}

export default CompanySelector;