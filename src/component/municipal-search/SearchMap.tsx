/** @jsx jsx */

import React, {
  useRef, useState, useCallback, useEffect, useMemo
} from 'react';
import { jsx, css } from '@emotion/react';
import ReactMapGL, { Source, Layer, NavigationControl, Popup, GeolocateControl } from 'react-map-gl';
import Filter from './Filter';

const navigationStyle = css`
  bottom: 4.2rem;
  position: absolute;
  right: 1rem;
`;

const mapStyle = css`
  height: 100vh;
  position: absolute;
  top: 0;
`;

const FilterContainer = css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: end;
  position: absolute;
  width: 100%;
`;

const popupStyle = css`
  padding: 0 0.4rem;
  .popup-muni {
    // text-transform: lowercase;
  }
  h1 {
      font-size: 1.8rem;
  }
  h2 {
    font-size: 1.4rem;
  }
`;

const SearchMap: React.FC = () => {
  const mapRef: any = useRef<mapboxgl.Map | null | undefined>();

  useEffect(() => {
    if (mapRef && mapRef.current) {
      const map = mapRef.current.getMap();

    }
  }, []);

  const [viewport, setViewport] = useState({
    latitude: 42.37722,
    longitude: -71.02446,
    zoom: 8.85,
    transitionDuration: 1000
  });

  const [showPopup, togglePopup] = useState<boolean>(false);
  const [lngLat, setLngLat] = useState<any>();
  const [popupSite, setPopupSite] = useState<any>();

  const [type1, toggleType1] = useState<boolean>(true);
  const [type2, toggleType2] = useState<boolean>(true);
  const [type3, toggleType3] = useState<boolean>(true);
  const [type4, toggleType4] = useState<boolean>(true);
  const [type5, toggleType5] = useState<boolean>(true);

  const [comcast, toggleComcast] = useState<boolean>(true);
  const [netblazr, toggleNetblazr] = useState<boolean>(true);
  const [rcn, toggleRcn] = useState<boolean>(true);
  const [starry, toggleStarry] = useState<boolean>(true);
  

  const handleViewportChange = useCallback(
    (viewport) => setViewport(viewport), [],
  );

  return (
    <div css={mapStyle}>
      <div css={FilterContainer}>
        <Filter 
          type1={type1}
          toggleType1={toggleType1}
          type2={type2}
          toggleType2={toggleType2}
          type3={type3}
          toggleType3={toggleType3}
          type4={type4}
          toggleType4={toggleType4}
          type5={type5}
          toggleType5={toggleType5}
        />
      </div>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        width="100vw"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
        mapStyle="mapbox://styles/ihill/ckzn61agl000c14qjecumnu8o"
        scrollZoom={true}
        onHover={(e) => {          
          if (e.features && e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95")) {
            if (type1 && e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties.cmsbt08_id === "382" || "384") {
              setLngLat(e.lngLat);
              togglePopup(true);
              setPopupSite(e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties);
            } else if (type2 && e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties.cmsbt08_id === "383" || "389") {
              setLngLat(e.lngLat);
              togglePopup(true);
              setPopupSite(e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties);
            } else if (type3 && e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties.cmsbt08_id === "385" || "386") {
              setLngLat(e.lngLat);
              togglePopup(true);
              setPopupSite(e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties);
            } else if (type4 && e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties.cmsbt08_id === "387" || "388") {
              setLngLat(e.lngLat);
              togglePopup(true);
              setPopupSite(e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties);
            } else if (type5 && e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties.cmsbt08_id === "381" || "388") {
              setLngLat(e.lngLat);
              togglePopup(true);
              setPopupSite(e.features.find((row) => row.sourceLayer === "mapc_cmtyp08-bawk95").properties);
            } else {
              togglePopup(false);
            }
          } else {
            togglePopup(false);
          }
        }}
      >
        {popupSite ? 
          showPopup && (
            <Popup
              latitude={lngLat[1]}
              longitude={lngLat[0]}
              closeButton={false}
              onClose={() => togglePopup(false)}
              anchor="top"
            >
              <div css={popupStyle}>
                {popupSite ? 
                <div>
                  <h1 className="popup-muni">{popupSite.TOWN}</h1>
                  <h2>Community Type:<br/>{popupSite.cmtyp08}</h2>
                  <h2>Subtype:<br/>{popupSite.cmsbt08}</h2>
                </div>
                :
                ""}
              </div>
            </Popup>
          )
          : !showPopup 
        }
        <Source id="Types" type="vector" url="mapbox://ihill.7qzqdgfq">
          <Layer
            type="fill"
            id="Inner Core"
            source="Types"
            source-layer="mapc_cmtyp08-bawk95"
            paint={{
              'fill-color': type1 ? [
                'match',
                ['get', 'cmsbt08_id'],
                '382',
                '#002C3D',
                '384',
                '#005F73',
                'hsla(0, 0%, 0%, 0)'
              ] : 'hsla(0, 0%, 0%, 0)',
              'fill-opacity': 0.8
            }}
          />
          <Layer
            type="fill"
            id="Regional Urban Center"
            source="Types"
            source-layer="mapc_cmtyp08-bawk95"
            paint={{
              'fill-color': type2 ? [
                'match',
                ['get', 'cmsbt08_id'],
                '383',
                '#94D2BD',
                '389',
                '#0A9396',
                'hsla(0, 0%, 0%, 0)'
              ] : 'hsla(0, 0%, 0%, 0)',
              'fill-opacity': 0.8
            }}
          />
          <Layer
            type="fill"
            id="Maturing Suburb"
            source="Types"
            source-layer="mapc_cmtyp08-bawk95"
            paint={{
              'fill-color': type3 ? [
                'match',
                ['get', 'cmsbt08_id'],
                '385',
                '#EBBD34',
                '386',
                '#F3D57B',
                'hsla(0, 0%, 0%, 0)'
              ] : 'hsla(0, 0%, 0%, 0)',
              'fill-opacity': 0.8
            }}
          />
          <Layer
            type="fill"
            id="Developing Suburb"
            source="Types"
            source-layer="mapc_cmtyp08-bawk95"
            paint={{
              'fill-color': type4 ? [
                'match',
                ['get', 'cmsbt08_id'],
                '387',
                '#CA6702',
                '388',
                '#E68C31',
                'hsla(0, 0%, 0%, 0)'
              ] : 'hsla(0, 0%, 0%, 0)',
              'fill-opacity': 0.8
            }}
          />
          <Layer
            type="fill"
            id="Rural Town"
            source="Types"
            source-layer="mapc_cmtyp08-bawk95"
            paint={{
              'fill-color': type5 ? [
                'match',
                ['get', 'cmsbt08_id'],
                '381',
                '#EEB1A0',
                'hsla(0, 0%, 0%, 0)'
              ] : 'hsla(0, 0%, 0%, 0)',
              'fill-opacity': 0.8
            }}
          />
        </Source>
        <Source id="Municipalities" type="vector" url="mapbox://ihill.763lks2o">
          <Layer
            type="line"
            id="Municipal highlight"
            source="Municipalities"
            source-layer="MAPC_borders-0im3ea"
            paint={{
              'line-color': "slategray",
              'line-opacity': 0.8
            }}
          />
        </Source>
        <div css={navigationStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    </div>
  );
};

export default SearchMap;
