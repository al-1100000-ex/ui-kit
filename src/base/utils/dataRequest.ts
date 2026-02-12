type BackendSuccess<TData> = {
  code: 200;
  data: TData;
};

type BackendError = {
  code: number;
  data: null;
  error_msg: string;
};

type BackendResponse<TData> = BackendSuccess<TData> | BackendError;

export type DataRequestOptions<TPayload> = {
  route: string;
  payload?: TPayload;
  signal?: AbortSignal;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
};

export async function dataRequest<TData, TPayload extends Record<string, unknown> | undefined = undefined>(
  options: DataRequestOptions<TPayload>
): Promise<TData | null> {
  const { route, payload, signal, headers, credentials } = options;

  const method: "GET" | "POST" = payload === undefined ? "GET" : "POST";

  const controllerHeaders: Record<string, string> = {
    Accept: "application/json",
    ...(payload === undefined ? {} : { "Content-Type": "application/json" }),
    ...headers,
  };

  try {
    const res = await fetch(route, {
      method,
      headers: controllerHeaders,
      body: payload === undefined ? undefined : JSON.stringify(payload),
      signal,
      credentials,
    });

    let parsed: unknown;
    try {
      parsed = await res.json();
    } catch {
      parsed = null;
    }

    if (!isBackendResponse<TData>(parsed)) {
      const msg = `dataRequest: Unexpected response format (HTTP ${res.status}).`;
      console.error(msg, { route, method, httpStatus: res.status, body: parsed });
      return null;
    }

    if (parsed && parsed.code !== 200) {
      console.error((parsed as {error_msg: string}).error_msg, { route, method, code: parsed.code });
      return null;
    }

    return parsed?.data;
  } catch (err: unknown) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return null;
    }

    console.error("dataRequest: fetch failed", { route, method, err });
    return null;
  }
}

function isBackendResponse<TData>(x: unknown): x is BackendResponse<TData> {
  if (typeof x !== "object" || x === null) return false;

  if (!("code" in x)) return false;
  const codeVal = (x as Record<string, unknown>).code;
  if (typeof codeVal !== "number") return false;

  const dataVal = (x as Record<string, unknown>).data;

  if (codeVal === 200) {
    return "data" in x;
  }

  const errorMsgVal = (x as Record<string, unknown>).error_msg;
  return dataVal === null && typeof errorMsgVal === "string";
}
