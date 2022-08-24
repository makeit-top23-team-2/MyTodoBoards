const BASE_URL = 'http://localhost:8080';

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/local/login`, {
    method: 'POST',
    body: JSON.stringify({email, password}),
  });
  return response.json();
}

export async function forgotPassword(email) {
  const response = await fetch(`${BASE_URL}/auth/forgot-password`, {
    method: 'POST',
    body: {
      email,
    },
  });
  return response.json();
}

export async function changePassword(token, email) {
  const response = await fetch(`${BASE_URL}/auth/change-password/${token}`, {
    method: 'POST',
    body: {
      email,
    },
  });
  return response.json();
}
export async function verifyAccount(token, email) {
  const response = await fetch(`${BASE_URL}/auth/verify-account/${token}`, {
    method: 'PATCH',
    body: {
      email,
    },
  });
  return response.json();
}
