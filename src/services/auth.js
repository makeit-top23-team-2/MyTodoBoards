const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/local/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function forgotPassword(email) {
  const response = await fetch(`${BASE_URL}/auth/local/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email,
    },
  });
  return response.json();
}

export async function changePassword(token, password) {
  const response = await fetch(
    `${BASE_URL}/auth/local/change-password/${token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        password,
      },
    }
  );
  return response.json();
}
export async function verifyAccount(token) {
  const response = await fetch(
    `${BASE_URL}/auth/local/verify-account/${token}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
}
