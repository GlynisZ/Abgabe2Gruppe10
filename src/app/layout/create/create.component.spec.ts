import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { AppModule } from 'src/app/app.module';
import { doesNotMatch } from 'assert';

describe('CreateComponent', () => {
    let component: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateComponent],
            providers: [DatePipe],
            imports: [
                ReactiveFormsModule,
                HttpClientTestingModule,
                MatSnackBarModule,
                MatSelectModule,
                MatRadioModule,
                MatCheckboxModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatGridListModule,
                MatIconModule,
                AppModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render form', () => {
        expect(fixture).toBeTruthy();
    });
});
