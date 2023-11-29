export default function $fetchWithAuth<T>(
  url: string,
  options?: Parameters<typeof $fetch<T>>[1]
) {
  const storedData = localStorage.getItem("auth");

  const parseStoredData = JSON.parse(storedData ?? "{}");

  const token = parseStoredData.token;

  return $fetch<T>(url, {
    onRequest({ options }) {
      options.headers = options.headers || ({} as any);

      (options.headers as any)["Authorization"] = token;
    },
    ...(options ?? {}),
  });
}
