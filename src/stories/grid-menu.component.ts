import {CommonModule} from "@angular/common";
import {Component} from "@angular/core";
import ParentComponent from "./parent.component";

@Component({
  selector:'storybook-grid-menu',
  imports:[CommonModule],
  template: `
  <h2 class="app-grid-menu__heading">Инциденты ККБ</h2>
<ul role="list" class="app-grid-menu">
  <li class="app-grid-menu__item">
    <div class="app-grid-menu__wrapper">
      <div class="app-grid-menu__icon-wrapper" data-action="register">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="app-grid-menu__icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
        </svg>
      </div>
      <div class="app-grid-menu__description">
        <h3 class="app-grid-menu__title">
          <a href="#" class="app-grid-menu__link">
            <span class="app-grid-menu__overlay" aria-hidden="true"></span>
            <span>Регистрация инцидента</span>
          </a>
        </h3>
        <p class="app-grid-menu__text">Инцидент операционного риска</p>
      </div>
    </div>
  </li>
  <li class="app-grid-menu__item">
    <div class="app-grid-menu__wrapper">
      <div class="app-grid-menu__icon-wrapper" data-action="incoming">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="app-grid-menu__icon">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
        </svg>
      </div>
      <div class="app-grid-menu__description">
        <h3 class="app-grid-menu__title">
          <a href="#" class="app-grid-menu__link">
            <span class="app-grid-menu__overlay" aria-hidden="true"></span>
            <span>Мои инциденты</span>
          </a>
        </h3>
        <p class="app-grid-menu__text">Входящие</p>
      </div>
    </div>
  </li>
  <li class="app-grid-menu__item">
    <div class="app-grid-menu__wrapper">
      <div class="app-grid-menu__icon-wrapper" data-action="register">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="app-grid-menu__icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
        </svg>
      </div>
      <div class="app-grid-menu__description">
        <h3 class="app-grid-menu__title">
          <a href="#" class="app-grid-menu__link">
            <span class="app-grid-menu__overlay" aria-hidden="true"></span>
            <span>Регистрация инцидента</span>
          </a>
        </h3>
        <p class="app-grid-menu__text">Инцидент УЗИ</p>
      </div>
    </div>
  </li>
  <li class="app-grid-menu__item">
    <div class="app-grid-menu__wrapper">
      <div class="app-grid-menu__icon-wrapper" data-action="accept">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="app-grid-menu__icon">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
        </svg>
      </div>
      <div class="app-grid-menu__description">
        <h3 class="app-grid-menu__title">
          <a href="#" class="app-grid-menu__link">
            <span class="app-grid-menu__overlay" aria-hidden="true"></span>
            <span>Мои инциденты</span>
          </a>
        </h3>
        <p class="app-grid-menu__text">Принятые</p>
      </div>
    </div>
  </li>
  <li class="app-grid-menu__item"></li>
  <li class="app-grid-menu__item">
    <div class="app-grid-menu__wrapper">
      <div class="app-grid-menu__icon-wrapper" data-action="reject">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="app-grid-menu__icon">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
        </svg>
      </div>
      <div class="app-grid-menu__description">
        <h3 class="app-grid-menu__title">
          <a href="#" class="app-grid-menu__link">
            <span class="app-grid-menu__overlay" aria-hidden="true"></span>
            <span>Мои инциденты</span>
          </a>
        </h3>
        <p class="app-grid-menu__text">Отклоненные</p>
      </div>
    </div>
  </li>
</ul>

  `,
styleUrls:['./grid-menu.css']
})

export default class GridMenuComponent {

}
