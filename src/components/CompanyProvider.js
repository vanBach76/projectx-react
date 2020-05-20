import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Yearbar from './Yearbar';
import ReportPanel from './ReportPanel';

const containerStyle = {
    minHeight: '100%',
    overflow: '100%'
};

const columnStyle = {
    marginBottom: '-9999px'
};

class CompanyProvider extends Component {

    constructor({ companyList }) {
        super();
        let selectedCompany = companyList[0];
        let selectedYear = this.getLatestYear(selectedCompany);
        this.state = {
            companyList: companyList,
            selectedCompany: selectedCompany,
            selectedYear: selectedYear
        };
        this.selectCompany = this.selectCompany.bind(this);
        this.selectYear = this.selectYear.bind(this);
    };

    selectCompany(company) {
        this.setState(
            {
                companyList: this.state.companyList,
                selectedCompany: company,
                selectedYear: this.getLatestYear(company)
            }
        )
    }

    getLatestYear(selectedCompany) {
        return selectedCompany.reportCards
            .sort((a, b) => (a.year > b.year) ? 1 : -1)
            [0].year;
    }

    selectYear(year) {
        this.setState(
            {
                companyList: this.state.companyList,
                selectedCompany: this.state.selectedCompany,
                selectedYear: year
            }
        )
    }

    render() {
        console.log('selectedCompany: ' + this.state.selectedCompany.name);
        console.log('selectedYear: ' + this.state.selectedYear);
        return (
            <div className="container-fluid" style={containerStyle}>
                <div className="row">
                    <div className="col">
                        <Yearbar selectedCompany={this.state.selectedCompany} selectYear={this.selectYear}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-1" className="bg-light" style={columnStyle}>
                        <Sidebar companyList={this.state.companyList} selectCompany={this.selectCompany} />
                    </div>
                    <div className="col">
                        <ReportPanel company={this.state.selectedCompany} year={this.state.selectedYear} />
                    </div>
                </div>
            </div>
        )
    };
}

export default CompanyProvider;

