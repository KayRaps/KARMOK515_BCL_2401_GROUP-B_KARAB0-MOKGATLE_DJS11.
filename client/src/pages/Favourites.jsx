import React from "react";
import PodcastCard from "../components/PodcastCard";
import styled from "styled-components";



const Favourites = () => {
    return <Container>
        <Topic>Favourites</Topic>
        <FavouriteContainer>
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
        </FavouriteContainer>
    </Container>;
};

export default Favourites;