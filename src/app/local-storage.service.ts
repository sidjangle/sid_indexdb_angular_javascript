import { Injectable } from '@angular/core';

declare var db: any
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public storagename = "CodeToDodb";

  constructor() { }

  // add and update both in one function
  add(keyname, value) {
    return new Promise(async(resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction([this.storagename], "readwrite")
          .objectStore(this.storagename).put(value, keyname);

        request.onsuccess = await function (event) {
          if (event.target.result) {
            console.log("success")
            resolve("success")
          } else {
            console.log("error")
            resolve(false);
          }
        }

      }
    });





  }

  // get the data from index db 
  get(keyname) {
    return new Promise(async(resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction([this.storagename], "readwrite")
          .objectStore(this.storagename).get(keyname);

        request.onsuccess = await function (event) {
          if (event.target.result) {
            console.log("success")
            resolve(event.target.result)
          } else {
            console.log("error")
            resolve(false);
          }
        }

      }
    });

  }

  // delete the data from index db
  delete(keyname) {
    return new Promise(async(resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction([this.storagename], "readwrite")
          .objectStore(this.storagename).delete(keyname);

        request.onsuccess = await function (event) {
          if (event.target.result) {
            console.log("success")
            resolve("success")
          } else {
            console.log("error")
            resolve(false);
          }
        }

      }
    });



  }






}
