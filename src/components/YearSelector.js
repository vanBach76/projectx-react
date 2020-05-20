import React from 'react';

function YearSelector({ yearList, selectYear }) {

    let selectableYears = yearList.map((year) => (
        <div key={year}>
                <button className="btn btn-secondary btn-light" onClick={() => selectYear(year)}>
                    {year}
                </button>
        </div>
    ));

    return (
        <div className="btn-group"  >
                { selectableYears }
        </div>
    );
}

export default YearSelector;