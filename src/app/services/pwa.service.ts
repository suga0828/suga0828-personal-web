import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  constructor(private readonly swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(event => {
      console.log(event);
    });

    window.addEventListener('beforeinstallprompt', event => {
      console.log(event);
    });
  }
}
