import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json'
// Importamos dependencias de React

const homeContainer = document.getElementById('home-container');
// Referenciamos un elemento con ID app

// Insertamos en una constante lo que queremos renderizar

// Le decimos a ReactDOM que renderizar y donde renderizar
render(<Home data={data}/>, homeContainer);
