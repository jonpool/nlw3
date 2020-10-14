import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/mapMark.svg';

import '../styles/pages/orphanagesMap.css'

function orphanagesMap(){
    return (
      <div id="page-map">
        <aside>
          <header>
            <img src ={mapMarkerImg} alt="Happy"/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :</p>
          </header>

          <footer>
            <strong>Belo Horizonte</strong>
            <span>Minas Gerais</span>
          </footer>
        </aside>

        <Map
          center={[-19.9112661,-43.9260059]}
          zoom={12.58}
          style={{width:'100%',height:'100%'}}
        >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/></Map>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#fff"/>
        </Link>
      </div>
    )
}

export default orphanagesMap;