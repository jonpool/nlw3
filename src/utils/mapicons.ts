import Leaflet from 'leaflet';
import mapMarkerImg from '../images/mapMark.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [40, 40],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default mapIcon;