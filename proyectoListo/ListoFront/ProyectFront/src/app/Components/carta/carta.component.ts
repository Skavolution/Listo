import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';
import Swal from 'sweetalert2';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';
import { Carta } from 'src/app/Models/Carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  constructor(public modalservice: ModalService, public service:ApiService, public router:Router, public dialog:MatDialog ) { 
      this.dataSource =new MatTableDataSource()
    }
    
    public displayedColumns : string[];
    @ViewChild(MatPaginator) paginator: MatPaginator; //cuantos caracteres ver
    @ViewChild(MatSort) sort: MatSort; // la flecha para ordenar
  
    ngOnInit(): void {
      this.get();
    }
    public async get(){
      await this.service.getAll("menus").then((res)=>{
        for (let index = 0; index < res.length; index ++){
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
   
  
  
    openDialog() {
      this.modalservice.titulo="carta"
      this.modalservice.accion.next("Crear"),
      this.dialog.open ( ModalTemplateComponent, {
        width: 'auto',
        height: 'auto'
      }); 
    }
    delete(element:Carta){  
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
          const id=element.idPlato
          this.service.Delete("Menus",id)
          Swal.fire(
            'Eliminado!',
            'Se elimino satisfactoriamente.',
            'success'
          )
          window.location.reload();
        }
      })
    }
  
    openDialogEdit(element:any){
      this.modalservice.titulo="carta"
      this.modalservice.accion.next("Editar"),
      this.modalservice.carta= element
      this.dialog.open(ModalTemplateComponent, {
        width: 'auto',
        height: 'auto'
      });
    }
  
  

}
