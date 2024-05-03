import React, { useState } from 'react'
import { Card, CardContent, Typography, Button, Skeleton } from "@mui/material";
import LightningBoltIcon from "@mui/icons-material/FlashOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import logo from '../asset/logo.jpeg'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    marginTop: 0,
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const JobDiscription = (props) => {


    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const MAX_VISIBLE_CHARACTERS = 100;
    const BLURRED_CHARACTERS = 60;
    const characters = props?.text?.split('');
    const visibleText = characters.slice(0, MAX_VISIBLE_CHARACTERS).join('');
    const blurredText = characters.slice(MAX_VISIBLE_CHARACTERS, MAX_VISIBLE_CHARACTERS + BLURRED_CHARACTERS).join('');
    const remainingText = characters.slice(MAX_VISIBLE_CHARACTERS,).join('');

    return (
        <div>
            {(props?.text?.length <= MAX_VISIBLE_CHARACTERS) ?
                (props?.text) :
                <>
                    {!expanded && <>{visibleText}</>}
                    {!expanded && <span style={{ color: 'rgba(0,0,0,0.2)', textShadow: '0 0 5px rgba(0,0,0,0.2)' }}>{blurredText}</span>}
                    {/* {props?.text?.substring(MAX_VISIBLE_CHARACTERS + BLURRED_CHARACTERS)} */}
                    {expanded && <>{props?.text}</>}
                    <CardActions disableSpacing>

                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <Typography
                                style={CenteredButton}
                            >
                                {expanded ? <> View less</> : <> View more</>}

                            </Typography>
                        </ExpandMore>
                    </CardActions>

                </>
            }
        </div>
    )
}

export default JobDiscription


const CenteredButton = {
    display: "flex",
    margin: "0 auto",
    justifyContex: "center",

    backgroundColor: "transparent",
    border: "0px",
    textTransform: "none",
};