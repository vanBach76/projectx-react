import React from 'react'
import ReportCard from './ReportCard';

const style = {
    marginLeft: '160px', /* Same as the width of the sidebar */
    padding: '10px 10px'
}

function ReportPanel({ company }) {

    let reportCards = company.reportCards.map( reportCard => 
        <div key={reportCard.period}>
          <ReportCard reportCard={reportCard} />
        </div>
    )

    return (
        <div style={style}>
            <div className = "card-columns">
                { reportCards }
            </div>
        </div>
    )

}

export default ReportPanel;