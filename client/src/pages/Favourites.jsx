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
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
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