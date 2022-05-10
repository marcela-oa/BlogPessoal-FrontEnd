import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Tema from "../../../models/Tema";
import { buscaId, deleteId } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './DeletarTema.css';

function DeletarTema() {
  let history = useNavigate();
  const { id } = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens);
  const [tema, setTema] = useState<Tema>()

  useEffect(() => {
      if (token == "") {
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

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/temas/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
          history('/temas')
          deleteId(`/temas/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          toast.success('Tema deletado com sucesso', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        }
      
        function nao() {
          history('/temas')
        }
        
return (
  <>
    <Box m={2}>
      <Card variant="outlined">
        <CardContent className="card-tema-del">
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom className="texto-tema-del">
              Deseja deletar o Tema:
            </Typography>
            <Typography color="textSecondary" className="texto-tema-del">
              {tema?.descricao}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
              <Button onClick={sim} variant="contained" className="btn-sim" size='large' color="primary"> 
                Sim
              </Button>
            </Box>
            <Box mx={2}>
              <Button  onClick={nao} variant="contained" className="btn-nao" size='large' color="secondary">
                Não
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  </>
);
}
export default DeletarTema;