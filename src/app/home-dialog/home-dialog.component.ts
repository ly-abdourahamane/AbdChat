import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';

@Component({
  selector: 'comp-home-dialog',
  templateUrl: './home-dialog.component.html',
  styleUrls: ['./home-dialog.component.css']
})
export class HomeDialogComponent {

   constructor(public dialog: MatDialog) {

    // LANCE AUTOMATIQUEMENT LE MENU DE DIALOGUE
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '800px',
      height: '150px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fermeture du dialog');
    });
  }
}

