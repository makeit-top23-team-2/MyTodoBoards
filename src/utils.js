export function getProfile() {
  const profile = localStorage.getItem('profile');
  if (profile !== 'undefined') {
    return JSON.parse(profile);
  }
  return null;
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (token !== 'undefined') {
    return token;
  }
  return null;
}
