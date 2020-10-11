import React from 'react';
import Modal from './Modal';
import CompanyForm from './CompanyForm';

function CompanySelector({ companyList, selectCompany }) {

    let selectableCompanies = companyList.map((company) => (
        <div key={company.name}>
            <button className="btn btn-primary btn-light btn-block" onClick={() => selectCompany(company)}>
                {company.name}
            </button>
        </div>
    ));

    return (
        <div>
            <div className="btn-group-vertica special" >
                {selectableCompanies}
                <button className="btn btn-dark" data-toggle="modal" data-target="#modalCenter">Add Company</button>
            </div>
            <Modal Content={ CompanyForm } title="Add Company" />
        </div>
    );
}

export default CompanySelector;