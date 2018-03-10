import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/api';

@Component({
  selector: 'comp-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  options: any;

  overlays: any[];

  dialogVisible: boolean;

  markerTitle: string;

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean;

  msgs: Message[] = [];

  ngOnInit() {
    this.options = {
      center: {lat: 43.600000, lng: 1.433333},
      zoom: 7
    };

    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();
  }

  handleMapClick(event) {
    this.dialogVisible = false;
    this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event) {
    this.msgs = [];
    const isMarker = event.overlay.getTitle !== undefined;

    if (isMarker) {
      const title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

      this.msgs.push({severity: 'info', summary: 'Marker Selected', detail: title});
    } else {
      this.msgs.push({severity: 'info', summary: 'Shape Selected', detail: ''});
    }
  }

  addMarker() {
    this.overlays.push(new google.maps.Marker({
      position: {lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()},
      title: this.markerTitle,
      draggable: this.draggable
    }));
    this.markerTitle = null;
    this.dialogVisible = false;
  }

  handleDragEnd(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle()});
  }

  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
        new google.maps.Marker({position: {lat:  43.600000, lng: 1.433333}, title: 'Toulouse'}),
        new google.maps.Marker({position: {lat: 9.64119, lng: 13.5784}, title: 'Conakry'}),
        new google.maps.Marker({position: {lat: 14.71668, lng: 17.46769}, title: 'Dakar'}),
        new google.maps.Polygon({
         /* paths: [
            {lat: 43.6254, lng: 1.5852}, {lat: 43.924, lng: 1.89433}, {lat: 43.2548, lng: 1.86947}, {lat: 43.985, lng: 1.852144}
          ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35*/
        }),
        new google.maps.Circle({
          center: {lat:  43.600000, lng:  1.433333},
          fillColor: '#1976D2',
          fillOpacity: 0.35,
          strokeWeight: 1,
          radius: 40000
        }),
        new google.maps.Polyline({
          path: [{lat: 36.86149, lng: 30.63743}, {lat: 36.86341, lng: 30.72463}],
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 0.5,
          strokeWeight: 2
        })
      ];
    }
  }

  zoomIn(map) {
    map.setZoom(map.getZoom() + 1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom() - 1);
  }

  clear() {
    this.overlays = [];
  }

}
