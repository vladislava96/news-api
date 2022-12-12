import { INews } from '../controller/data';
import './burger-menu.css'

export class Burger {
  button: HTMLElement | null
  constructor() {
    this.button = document.querySelector('.burger-button');

    this.button?.addEventListener('click', this.openMenu.bind(this));
  }

  openMenu(): void {
    this.button?.classList.toggle('active');
    document.querySelector('.burger-menu')?.classList.toggle('active-burger');
    document.body.classList.toggle('inactive');
  }

  draw(data: Array<INews>): void {
    const sources: Element | null = document.querySelector('.burger-menu .sources');

    data.forEach((item: INews): void => {
      const sourceItemName = document.createElement('span');
      sourceItemName.className = ('source__item-name');
      sourceItemName.textContent = item.name;

      const sourceItem = document.createElement('div');
      sourceItem.className = ('source__item');
      sourceItem.setAttribute('data-source-id', item.id);

      sourceItem.append(sourceItemName);
      sources?.append(sourceItem);
    });
  }
}