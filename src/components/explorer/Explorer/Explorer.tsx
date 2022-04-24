import React, { FC, useState, useEffect, useRef } from 'react'
import { Flex } from '@chakra-ui/layout'
import { Select, Text } from '@chakra-ui/react'
import GoogleMapReact from 'google-map-react';
import { useRouter } from 'next/router';
import Loader from '../../elements/Loader/Loader';
import Toolbar from '../../elements/Toolbar/Toolbar';
import Sticky from 'react-stickynode';
import EntityMarker from '../markers/EntityMarker/EntityMarker';
import geohash  from "ngeohash";


const Explorer: FC<{ entities:any, entitiesLoading:any, entitiesError:any, locationView:any, setLocationView:any }> = ({entities, entitiesLoading, entitiesError, locationView, setLocationView}) => {
    const router = useRouter()


      //@ts-ignore
      const [defaultCenter, setDefaultCenter] = useState( !isNaN(router.query.lat) && !isNaN(router.query.lng) ? {lat: parseFloat(router.query.lat), lng: parseFloat(router.query.lng)} : {lat: 53.3473, lng: -8.5177 })
      //@ts-ignore
      const [defaultZoom, setDefaultZoom] = useState( !isNaN(router.query.zoom) ? parseFloat(router.query.zoom) : 7 )
      const [bounds, setBounds] = useState(["-11.912502517114433", "55.652856572754644", "-3.475002517114433", "50.47854874237234"]);
      const [zoom, setZoom] = useState(defaultZoom);
      const [mapX, setMapX] = React.useState();

      const [selectedLayer, setSelectedLayer] = useState(0);

    const onBoundsChange = ({center, zoom, bounds, marginBounds}: {center:any, zoom:any, bounds:any, marginBounds:any}) => {
        // window.history.replaceState(window.history.state, "", `${location}?lat=${center.lat}&lng=${center.lng}&zoom=${zoom}`);
        setDefaultZoom(zoom)
        console.log(defaultZoom)
        setLocationView({
        topLeftLat: marginBounds.nw.lat,
        topLeftLng: marginBounds.nw.lng,
        bottomRightLat: marginBounds.se.lat,
        bottomRightLng: marginBounds.se.lng
        })
        console.log(locationView)
        setBounds([
        bounds.nw.lng,
        bounds.se.lat,
        bounds.se.lng,
        bounds.nw.lat
        ]);
        console.log(bounds)
        setZoom(zoom);
        console.log(zoom)
        // refetch()
    }
    
    // useEffect(() => {
    // refetch();
    // }, [router.query])

    const mapRef = useRef();

    const panToX = (lat:any, lng:any) => {
        //@ts-ignore
        mapRef.current.panTo({lat: lat, lng: lng})
    }

    const zoomToX = (zoom:any) => {
        //@ts-ignore
        mapRef.current.setZoom(zoom);
    }

    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    const createMapOptions = (maps:any) => {
    return {
        zoomControlOptions: {
          position: maps.ControlPosition.RIGHT_CENTER,
          style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
          position: maps.ControlPosition.TOP_RIGHT
        },
        panControl: false,
        mapTypeControl: false,
        scrollwheel: true,
        fullscreenControl: false,
        gestureHandling: "greedy",
        // styles: [{ stylers: [{ 'saturation': 0 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
        styles: [
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "weight": 1
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.medical",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.school",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
      };
    }

  

    const handleApiLoaded = (map:any, maps:any) => {
        setMapX(map)
      };

  return (
    <>
    <Sticky top={0} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
            left={
                <>
                <div>
                {selectedLayer == 0 && <Text fontSize='18px' color='#7F81D5' as="em">Treasures Layer</Text>}
                <div style={{maxWidth: "100px", marginLeft: 10}}>
                    <Select 
                      bg='#7F81D5'
                      borderColor='#7F81D5'
                      color='white'
                      onChange={() => {
                          //@ts-ignore
                        setSelectedLayer(event.target.value)
                      }}
                      value={selectedLayer}
                     >
                    <option value='0'>Layer 0</option>
                    <option value='1'>Layer 1</option>
                    <option value='2'>Layer 3</option>
                    </Select>
                </div>
                </div>
                </>
            }
            right={
            <div style={{display: "flex"}}>

            </div>
            }
        />
     </Sticky>
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDrfIxc7TnW18YWxztaqmbr6WHY0VCPhlQ" }}
          onChange={onBoundsChange}
        //   bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY}}
          defaultCenter={defaultCenter}
          center={defaultCenter}
          zoom={defaultZoom}
          options={createMapOptions}
          onGoogleApiLoaded={({ map, maps }) => {
            handleApiLoaded(map, maps);
            mapRef.current = map;
          }}     
          yesIWantToUseGoogleMapApiInternals
          //@ts-ignore
        //   ref={mapRef}
        >
          {!entitiesLoading && !entitiesError && entities.esChests.map((entity, index) => {
              const locationX = geohash.decode(entity.geohash)
            return(
              <EntityMarker
              key={index}
              //@ts-ignore
              lat={locationX.latitude}
              lng={locationX.longitude}
              ipfsUrl="bafkreih4fbkdsckv4ze6ww4e44sd6xdcl7bp7w3p7ccbmgxibcaolera2q"
            />
            )
          })}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default Explorer;