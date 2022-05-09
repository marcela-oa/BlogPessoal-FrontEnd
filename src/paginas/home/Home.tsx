import React, { useEffect } from "react";
import { Box, Button , Grid , Typography } from '@material-ui/core';
import './Home.css';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function Home(){

    let history = useNavigate();

    const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens);
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history("/login")
  
      }
    }, [token])

    return(
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6} className='item' justifyContent="center" >
                    <Box paddingX={20} justifyContent='center'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo-home">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo-home">Vamos falar sobre vegetarianismo e veganismo com consciência e respeito à todes ❤</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/postagens">
                            <Button variant="outlined" className="botao-home">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} className='item' justifyContent="center">
                    <img src="https://i.imgur.com/jGLo2Y6.gif" alt="animais" className="imagem-home"/>
                </Grid>
                <Grid xs={12} alignItems='flex-end' className="postagem"> 
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;