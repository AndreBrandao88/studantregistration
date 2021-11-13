import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListFormComponent } from '../list-form/list-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }
  addlista() {
    const dialogRef = this.dialog.open(ListFormComponent, {width: '500px;'} );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`A comunicao foi Fechada`);
    });
  }
  


}
