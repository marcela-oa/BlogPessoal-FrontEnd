import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../service/Service';

function ListaPostagem() {

  
  const [postagens, setPostagens] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useNavigate();

  useEffect(() => {
    if(token == "") {
      alert("Você precisa estar logado.")
      history("/login")
    }
  }, [token])

  async function getPostagem() {
    await busca("/postagens/all", setPostagens, {
      headers: {
        'Authorization': token
      }
    })  
  }

  useEffect(() => {
    getPostagem()
  }, [postagens.length])

  return (
    <>
    {postagens.map(postagem =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              Título
            </Typography>
            <Typography variant="body2" component="p">
              Texto da Postagem
            </Typography>
            <Typography variant="body2" component="p">
              Tema
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    ))}
    </>
    )
}

export default ListaPostagem;