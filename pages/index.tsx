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
                <div className={"flex flex-col xl:flex-row py-40 justify-center items-start space-y-12 xl:space-y-0 xl:space-x-12"}>
                    <div className="max-w-3xl w-full">
                        <h2 className={"text-5xl font-bold prospect-font flex flex-row items-center justify-center gap-5 text-center mb-10"}>
                            Spotify
                            <Link href={"https://open.spotify.com/artist/3J0kdDxbvMahTwwWltkG2w"} target={"_blank"}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 496 512"><path fill="black" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
                            </Link>
                        </h2>
                        <iframe className="rounded-md px-5" src="https://open.spotify.com/embed/artist/3J0kdDxbvMahTwwWltkG2w?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>

                    {/* <div className="max-w-3xl w-full">
                        <h2 className={"text-6xl font-bold prospect-font text-center mb-10 mt-0"}>Live Music</h2>
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

                                <tr className={"border-b py-5 px-2 border-gray-800 sm:flex-row"}>
                                    <td className={"font-bold py-5 text-xl text-left"}>21 SEPT 23</td>
                                    <td className={"font-semibold text-center"}>St Albans</td>
                                    <td className={"font-semibold text-center"}>The Horn</td>
                                    <td className={"font-semibold text-right w-32"}><Link target={"_blank"} href={"https://www.instagram.com/p/CxwMMlDt2es"}>Watch Highlights</Link></td>
                                </tr>

                                <tr className={"py-5 px-2 sm:flex-row"}>
                                    <td className={"font-bold py-5 text-xl text-left"}>21 OCT 23</td>
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

                            <div className={"border-b w-[300px] py-5 px-2 border-gray-800 sm:flex-row"}>
                                <h3 className={"font-bold py-5 text-xl"}>21 SEPT 23</h3>
                                <h3 className={"font-semibold"}>St Albans</h3>
                                <h3 className={"font-semibold"}>The Horn</h3>
                                <h3 className={"font-semibold"}><Link target={"_blank"} href={"https://www.instagram.com/p/CxwMMlDt2es"}>Watch Highlights</Link></h3>
                            </div>

                            <div className={"py-5 w-[300px] px-2 sm:flex-row"}>
                                <h3 className={"font-bold py-5 text-xl"}>12 OCT 23</h3>
                                <h3 className={"font-semibold"}>Hemel Hempstead</h3>
                                <h3 className={"font-semibold"}>The Old Town Hall</h3>
                                <h3 className={"font-semibold"}><Link target={"_blank"} href={"https://oldtownhall.co.uk/events/juicebox-live-oct-2023"}>Buy Tickets</Link></h3>
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>
        </>
    )
}
