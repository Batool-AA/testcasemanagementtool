import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "../styles/TestRunTestsResults.css";
import PieChart from "../components/pieChart";

const TestRunTestsResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const testRunId = searchParams.get("testRunId") || "0"; // Default to '0' if no testRunId is provided
  const testRunName = searchParams.get("testRunName") || "Test Run"; // Default to 'Test Run' if no testRunName is provided
  const suiteId = searchParams.get("suiteId") || "0"; // Default to '0' if no suiteId is provided
  const suiteName = searchParams.get("suite") || "Test Suite"; // Default to 'Test Suite' if no suiteName is provided
  const navigate = useNavigate();
  const [testCases, setTestCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    { label: 'Passed', value: 12 },
    { label: 'Blocked', value: 19 },
    { label: 'Retest', value: 3 },
    { label: 'Failed', value: 5 },
    { label: 'Comments', value: 2 },
    { label: 'Partial', value: 3 },
]);

  const handleTestCaseClick = (testCase) => {
    navigate(
      `/TestCaseDetails?suiteId=${suiteId}&suite=${encodeURIComponent(
        suiteName
      )}&testRunId=${testRunId}&testRunName=${encodeURIComponent(
        testRunName
      )}&testCaseId=${testCase.id}&testCaseName=${encodeURIComponent(
        testCase.title
      )}`
    );
  };

  return (
    <div className="test-run-tests-results-page">
      <div className="test-run-tests-results-header">
        <h2>{`R${testRunId} - ${testRunName}`}</h2>
        <div className="test-run-tests-results-actions">
        <Link
            to={`/EditTestRun?testRunId=${testRunId}&testRunName=${testRunName}`}
            className="add-case-button"
          >
            Edit
          </Link>
          <Link
            to={`/SectionsCases?suiteId=${suiteId}&suite=${suiteName}`}
            className="add-case-button"
          >
            Suite
          </Link>
          <button className="edit-test-run-link">Edit</button>
        </div>
      </div>

      <div className="test-run-tests-results-content">
        <div className="test-run-tests-results-stats">
          <div className="test-run-tests-results-pie-chart">
            <div className="pie-chart-container">
            <PieChart data={data} />
            </div>
          </div>
          <div className="test-run-tests-results-test-cases">
            <div className="test-run-tests-results-section">
              <h3 className="test-run-tests-results-section-name">
                General Cases
              </h3>
            </div>
            <div className="test-run-tests-results-summary">
              <span>Contains {testCases.length} test cases.</span>
            </div>
            <div className="test-run-tests-results-test-cases-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Assigned To</th>
                    <th>Defects</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="loading">
                        Loading test cases...
                      </td>
                    </tr>
                  ) : (
                    testCases.map((testCase, index) => (
                      <tr key={index}>
                        <td>{testCase.id}</td>
                        <td>
                          <Link
                            to={`/TestCaseDetails?suiteId=${suiteId}&suite=${encodeURIComponent(
                              suiteName
                            )}&testRunId=${testRunId}&testRunName=${encodeURIComponent(
                              testRunName
                            )}&testCaseId=${testCase.id}&testCaseName=${encodeURIComponent(
                              testCase.title
                            )}`}
                            className="test-case-title"
                            onClick={() => handleTestCaseClick(testCase)}
                          >
                            {testCase.title}
                          </Link>
                        </td>
                        <td>{testCase.assignedTo}</td>
                        <td>
                          {testCase.defects.length > 0 && (
                            <ul className="test-case-defects">
                              {testCase.defects.map((defect) => (
                                <li key={defect}>{defect}</li>
                              ))}
                            </ul>
                          )}
                        </td>
                        <td>
                          <select className="test-case-status">
                            <option
                              value="Passed"
                              className="test-case-status Passed"
                            >
                              Passed
                            </option>
                            <option
                              value="Blocked"
                              className="test-case-status Blocked"
                            >
                              Blocked
                            </option>
                            <option
                              value="Retest"
                              className="test-case-status Retest"
                            >
                              Retest
                            </option>
                            <option
                              value="Failed"
                              className="test-case-status Failed"
                            >
                              Failed
                            </option>
                            <option
                              value="Comments"
                              className="test-case-status Comments"
                            >
                              Comments
                            </option>
                            <option
                              value="Partial"
                              className="test-case-status Partial"
                            >
                              Partial
                            </option>
                          </select>
                        </td>
                        <td>{/* Add any other actions here like edit/delete */}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <aside className="test-case-sidebar">
          <section className="sidebar-section">
            <h3 className="sidebar-title">
              <Link
                to={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}`}
                className="sidebar-link"
              >
                Tests & Results
              </Link>
            </h3>
            <ul className="sidebar-links">
              <li>
                <Link
                  to={`/milestone-activity?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                  className="sidebar-link"
                >
                  Activity
                </Link>
              </li>
              <li>
                <Link
                  to={`/milestone-progress?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                  className="sidebar-link"
                >
                  Progress
                </Link>
              </li>
              <li>
                <Link
                  to={`/milestone-defect?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                  className="sidebar-link"
                >
                  Defects
                </Link>
              </li>
            </ul>
          </section>
          <section className="sidebar-section">
            <div className="sidebar-header">
              <h3>Sections</h3>
            </div>
            <ul>
              <li>
              <Link
                to={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                className="sidebar-link"
              >
                General Cases
              </Link>
              </li>
              <li>
              <Link
                to={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                className="sidebar-link"
              >
                UDC Launch
              </Link>
              </li>
              <li>
              <Link
                to={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                className="sidebar-link"
              >
                  Data Access Intelligence & Governance Navbar
                </Link>
              </li>
              <li>
              <Link
                to={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                className="sidebar-link"
              >
                  Data security posture management navbar
                </Link>
              </li>
              <li>
              <Link
                to={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                className="sidebar-link"
              >
                Data Catalog Navbar
                </Link>
              </li>
              <li>
              <Link
                to={`/TestRunTestsResults?suiteId=${suiteId}&suite=${suiteName}&testRunId=${testRunId}&testRunName=${testRunName}&source=TestRunTestsResults`}
                className="sidebar-link"
              >
                  Sensitive Data Intelligence Navbar
                </Link>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default TestRunTestsResults;
