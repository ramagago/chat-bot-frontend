import { API_URL } from "./config";
import authService from "./auth";

export async function postQuestion(question) {
  const headers = authService.getAuthHeader();
  console.log(headers);
  const response = await fetch(`${API_URL}/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({ question }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  authService.saveAuthDetails(response.headers);
  return response.json();
}

// export const postQuestion = (question) =>
//   new Promise((resolve) =>
//     setTimeout(() => resolve(`respuesta a ${question}`), 1000)
//   );
