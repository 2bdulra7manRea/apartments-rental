export const authResponse = (token, user) => {
  return { access_token: token, username: user.username, role: user.role };
};
