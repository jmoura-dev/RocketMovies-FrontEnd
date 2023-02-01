import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: "header" "content";
   
    > main {
        overflow: hidden;
        overflow-y: auto;

        grid-area: content;
        padding: 5rem 12.3rem 0;

        ::-webkit-scrollbar{
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            width: .8rem;
        }

        ::-webkit-scrollbar-thumb{
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 1rem;
        }

    }
`;

export const Content = styled.div`
    > header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;

        > h1 {
            font-size: 3.2rem;
            font-weight: 400;
        }
    }
    
`;

export const NewMovie = styled(Link)`
    padding: 1.3rem 3.2rem;
    display: flex;
    align-items: center;
    gap: .8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: .8rem;

    > svg {
        font-size: 2rem;
    }
`;