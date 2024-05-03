import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import LightningBoltIcon from "@mui/icons-material/FlashOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import logo from '../asset/logo.jpeg'
import JobDiscription from "./JobDiscription";


const JobCard2 = (props) => {



    //Calculate Salary
    const getSalary = (minSalary, maxSalary, currencyCode) => {
        if (minSalary === null && maxSalary === null) {
            return "NA";
        } else if (minSalary === null) {
            return `${maxSalary}k ${currencyCode}`;
        } else if (maxSalary === null) {
            return `${minSalary}k ${currencyCode}`;
        } else if (minSalary === maxSalary) {
            return `${minSalary}k ${currencyCode}`;
        } else {
            return `${minSalary}k to ${maxSalary}k ${currencyCode}`;
        }
    };

    //calculate experience
    const getExperience = (minExp, maxExp) => {
        if (minExp === null && maxExp === null) {
            return "0 years";
        } else if (minExp === maxExp) {
            return `${minExp} years`;
        } else if (minExp === null) {
            return `0 to ${maxExp} years`;
        } else if (maxExp === null) {
            return `${minExp} to 0 years`;
        } else {
            return `${minExp} to ${maxExp} years`;
        }
    };

    // const jobDetailsPreview = `${data?.jobDetailsFromCompany.substring(0, 300)}...`;

    return (
        <div style={{ padding: '30px' }}>


            <Card className="cardDiv" >
                <CardContent>
                    <a
                        href={props?.item?.jdLink}
                        target=""
                        rel="https://weekday.works"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <img
                                src={logo}
                                alt="logo"
                                style={{ marginRight: "10px", height: "40px", width: "40px" }}
                            />
                        </div>
                        <div>
                            <Typography variant="h6" style={a}>
                                Weekday
                            </Typography>
                            <Typography variant="subtitle1" component="div" style={a}>
                                {props?.item?.jobRole}
                            </Typography>
                        </div>
                    </a>
                    <Typography
                        variant="subtitle2"
                        style={{ color: "grey", marginLeft: 60 }}
                    >
                        {props?.item?.location}

                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "grey",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        Estimated Salary:{" "}
                        {getSalary(props?.item?.minJdSalary,
                            props?.item?.maxJdSalary,
                            props?.item?.salaryCurrencyCode
                        )}
                        <CheckCircleIcon style={{ color: "green", marginLeft: 5, fontSize: "17px" }} />
                    </Typography>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                        About Company
                    </Typography>
                    <Typography variant="body2">
                        <JobDiscription text={props?.item?.jobDetailsFromCompany} />
                        {/* {} */}
                    </Typography>
                    {/* <CardActions disableSpacing>

                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <Typography
                                style={CenteredButton}
                            >
                                View more
                            </Typography>
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>


                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>

                        </CardContent>
                    </Collapse> */}



                    <Typography variant="subtitle2" style={{ color: "grey" }}>
                        Required Experience: {getExperience(props?.item?.minExp, props?.item?.maxExp)}
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<LightningBoltIcon />}
                        style={StyledButton}
                    >
                        Easy Apply
                    </Button>
                    <Button variant="contained" style={UnlockButton}>
                        Unlock Referral Asks
                    </Button>
                </CardContent>
            </Card>


        </div>
    )
}

export default JobCard2




const StyledButton = {
    backgroundColor: "#54efc3",
    borderRadius: 10,
    color: "black",
    padding: 8,
    marginTop: 8,
    textAlign: "center",
    width: "100%",
    textTransform: "none",
};

const UnlockButton = {
    backgroundColor: "#4943da",
    color: "white",
    padding: 8,
    borderRadius: 10,
    textAlign: "center",
    width: "100%",
    textTransform: "none",
    marginTop: "5%",
};


const a = {
    fontWeight: "1rem",
    color: "black",
    cursor: "pointer",

};