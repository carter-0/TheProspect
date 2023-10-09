import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>The Prospect</title>
                <meta name="description" content="The Prospect" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta property="og:title" content="The Prospect" />
                <meta property="og:description" content="The Prospect is a 4 piece Indie Rock band from Hertfordshire." />
                <meta property="og:image" content="/assets/og.jpg" />
                <meta property="twitter:image:src" content="/assets/og.jpg" />
                <meta property="og:url" content="https://theprospect.band/" />
            </Head>

            <Navbar />

            <main className={"bg-gradient-to-r from-[#b3b19c] to-[#dbd1ad]"}>
                <header className="w-full h-[500px] md:h-[976px] bg-[url('/assets/main-background.webp')] bg-cover bg-center flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center pb-[200px] md:pb-[500px] mmd:pb-[400px] mmd:mt-10">
                        <h1 className={"text-center md:text-9xl text-7xl text-black drop-shadow-lg font-bold prospect-font"}>The Prospect</h1>
                    </div>
                </header>
                <div className={"flex flex-row py-40 justify-center items-center"}>
                    <div className="max-w-7xl w-full">
                        <h2 className={"text-6xl font-bold prospect-font text-center mb-10"}>Live Music</h2>
                        <table className={"min-w-full hidden sm:table px-10 border-collapse"}>
                            <tbody className={"border-1 border-red-500"}>
                                <tr className={"border-b border-gray-800 sm:flex-row"}>
                                    <td className={"font-bold py-5 text-xl text-left"}>12 NOV 22</td>
                                    <td className={"font-semibold text-center"}>Bricket Wood</td>
                                    <td className={"font-semibold text-center"}>Bricket Wood Social Club</td>
                                    <td className={"font-semibold text-right"}><Link target={"_blank"} href={"https://www.youtube.com/playlist?list=PLmnFu-RulYvwwc6xjghOVoOTJf8g1PGDA"}>Watch Highlights</Link></td>
                                </tr>

                                <tr className={"border-b py-5 px-2 border-gray-800 sm:flex-row"}>
                                    <td className={"font-bold py-5 text-xl text-left"}>10 AUG 23</td>
                                    <td className={"font-semibold text-center"}>St Albans</td>
                                    <td className={"font-semibold text-center"}>The Horn</td>
                                    <td className={"font-semibold text-right"}><Link target={"_blank"} href={"https://www.youtube.com/watch?v=-SFfhZLnXIA"}>Watch Highlights</Link></td>
                                </tr>

                                <tr className={"py-5 px-2 sm:flex-row"}>
                                    <td className={"font-bold py-5 text-xl text-left"}>21 SEPT 23</td>
                                    <td className={"font-semibold text-center"}>St Albans</td>
                                    <td className={"font-semibold text-center"}>The Horn</td>
                                    <td className={"font-semibold text-right w-32"}><Link target={"_blank"} href={"https://www.instagram.com/p/CxwMMlDt2es"}>Watch Highlights</Link></td>
                                </tr>

                                <tr className={"py-5 px-2 sm:flex-row"}>
                                    <td className={"font-bold py-5 text-xl text-left"}>21 SEPT 23</td>
                                    <td className={"font-semibold text-center"}>Hemel Hempstead</td>
                                    <td className={"font-semibold text-center"}>The Old Town Hall</td>
                                    <td className={"font-semibold text-right w-32"}><Link target={"_blank"} href={"https://oldtownhall.co.uk/events/juicebox-live-oct-2023"}>Buy Tickets</Link></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className={"flex flex-col items-center w-full sm:hidden"}>
                            <div className={"border-b w-[300px] py-5 px-2 border-gray-800 sm:flex-row"}>
                                <h3 className={"font-bold py-5 text-xl"}>12 NOV 22</h3>
                                <h3 className={"font-semibold"}>Bricket Wood</h3>
                                <h3 className={"font-semibold"}>Bricket Wood Social Club</h3>
                                <h3 className={"font-semibold"}><Link target={"_blank"} href={"https://www.youtube.com/playlist?list=PLmnFu-RulYvwwc6xjghOVoOTJf8g1PGDA"}>Watch Highlights</Link></h3>
                            </div>

                            <div className={"border-b w-[300px] py-5 px-2 border-gray-800 sm:flex-row"}>
                                <h3 className={"font-bold py-5 text-xl"}>10 AUG 23</h3>
                                <h3 className={"font-semibold"}>St Albans</h3>
                                <h3 className={"font-semibold"}>The Horn</h3>
                                <h3 className={"font-semibold"}><Link target={"_blank"} href={"https://www.youtube.com/watch?v=-SFfhZLnXIA"}>Watch Highlights</Link></h3>
                            </div>

                            <div className={"py-5 w-[300px] px-2 sm:flex-row"}>
                                <h3 className={"font-bold py-5 text-xl"}>21 SEPT 23</h3>
                                <h3 className={"font-semibold"}>St Albans</h3>
                                <h3 className={"font-semibold"}>The Horn</h3>
                                <h3 className={"font-semibold"}><Link target={"_blank"} href={"https://www.instagram.com/p/CxwMMlDt2es"}>Watch Highlights</Link></h3>
                            </div>

                            <div className={"py-5 w-[300px] px-2 sm:flex-row"}>
                                <h3 className={"font-bold py-5 text-xl"}>21 SEPT 23</h3>
                                <h3 className={"font-semibold"}>Hemel Hempstead</h3>
                                <h3 className={"font-semibold"}>The Old Town Hall</h3>
                                <h3 className={"font-semibold"}><Link target={"_blank"} href={"https://oldtownhall.co.uk/events/juicebox-live-oct-2023"}>Buy Tickets</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
