export interface HttpClientSpec {
    post<P>(path: string, payload: HttpClient.Post): Promise<P>;
    delete<D>(path: string, payload: HttpClient.Delete): Promise<D>;
}

export abstract class HttpClient implements HttpClientSpec {

    baseUrl: string;

    constructor(props: HttpClient.ConstructorProps) {
        Object.assign(this, props);
    }

    abstract post<P>(path: string, payload: HttpClient.Post): Promise<P>;
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
    export interface Delete extends Common { }
}