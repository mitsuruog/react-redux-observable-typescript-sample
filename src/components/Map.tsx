import * as React from "react";
import * as scriptjs from "scriptjs";

export interface MapProps {
  getWeather: (lat: number, lng: number) => undefined;
  mapReady: Function;
}

interface MapState {
}

export default class Map extends React.Component<MapProps, MapState> {

  private map: google.maps.Map;

  constructor(props: MapProps) {
    super(props);

    this.onLoaded = this.onLoaded.bind(this);
  }

  public componentWillMount() {
    // remove this key when you run it on your localhost.
    scriptjs(`https://maps.googleapis.com/maps/api/js?key=AIzaSyB5o5wtvz2sf_ckQm9rciFuJxc4pp2Sx-o`, this.onLoaded);
  }

  public render() {
    return (
      <div id="map" />
    );
  }

  private onLoaded() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.6811673, lng: 139.7648629 }, // default is Tokyo station!!
      zoom: 8,
      mapTypeControl: false,
      disableDoubleClickZoom: false,
      fullscreenControl: false,
      keyboardShortcuts: false,
      streetViewControl: false,
      scaleControl: false,
      rotateControl: false,
      panControl: false,
    });

    this.map.addListener("click", (event) => {
      this.props.getWeather(
        event.latLng.lat(),
        event.latLng.lng(),
      );
    });

    this.props.mapReady();
  }
}
