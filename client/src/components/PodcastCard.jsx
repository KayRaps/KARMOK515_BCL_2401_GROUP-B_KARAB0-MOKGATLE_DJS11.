import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PlayIcon = styled.div`
   padding: 10px;
   border-radius: 50%;
   z-index: 100;
   display: flex;
   align-items: center;
   background: #9000ff !important;
   color: white !important;
   backdrop-filter: blur(4px);
   -webkit-backdrop-filter: blur(4px);
   position: absolute !important;
   top: 45%;
   right: 10%;
   display: none;
   transition: all 0.4s ease-in-out;
   box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: tanslateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0.3);
    filter: brightness(1.3);
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;

const Favorite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;

const CardInformation = styled.div`
   display: flex;
   align-items: flex-end;
   font-weight: 450;
   padding: 14px 0px 0px 0px;
   width: 100%;
`;

const MainInfo = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   justify-content: flex-start;
   gap: 4px;
`;

const Title = styled.div`
   overflow: hidden;
   display: -webkit-box;
   max-width: 100%;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
   color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.div`
   overflow: hidden;
   display: -webkit-box;
   max-width: 100%;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
   color: ${({ theme }) => theme.text_secondary};
   font-size: 12px;
`;

const CreatersInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 8px;
   margin-top: 6px;
`;

const Creator = styled.div`
   display: flex;
   gap: 8px;
   align-items: center;
`;

const CreatorName = styled.div`
   font-size: 12px;
   overflow: hidden;
   white-space: nowrap;
   text-overfloq: ellipsis;
   color: ${({ theme }) => theme.text_secondary};
`;

const Views = styled.div`
   font-size: 10px;
   color: ${({ theme }) => theme.text_secondary};
   width: max-content;
`;

const PodcastCard = () => {
  return (
    <Card>
       <div>
       <Top>
        <Favorite>
          <FavoriteIcon style={{ width: "16px", height: "16px"}} />
        </Favorite>
        <CardImage src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/678a2fd4-c856-4f8f-8d77-35e5f8c5cdba/b9664c31-b383-4887-9d2a-1cae3923ace6.png" />
      </Top>
      <CardInformation>
        <MainInfo>
          <Title>The Tim Ferriss Show</Title>
          <Description>
            {" "}
            The Tim Ferriss Show is a highly acclaimed podcast hosted by Tim
            Ferriss, a renowned entrepreneur, author, and public speaker. The
            show is celebrated for its in-depth interviews with high-achieving
            individuals across various fields, aiming to uncover the routines,
            habits, and strategies that contribute to their success.
          </Description>
          <CreatersInfo>
            <Creator>
              <Avatar style={{ height: "26px" }}>R</Avatar>
              <CreatorName>Rishav</CreatorName>
            </Creator>
            <Views>• 12 views</Views>
          </CreatersInfo>
        </MainInfo>
      </CardInformation>
       </div>
       <PlayIcon>
         {"video" === "video" ? (
            <PlayArrowIcon style={{ width: "28px", height: "28px" }} />
         ) : (
            <HeadphonesIcon style={{ width: "28px", height: "28px" }} />   
         )}
       </PlayIcon>
    </Card>
  );

};

export default PodcastCard;
