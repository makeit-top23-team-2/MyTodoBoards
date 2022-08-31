const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const token = localStorage.getItem('token');

export async function getSingleCard(id) {
  const response = await fetch(`${BASE_URL}/api/cards/${id}`);
  return response.json();
}

export async function createCard(columnId, cardData) {
  const response = await fetch(`${BASE_URL}/api/cards/${columnId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardData),
  });
  return response.json();
}

export async function updateCard(id, newCard) {
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

export async function deleteCard(id) {
  const response = await fetch(`${BASE_URL}/api/cards/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
