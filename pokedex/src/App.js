import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './App.css';

import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

import {Edit, Delete} from '@material-ui/icons';

const apiUrl = `http://localhost:3000/api/v1/pokemons/`;

function App() {
  const [data, setData] = useState([]);
  
  const [modalAdd, setModalAdd] = useState(false);

  const request = async() => {
    await axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        console.log(response);
      });
  }

  const openCloseModal = () => setModalAdd(!modalAdd);

  useEffect(() => {
    async function fetchData() {
      const response = await request();
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Type 1</TableCell>
                  <TableCell>Type 2</TableCell>
                  <TableCell>Generation</TableCell>
                  <TableCell>Legendary</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {data.map(pokemon => (
                    <TableRow>
                      <TableCell>{pokemon}</TableCell>
                      <TableCell>{pokemon.name}</TableCell>
                      <TableCell>{pokemon.type1}</TableCell>
                      <TableCell>{pokemon.type2}</TableCell>
                      <TableCell>{pokemon.generation}</TableCell>
                      <TableCell>{pokemon.legendary}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
