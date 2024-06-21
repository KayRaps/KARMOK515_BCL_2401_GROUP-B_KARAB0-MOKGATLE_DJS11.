import React from "react";
import PodcastCard from "../components/PodcastCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow:-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Topic = styled.div``;
const FavouriteContainer = styled.div``;

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