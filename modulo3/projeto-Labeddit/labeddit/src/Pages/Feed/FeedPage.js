import React from 'react';
import { FeedContainer, ButtonDiv } from './Styled';
import { TextField, Button } from '@mui/material';



export const FeedPage = () => {
    return (

        <FeedContainer>
            <h1>feed</h1>
            <TextField
                id="filled-multiline-static"
                label="Multiline"
                multiline
                rows={5}
                defaultValue="Default Value"
                variant="filled">
            </TextField>
            <ButtonDiv>
                <Button type={'submit'} variant={'contained'} color={'primary'} > Postar </Button>
            </ButtonDiv>
        </FeedContainer>

    );
}


export default FeedPage