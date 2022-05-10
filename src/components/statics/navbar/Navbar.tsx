import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './Navbar.css';


function Navbar() {

    const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens);

    let history = useNavigate();

    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(""));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        history('/login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent =
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
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;