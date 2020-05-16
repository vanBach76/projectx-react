import React from 'react';

function YearSelector({ yearList, selectYear }) {

    let selectableYears = yearList.map((year) => (
        <div key={year}>
                <button className="list-group-item list-group-item-action" onClick={() => selectYear(year)}>
                    {year}
                </button>
        </div>
    ));

    return (
        <div className="list-group" >
                { selectableYears }
        </div>
    );
}

export default YearSelector;