import React, { useState } from 'react';

function SimpleDialog({ handleNoClick, handleYesClick }) {

    return (
        <div>
            <div className="dialog">
                <div className="dialog-content">
                    <h2>Important</h2>
                    <p>Are you sure you want to remove the assignment.</p>
                    <button className="btn btn-danger" onClick={handleYesClick}>Yes</button>
                    <button className="btn btn-success" onClick={handleNoClick}>No</button>
                </div>
            </div>
        </div>
    );
}

export default SimpleDialog;
