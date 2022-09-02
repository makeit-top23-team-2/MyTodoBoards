/* eslint-disable */
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function uploadProfilePhoto(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(`${BASE_URL}/api/upload/profile`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
}
