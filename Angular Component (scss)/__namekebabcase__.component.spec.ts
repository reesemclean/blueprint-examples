import {
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { {{namePascalCase}}Component } from './{{nameKebabCase}}.component';

let component: {{namePascalCase}}Component;
let fixture: ComponentFixture<{{namePascalCase}}Component>;
let page: Page;

describe('Component: {{namePascalCase}}', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        {{namePascalCase}}Component,
      ],
      providers: [],
      imports: []
    });

    fixture = TestBed.createComponent({{namePascalCase}}Component);
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
