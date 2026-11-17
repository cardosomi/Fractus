let profileRequest;
const TOKEN_KEY = 'fractus_access_token';
export const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export function getAccessToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}

function saveAccessToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function clearAccessToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}

export function logout() {
  clearAccessToken();
  window.dispatchEvent(new CustomEvent('fractus:session-ended', {
    detail: 'Você saiu da sua conta.',
  }));
}

async function requestApi(path, options = {}) {
  let response;
  try {
    const token = getAccessToken();
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...options.headers,
      },
    });
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        'Não foi possível conectar à API. Inicie o servidor Flask e tente novamente.',
        { cause: error }
      );
    }
    throw error;
  }

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(result.error || `Erro na API (${response.status}).`);
    error.status = response.status;
    if (response.status === 401 && !path.startsWith('/api/auth/')) {
      clearAccessToken();
      window.dispatchEvent(new CustomEvent('fractus:session-ended', {
        detail: result.error || 'Sua sessão expirou. Entre novamente.',
      }));
    }
    throw error;
  }

  return result;
}

async function authenticate(path, credentials) {
  const result = await requestApi(path, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  saveAccessToken(result.accessToken);
}

export function register(email, password) {
  return authenticate('/api/auth/register', { email, password });
}

export function login(email, password) {
  return authenticate('/api/auth/login', { email, password });
}

export function getProfile() {
  if (!profileRequest) {
    profileRequest = requestApi('/api/profile').finally(() => {
      profileRequest = null;
    });
  }
  return profileRequest;
}

export function saveProfile(profile) {
  return requestApi('/api/profile', {
    method: 'PATCH',
    body: JSON.stringify(profile),
  });
}

export function saveGameData(gameData) {
  return requestApi('/api/game-data', {
    method: 'PUT',
    body: JSON.stringify(gameData),
  });
}

export function getGameData() {
  return requestApi('/api/game-data');
}
