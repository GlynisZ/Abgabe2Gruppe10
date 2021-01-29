import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AppModule } from 'src/app/app.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [
                HttpClientTestingModule,
                MatSnackBarModule,
                MatGridListModule,
                MatFormFieldModule,
                MatSelectModule,
                MatRadioModule,
                MatCheckboxModule,
                MatIconModule,
                FormsModule,
                AppModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`kunden has default value`, () => {
        expect(component.kunden).toEqual([]);
    });

    it(`geschlecht has default value`, () => {
        expect(component.geschlecht).toEqual(`K`);
    });

    it(`familienstand has default value`, () => {
        expect(component.familienstand).toEqual(`K`);
    });

    it(`interesseSport has default value`, () => {
        expect(component.interesseSport).toEqual(false);
    });

    it(`interesseLesen has default value`, () => {
        expect(component.interesseLesen).toEqual(false);
    });

    it(`interesseReisen has default value`, () => {
        expect(component.interesseReisen).toEqual(false);
    });
});
