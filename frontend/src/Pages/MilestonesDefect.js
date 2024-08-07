import "../styles/MilestonesDefect.css";
import React from 'react';
import Graph from "../components/OverviewGraph";
import { useLocation, useNavigate } from "react-router-dom";

const Milestonesdefects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const testRunId = searchParams.get("testRunId") || "0"; 
  const testRunName = searchParams.get("testRunName") || "Test Run";
  const sourcePage = searchParams.get('source');

  const suiteId = searchParams.get('suiteId') || '0';
  const suiteName = searchParams.get('suite') || 'Suite Name';
  const milestoneId = searchParams.get('milestoneId') || '0'; 
  const milestoneName = searchParams.get('milestoneName') || 'Milestone'; 
  const testPlanId = searchParams.get("testPlanId") || "0"; 
  const testPlanName = searchParams.get("testPlanName") || "Test Plan";

  const handleEditMilestone = () => {
    navigate(`/add-milestone?milestoneId=${milestoneId}&milestoneName=${milestoneName}`, { 
      state: { 
        from: `/milestone-defect?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`,
        action: 'edit'
      } 
    });
  };

  const handleTestRunClick = (testRunId, testRunName) => {
    navigate(`/TestRunTestsResults?milestoneId=${milestoneId}&milestoneName=${milestoneName}&testRunId=${testRunId}&testRunName=${testRunName}`);
  };

  // Mock data for test runs
  const testRuns = [
    { id: "201", name: "Functional Test" },
    { id: "202", name: "Integration Test" },
    { id: "203", name: "Performance Test" },
    { id: "204", name: "Security Test" },
    // Add more test runs as needed
  ];

  return (
    <div className="defects-mainclass">
      <div className="defects-header">
        <div className="activity-options">
          {sourcePage === 'TestRunTestsResults' || sourcePage === 'milestone-activity' || sourcePage === 'milestone-progress' || sourcePage === 'milestone-defect' ? (
            <>
              <a
                href={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}`}
              >
                Tests & Results
              </a>
              <a
                href={`/milestone-activity?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=milestone-defect`}
              >
                Activity
              </a>
              <a
                href={`/milestone-progress?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=milestone-defect`}
              >
                Progress
              </a>
              <a className="upperbar"
                href={`/milestone-defect?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=milestone-defect`}
              >
                Defects
              </a>
            </>
          ) : sourcePage === 'milestone-status' ? (
            <>
              <a href={`/milestone-status?milestoneId=${milestoneId}&milestoneName=${milestoneName}`}>Status</a>
              <a href={`/milestone-activity?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Activity</a>
              <a href={`/milestone-progress?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Progress</a>
              <a className="upperbar" href={`/milestone-defect?milestoneId=${milestoneId}&milestoneName=${milestoneName}&source=milestone-status`}>Defects</a>
            </>
          ) : sourcePage === 'TestPlanStatus' ? (
            <>
              <a
                href={`/TestPlanStatus?testPlanId=${testPlanId}&testPlanName=${testPlanName}`}
              >
                Status
              </a>
              <a
                href={`/milestone-activity?testPlanId=${testPlanId}&testPlanName=${testPlanName}&source=TestPlanStatus`}
              >
                Activity
              </a>
              <a
                href={`/milestone-progress?testPlanId=${testPlanId}&testPlanName=${testPlanName}&source=TestPlanStatus`}
              >
                Progress
              </a>
              <a className="upperbar"
                href={`/milestone-defect?testPlanId=${testPlanId}&testPlanName=${testPlanName}&source=TestPlanStatus`}
              >
                Defects
              </a>
            </>
          ) : null }
        </div>
       
        <div className="defects-controls">
          {sourcePage === 'TestRunTestsResults' || sourcePage === 'milestone-activity' || sourcePage === 'milestone-progress' || sourcePage === 'milestone-defect' ? (
            <h2>{`R${testRunId} - ${testRunName}`}</h2>
          ) : sourcePage === 'milestone-status' ? (
            <h2>{`M${milestoneId} - ${milestoneName}`}</h2>
          ) : sourcePage === 'TestPlanStatus' ? (
            <h2>{`R${testPlanId} - ${testPlanName}`}</h2>
          ) : null }
          <div className="defects-control-button">
            <button className="milestone-button" onClick={handleEditMilestone}>Edit</button>
          </div>
        </div>
      </div>

      <div className="defects-details">
        <div className="defects-details-number">
          <h1 className="defects-count"><strong>4</strong></h1>
          <p className="defects-title">Defects</p>
        </div>
        <div className="defects-details-chart">
          <div className="defects-chart-download">
            <button className="download">Download CSV</button>
            <button className="download">Download Image</button>
          </div>
          <Graph/>
        </div>
        <div className="defects-details-legend">
          <div className="defects-legend-item">
            <div className="defects-legend-color" style={{ backgroundColor: 'green' }}></div>
            <span className="defects-legend-text"><strong>Tests</strong><br/>3518 tests started</span>
          </div>
          <div className="defects-legend-item">
            <div className="defects-legend-color" style={{ backgroundColor: 'red' }}></div>
            <span className="defects-legend-text"><strong>Results</strong><br/>800 test results added</span>
          </div>
          <div className="defects-legend-item">
            <div className="defects-legend-color" style={{ backgroundColor: 'blue' }}></div>
            <span className="defects-legend-text"><strong>Defects</strong><br/>132 defects logged</span>
          </div>
        </div>
      </div>

      {sourcePage !== 'TestRunTestsResults' && sourcePage !== 'milestone-activity' && sourcePage !== 'milestone-progress' && sourcePage !== 'milestone-defect' && (
        <>
          <div className="defects-testrun-class">
            {testRuns.map((testRun) => (
              <div key={testRun.id} className="defects-testrun-details">
                <p>
                  <a
                    href={`/TestRunTestsResults?milestoneId=${milestoneId}&milestoneName=${milestoneName}&testRunId=${testRun.id}&testRunName=${testRun.name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTestRunClick(testRun.id, testRun.name);
                    }}
                    style={{fontWeight: 'bold' }}
                  >
                    {testRun.name}
                  </a>
                </p>
                <div className="defects-testrun-number">
                  <p>{`${Math.floor(Math.random() * 20) + 1} defects`}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="defects-details-header">
        <h3> Defects </h3>
      </div>

      <div className="defects-details-class">
        <p className="defects-date">20 July 2024</p>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>

        <p className="defects-date">19 July 2024</p>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>

        <p className="defects-date">18 July 2024</p>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>

        <p className="defects-date">17 July 2024</p>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>

        <p className="defects-date">16 July 2024</p>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>

        <p className="defects-date">15 July 2024</p>
        <div className="defects-details-individual">
          <p className="defects-status-bar-failed">failed</p>
          <p className="defects-name">defects name</p>
          <div className="defects-doneby">
            <p>Added by</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milestonesdefects;
