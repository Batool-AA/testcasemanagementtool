import axiosInstance from './AxiosInstance';

// API endpoint for fetching choices
const fetchTestCaseChoices = async () => {
    const API_URL = 'test_cases/';

    try {
        const response = await axiosInstance.get(API_URL);
        console.log("HAHAHAHAH");
        console.log("test case choices" + response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching test case choices:', error);
        throw error;
    }
};

// API endpoint for creating a test case
const createTestCase = async (data) => {
    const API_URL = 'test_cases/'; 

    try {
        const response = await axiosInstance.post(API_URL, data);
        console.log(response)
        return response.data; 
    } catch (error) {
        console.error('Error creating test case:', error);
        throw error; 
    }
};


const fetchSectionsAndCases = async (suiteId) => {
 
    const API_URL = 'sections_cases/'; 

  try {
    const response = await axiosInstance.get(API_URL, {
      params: { suiteId }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sections and cases:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};

const deleteTestCase = async (testCaseId) => {
    try {
      await axiosInstance.delete(`test_cases/${testCaseId}/`);
    } catch (error) {
      console.error('Error deleting test case:', error);
      throw error;
    }
};

const fetchTestCaseDetails = async (testCaseId) => {
  try {
    const response = await axiosInstance.get(`test_cases/${testCaseId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching test case details:', error);
    throw error;
  }
};

// Function to update a test case
const updateTestCase = async (testCaseId, testCaseData) => {
  try {
    const response = await axiosInstance.put(`test_cases/${testCaseId}`, testCaseData);
    return response.data;
  } catch (error) {
    console.error('Error updating test case:', error);
    throw error;
  }
};


export { fetchTestCaseChoices, createTestCase, fetchSectionsAndCases, deleteTestCase, fetchTestCaseDetails, updateTestCase};