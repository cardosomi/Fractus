let profileRequest;

async function requestApi(path, options = {}) {
  const response = await fetch(path, {
    credentials: 'same-origin',
    ...options,
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || `Erro na API (${response.status}).`);
  }

  return result;
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
