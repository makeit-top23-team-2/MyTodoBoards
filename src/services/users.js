import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/api/users/`);
  return response.json();
}

export async function getUserByEmail(email) {
  const response = await fetch(`${BASE_URL}/api/users/${email}`, {});
  return response.json();
}

export async function getUserBy(name, value) {
  const response = await fetch(`${BASE_URL}/api/users${name}_like=${value}`);
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

export async function updateUser(id, user, token) {
  const response = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: 'PATCH',
    body: {
      newUser: JSON.stringify(user),
    },
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

export async function deleteUser(id, token) {
  const response = await fetch(`${BASE_URL}/api/users/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
