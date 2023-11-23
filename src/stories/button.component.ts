import {CommonModule} from '@angular/common';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'storybook-button',
  imports: [CommonModule],
  template: `
    <button
      type="submit"
      (click)="clickHandle.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >{{ label }}
    </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'tiny' | 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Сообщить об ошибке';

  /**
   * Optional click handler
   */
  @Output()
  clickHandle = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button_primary' : 'storybook-button_secondary';

    return ['storybook-button', `storybook-button_${this.size}`, mode];
  }
}
