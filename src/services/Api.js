export function Api() {
  const api = {};

  async function get(BASE_URL) {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    return data;
  }

  api.get = get;

  return api;
}
