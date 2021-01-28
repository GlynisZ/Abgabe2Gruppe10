import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { BackendService } from './backend.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
    let service: AuthService;
    beforeEach(() => {
        const backendServiceStub = () => ({ login: () => ({}) });
        const routerStub = () => ({ navigate: () => ({}) });
        TestBed.configureTestingModule({
            providers: [
                AuthService,
                { provide: BackendService, useFactory: backendServiceStub },
                { provide: Router, useFactory: routerStub },
            ],
        });
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('logout', () => {
        it('should makes expected calls', () => {
            const routerStub: Router = TestBed.inject(Router);
            spyOn(routerStub, 'navigate').and.callThrough();
            service.logout();
            expect(routerStub.navigate).toHaveBeenCalled();
        });
    });

    describe('login', () => {
        it('should makes expected calls', () => {
            const backendServiceStub: BackendService = TestBed.inject(
                BackendService,
            );
            spyOn(backendServiceStub, 'login').and.callThrough();
            service.login('admin', 'p');
            expect(backendServiceStub.login).toHaveBeenCalled();
        });
    });
});
