import axios from "axios";

const API_BASE_URL = "https://judge0-ce.p.rapidapi.com";
const API_HEADERS = {
  "Content-Type": "application/json",
  "X-RapidAPI-Key": "7c68c8eb4cmshb4783b35da1ee9dp1b3efdjsnd03b22a9998c", 
  "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
};

export const createSubmission = async (source_code, language_id, stdin = "") => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/submissions`,
      { source_code, language_id, stdin },
      { headers: API_HEADERS }
    );
    return response.data.token; 
  } catch (error) {
    console.error("Error creating submission:", error);
    throw new Error("Failed to create submission");
  }
};

export const getSubmissionResult = async (token) => {
  try {
    let result = null;
    while (!result || result.status.id <= 2) {
      const response = await axios.get(`${API_BASE_URL}/submissions/${token}`, {
        headers: API_HEADERS,
      });
      result = response.data;
    }
    return result; 
  } catch (error) {
    console.error("Error fetching submission result:", error);
    throw new Error("Failed to fetch submission result");
  }
};
