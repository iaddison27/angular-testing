import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner-inline.component';

describe('BannerComponent (inline tests)', () => {
	let comp:    BannerComponent;
	let fixture: ComponentFixture<BannerComponent>;
	let de:      DebugElement;
	let el:      HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BannerComponent ], // declare the test component
		})
		.compileComponents();  // compile template and css
	}));

	beforeEach(() => {

		fixture = TestBed.createComponent(BannerComponent);
		comp = fixture.componentInstance; // BannerComponent test instance

		// query for the title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;
	});
	
	it('should display title', () => {
		fixture.detectChanges();
		expect(el.textContent).toBe(comp.title);
	});
	
	it('should display a different title', () => {
		comp.title = 'Test';
		fixture.detectChanges();
		expect(el.textContent).toBe('Test');
	});
});