import styles from '../../styles/Home.module.scss';
import React, { useState } from 'react'
import { Button, Grid, ImageList, ImageListItem } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

export default function Gallery({gallery, clicked, close}){
    const [active, setActive] = useState(clicked);
    const [mouseOnElement, setMouseOnElement] = useState(false);
    return(
        <div className={styles.gallery} onClick={() => !mouseOnElement && close()}>
            <nav className='top'>
                <Button variant="contained" color="error" sx={{position: 'absolute', margin: '0.5rem'}} onClick={() => close()}>X</Button>
            </nav>
                <Grid container spacing={2} >
                    <Grid item xs={10} sx={{margin: '1.3rem 0', display: 'grid', justifyItems: 'center'}}>
                    <img 
                        src={active} 
                        alt="viewed" 
                        className={styles.viewed}
                        onMouseOver={() => setMouseOnElement(true)}
                        onMouseLeave={() => setMouseOnElement(false)}/>
                    </Grid>
                    <Grid item xs={2}>
                        <ImageList cols={1} gap={8} sx={{height: '100vh', overflow: "scroll"}}>
                            {gallery.map((photo, key) => <ImageListItem key={key}><img alt={`pic from gallery number ${key}`} className={photo===active ? 'active' : null} src={photo} onMouseOver={() => setMouseOnElement(true)}
                        onMouseLeave={() => setMouseOnElement(false)} onClick={() => setActive(photo)}/></ImageListItem>)}
                        </ImageList>
                    </Grid>
                </Grid>
        </div>
    )
}