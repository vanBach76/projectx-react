import React from 'react'


function ReportCard({ reportCard }) {

    let reportDataFields = reportCard.reportData.map(reportData =>
        <div key={reportData.dataFieldName}>
            <label htmlFor={reportData.dataFieldName}>{reportData.dataFieldName}</label>
            <input type="text" className="form-control" id={reportData.dataFieldName} placeholder={reportData.dataFieldValue} />
        </div>
    )

    return (
        <div className="card w-75" >
            <div className="card-header">
                {reportCard.period}
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="commentInput">Comment</label>
                        <input type="text" className="form-control" id="commentInput" placeholder={reportCard.comment} />
                        {reportDataFields}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReportCard;