import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css';

function Navbar() {
    
    const[token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout(){
        setToken("")
        alert("Usuário deslogado")
        history('/login')
    }

    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar variant="dense">
                    <Box className="cursor" marginRight={2}>
                        <Typography variant="h5" color="inherit" className="nome">
                            Blog Pessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="textos-nav">
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagens" className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="textos-nav">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="textos-nav">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decoration-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" className="textos-nav">
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                            <Box mx={1} className="cursor" onClick={goLogout} >
                                <Typography variant="h6" color="inherit" className="textos-nav">
                                    logout
                                </Typography>
                            </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;