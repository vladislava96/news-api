import { Burger } from '../burger-menu/burger-menu';
import { IArticle, IData, INews } from '../controller/data';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    burger: Burger;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.burger = new Burger();
    }
    
    drawNews(data: IData): void {
        const values: Array<IArticle> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IData): void {
        const values: Array<INews> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
        this.burger.draw(values);
    }
}

export default AppView;
