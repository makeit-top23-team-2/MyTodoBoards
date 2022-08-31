const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const token = localStorage.getItem('token');

export async function getColumns() {
  const response = await fetch(`${BASE_URL}/api/columns`);
  return response.json();
}

export async function getColumnById(id) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`);
  return response.json();
}

export async function getColumnByBoardId(id) {
  const response = await fetch(`${BASE_URL}/api/columns/board/${id}`);
  return response.json();
}

export async function createColumnByBoardId(id, column) {
  const response = await fetch(`${BASE_URL}/api/columns/board/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(column),
  });
  return response.json();
}

export async function updateColumn(id, updateColumnData) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateColumnData),
  });
  return response.json();
}

export async function deleteColumn(id) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
