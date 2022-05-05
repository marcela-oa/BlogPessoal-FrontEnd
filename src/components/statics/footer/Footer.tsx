import { Box, Grid, Typography } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import './Footer.css';
import React from "react";

function Footer() {
    return (
        <>
         <Grid container direction="row" justifyContent="center" alignItems="flex-end" className="footer">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos-ft">Me siga nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                            <a href="https://github.com/marcela-oa" target="_blank">
                                <InstagramIcon  className="redes" />
                            </a>
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/marcela-oliveira-2056551b7/" target="_blank">
                                <LinkedInIcon  className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos-ft" >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className="textos-ft" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;