import React from 'react';
import ReportData from './ReportData';

function ReportCard({ reportCard }) {
    return (
        <div className="col-sm-3">
            <div className="card" >
                <div className="card-header">
                    {reportCard.period}
                </div>
                <div className="card-body">
                    <form>
                        <ReportData reportData={reportCard.reportData} />
                        <label htmlFor="commentInput" className="float-left">Comment</label>
                        <textarea className="form-control" id="commentInput" placeholder={reportCard.comment} />
                    </form>
                    <div className="button-group float-right p-1">
                        <button className="btn btn-secondary btn-light m-1">Edit</button>
                        <button className="btn btn-secondary btn-light m-1">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportCard;