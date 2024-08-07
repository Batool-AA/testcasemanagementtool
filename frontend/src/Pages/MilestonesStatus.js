import React, { useState } from 'react';
import Graph from "../components/OverviewGraph";
import "../styles/MilestonesStatus.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MilestonesStatus = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    
    // Fetch milestoneId and milestoneName from URL or set defaults
    const milestoneId = searchParams.get('milestoneId') || '0'; 
    const milestoneName = searchParams.get('milestoneName') || 'Milestone'; 

    // Sample Test Runs Data
    const testRuns = [
        { id: '101', name: 'Regression Test', date: '2024-08-07', author: 'Alice' },
        { id: '102', name: 'Smoke Test', date: '2024-08-06', author: 'Bob' },
    ];

    // Navigate to Edit Milestone
    const handleEditMilestone = () => {
        navigate(`/add-milestone?milestoneId=${milestoneId}&milestoneName=${milestoneName}`, {
            state: {
                from: `/milestone-status?milestoneId=${milestoneId}&milestoneName=${milestoneName}`,
                action: 'edit'
            }
        });
    };

    // Navigate to TestRunTestsResults
    const handleTestRunClick = (testRunId, testRunName) => {
        navigate(`/TestRunTestsResults?milestoneId=${milestoneId}&milestoneName=${milestoneName}&testRunId=${testRunId}&testRunName=${testRunName}`);
    };

    return (
        <div className="status-mainclass">
            <div className="status-header">
                <div className="status-options">
                    <a className="upperbar" href={`/milestone-status?milestoneId=${milestoneId}&milestoneName=${milestoneName}` }>Status</a>
                    <a href={`/milestone-activity?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Activity</a>
                    <a href={`/milestone-progress?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Progress</a>
                    <a href={`/milestone-defect?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Defects</a>
                </div>
               
                <div className="status-controls">
                    <h2>{`M${milestoneId} - ${milestoneName}`}</h2>
                    <div className="status-control-button">
                        <button className="milestone-button" >Export</button>
                        <button className="milestone-button" >Print</button>
                        <button className="milestone-button" onClick={handleEditMilestone}>Edit</button>
                    </div>
                </div>
            </div>

            <div className="status-details">
                <div className="status-details-chart">
                    <div className="status-chart-download">
                        <button className="download">Download CSV</button>
                        <button className="download">Download Image</button>
                    </div>
                    <Graph/>
                </div>
                <div className="status-details-percentage">
                    <p className="status-passed-percent">52%</p>
                    <p className="status-passed">passed</p>
                    <p className="status-untested-value">1675 / 3518 untested (48%)</p>
                </div>
            </div>

            <div className="status-milestones-header">
                <h2> Milestones </h2>
                <div className="status-delete-milestones">
                    <button className="milestone-delete-button" >- Delete Selected </button>
                </div>
            </div>

            <div className="status-milestones-details-class">
                <div className="status-milestones-details"> 
                    <input type="checkbox"/>
                    <p><strong>Milestone Name</strong><br/>Due Date / Starts On</p>
                    <div className="status-milestones-statusbar">
                        <div className="status-milestones-progress-bar-passed" style={{ width: '42%' }}> </div>
                        <div className="status-milestones-progress-bar-untested" style={{ width: '16%' }}> </div>
                        <div className="status-milestones-progress-bar-failed" style={{ width: '42%' }}> </div>
                    </div>
                    <div className="status-milestones-progress-value">42%</div>
                </div>
            </div>
            
            <div className="status-testruns-header">
                <h2> Test Runs </h2>
                <div className="status-delete-testrun">
                    <button className="milestone-delete-button" >- Delete Selected </button>
                </div>
            </div>

            {testRuns.map((testRun, index) => (
                <div className="status-testrun-details-class" key={testRun.id}>
                    <div className="status-testrun-details">
                        <input type="checkbox" />
                        <p>
                            <strong>
                                <a
                                    // href="#"
                                    onClick={() => handleTestRunClick(testRun.id, testRun.name)}
                                >
                                    {testRun.name}
                                </a>
                            </strong>
                            by {testRun.author} on {testRun.date}<br />
                        </p>
                        <div className="status-testrun-statusbar">
                            <div className="status-testrun-progress-bar-passed" style={{ width: '42%' }}> </div>
                            <div className="status-testrun-progress-bar-untested" style={{ width: '16%' }}> </div>
                            <div className="status-testrun-progress-bar-failed" style={{ width: '42%' }}> </div>
                        </div>
                        <div className="status-testrun-progress-value">42%</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MilestonesStatus;
