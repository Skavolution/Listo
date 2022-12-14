import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatProgressBarModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatTableModule,
        MatDialogModule,
        MatTabsModule,
        MatTooltipModule,
        MatSelectModule,
        MatPaginatorModule,
        MatChipsModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatExpansionModule,
        DragDropModule,
        MatSortModule,
        FlexLayoutModule
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatProgressBarModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatTableModule,
        MatDialogModule,
        MatTabsModule,
        MatTooltipModule,
        MatSelectModule,
        MatPaginatorModule,
        MatChipsModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatBadgeModule,
        MatCheckboxModule,
        MatExpansionModule,
        DragDropModule,
        MatSortModule,
        FlexLayoutModule
    ]
})
export class SharedModule { }