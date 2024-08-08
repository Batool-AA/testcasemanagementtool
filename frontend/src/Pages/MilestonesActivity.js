import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/MilestonesActivity.css';
import LineChart from '../components/LineGraph';

const MilestonesActivity = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const testRunId = searchParams.get('testRunId') || '0';
    const testRunName = searchParams.get('testRunName') || 'Test Run';
    const sourcePage = searchParams.get('source');

    const suiteId = searchParams.get('suiteId') || '0';
    const suiteName = searchParams.get('suite') || 'Suite Name';

    const milestoneId = searchParams.get('milestoneId') || '0'; 
  const milestoneName = searchParams.get('milestoneName') || 'Milestone';
  
  const testPlanId = searchParams.get("testPlanId") || "0"; 
  const testPlanName = searchParams.get("testPlanName") || "Test Plan";

    const handleEditMilestone = () => {
        navigate(`/add-milestone?milestoneId=${milestoneId}&milestoneName=${milestoneName}`, { state: { from: `/milestone-activity?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`, action: 'edit' } });
    };

    const data = {
        labels: ['2/24', '2/25', '2/26', '2/27', '2/28', '3/1'],
        passed: [200, 0, 0, 0, 300, 500],
        blocked: [0, 0, 0, 0, 3, 4],
        retest: [0, 0, 0, 0, 1, 1],
        failed: [0, 0, 0, 0, 2, 20],
        comments: [0, 0, 0, 0, 1, 2],
        partial: [0, 0, 0, 0, 4, 30],
      };
 
    return (
        <div className="activity-mainclass">
            <div className="activity-header">
                <div className="activity-options">
                    {sourcePage === 'TestRunTestsResults' || sourcePage === 'milestone-activity' || sourcePage === 'milestone-progress' || sourcePage === 'milestone-defect' ? (
                        <>
                            <a
                                href={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}`}
                                
                            >
                                Tests & Results
                            </a>
                            <a className="upperbar"
                                href={`/milestone-activity?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=milestone-activity`}
                                
                            >
                                Activity
                            </a>
                            <a
                                href={`/milestone-progress?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=milestone-activity`}
    
                            >
                                Progress
                            </a>
                            <a
                                href={`/milestone-defect?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=milestone-activity`}
                                
                            >
                                Defects
                            </a>
                        </>
                    ) : sourcePage === 'milestone-status' ? (
                        <>
                            <a href={`/milestone-status?milestoneId=${milestoneId}&milestoneName=${milestoneName}`}>Status</a>
                            <a className="upperbar" href={`/milestone-activity?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Activity</a>
                            <a href={`/milestone-progress?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Progress</a>
                            <a href={`/milestone-defect?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Defects</a>
                        </>
                    ) : sourcePage === 'TestPlanStatus' ? (
                        <>
                        <a
                                href={`/TestPlanStatus?testPlanId=${testPlanId}&testPlanName=${testPlanName}`}
                                
                            >
                                Status
                            </a>
                            <a className="upperbar"
                                href={`/milestone-activity?testPlanId=${testPlanId}&testPlanName=${testPlanName}&source=TestPlanStatus`}
                                
                            >
                                Activity
                            </a>
                            <a
                                href={`/milestone-progress?testPlanId=${testPlanId}&testPlanName=${testPlanName}&source=TestPlanStatus`}
                            >
                                Progress
                            </a>
                            <a
                               href={`/milestone-defect?testPlanId=${testPlanId}&testPlanName=${testPlanName}&source=TestPlanStatus`}
                                
                            >
                                Defects
                            </a>
                        </>
                        
                    ) : null }
                </div>

                <div className="activity-controls">
                    {sourcePage === 'TestRunTestsResults' || sourcePage === 'milestone-activity' || sourcePage === 'milestone-progress' || sourcePage === 'milestone-defect' ? (
                        <h2>{`R${testRunId} - ${testRunName}`}</h2>
                    ) : sourcePage === 'milestone-status' ? (
                        <h2>{`M${milestoneId} - ${milestoneName}`}</h2>
                    ) : sourcePage === 'TestPlanStatus' ? (
                        <h2>{`R${testPlanId} - ${testPlanName}`}</h2>
                    ) : null }

                    <div className="activity-control-button">
                        <button className='milestone-button' onClick={handleEditMilestone}>Edit</button>
                    </div>
                </div>
            </div>

            <div className="activity-details-chart-container">
                    <div className="activity-chart-download">
                        <button className="download">Download CSV</button>
                        <button className="download">Download Image</button>
                    </div>
                <div className="activity-details-chart">
                    <div className='activity-details-graph'>
                        <LineChart data={data}/>
                    </div>
                </div>
            </div>

            
            <div className="activity-milestones-details-class">
                <div className="activity-listing-header">
                    <h2>Activity</h2>
                </div>
                <div className='activity-milestones-details-scrollable'>
                    <div className="activity-milestones-date">21 July 2024</div>
                    <div className="activity-milestones-details">
                        <p className="activity-pass-status">Passed</p>
                        <p className="activity-details-listing">Activity Details</p>
                        <div className="activity-milestone-doneby">Tested By</div>
                    </div>
                    <div className="activity-milestones-details">
                        <p className="activity-fail-status">Failed</p>
                        <p className="activity-details-listing">Activity Details</p>
                        <div className="activity-milestone-doneby">Tested By</div>
                    </div>

                    <div className="activity-milestones-date">20 July 2024</div>
                    <div className="activity-milestones-details">
                        <p className="activity-fail-status">Failed</p>
                        <p className="activity-details-listing">Activity Details</p>
                        <div className="activity-milestone-doneby">Tested By</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MilestonesActivity;
