import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  code:any;

  constructor(private barcodeScanner:BarcodeScanner) {}

  ngOnInit() {

  }
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log("Barcode data: ", barcodeData);
      this.code=barcodeData.text;
      console.log("Barcode data Text: ", this.code);
      
    }).catch(error=>{
        console.log("Error: ", error)
    })
  }
}
