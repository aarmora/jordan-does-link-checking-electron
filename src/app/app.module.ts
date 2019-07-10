import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ElectronService } from './providers/electron.service';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinksComponent } from './components/links/links.component';
import { LinksService } from './services/links.service';
import { MatSelectModule, MatSortModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        LinksComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule,
        MatSortModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [ElectronService, LinksService],
    bootstrap: [AppComponent]
})
export class AppModule { }
