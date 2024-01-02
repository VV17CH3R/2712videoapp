import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoPlayerProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  year: number;
  age: number;
  time: number;
}

export default function VideoPlayerModal({
  year,
  age,
  time,
  title,
  changeState,
  overview,
  state,
  youtubeUrl,
}: VideoPlayerProps) {

  return (
    //oposite value of state :3
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[625]">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="line-clamp-4">
          {overview}
        </DialogDescription>
        <div className="flex gap-x-2 items-center">
          <p className="text-white">{year}</p>
          <p className="border-gray-200 border text-sm p-0.5 rounded ">
            {age}+
          </p>
          <p className="text-sm">{time}ч.</p>
        </div>
        <iframe src={youtubeUrl} height={350} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  );
}
