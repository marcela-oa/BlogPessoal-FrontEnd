import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Usuario from "../../models/Usuario";
import { cadastroUsuario } from "../../service/Service";
import './CadastroUsuario.css';

function CadastroUsuario() {

    let history = useNavigate()

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    const [userResult, setUserResult] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

       //evita efeitos colaterais e confirma se o cadastro foi correto                                                                                                     
    useEffect(() => {                                                                                    
        if (userResult.id !== 0) {
            history("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() //evita que a página seja recarregada

        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
                 await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                 toast.success('Usuario cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro ao cadastrar o Usuário', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            toast.error('Dados inconsistentes. Verifique as informações de cadastro.', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setUser({ ...user, senha: "" }) 
            setConfirmarSenha("")           
        }
    }

    return(
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align="center" className="textos-cad">Cadastrar</Typography>
                        <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome' label='nome' variant='outlined'
                            name='nome' margin='normal' fullWidth 
                            placeholder='Insira seu nome'
                            required />

                        <TextField
                            value={user.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto' label='foto' variant='outlined'
                            name='foto' margin='normal' fullWidth 
                            placeholder='Insira um link de foto'
                             />

                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario' label='usuario' variant='outlined'
                            name='usuario' margin='normal' fullWidth 
                            placeholder='Insira um email válido'
                            required />

                        <TextField
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' label='senha' variant='outlined'
                            name='senha' margin='normal' type='password' fullWidth 
                            placeholder='Insira no mínimo 8 caracteres'
                            required />

                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha' label='confirmarSenha' variant='outlined'
                            name='confirmarSenha' margin='normal' type='password' fullWidth 
                            placeholder='Insira novamente a senha'
                            required />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none, btnCancelar'>
                                <Button variant='contained' color='secondary' className="cancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant='contained' color='primary' className="cadastrar">
                                Cadastrar
                            </Button>
                        </Box> 
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;