import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      console.log(event);
    });

    window.addEventListener('beforeinstallprompt', (event) => {
      console.log(event)
    });
  }
}
