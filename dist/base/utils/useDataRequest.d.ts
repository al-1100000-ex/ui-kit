import { type DataRequestOptions } from "./dataRequest";
export type UseDataRequestOptions<TPayload> = Omit<DataRequestOptions<TPayload>, "signal"> & {
    enabled?: boolean;
};
export type UseDataRequestResult<TData> = {
    data: TData | null;
    error: string | null;
    loading: boolean;
    refetch: () => Promise<TData | null>;
};
export declare function useDataRequest<TData, TPayload extends Record<string, unknown> | undefined = undefined>(options: UseDataRequestOptions<TPayload>): UseDataRequestResult<TData>;
