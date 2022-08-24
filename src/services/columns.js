const BASE_URL = process.env.REACT_APP_API_BASE_URL;

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
    },
    body: JSON.stringify(column),
  });
  return response.json();
}

export async function updateColumn(id, column) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(column),
  });
  return response.json();
}

export async function deleteColumn(id) {
  const response = await fetch(`${BASE_URL}/api/columns/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}
