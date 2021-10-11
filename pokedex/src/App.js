import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import {Edit, Delete} from '@material-ui/icons';

const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=50`;

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #333',
    boxShadow: theme.spacing(2,4,3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  icons: {
    cursor: 'pointer'
  },
  inputMaterial: {
    width: '100%'
  }
}))

function App() {
  const style = useStyles();
  const [data, setData] = useState([]);
  
  const [modalAdd, setModalAdd] = useState(false);

  const pokedexColumns = [
    { field: 'id', headerName: '#', width: 10 },
    { field: 'name', headerName: 'Pokemon Name', width: 50 },
    { field: 'type1', headerName: 'Type 1', width: 50 },
  ];

  const request = async() => {
    await axios
      .get(apiUrl)
      .then(response => {
        setData(response.data.results);
      });
  }

  const openCloseModal = () => setModalAdd(!modalAdd);

  useEffect(() => {
    request();
  }, []);

  return (
    <div className="App">
    <DataGrid
      rows={data.results}
      columns={pokedexColumns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
    </div>
  );
}

export default App;
