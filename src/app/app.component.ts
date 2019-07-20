import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { AppConfig } from '../environments/environment';
import { deadLinkChecker } from 'dead-link-checker';
import { mockLinks } from './mock-data';
import { LinksService } from './services/links.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public domainName: string;
    public desiredIOThreads: string;
    public links: any[] = mockLinks;
    public elapsedTime: number;

    constructor(public electronService: ElectronService, private linksService: LinksService) {

        console.log('AppConfig', AppConfig);

        if (electronService.isElectron()) {
            console.log('Mode electron');
            console.log('Electron ipcRenderer', electronService.ipcRenderer);
            console.log('NodeJS childProcess', electronService.childProcess);
        } else {
            console.log('Mode web');
        }
    }

    public async submit() {
        this.linksService.links = [];
        this.linksService.badLinks = [];
        this.elapsedTime = 0;
        const intervalId = setInterval(() => {
            this.elapsedTime++;
        }, 10);

        // const worker = new Worker('./dead-link-checker.worker', { type: 'module' });
        // worker.onmessage = ({ data }) => {
        //     console.log(`page got message: ${data}`);
        // };
        // worker.postMessage({
        //     domainName: this.domainName,
        //     links: this.linksService.links
        // });

        await deadLinkChecker(this.domainName, undefined, this.linksService.links);

        clearInterval(intervalId);
    }
}
