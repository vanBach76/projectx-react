import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

//TODO: Implement according to https://reactjs.org/docs/forms.html

const ADD_COMPANY = gql`
  mutation {
    addCompany(companyInput: $companyInput)
  }
`;

function CompanyForm() {
    const [addCompany, { data }] = useMutation(ADD_COMPANY);
    
    return (
        <div>
            <div className="form-group">
                <form>
                    <label className="float-left" htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                    <label className="float-left" htmlFor="currency">Currency</label>
                    <input type="text" className="form-control" id="currency" />
                    <button type="submit">Add Company</button>
                </form>
            </div>
        </div>
    )

}

export default CompanyForm;
