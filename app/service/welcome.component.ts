import { Component, OnInit } from '@angular/core';
import { UserService }       from './user.service';

@Component({
	moduleId: module.id,
	selector: 'app-welcome',
	templateUrl: './welcome.component.html'
})
export class WelcomeComponent  implements OnInit {
	welcome = '-- not initialized yet --';
	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.welcome = this.userService.isLoggedIn ?
			'Welcome, ' + this.userService.user.name :
			'Please log in.';
	}
}