import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {

  
  const [postagens, setPostagens] = useState<Postagem[]>([])
  
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );
  let history = useNavigate();

  useEffect(() => {
    if(token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
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
      <Box m={2}>
        <Card variant="outlined" className='card-post'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom className='textos-post'>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2" className='titulo-post'>
              {postagem.titulo}
            </Typography>
            <Typography variant="body2" component="p" className='textos-post'>
              {postagem.texto}
            </Typography>
            <Typography variant="body2" component="p" className='textos-post'>
              {postagem.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft, btn-atual" size='small' color="primary">
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary" className='btn-del'>
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