import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { memo, useCallback, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY || "";

function GoogleMapContainer() {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        zoom={3}
        center={{ lat: 22.54992, lng: 0 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
}

export default memo(GoogleMapContainer);
