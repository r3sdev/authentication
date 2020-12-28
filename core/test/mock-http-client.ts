import { HttpClient } from "../data/protocols";

export class MockHttpClient extends HttpClient {

  constructor(baseUrl: string) {
    super(baseUrl);
  }

  post(path: string, payload: HttpClient.Post): Promise<any> {
    return new Promise((resolve, reject) => {
      process.nextTick(() =>
        JSON.stringify(payload.body).includes("test@test.com")
          ? resolve({ path, body: payload.body })
          : reject({ error: 'error' }),
      );
    });
  }

}