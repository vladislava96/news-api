import AppController from '../controller/controller';
import { IData } from '../controller/data';
import { AppView } from '../view/appView';


class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelectorAll('.sources').forEach(elem => {
                elem?.addEventListener('click', (e: Event): void => this.controller.getNews(e, (data: IData): void => this.view.drawNews(data)));
            })
        this.controller.getSources((data: IData): void => this.view.drawSources(data));
    }
}

export default App;
