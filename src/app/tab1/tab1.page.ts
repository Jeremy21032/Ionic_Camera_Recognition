import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  data:any;
  constructor(private speechRecognition: SpeechRecognition) {}

  start() {
    // Check feature available
    this.speechRecognition
      .isRecognitionAvailable()
      .then((available: boolean) => console.log(available));

    this.speechRecognition.startListening().subscribe(
      (matches: string[]) => {
        console.log(matches);
        this.data=matches.length;
      },
      (onerror) => console.log('error:', onerror)
    );
    this.speechRecognition.stopListening();

    this.speechRecognition.getSupportedLanguages().then(
      (languages: string[]) => console.log(languages),
      (error) => console.log(error)
    );

    this.speechRecognition
      .hasPermission()
      .then((hasPermission: boolean) => console.log(hasPermission));

    this.speechRecognition.requestPermission().then(
      () => console.log('Granted'),
      () => console.log('Denied')
    );
  }
}
