import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../models/Postagem";
import { buscaId, deleteId } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './DeletarPostagem.css';

function DeletarPostagem() {
  let history = useNavigate();
  const { id } = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens);
  const [post, setPosts] = useState<Postagem>()

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
      buscaId(`/postagens/${id}`, setPosts, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
          history('/postagens')
          deleteId(`/postagens/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          toast.success('Postagem deletada com sucesso', {
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
          history('/postagens')
        }
return (
  <>
    <Box m={2}>
      <Card variant="outlined" className="card-post-del">
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom className="texto-post-del">
              Deseja deletar a Postagem:
            </Typography>
            <Typography color="textSecondary" className="texto-post-del">
            {post?.titulo}
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button onClick={sim} variant="contained" className="btn-sim-post" size='large' color="primary">
              Sim
            </Button>
            </Box>
            <Box>
            <Button  onClick={nao} variant="contained" className="btn-nao-post" size='large' color="secondary">
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
export default DeletarPostagem;