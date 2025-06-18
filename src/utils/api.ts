export const getApi = async (
  url: RequestInfo | URL,
  {
    headers = {},
    /* data, */ /* useToken, */ /* signal, */ ...restOptions
  }: RequestInit = {},
) => {
  const requestHeaders = new Headers({
    "Content-Type": "application/json",
    "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
    ...headers,
  });
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiBaseUrl}${url}`, {
    headers: requestHeaders,
    mode: "cors",
    ...restOptions,
  });

  if (!response.ok) {
    throw await response.json();
  }

  return response.json();
};
