import { Button, Grid } from "@mui/material";
import React from "react";
import { Wrapper } from "./Wrapper";

export function Header1({ hData }) {
    const style = {
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "80vh",
        backgroundColor: "rgba(250, 250, 250, 0.5)",

        backgroundImage: `url(${hData.imgUrl ? hData.imgUrl : null})`,
    };
    return (
        <div style={style}>
            <Wrapper total={hData.wrOpts.main} index={0}>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        style={{ padding: 40, justifyContent: "center", alignContent: "center", minHeight: "100%" }}
                    >
                        <Wrapper total={hData.wrOpts.header} index={0}>
                            <h1 style={{ fontSize: 40 }}>{hData.title}</h1>
                        </Wrapper>
                        <p style={{ fontSize: 30 }}>{hData.subtitle}</p>
                    </Grid>
                    {hData.button && hData.button.isEnabled && (
                        <Grid
                            item
                            xs={12}
                            style={{ padding: 40, justifyContent: "center", alignContent: "center", minHeight: "100%" }}
                        >
                            <Button variant="contained" color="secondary">
                                {hData.button.text}
                            </Button>
                        </Grid>
                    )}
                </Grid>
                {/* <span> */}

                {/* </span> */}
                {/* <pre>{JSON.stringify(hData, null, 5)}</pre> */}
            </Wrapper>
        </div>
    );
}

export function Header2({ hData }) {
    const style = {
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "80vh",
        backgroundColor: "rgba(250, 250, 250, 0.5)",

        backgroundImage: `url(${hData.imgUrl ? hData.imgUrl : null})`,
    };
    return (
        <div style={style}>
            <Wrapper total={hData.wrOpts.main} index={0}>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={7}
                        style={{ padding: 40, justifyContent: "center", alignContent: "center", minHeight: "100%" }}
                    >
                        <Wrapper total={hData.wrOpts.header} index={0}>
                            <h1 style={{ fontSize: 40 }}>{hData.title}</h1>
                        </Wrapper>
                        <p style={{ fontSize: 30 }}>{hData.subtitle}</p>
                    </Grid>
                    {hData.button && hData.button.isEnabled && (
                        <Grid
                            item
                            xs={5}
                            style={{ padding: 40, justifyContent: "center", alignContent: "center", minHeight: "100%" }}
                        >
                            <Button variant="contained" color="secondary">
                                {hData.button.text}
                            </Button>
                        </Grid>
                    )}
                </Grid>
                {/* <span> */}

                {/* </span> */}
                {/* <pre>{JSON.stringify(hData, null, 5)}</pre> */}
            </Wrapper>
        </div>
    );
}
