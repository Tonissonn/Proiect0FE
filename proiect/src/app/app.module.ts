import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UtilizatorService} from "./utilizator.service";
import { EditComponent } from './edit/edit.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AddComponent,
    EditComponent,
    DeleteDialogComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, FormsModule, ReactiveFormsModule, MatDialogModule, BrowserAnimationsModule,
    ],
  providers: [UtilizatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
