const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getCards(id) {
  const response = await fetch(`${BASE_URL}/api/cards/column/${id}`);
  return response.json();
}

export async function createCard(id, newCard, token) {
  const response = await fetch(`${BASE_URL}/api/cards/column/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newCard),
  });
  return response.json();
}

export async function updateCard(id, newCard, token) {
  const response = await fetch(`${BASE_URL}/api/cards/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newCard),
  });
  return response.json();
}

export async function deleteCard(id, token) {
  const response = await fetch(`${BASE_URL}/api/cards/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
