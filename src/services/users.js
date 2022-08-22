const BASE_URL = 'http://localhost:8080';

export async function getUsers() {
  const response = await fetch(`${BASE_URL}`);
  return response.json();
}

export async function getUserByEmail(email) {
  const response = await fetch(`${BASE_URL}/api/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });
  return response.json();
}
export async function getUserBy(name, value) {
  const response = await fetch(`${BASE_URL}/api/users${name}_like=${value}`);
  return response.json();
}

export async function createUser(user) {
  const response = await fetch(`${BASE_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.text();
}

/* export async function updateCharacter(character) {
  // code here
  const options = {
    method: 'PATCH'
  }
}

export async function deleteCharacter(id) {
  // code here
  const response = await fetch(`${BASE_URL}/characters/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}
 */
