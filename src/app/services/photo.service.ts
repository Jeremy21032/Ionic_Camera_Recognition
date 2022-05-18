import { COMPILER_OPTIONS, Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // public photo:UserPhoto[]=[];
  private PHOTO_STORAGE: string = 'photos';

  constructor(private platform:Platform) { }


  public async addNewToGallery(){
    // tomar foto
    const capturedPhoto=await Camera.getPhoto({
      resultType:CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100
    })
  }
}
