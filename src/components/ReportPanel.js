import React from 'react'
import ReportCard from './ReportCard';

const style = {
    marginLeft: '160px', /* Same as the width of the sidebar */
    padding: '10px 10px'
}

function ReportPanel({ company, year }) {

    let reportCards = company.reportCards
        .filter(reportCard => reportCard.year === year)
        .map(reportCard =>
            <div key={reportCard.id}>
                <ReportCard reportCard={reportCard} />
            </div>
        )

    return (
        <div style={style}>
            <div className="card-columns">
                {reportCards}
            </div>
        </div>
    )

}

export default ReportPanel;