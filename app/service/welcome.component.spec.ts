import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { UserService } from './user.service';

describe('WelcomeComponent (inline tests)', () => {
	let comp:    WelcomeComponent;
	let fixture: ComponentFixture<WelcomeComponent>;
	let de:      DebugElement;
	let el:      HTMLElement;
	let userService: UserService
	let userServiceStub: UserService;

	// Need this as the HTML is in an external template
	beforeEach(async(() => {
		userServiceStub = {
			isLoggedIn: true,
			user: { name: 'Test User'}
		};
		
		TestBed.configureTestingModule({
			declarations: [ WelcomeComponent ], // declare the test component
			providers:    [ {provide: UserService, useValue: userServiceStub } ]
		})
		.compileComponents();  // compile template and css
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WelcomeComponent);
		comp = fixture.componentInstance; // BannerComponent test instance

		userService = TestBed.get(UserService);
		
		// query for the title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('.welcome'));
		el = de.nativeElement;
	});
	
	it('should display username when logged in', () => {
		fixture.detectChanges();
		expect(el.textContent).toBe('Welcome, Test User');
	});
	
	it('should display default message when not logged in', () => {
		userService.isLoggedIn = false;
		fixture.detectChanges();
		expect(el.textContent).toBe('Please log in.');
	});
	
});