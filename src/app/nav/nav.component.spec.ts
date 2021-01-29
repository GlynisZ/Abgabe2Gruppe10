import { LayoutModule } from '@angular/cdk/layout';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppModule } from 'src/app/app.module';

import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NavComponent],
                imports: [
                    NoopAnimationsModule,
                    LayoutModule,
                    MatButtonModule,
                    MatGridListModule,
                    MatIconModule,
                    MatListModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    RouterTestingModule,
                    HttpClientTestingModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatRadioModule,
                    MatCheckboxModule,
                    AppModule,
                ],
            }).compileComponents();

            const authServiceStub = () => ({
                base64token: {},
                login: (benutzername, passwort) => ({}),
                logout: () => ({}),
            });
            TestBed.configureTestingModule({
                imports: [FormsModule, RouterTestingModule],
                schemas: [NO_ERRORS_SCHEMA],
                declarations: [NavComponent],
                providers: [
                    { provide: AuthService, useFactory: authServiceStub },
                ],
            });
            fixture = TestBed.createComponent(NavComponent);
            component = fixture.componentInstance;
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should compile', () => {
        expect(component).toBeTruthy();
    });

    describe('login', () => {
        it('should be able to login', () => {
            const authServiceStub: AuthService = fixture.debugElement.injector.get(
                AuthService,
            );
            spyOn(authServiceStub, 'login').and.callThrough();
            component.login();
            expect(authServiceStub.login).toHaveBeenCalled();
        });
    });

    describe('logout', () => {
        it('should be able to logout', () => {
            const authServiceStub: AuthService = fixture.debugElement.injector.get(
                AuthService,
            );
            spyOn(authServiceStub, 'logout').and.callThrough();
            component.logout();
            expect(authServiceStub.logout).toHaveBeenCalled();
        });
    });
});
