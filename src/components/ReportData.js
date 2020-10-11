import React from 'react'


function ReportData({ reportData }) {
    let columnsPerRow = Math.min(reportData.length, 2);
    let nrRows = Math.ceil(reportData.length / columnsPerRow);
    let rows = [];
    let index = 0;
    for (let i = 0; i < nrRows; i++) {
        let columns = [];
        for (let j = 0; j < columnsPerRow; j++) {
            if (index < reportData.length) {
                let currentData = reportData[index++];
                columns.push(formatColumnData(currentData));
            }
        }
        rows.push(<div className="form-row"> {columns} </div>)
    }
    return rows;
}

function formatColumnData(reportData) {
    return (
        <div className="col-sm-6">
            <div key={reportData.id}>
                <div className="form-group">
                    <label className="float-left" htmlFor={reportData.dataFieldName}>{reportData.dataFieldName}</label>
                    <input type="text" className="form-control" id={reportData.dataFieldName} placeholder={reportData.dataFieldValue} />
                </div>
            </div>
        </div>);
    
}

export default ReportData;