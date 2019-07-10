import { Injectable } from '@angular/core';
import { mockLinks } from '../mock-data';

@Injectable({
    providedIn: 'root'
})
export class LinksService {

    public links = mockLinks;
    public badLinks = []; // mockLinks.filter(link => link.status && link.status > 399);

    constructor() { }

    public updateBadLinks() {
        this.badLinks = this.links.filter(link => link.status && link.status > 399);
    }
}
