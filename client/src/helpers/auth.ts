const tokenStorageKey = process.env.REACT_APP_TOKEN_KEY || "";

export const storeToken = (token: string) => {
  sessionStorage.setItem(tokenStorageKey, JSON.stringify({ id: token }));
};

export const getToken = (): string | null => {
  const storageToken = sessionStorage.getItem(tokenStorageKey);

  if (!storageToken) {
    return null;
  }

  const { id: token } = JSON.parse(storageToken);
  return token;
};

export const removeToken = () => {
  sessionStorage.removeItem(tokenStorageKey);
  sessionStorage.clear();
};

export const storeUserData = (username: string, role: string) => {
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("role", role);
};

export const getRole = () => {
  return sessionStorage.getItem("role");
};
