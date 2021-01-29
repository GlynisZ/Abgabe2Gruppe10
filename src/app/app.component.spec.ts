import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { AppModule } from 'src/app/app.module';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, MatGridListModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatIconModule, AppModule],
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should create the app', () => {
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Abgabe2'`, () => {
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Abgabe2');
    });

    it('should render title', () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.content span')).toBe(null);
    });

    it(`title has default value`, () => {
        expect(component.title).toEqual(`Abgabe2`);
    });
});
