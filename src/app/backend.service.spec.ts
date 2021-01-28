import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { AppModule } from 'src/app/app.module';

describe('BackendService', () => {
    let service: BackendService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [  HttpClientTestingModule, 
                        MatGridListModule, 
                        MatSelectModule, 
                        MatRadioModule, 
                        MatCheckboxModule, 
                        MatIconModule, 
                        AppModule, 
                        MatFormFieldModule,
                    ],
        });
        service = TestBed.inject(BackendService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be true', () => {
        expect(true).toBeTruthy();
    });

    it('should be false', () => {
        expect(false).toBeFalsy();
    });
});
