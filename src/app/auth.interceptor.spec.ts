import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AppModule } from 'src/app/app.module';

describe('AuthInterceptor', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [AuthInterceptor],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                MatGridListModule,
                MatFormFieldModule,
                MatSelectModule,
                MatRadioModule,
                MatCheckboxModule,
                MatIconModule,
                AppModule,
            ],
        }),
    );

    it('should be created', () => {
        const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
