import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  url ="https://localhost:7217/api/"



  public async getAll (controller:string){
    var DataResponse:any;
      await this.http.get(this.url+controller).toPromise().then((res)=>{
        DataResponse=res;
      });
    return DataResponse;
    }
  getById(controller:String, Id:string){
    var DataResponse:any;
    this.http.get(this.url+controller+"/"+Id).subscribe((res)=>{
      DataResponse=res; 
  });
  return DataResponse;
  }
  Post (controller:string,Body:any){
    return this.http.post(this.url+controller,Body).subscribe((res)=>{
      
    });
  }
  Put(controller:string, Body:any, Id:string){
    return this.http.put(this.url+controller+"/"+Id,Body).subscribe((res)=>{
      
    });
  }
  Delete (controller:string, Id:string ){
    return this.http.delete(this.url+controller+"/"+Id).subscribe((res)=>{
     
    });
  }
    postAll (controller:string, Body:any){
      return this.http.post(Body, this.url+controller).subscribe((res)=>{
        console.log(res);
      });
    }
    putAll (controller:string, Body:any, options:any ){
      return this.http.put(this.url+controller,Body,options).subscribe((res)=>{
        console.log(res);
      });
    }

}
