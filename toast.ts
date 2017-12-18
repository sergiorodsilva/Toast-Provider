import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from "ionic-angular";

@Injectable()
//Provê o serviço de Toast em toda a aplicação
export class ToastProvider {

  toastOptions : ToastOptions;

  constructor(public toast: ToastController) {

  }

  showToast(message:string,time:number,position?:string,close?:boolean,closebut?:string){
      this.toastOptions = {
      message:message,
      duration:time,
      position:position ,//A posição do toast na tela. Valores aceitos: "top", "middle", "bottom".
      //defaut é bottom
      showCloseButton: close,
      closeButtonText:closebut,
      }
     this.toast.create(this.toastOptions).present()
  }

}

