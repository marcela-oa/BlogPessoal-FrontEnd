import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='barra'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" className='titulo-barra' />
            <Tab label="Sobre mim" value="2" className='titulo-barra' />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify"> Sou a Marcela, tenho 23 anos e sou vegetariana há 5 anos. 
          Motivada principalmente pelos impactos ambientais da produção de carne, mas também comovida pela causa animal, 
          sem especismo e crueldades. Sou formada em gestão ambiental com o um projeto de formatura sobre as reduções do 
          impacto ambiental e das mudanças climáticas de reduzir o consumo e, consequentemente, a produção de carne. 
          Criei esse blog para trazer mais informações sobre esse assunto. Espero que gostem! </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;