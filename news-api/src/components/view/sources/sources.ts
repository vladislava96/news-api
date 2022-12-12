import { INews } from '../../controller/data';
import './sources.css';


class Sources {
    draw(data: Array<INews>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: Element | null = document.querySelector('#sourceItemTemp');
        
        if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
            return;
        }

        data.forEach((item: INews): void => {
            const sourceClone: Element = sourceItemTemp.content.cloneNode(true) as Element;

            (sourceClone.querySelector('.source__item-name') as Element).textContent = item.name;
            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('main .sources')?.append(fragment);
    }
}

export default Sources;
