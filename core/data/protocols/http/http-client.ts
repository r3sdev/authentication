export interface HttpClientSpec {
    post<P>(path: string, payload: HttpClient.Post): Promise<P>;
}

export abstract class HttpClient implements HttpClientSpec {

    constructor(public baseUrl?: string) {}

    abstract post<P>(path: string, payload: HttpClient.Post): Promise<P>;
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
}