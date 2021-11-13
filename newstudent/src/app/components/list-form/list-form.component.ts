import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  public listform: FormGroup
  constructor(

    private fb: FormBuilder
    
   public dialogRef: MatDialogRef<ListFormComponent>,
   //@Optimal @Inject(MAT_DIALOG_DATA) public data: String
   
  ){ }

  ngOnInit(): void { 
this.listform = this.fb.group({

  id: [null],
  ListaNome:['', Validators.required],
  ListaSexo:['', Validators.required],
  ListaIdade:['', Validators.required],
  ListaCidade:['', Validators.required],
  ListaTelefone:['', Validators.required],
});

  }

    cancelar():void
  {​​​
      this.dialogRef.close();
  }​​​


}
