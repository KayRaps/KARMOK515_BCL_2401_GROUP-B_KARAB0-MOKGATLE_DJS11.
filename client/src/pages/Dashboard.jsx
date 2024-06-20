import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
}
`;
const FilterContainer = styled.div``;
const Topic = styled.div``;
const Span = styled.div``;
const Podcasts = styled.div``;

const Dashboard = () => {
    return <DashboardMain>
        <FilterContainer>
            <Topic>
                Most Popular
                <Link>
                  <Span>Show All</Span>
                </Link>   
            </Topic>
            <Podcasts>Hey</Podcasts>
        </FilterContainer>
    </DashboardMain>;
};

export default Dashboard;