import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  link_participante:string = 'http://acreditaciones-desa.ucasal.edu.ar/participante/asistio-evento/';


  constructor(
    private bcScanner: BarcodeScanner
  ) {}

  escanearQR(){
    this.bcScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData.text);

      fetch(this.link_participante + barcodeData.text,{mode: 'no-cors'})
      .then(response => response.text())
      .then(data => console.log(data));

      console.log('Link completo: ',this.link_participante+barcodeData.text);

     }).catch(err => {
         console.log('Error', err);
     });
     
  }//end function

}
