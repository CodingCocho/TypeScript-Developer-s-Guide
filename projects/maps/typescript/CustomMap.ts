export interface Mappable 
{
  color: string;
  location:
  {
    lat: number,
    lng: number
  }
  markerContent(): string;
};

export class CustomMap
{
  private googleMap: google.maps.Map;

  constructor(divId: string)
  {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, 
    {
      center: 
      {
        lat: 0,
        lng: 0
      },
      zoom: 2
    })
  };

  addMarker(mappable: Mappable): void
  {
    const myMarker = new google.maps.Marker
    ({
        map: this.googleMap,
        position: mappable.location
    })

    const infoWindow = new google.maps.InfoWindow
    ({
      content: mappable.markerContent()
    })

    myMarker.addListener('click', () =>
    {
      infoWindow.open(this.googleMap, myMarker);
    })
  };
};