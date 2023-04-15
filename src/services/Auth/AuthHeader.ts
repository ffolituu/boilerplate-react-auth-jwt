export default function authHeader() {
  const user = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_APP_STORAGE_KEY) || "{}"
  );

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
