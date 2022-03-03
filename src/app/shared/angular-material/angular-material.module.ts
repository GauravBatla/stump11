import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
const ui = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  NgxPaginationModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatDialogModule,
  AngularEditorModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatChipsModule
]

@NgModule({
  exports: [
    ui
  ],
  imports: [
    ui
  ]
})
export class AngularMaterialModule { }
