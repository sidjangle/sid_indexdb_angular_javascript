import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'indexdb';
public getvalue:any;

  constructor(public LocalStorage:LocalStorageService){

  }

add(){
let txtvalue = (<HTMLInputElement>document.getElementById("txtvalue")).value;
console.log(txtvalue);
this.LocalStorage.add("myname",txtvalue).then(res=>{
if(res){
  alert("inserted successfully");
}


})


}

// to get value 
get(){
this.LocalStorage.get("myname").then(res=>{
  if(res){
    this.getvalue = res;
  }
})  
}

delete(){
  this.LocalStorage.delete("myname").then(res=>{
    if(res){
      alert("delete")
      this.getvalue = 'deleted successfully';
    }
  })


}

}


