const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/api/users/`);
  return response.json();
}

export async function getUserByEmail(email) {
  const response = await fetch(`${BASE_URL}/api/users/email/${email}`, {});
  return response.json();
}

export async function getUserByUserName(userName) {
  const response = await fetch(`${BASE_URL}/api/users/user/${userName}`, {});
  return response.json();
}

export async function createUser(user) {
  const response = await fetch(`${BASE_URL}/api/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.text();
}

export async function updateUser(userUpdate) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/api/users`, {
    method: 'PATCH',
    body: JSON.stringify(userUpdate),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

export async function deleteUser() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/api/users`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
