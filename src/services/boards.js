const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function getBoards() {
  const response = await fetch(`${BASE_URL}/api/boards`);
  return response.json();
}

export async function getBoardById(id) {
  const response = await fetch(`${BASE_URL}/api/boards/${id}`);
  return response.json();
}

export async function getAllUserBoards(tokenLogin) {
  const options = {
    method: 'GET',
    headers: { Authorization: `Bearer ${tokenLogin}` },
  };
  const response = await fetch(`${BASE_URL}/api/boards/user/`, options);
  return response.json();
}

export async function createBoard(BoardData, token) {
  const response = await fetch(`${BASE_URL}/api/boards`, {
    method: 'POST',
    body: JSON.stringify(BoardData),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

export async function updateBoard(id, updateBoardData, token) {
  const response = await fetch(`${BASE_URL}/api/boards/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updateBoardData),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

export async function deleteBoard(id, token) {
  const response = await fetch(`${BASE_URL}/api/boards/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
