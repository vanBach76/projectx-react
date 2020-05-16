import React from 'react';
import YearSelector from 'react';

function Yearbar(props) {
    let reportCards = props.selectedCompany.reportCards;
    let distinctYears = new Set(reportCards.map(reportCard => reportCard.year));
    return (
        <div>
            <div className="bg-light">
                <YearSelector yearList={distinctYears} selectYear={props.selectYear} />
            </div>
        </div >
    );
}

export default Yearbar;