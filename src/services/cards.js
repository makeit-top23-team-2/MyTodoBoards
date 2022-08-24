const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getCards(id) {
  const response = await fetch(`${BASE_URL}/api/cards/column/${id}`);
  return response.json();
}

export async function createCard(id, newCard) {
  const response = await fetch(`${BASE_URL}/api/cards/column/${id}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCard),
  });
  return response.json();
}
  
export async function updateCard(id, newCard) {
  const response = await fetch(`${BASE_URL}/api/cards/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCard),
  });
  return response.json();
}
  
export async function deleteCard(id) {
  const response = await fetch(`${BASE_URL}/api/cards/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}
