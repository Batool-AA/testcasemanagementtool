import React, { useState, useEffect } from 'react';
import '../styles/AddTestRun.css';
import { useNavigate, useLocation } from 'react-router-dom';
import FilterPopup from './ChangeSelectionTestRun.js'
import FileUpload from '../components/fileUpload.js';

const EditTestRun = () => {

    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  const { selectedOption } = location.state || {};

  const searchParams = new URLSearchParams(location.search);
  const suiteId = searchParams.get('suiteId') || '0'; // Default to '0' if no suiteId is provided
  const sourcePage = searchParams.get('source'); // Will be either 'TestSuitesCases' or 'TestRuns'
  const testRunId = searchParams.get("testRunId") || "0"; // Default to '0' if no testRunId is provided
  const testRunName = searchParams.get("testRunName") || "Test Run";
  const suiteName = searchParams.get('suite') || 'Test Suite'; // Default to 'Test Suite' if no suiteName is provided

  const [name, setName] = useState(testRunName);
  const [references, setReferences] = useState('');
  const [milestone, setMilestone] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [description, setDescription] = useState('');
  const [testCaseSelection, setTestCaseSelection] = useState('all');
  const [images, setImages] = useState([]);

  
  useEffect(() => {
    if (selectedOption) {
      setName(selectedOption);
    }
  }, [selectedOption]);

  const handleCancel = () => { 
    // navigate(from);
    navigate(`/TestRunTestsResults?testRunId=${testRunId}&testRunName=${testRunName}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here
    console.log('Form submitted with:', {
      name,
      references,
      milestone,
      assignTo,
      description,
      testCaseSelection,
    });
    // navigate(from);
    navigate(`/TestRunTestsResults?testRunId=${testRunId}&testRunName=${testRunName}`);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    navigate(`/TestRunTestsResults?testRunId=${testRunId}&testRunName=${testRunName}`);

  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClickableTextClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const [isPopupVisibleFilter, setIsPopupVisibleFilter] = useState(false);


  
  return (
    <div className="test-run-container">
      <form className="test-run-form" onSubmit={handleSubmit}>
        <h2 className="add-test-run-title">Edit Test Run</h2>

        <div className="test-run-form-group">
          <label htmlFor="name" className="test-run-label">
            Name<span className="test-run-required">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter test run name"
            className="test-run-input"
            required
          />
        </div>

        <div className="test-run-form-group">
          <div className='references-add-run-form-grp'>
            <label htmlFor="references">References</label>
            <a href="" className='add-references-add-run-form'>Add</a>
          </div>
          <input
            type="text"
            id="references"
            value={references}
            onChange={(e) => setReferences(e.target.value)}
            placeholder="Add reference IDs"
            className="test-run-input"
          />
        </div>

        <div className="test-run-form-group">
          <label htmlFor="milestone" className="test-run-label">
            Milestone
          </label>
          <select
            id="milestone"
            value={milestone}
            onChange={(e) => setMilestone(e.target.value)}
            className="test-run-select"
          >
            <option value="">Select milestone</option>
            <option value="milestone1">Milestone 1</option>
            <option value="milestone2">Milestone 2</option>
            <option value="milestone3">Milestone 3</option>
          </select>
        </div>

        <div className="test-run-form-group">
          <label htmlFor="assignTo" className="test-run-label">
            Assign To
          </label>
          <select
            id="assignTo"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="test-run-select"
          >
            <option value="">Select user</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
          </select>
        </div>

        <div className="test-run-form-group">
          <label htmlFor="description" className="test-run-label">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Use this description to describe the purpose of this test run."
            className="test-run-textarea"
          />
        </div>

        <div className="test-run-case-selection">
          <div>
            <input
              type="radio"
              id="include-all"
              name="testCaseSelection"
              value="all"
              checked={testCaseSelection === 'all'}
              onChange={() => setTestCaseSelection('all')}
              className="test-run-radio"
            />
            <label htmlFor="include-all" className="test-run-radio-label">
              <strong>Include all test cases</strong>
              <p className='test-run-radio-label-description'>Select this option to include all test cases in this test run. If new test cases are added to the test suite, they are also automatically included in this run.</p>
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="select-specific"
              name="testCaseSelection"
              value="specific"
              checked={testCaseSelection === 'specific'}
              onChange={() => setTestCaseSelection('specific')}
              className="test-run-radio"
            />
            <label htmlFor="select-specific" className="test-run-radio-label">
              <strong>Select specific test cases</strong>
              <p className='test-run-radio-label-description'>You can alternatively select the test cases to include in this test run. New test cases are not automatically added to this run in this case.</p>
            </label>
          </div>

          {testCaseSelection === 'specific' && (
            <div className='add-test-run-filter-selection'>
              <span><strong>0</strong> test cases included </span>
              <span className='add-test-run-filter-text'> (<span className="add-test-run-filter-clickable-text" onClick={handleClickableTextClick}>Change Selection</span>)</span>
            </div>
          )}

          <div>
            <input
              type="radio"
              id="dynamic-filtering"
              name="testCaseSelection"
              value="dynamic"
              checked={testCaseSelection === 'dynamic'}
              onChange={() => setTestCaseSelection('dynamic')}
              className="test-run-radio"
            />
            <label htmlFor="dynamic-filtering" className="test-run-radio-label">
              <strong>Dynamic Filtering</strong>
              <p className='test-run-radio-label-description'>Automatically add test cases based on filter selection. New test cases are automatically added to the run if they match the filter (unless the run is closed).</p>
            </label>
          </div>
          {testCaseSelection === 'dynamic' && (
            <div className='add-test-run-filter-selection'>
              <span><strong>0</strong> test cases included </span>
              <span className='add-test-run-filter-text'> (<span className="add-test-run-filter-clickable-text" onClick={handleClickableTextClick}>Change Filter</span>)</span>
            </div>
          )}
        </div>

          <FileUpload/>

          <div className="edit-suite-buttons">
            <button
              type="submit"
              className="edit-suite-button edit-suite-save"
            >
              ✓ Save Test Run
            </button>
            <button
              type="button"
              className="edit-suite-button edit-suite-cancel"
              onClick={handleCancel}
            >
              ✗ Cancel
            </button>
          </div>

        {isPopupVisible && 
          <FilterPopup onCancel={() => setIsPopupVisible(false)}/>}
        
      </form>

      <div className="actions-section">
          {/* <p className="actions-title">Actions</p> */}
          <p className="actions-description">
          <br></br>Delete this test run to remove it from your project.
          </p>
          <button
              type="button"
              onClick={handleDelete}
              className="delete-suite-button"
            >
              ✗ Delete this test run
            </button>
        </div>
    </div>
  );
};

export default EditTestRun;
