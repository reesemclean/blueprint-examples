import {
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { {{pascalCase name}}Component } from './{{kebabCase name}}.component';

let component: {{pascalCase name}}Component;
let fixture: ComponentFixture<{{pascalCase name}}Component>;
let page: Page;

describe('Component: {{pascalCase name}}', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        {{pascalCase name}}Component,
      ],
      providers: [],
      imports: []
    });

    fixture = TestBed.createComponent({{pascalCase name}}Component);
    component = fixture.componentInstance;
    page = new Page();

  });

  it('needs tests', () => {

    expect(false).toBeTruthy();

  });

});

class Page {

  constructor() {

  }

  getPageElements() {

  }

}