import React from 'react'
import ReportCard from './ReportCard';

const style = {
    padding: '10px 10px'
}

function ReportPanel({ company, year }) {

    let reportCards = company.reportCards
        .filter(reportCard => reportCard.year === year)
        .map(reportCard => 
            <ReportCard reportCard={reportCard} key={ reportCard.id }/>
        )

    return (
        <div>
            <div className="row" style={style}>
                    {reportCards}
            </div>
        </div>
    )

}

export default ReportPanel;