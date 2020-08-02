export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  getMarkerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.getMarkerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
