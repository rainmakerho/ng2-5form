import {Component} from '@angular/core';

import {Hero} from '../models/hero';


@Component({
    moduleId:module.id,
    selector:'hero-form',
    templateUrl:'hero-form.component.html',
    //templateUrl:'app/hero/hero-form.component.html'
    styleUrls:['hero-form.component.css']
})
export class HeroFormComponent{
    powers=[
        'Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'
    ];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit(){
        this.submitted = true;
    }

    get diagnostic(){
        return JSON.stringify(this.model);
    }

    active = true;
    newHero(){
        this.model = new Hero(123, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}