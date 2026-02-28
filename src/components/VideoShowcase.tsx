import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// Convert Google Drive file links to embeddable video URLs
const getDriveVideoUrl = (fileId: string, autoplay: boolean = false) => {
  // Google Drive preview URL - autoplay may be limited by browser policies
  const baseUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  return baseUrl;
};

// Video files from Google Drive
const videoFiles = [
  {
    id: "1zpbUxEdIBW7h3w1jIT08VUsIu5PIceGy",
    title: "Video Edit 1",
    driveLink: "https://drive.google.com/file/d/1zpbUxEdIBW7h3w1jIT08VUsIu5PIceGy/view?usp=drive_link",
  },
  {
    id: "1rxiD6yS16QjxJu-u_LayMbwF3P_BMak1",
    title: "Video Edit 2",
    driveLink: "https://drive.google.com/file/d/1rxiD6yS16QjxJu-u_LayMbwF3P_BMak1/view?usp=drive_link",
  },
  {
    id: "1SkFv1hthf62POgcWKLTvSWAknMc-9KyE",
    title: "Video Edit 3",
    driveLink: "https://drive.google.com/file/d/1SkFv1hthf62POgcWKLTvSWAknMc-9KyE/view?usp=drive_link",
  },
  {
    id: "1znkCSnTYvezrkIwsVBTov_uJcwxiTnhS",
    title: "Video Edit 4",
    driveLink: "https://drive.google.com/file/d/1znkCSnTYvezrkIwsVBTov_uJcwxiTnhS/view?usp=drive_link",
  },
  {
    id: "1yvtXyXPszb7O2JWohNKI13-nTRdO7I1J",
    title: "Video Edit 5",
    driveLink: "https://drive.google.com/file/d/1yvtXyXPszb7O2JWohNKI13-nTRdO7I1J/view?usp=drive_link",
  },
  {
    id: "1-mtZTzFEKL3WoFV325xTMbfaPY9loc77",
    title: "Video Edit 6",
    driveLink: "https://drive.google.com/file/d/1-mtZTzFEKL3WoFV325xTMbfaPY9loc77/view?usp=drive_link",
  },
  {
    id: "1kFQDRdmichHzG46qkjxmKiUwh6nOVOeq",
    title: "Video Edit 7",
    driveLink: "https://drive.google.com/file/d/1kFQDRdmichHzG46qkjxmKiUwh6nOVOeq/view?usp=drive_link",
  },
  {
    id: "18I0HZqDrJkbptS99OBeqY4IF3-xSSmQy",
    title: "Video Edit 8",
    driveLink: "https://drive.google.com/file/d/18I0HZqDrJkbptS99OBeqY4IF3-xSSmQy/view?usp=drive_link",
  },
  {
    id: "1aU9S21gk2A7zJa3hCZbH1jsJBcJE0B1p",
    title: "Video Edit 9",
    driveLink: "https://drive.google.com/file/d/1aU9S21gk2A7zJa3hCZbH1jsJBcJE0B1p/view?usp=drive_link",
  },
  {
    id: "1RirdIJdUHCE-xMsqeYD4Y7XJCELPlA0-",
    title: "Video Edit 10",
    driveLink: "https://drive.google.com/file/d/1RirdIJdUHCE-xMsqeYD4Y7XJCELPlA0-/view?usp=drive_link",
  },
  {
    id: "1KOKfL7uyl3ZpVkvX0R0_8KmOpNB5oDJc",
    title: "Video Edit 11",
    driveLink: "https://drive.google.com/file/d/1KOKfL7uyl3ZpVkvX0R0_8KmOpNB5oDJc/view?usp=drive_link",
  },
  {
    id: "1A-qR3wQPgKxZ_Dzz6S9v8kdKfmUq6cyr",
    title: "Video Edit 12",
    driveLink: "https://drive.google.com/file/d/1A-qR3wQPgKxZ_Dzz6S9v8kdKfmUq6cyr/view?usp=drive_link",
  },
  {
    id: "1Q_rYdKEjzbGvmk_OBI6Y10dYMDF75N7-",
    title: "Video Edit 13",
    driveLink: "https://drive.google.com/file/d/1Q_rYdKEjzbGvmk_OBI6Y10dYMDF75N7-/view?usp=drive_link",
  },
  {
    id: "1MOy0sgJZ3BToIombMPQCm-jMr0uMr77k",
    title: "Video Edit 14",
    driveLink: "https://drive.google.com/file/d/1MOy0sgJZ3BToIombMPQCm-jMr0uMr77k/view?usp=drive_link",
  },
  {
    id: "1M2LSRExz5RbL7WUeBOLH7IONWjr_j-Li",
    title: "Video Edit 15",
    driveLink: "https://drive.google.com/file/d/1M2LSRExz5RbL7WUeBOLH7IONWjr_j-Li/view?usp=drive_link",
  },
  {
    id: "1p_HXnw_PokACrjQG9-zRpivuvzDSacnb",
    title: "Video Edit 16",
    driveLink: "https://drive.google.com/file/d/1p_HXnw_PokACrjQG9-zRpivuvzDSacnb/view?usp=drive_link",
  },
];

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const nextVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo + 1) % videoFiles.length);
    }
  };

  const prevVideo = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((selectedVideo - 1 + videoFiles.length) % videoFiles.length);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="font-display text-3xl md:text-4xl mb-4 text-center">
          Featured Videos
        </h3>
        <p className="text-muted-foreground text-center mb-8 font-body max-w-2xl mx-auto">
          A selection of video edits, reels, montages, and creative video content with autoplay previews.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videoFiles.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg glass-card cursor-pointer aspect-video"
              onClick={() => setSelectedVideo(index)}
            >
              <div className="w-full h-full relative bg-secondary/20">
                <iframe
                  src={getDriveVideoUrl(video.id, true)}
                  title={video.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  style={{ pointerEvents: 'none' }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white">
                    <Play className="w-8 h-8" />
                    <span className="font-body text-sm font-semibold">Click to view fullscreen</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-body text-xs">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="https://drive.google.com/drive/folders/1-K_ir1dY1wtNaT8qPPF4EMQVQxgMObGZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
          >
            View all videos on Google Drive
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedVideo !== null && (
          <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
            <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {videoFiles.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevVideo();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextVideo();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                      aria-label="Next video"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="relative">
                  <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                    <iframe
                      src={getDriveVideoUrl(videoFiles[selectedVideo].id, true)}
                      title={videoFiles[selectedVideo].title}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-body text-base">
                        {videoFiles[selectedVideo].title}
                      </p>
                      <a
                        href={videoFiles[selectedVideo].driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open in Google Drive
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    {videoFiles.length > 1 && (
                      <p className="text-white/70 text-xs mt-2 font-body">
                        {selectedVideo + 1} of {videoFiles.length}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoShowcase;
