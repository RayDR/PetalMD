import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './App.css';
import { TheatersRounded } from '@material-ui/icons';

import {makeStyles} from '@material-ui/core/styles';
import {Modal, Button, TextField} from '@material-ui/core';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';

const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=151`;

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
      <Button>Add</Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type 1</TableCell>
              <TableCell>Type 2</TableCell>
              <TableCell>Generation</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(pokemon=>(
              <TableRow key={pokemon.id}>
                <TableCell></TableCell>
                <TableCell>{pokemon.name}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Edit/>
                  <Delete/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal> </Modal>
    </div>
  );
}

export default App;
