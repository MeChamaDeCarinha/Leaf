import { Shrub } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-full bg-neutral-900 overflow-y-scroll flex flex-col">
            <div className="h-screen shrink-0 flex flex-col items-center justify-center gap-y-3">
                <Shrub strokeWidth={1} className="w-96 h-96" />
                <a href={"/downloads/logo-512x512.png"} download={"setup.png"} className="bg-base-200 hover:bg-base-300 text-black text-3xl rounded py-1 px-4 duration-300">Download</a>
                <p className="text-sm text-neutral-500">Only available on Windows</p>
            </div>
            <div className="h-screen p-40 shrink-0 flex flex-col gap-y-20">
                <div className="flex flex-col gap-y-4">
                    <p className="text-6xl">What is <Link href={"/"} className="bg-clip-text text-transparent bg-gradient-to-r from-base-300 to-pink-300 underline underline-offset-4 decoration-transparent hover:decoration-base-300 duration-500">Sakura</Link>?</p>
                    <p className="text-2xl">Sakura is a torrent base game download platform, where you can download any game for free.</p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <p className="text-5xl">How it works?</p>
                    <p className="text-2xl">Choose a game from the catalog and download it, your download contributes to other people.</p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <p className="text-5xl">Simple as that?</p>
                    <p className="text-2xl">Yes, hope you enjoy.</p>
                </div>
            </div>
            <div className="w-full h-32 shrink-0 flex items-center justify-center gap-x-3">
                <Shrub strokeWidth={1.5} className="w-14 h-14"/>
                <p className="text-2xl">For a world without paywall.</p>
            </div>
        </div>
    );
}
