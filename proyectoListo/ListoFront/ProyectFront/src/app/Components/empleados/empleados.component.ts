import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Empleados } from 'src/app/Models/Empleados';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';
import Swal from 'sweetalert2';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
dataSource:MatTableDataSource<any>;
  constructor(public modalservice: ModalService, public service:ApiService, public router:Router, public dialog:MatDialog) { 
    this.dataSource=new MatTableDataSource()
  }
  public displayedColumns : string[];
  @ViewChild(MatPaginator) paginator: MatPaginator; //cuantos caracteres ver
  @ViewChild(MatSort) sort: MatSort; // la flecha para ordenar

  ngOnInit(): void {
    this.get();
  }

  public async get(){
    await this.service.getAll("empleadoes").then((res)=>{
      for(let index=0; index < res.length; index ++){
        this.loadTable([res[index]])
      }
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;        
    })
  }
  loadTable(data:any[]){
    this.displayedColumns=[];
    for(let column in data[0]){
      this.displayedColumns.push(column)
    }
    this.displayedColumns.push("Acciones")
  }
  applyFilter(event: Event) { //Programacion del boton para realizar la busqueda
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    this.modalservice.titulo="empleados"
    this.modalservice.accion.next("Crear"),
    this.dialog.open (ModalTemplateComponent,{
      width: 'auto',
      height: 'auto' 
    });
  }
  delete(element:Empleados){  
    Swal.fire({
      title: 'Estas seguro?',
      text: "No se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        const id=element.idEmp
        this.service.Delete("Empleadoes",id)
        Swal.fire(
          'Eliminado!',
          'Se elimino satisfactoriamente.',
          'success'
        )
        window.location.reload();
      }
    })
  }

  openDialogEdit(element:Empleados){
    this.modalservice.titulo="Empleados"
    this.modalservice.accion.next("Editar"),
    this.modalservice.empleados= element
    this.dialog.open(ModalTemplateComponent, {
      width: 'auto',
      height: 'auto'
    });
  }



}
