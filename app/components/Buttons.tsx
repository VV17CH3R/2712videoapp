"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon, InfoIcon, PlayCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/google.svg";
import Image from "next/image";
import { useState } from "react";
import VideoPlayerModal from "./VideoPlayerModal";

interface VideoPlayerProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    year: number;
    age: number;
    time: number;
    id: number;
  }

export function GitHubLoginButton() {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn("github")}>
      <GithubIcon />
    </Button>
  );
}

export function GoogleLoginButton() {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="google-icon" />
    </Button>
  );
}

export function MovieButtons({ age, overview, time, title, year, youtubeUrl, id }: VideoPlayerProps) {

    const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" /> Воспроизвести
      </Button>
      <Button onClick={() => setOpen(true)}  className="text-lg font-medium bg-white/50 hover:bg-white/40 text-white">
        <InfoIcon className="mr-2 h-6 w-6" /> Подробнее
      </Button>
      <VideoPlayerModal age={age} changeState={setOpen} overview={overview} state={open} time={time} title={title} year={year} youtubeUrl={youtubeUrl} key={id} />
    </>
  );
}
