/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import { createStyles, makeStyles, useTheme } from "@mui/styles";
import {
    Box,
    Container,
    CssBaseline,
    Link,
    Theme,
    Typography,
    useMediaQuery,
} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            height: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -60,
            "& >*": {
                marginTop: theme.spacing(1),
                fontFamily: '"Roboto", "Noto Sans SC", sans-serif',
            },
        },
        title: {
            marginTop: theme.spacing(4),
        },
        avatar: {
            borderRadius: "50%",
            width: 280,
            height: 280,
        },
    })
);

export default function Home() {
    const classes = useStyles();
    const theme = useTheme<Theme>();
    const isMobileSize = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            <Head>
                <title>{"造物主によるの个人主页"}</title>
                <meta
                    name={"description"}
                    content={"造物主による二改AHdark（"}
                />
                <link rel="preload" href="/avatar.png" as="image" />
                <link rel="prefetch" href="//stat.ahdark.com" />
            </Head>

            <CssBaseline />
            <Container maxWidth={"lg"} fixed={true}>
                <Box className={classes.main}>
                    <img
                        src={"/avatar.png"}
                        alt="造物主による"
                        className={classes.avatar}
                    />
                    <Typography
                        variant={"h3"}
                        component={"h1"}
                        className={classes.title}
                        align={"center"}
                    >
                        {"我是造物主による"}
                    </Typography>
                    <Typography
                        variant={"body1"}
                        component={"p"}
                        align={"center"}
                    >
                        {
                            "氢氧根离子！"
                        }
                    </Typography>
                    <Typography
                        variant={"body1"}
                        component={"p"}
                        align={"center"}
                        fontWeight={"bold"}
                    >
                        {"你好\(@^0^@)/"}
                        <span style={{ color: "#FF0000" }}>
                            {"欢迎来到这个简陋的个人主页"}
                        </span>
                        {"（（（"}
                    </Typography>
                    <Typography
                        variant={"body1"}
                        component={"p"}
                        align={"center"}
                    >
                        {
                            "I'm mentally retarded and I like sucking other people's dicks."
                        }
                    </Typography>
                </Box>
                <Box component={"footer"} textAlign={"center"}>
                    <Link
                        href={"https://github.com/zhk-sb/zhk"}
                        rel={"noopener"}
                        underline={"none"}
                        color={"inherit"}
                    >
                        <img
                            src={
                                "https://img.shields.io/github/stars/zhk-sb/zhk?style=social"
                            }
                            style={{ height: 20, width: 76 }}
                            alt={"stars"}
                        />
                    </Link>
                    <Typography variant={"body2"} component={"p"}>
                        {"Copyright © 2022 "}
                        <Link
                            href={"https://ahdark.com"}
                            fontFamily={'"Noto Sans SC", sans-serif'}
                            underline={"none"}
                            rel={"self noopener"}
                            target={"_blank"}
                        >
                            {"AHdark"}
                        </Link>
                        {" All Right Reserved."}
                    </Typography>
                </Box>
            </Container>
        </>
    );
}
