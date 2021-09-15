import React, { useEffect, useState } from "react";
import styled from "styled-components";

const App = () => {
    const [SPN1761, setSPN1761] = useState("");

    useEffect(() => {
        const url = "http://10.3.1.194:8081/api/tutorials";

        const fetchData = async () => {


         
                const response = await fetch(url);
                const json = await response.json();
                         console.log(json.SPN1761);

                setSPN1761(json.SPN1761);
    
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <Paragraph>{SPN1761}</Paragraph>
        </Wrapper>
    );
};

export default App;

const Wrapper = styled.div`
    padding-top: 150px;
    margin: 0 auto;
`;

const Paragraph = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
`;