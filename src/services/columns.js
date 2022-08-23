const BASE_URL = 'http://localhost:8080';

export async function getColumns() {
  const response = await fetch(`${BASE_URL}/api/columns`);
  return response.json();
}

export async function getColumnById(id) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`);
  return response.json();
}

export async function getAllColumnsByBoardId(boardId) {
  const response = await fetch(`${BASE_URL}/api/columns/${boardId}`);
  return response.json();
}

export async function createColumn(column, token) {
  const response = await fetch(`${BASE_URL}/api/columns`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(column),
  });
  return response.json();
}

export async function updateColumn(id, column, token) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(column),
  });
  return response.json();
}

export async function deleteColumn(id, token) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

export async function moveColumn(id, column, token) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(column),
  });
  return response.json();
}
