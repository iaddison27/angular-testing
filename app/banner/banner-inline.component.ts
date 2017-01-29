import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-banner',
	template: '<h1>{{title}}</h1>'
})

export class BannerComponent {
	title = 'Test Tour of Heroes';
}