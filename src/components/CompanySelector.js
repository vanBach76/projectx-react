import React from 'react';

function CompanySelector({ companyList, selectCompany }) {

    let selectableCompanies = companyList.map((company) => (
        <div key={company.name}>
                <button className="list-group-item list-group-item-action" onClick={() => selectCompany(company)}>
                    {company.name}
                </button>
        </div>
    ));

    return (
        <div className="list-group" >
                {selectableCompanies}
        </div>
    );
}

export default CompanySelector;