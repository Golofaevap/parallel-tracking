import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
    const router = useRouter();
    const [content, setContent] = useState("safe");
    useEffect(() => {
        if (router.query.clickId) {
            localStorage.setItem("clickId", router.query.clickId);
        }
        console.log("clickId =", router.query);
    }, [router.query.clickId]);

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
            }
        });
    }, []);

    if (content == "safe")
        return (
            <div className={styles.container}>
                <Head></Head>

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
        return (
            <div className={styles.container}>
                <Head></Head>

                <main className={styles.main}>
                    <h1>BLACK CONTENT</h1>
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
