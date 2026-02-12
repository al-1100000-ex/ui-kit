export type DataRequestOptions<TPayload> = {
    route: string;
    payload?: TPayload;
    signal?: AbortSignal;
    headers?: Record<string, string>;
    credentials?: RequestCredentials;
};
export declare function dataRequest<TData, TPayload extends Record<string, unknown> | undefined = undefined>(options: DataRequestOptions<TPayload>): Promise<TData | null>;
