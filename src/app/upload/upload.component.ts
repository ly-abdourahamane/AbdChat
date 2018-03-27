import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'comp-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
    console.log('upload component', this.afStorage);
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
  }

}
