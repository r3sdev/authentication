import { HttpService } from '../http.service';
import { MockHttpClient } from '../../test/mock-http-client';

describe('HttpService', () => {

    let service: HttpService;
    let httpClient: MockHttpClient;

    beforeEach(() => {
        httpClient = new MockHttpClient("http://test.base.url");
        service = new HttpService(httpClient)
    })

    describe('/register', () => {
        it('should be defined', () => {
            expect(service.register).toBeDefined();
        })

        it('passes the correct data', async () => {
            const body = {
                email: 'test@test.com',
                firstName: 'John',
                lastName: 'Test',
                password: 'password'
            }

            const result = await service.register(body)

            expect(result).toEqual({
                path: '/register',
                body
            })
        })

        it('correctly handles errors', async () => {
            const body = {
                email: 'error@test.com',
                firstName: 'John',
                lastName: 'Test',
                password: 'password'
            }

            try {
                await service.register(body)
            }
            catch (err) {
                expect(err).toEqual({ error: 'error' })
            }
        })
    })

    describe('/login', () => {
        it('should be defined', () => {
            expect(service.login).toBeDefined();
        })

        it('passes the correct data', async () => {
            const body = {
                email: 'test@test.com',
                password: 'password'
            }

            const result = await service.login(body)

            expect(result).toEqual({
                path: '/login',
                body
            })
        })

        it('correctly handles errors', async () => {
            const body = {
                email: 'error@test.com',
                password: 'password'
            }

            try {
                await service.login(body)
            }
            catch (err) {
                expect(err).toEqual({ error: 'error' })
            }
        })
    })

    describe('/logout', () => {
        it('should be defined', () => {
            expect(service.logout).toBeDefined();
        })

        it('passes the correct data', async () => {
            const body = {
                email: 'test@test.com',
            }

            const result = await service.logout(body)

            expect(result).toEqual({
                path: '/logout',
                body
            })
        })

        it('correctly handles errors', async () => {
            const body = {
                email: 'error@test.com',
            }

            try {
                await service.logout(body)
            }
            catch (err) {
                expect(err).toEqual({ error: 'error' })
            }
        })
    })

})