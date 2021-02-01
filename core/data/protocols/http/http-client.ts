

export interface HttpClientSpec {
    post<P>(path: string, payload: HttpClient.Post): Promise<HttpClient.DataError<P>>;
    get<G>(path: string, payload?: HttpClient.Get): Promise<HttpClient.DataError<G>>;
    delete<D>(path: string, payload?: HttpClient.Delete): Promise<HttpClient.DataError<D>>;
}

export abstract class HttpClient implements HttpClientSpec {

    constructor(public baseUrl?: string) {}

    abstract post<P>(path: string, payload: HttpClient.Post): Promise<P>;
    abstract get<G>(path: string, payload?: HttpClient.Get): Promise<G>;
    abstract delete<D>(path: string, payload?: HttpClient.Delete): Promise<D>;
}

export declare namespace HttpClient {
    export interface ConstructorProps {
        baseUrl: string
    }

    interface Common {
        headers?: Record<string, any>
    }
    export interface Post extends Common {
        body?: any;
    }
    export interface Get extends Common {}
    export interface Delete extends Common {}
    export interface DataError<T = any> {
        data: T | undefined;
        error: Error | undefined
    }
}