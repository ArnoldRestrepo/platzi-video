import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/components/playlist'
import data from './src/api.json'
// Importamos dependencias de React

const app = document.getElementById('app');
// Referenciamos un elemento con ID app

// Insertamos en una constante lo que queremos renderizar

// Le decimos a ReactDOM que renderizar y donde renderizar
render(<Playlist data={data}/>, app);
