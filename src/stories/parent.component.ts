import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'storybook-parent',
  imports: [CommonModule],
  template: `
    <div class="app-content">
      <div class="app-content__wrapper">
        <div class="app-content__inner">
          <div class="app-content__content">
            <div class="app-content__box">
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  styleUrls: ['./parent.css'],
})

export default class ParentComponent {
}

