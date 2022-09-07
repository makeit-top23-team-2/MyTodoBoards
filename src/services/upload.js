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

export async function uploadColorBoard(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(`${BASE_URL}/api/upload/background/board`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
}

export async function upLoadFiles(files) {
  const formData = new FormData();
  for (let i = 0; i < files.length; i += 1) {
    formData.append('files', files[i]);
  }
  formData.append('files', files);
  const response = await fetch(`${BASE_URL}/api/upload/files/cards`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
}


