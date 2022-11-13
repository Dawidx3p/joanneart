import Masonry from "@mui/lab/Masonry";
import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import MediaCard from "../../components/Card";
import ResponsiveAppBar from "../../components/MUI/AppBar";
import BasicCard from "../../components/MUI/BasicCard";
import DemoPosts2 from "../../components/MUI/DemoPosts2";
import styles from '../../styles/Home.module.scss';
import { data, lastPosts } from '../../utils/data';

export default function Obrazy(){
    return (
        <>
            <Head>
                <title>Murale Joanneart</title>
                <meta name="description" content="Strona na której dziele się z innymi swoją pasją" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ResponsiveAppBar />
            <Container>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item md={8}>
                        <BasicCard text="To przestrzeń,którą mam w sobie od zawsze, ale od niedawna mogę ją ponownie w sobie odkrywać w wielu odsłonach. Maluję murale ścienne, tak baśniowe,jak i stylowe,wedle indywidualnych projektów, obrazy na płótnie, drewnie i kobiece Anioły z intencją. "/>
                        <Masonry mt={2} columns={1} spacing={2}>
                            {data.filter(article => article.type==='Obrazy').map((article, id) => <MediaCard 
                            img={article.img}
                            key={id} 
                            description={article.description}
                            url={article.url}
                            title={article.title} 
                            date={article.date}/>)}
                        </Masonry>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h5" sx={{marginTop: '1rem'}} gutterBottom>Najnowsze posty</Typography>
                        <DemoPosts2 images={lastPosts}/>
                    </Grid>
                </Grid>
            </Container>
            
        </>
    )
}