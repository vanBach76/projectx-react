import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ReportPanel from './ReportPanel';

class CompanyProvider extends Component {

    constructor({ companyList }) {
        super();
        this.state = {
            companyList: companyList,
            selectedCompany: companyList[0]
        };
        this.selectCompany = this.selectCompany.bind(this);
    };

    selectCompany(company) {
        this.setState(
            {
                companyList: this.state.companyList,
                selectedCompany: company
            }
        )
    }

    render() {
        console.log('companyList: ' + this.state.companyList);
        console.log('selectedCompany: ' + this.state.selectedCompany.name);
        return (
            <div>
                <div className="container">
                <div className="col">
                        <Sidebar companyList={this.state.companyList} selectCompany={this.selectCompany} />
                    </div>
                    <div className="col-11">
                        <ReportPanel company={this.state.selectedCompany} />
                    </div>
                </div>
            </div>
        )
    };
}

export default CompanyProvider;

