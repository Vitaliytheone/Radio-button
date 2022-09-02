import Radio from "./component/radio";
import styled from "styled-components";

const Label = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin: 16px 0 8px 0;
`;

function App() {
    return (
        <>
            <Label>Radio left variant</Label>
            <Radio label="checkbox 1" />
            <Label>Radio right variant</Label>
            <Radio label="checkbox 2" />
        </>
    );
}

export default App;
