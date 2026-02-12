import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { dataRequest, type DataRequestOptions } from "./dataRequest";

export type UseDataRequestOptions<TPayload> = Omit<DataRequestOptions<TPayload>, "signal"> & {
  enabled?: boolean;
};

export type UseDataRequestResult<TData> = {
  data: TData | null;
  error: string | null;
  loading: boolean;
  refetch: () => Promise<TData | null>;
};

export function useDataRequest<
  TData,
  TPayload extends Record<string, unknown> | undefined = undefined
>(options: UseDataRequestOptions<TPayload>): UseDataRequestResult<TData> {
  const { enabled = true, ...reqOptions } = options;

  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const abortRef = useRef<AbortController | null>(null);

  const requestKey = useMemo(() => {
    const payloadKey =
      reqOptions.payload === undefined ? "no-payload" : JSON.stringify(reqOptions.payload);
    const headersKey = reqOptions.headers ? JSON.stringify(reqOptions.headers) : "no-headers";
    const credKey = reqOptions.credentials ?? "default";
    return `${reqOptions.route}::${payloadKey}::${headersKey}::${credKey}`;
  }, [reqOptions.route, reqOptions.payload, reqOptions.headers, reqOptions.credentials]);

  const run = useCallback(async (): Promise<TData | null> => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const result = await dataRequest<TData, TPayload>({
        ...reqOptions,
        signal: controller.signal,
      });

      if (result === null) {
        setData(null);
        setError("Request failed");
        return null;
      }

      setData(result);
      return result;
    } finally {
      setLoading(false);
    }
  }, [reqOptions, requestKey]);

  useEffect(() => {
    if (!enabled) return;

    void run();

    return () => {
      abortRef.current?.abort();
    };
  }, [enabled, run, requestKey]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  return { data, error, loading, refetch: run };
}
