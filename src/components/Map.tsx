import * as React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../shared/store";

declare global {
  interface Window {
    initMap: Function;
  }
}

export interface MapProps {}

export const Map: React.SFC<MapProps> = () => {
  const dispatch = useDispatch();
  const mapReady = React.useCallback(() => dispatch(actions.mapReadyAction()), [dispatch]);
  const getWeather = React.useCallback(
    (lat: number, lng: number) => dispatch(actions.weatherGetAction(lat, lng)),
    [dispatch]
  );
  const mapRef = React.useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const map = new google.maps.Map(node, {
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
      map.addListener("click", e => {
        getWeather(e.latLng.lat(), e.latLng.lng());
      });
      mapReady();
    }
  }, []);
  return <div id="map" ref={mapRef} />;
};