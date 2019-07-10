import { Component, OnInit, ViewChild, Input, } from '@angular/core';
import { LinksService } from '../../services/links.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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

    public displayedColumns: string[] = ['link', 'status', 'locationOfLink'];

    constructor(public linksService: LinksService) { }

    public ngOnInit() {
        this.refresh();
        setInterval(() => {
            if (!this.badLinks && this.dataSource && this.linksService.links
                && (this.dataSource.data.length !== this.linksService.links.length)) {
                this.refresh();
            }
            else if (this.badLinks && this.dataSource && this.linksService.badLinks
                && (this.dataSource.data.length !== this.linksService.badLinks.length)) {
                this.refresh();
            }
        }, 1500);
    }

    public refresh() {
        console.log('refresshing');
        this.linksService.updateBadLinks();
        this.dataSource = new MatTableDataSource(this.badLinks ? this.linksService.badLinks : this.linksService.links);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.applyFilter(this.filterValue);
    }

    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}
