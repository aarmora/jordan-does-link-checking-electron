import { Component, OnInit, ViewChild, Input, } from '@angular/core';
import { LinksService } from '../../services/links.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { shell } from 'electron';
import { ILinkObject } from 'dead-link-checker/dist/helpers';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @Input() badLinks: boolean;
    public dataSource: MatTableDataSource<any>;
    public filterValue = '';
    public previousLinksLength = 0;

    public displayedColumns: string[] = ['link', 'status', 'locationOfLink'];

    constructor(public linksService: LinksService) { }

    public ngOnInit() {
        this.refresh();
        setInterval(() => {
            if (!this.badLinks && (this.previousLinksLength !== this.linksService.links.length)) {
                this.refresh();
            }
            else if (this.badLinks && (this.previousLinksLength !== this.linksService.badLinks.length)) {
                this.refresh();
            }
        }, 1500);
    }

    public refresh() {
        this.linksService.updateBadLinks();
        this.dataSource = new MatTableDataSource(this.badLinks ? this.linksService.badLinks : this.linksService.links);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.applyFilter(this.filterValue);
        this.previousLinksLength = this.badLinks ? this.linksService.badLinks.length : this.linksService.links.length;
    }

    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    public openLink(link: string, event: Event) {
        event.preventDefault();
        shell.openExternal(link);
    }

    public isDisabled() {
        return this.badLinks ? this.linksService.badLinks.length < 1 : this.linksService.links.length < 1;
    }

    public download() {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "link,status,locationOfLink\r\n";
        const links = this.badLinks ? this.linksService.badLinks : this.linksService.links;

        links.forEach((linkObject: ILinkObject) => {
            const row = `${linkObject.link},${linkObject.status},${linkObject.locationOfLink}`;
            csvContent += row + "\r\n";
        });
        const encodedUri = encodeURI(csvContent);
        // if (window.navigator.msSaveBlob) { // IE & Edge
        //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        //     window.navigator.msSaveBlob(blob, 'error log.csv');
        // }
        // else { // Chrome & FF
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        const fileName = this.badLinks ? 'Bad links' : 'All links';
        link.setAttribute("download", `${fileName}.csv`);
        document.body.appendChild(link); // Required for FF

        link.click();
        // }
    }

}
