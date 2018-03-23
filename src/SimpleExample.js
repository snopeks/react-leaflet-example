import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'
const { BaseLayer, Overlay } = LayersControl

export default class LayersControlExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.buttonClick = this.buttonClick.bind(this);
    this.mapClick = this.mapClick.bind(this);
  }

  buttonClick(){
    let lat = 49.28
    let lng = -123.12
    this.props.onChange(lat, lng);

  }
  mapClick(e){
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    this.props.onChange(lat, lng)

  }
  render() {
    const rectangle = [[51.49, -0.08], [51.5, -0.06]]

    return (
      <div>
      <Map center={this.props.location} zoom={13} onClick={this.mapClick}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RlcGhzbm9wZWsiLCJhIjoiY2plaGg1OXY4MGF0NjJ3bmxwNXZiY3VoayJ9.nDLlDzAz5UZYZH0I5SYSpA"
            />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="Mapbox.Run-Bike-Hike">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://api.tiles.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3RlcGhzbm9wZWsiLCJhIjoiY2plaGg1OXY4MGF0NjJ3bmxwNXZiY3VoayJ9.nDLlDzAz5UZYZH0I5SYSpA"
            />
          </BaseLayer>
          <Overlay name="Marker with popup">
          <LayerGroup>
            <Marker position={this.props.location}>
              <Popup>
                <span>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </span>
              </Popup>
            </Marker>
            <Marker position={[52.3702, 4.8952]}>
              <Popup>
                <span>
                  Amsterdam! <br/> A great city to visit.
                </span>
              </Popup>
            </Marker>
            <Marker position={[48.8566, 2.3522]}>
              <Popup>
                <span>
                  Paris! <br/> Literally my fav.
                </span>
              </Popup>
            </Marker>
            <Marker position={[15.8720, -97.0767]}>
              <Popup>
                <span>
                  Puerto Escondido! <br/> Where our fil and sara live.
                </span>
              </Popup>
            </Marker>
            </LayerGroup>
          </Overlay>
          <Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle center={this.props.location} fillColor="blue" radius={200} />
              <Circle
                center={this.props.location}
                fillColor="red"
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  color="green"
                  fillColor="green"
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </Overlay>
          <Overlay name="Feature group">
            <FeatureGroup color="purple">
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </Overlay>
        </LayersControl>
      </Map>
      <button onClick={this.buttonClick}>Go to Vancouver!</button>
      </div>
    )
  }
}