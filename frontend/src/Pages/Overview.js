import React, { useState } from 'react';
import LineChart from '../components/LineGraph.js';
import '../styles/Overview.css';
import Graphcontrol from '../components/Graphcontrol';
import Milestones from '../components/Milestones';
import TestRuns from '../components/TestRuns';
import Todos from '../components/ToDos';


const Overview = () => {
  const [activeView, setActiveView] = useState('history');

    const renderContent = () => {
        switch (activeView) {
            case 'history':
                return (
                    <div>
                       <div className='activity-datewise-details'>
                          <p className='activity-date'>20 July 2024</p>
                          <div className='activity-details'>
                            <p className='activity-status-milestone'>Milestone</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>change by</p>
                            </div>
                          </div> 
                          <div className='activity-details'>
                            <p className='activity-status-testplan'>Test Plan</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>change by</p>
                            </div>
                          </div> 
                          <div className='activity-details'>
                            <p className='activity-status-project'>Project</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>change by</p>
                            </div>
                          </div> 
                          <div className='activity-details'>
                            <p className='activity-status-section'>Section</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>change by</p>
                            </div>
                          </div> 
                          <div className='activity-details'>
                            <p className='activity-status-testrun'>Test Run</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>change by</p>
                            </div>
                          </div> 
                          <div className='activity-details'>
                            <p className='activity-status-testsuite'>Test Suite</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>change by</p>
                            </div>
                          </div> 
                        </div>
                        
                        <div className='activity-datewise-details'>
                          <p className='activity-date'>19 July 2024</p>
                          <div className='activity-details'>
                            <p className='activity-status-testsuite'>Test Suite</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>change by</p>
                            </div>
                          </div> 
                        </div>
                    </div>
                );
            case 'tests':
                return (
                    <div>
                        <div className='activity-datewise-details'>
                          <p className='activity-date'>20 July 2024</p>
                          <div className='activity-details'>
                            <p className='activity-status-passed'>Passed</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>tested by</p>
                            </div>
                          </div> 
                          <div className='activity-details'>
                            <p className='activity-status-failed'>Failed</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>tested by</p>
                            </div>
                          </div> 
                        </div>
                        
                        <div className='activity-datewise-details'>
                          <p className='activity-date'>19 July 2024</p>
                          <div className='activity-details'>
                            <p className='activity-status-passed'>Passed</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>tested by</p>
                            </div>
                          </div> 
                          <div className='activity-details'>
                            <p className='activity-status-failed'>Failed</p>
                            <p className='activity-details-details'>details</p>
                            <div className='activity-change-by'>
                              <p>tested by</p>
                            </div>
                          </div> 
                        </div>
                    </div>
                );
            default:
                return <div>Select a view</div>;
        }
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
    <main className="overview">
      <div className='overview-graph'>
        <div className='overview-graph-controls'>
          <Graphcontrol/>
        </div>
        
        
        <div className="overview-chart-container">
            <LineChart data={data}/>
        </div>
      </div>

      <div className='overview-content'>
        <Todos/>
        <Milestones/>
        <TestRuns/>
      </div>
  
      <div className='overview-activitylog'> 
        <div className='overview-activitylog-header'>
          <h2>Activity</h2>
          <div className='overview-activitylog-change'>
            <button onClick={() => setActiveView('history')} className={activeView === 'history' ? 'active-button' : ''}>History</button>
            <button onClick={() => setActiveView('tests')} className={activeView === 'tests' ? 'active-button' : ''}>Test Changes</button>
          </div>
        </div>
        <div className='overview-activity-scrollable'>
          {renderContent()}
        </div>
      </div>
    </main>
  );
}

export default Overview;
