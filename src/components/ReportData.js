import React from 'react'


function ReportData({ reportData }) {
    let columnsPerRow = Math.min(reportData.length, 2);
    let nrRows = Math.ceil(reportData.length / columnsPerRow);
    let rows = [];
    for (let i = 0; i < nrRows; i++) {
        let columns = [];
        for (let j = 0; j < columnsPerRow; j++) {
            let currentData = reportData[i + j];
            columns.push(
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="left-align" htmlFor={currentData.dataFieldName}>{currentData.dataFieldName}</label>
                        <input type="text" className="form-control" id={currentData.dataFieldName} placeholder={currentData.dataFieldValue} />
                    </div>
                </div>);
        }
        rows.push(<div className="form-row"> { columns } </div>)
    }
    return rows;
}

export default ReportData;