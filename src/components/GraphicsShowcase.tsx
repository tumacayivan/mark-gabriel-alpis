import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// Convert Google Drive file links to direct image URLs
const getDriveImageUrl = (fileId: string) => {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

// Graphics images from Google Drive
const graphicsImages = [
  {
    id: "1IpN4z3Bt2ZpkR2CvtUx1MQYmplCFR_sI",
    alt: "Graphic Design 1",
    driveLink: "https://drive.google.com/file/d/1IpN4z3Bt2ZpkR2CvtUx1MQYmplCFR_sI/view?usp=drive_link",
  },
  {
    id: "11h0llrqOi_5KK81QY_gTOoC_wrArsOa1",
    alt: "Graphic Design 2",
    driveLink: "https://drive.google.com/file/d/11h0llrqOi_5KK81QY_gTOoC_wrArsOa1/view?usp=drive_link",
  },
  {
    id: "19bJkSI6dLt_vX0opu5mJRXT0ZmDR6iDm",
    alt: "Graphic Design 3",
    driveLink: "https://drive.google.com/file/d/19bJkSI6dLt_vX0opu5mJRXT0ZmDR6iDm/view?usp=drive_link",
  },
  {
    id: "19zOcy_n4NCg3pU88ot3yxy4l50AbKcUh",
    alt: "Graphic Design 4",
    driveLink: "https://drive.google.com/file/d/19zOcy_n4NCg3pU88ot3yxy4l50AbKcUh/view?usp=drive_link",
  },
  {
    id: "1OqiTI1US610JTq1D6aoypNdyLW8cUWfT",
    alt: "Graphic Design 5",
    driveLink: "https://drive.google.com/file/d/1OqiTI1US610JTq1D6aoypNdyLW8cUWfT/view?usp=drive_link",
  },
  {
    id: "1ibxpm53tv8Ry4V525mfuzjnAAShx-cD0",
    alt: "Graphic Design 6",
    driveLink: "https://drive.google.com/file/d/1ibxpm53tv8Ry4V525mfuzjnAAShx-cD0/view?usp=drive_link",
  },
  {
    id: "1nJd1XDZjaRqWOElDK5l91-mYJxxgr5Da",
    alt: "Graphic Design 7",
    driveLink: "https://drive.google.com/file/d/1nJd1XDZjaRqWOElDK5l91-mYJxxgr5Da/view?usp=drive_link",
  },
  {
    id: "16uTPKQZ-ofZXjLc8C8U1OgSYPi75kum8",
    alt: "Graphic Design 8",
    driveLink: "https://drive.google.com/file/d/16uTPKQZ-ofZXjLc8C8U1OgSYPi75kum8/view?usp=drive_link",
  },
  {
    id: "1vonJbV4U_Tlbm7JQlfUBK7dc18CATP64",
    alt: "Graphic Design 9",
    driveLink: "https://drive.google.com/file/d/1vonJbV4U_Tlbm7JQlfUBK7dc18CATP64/view?usp=drive_link",
  },
  {
    id: "1Vi_bzQ8B-k3Jp_Q_9auYMAphCnqYzRf2",
    alt: "Graphic Design 10",
    driveLink: "https://drive.google.com/file/d/1Vi_bzQ8B-k3Jp_Q_9auYMAphCnqYzRf2/view?usp=drive_link",
  },
  {
    id: "1exxyeTrGpSrFhtsNYuTTqyHWZYdjMU8B",
    alt: "Graphic Design 11",
    driveLink: "https://drive.google.com/file/d/1exxyeTrGpSrFhtsNYuTTqyHWZYdjMU8B/view?usp=drive_link",
  },
  {
    id: "189-AI1ZrZIavlaMrgBG-SPi-BDV-hJye",
    alt: "Graphic Design 12",
    driveLink: "https://drive.google.com/file/d/189-AI1ZrZIavlaMrgBG-SPi-BDV-hJye/view?usp=drive_link",
  },
  {
    id: "1Lv-7k33FByLnRhcBDtk8HrRZS9c-VVSs",
    alt: "Graphic Design 13",
    driveLink: "https://drive.google.com/file/d/1Lv-7k33FByLnRhcBDtk8HrRZS9c-VVSs/view?usp=drive_link",
  },
  {
    id: "1Ak0fH44O602RRhLQCBbBxTMp7nMizq7Z",
    alt: "Graphic Design 14",
    driveLink: "https://drive.google.com/file/d/1Ak0fH44O602RRhLQCBbBxTMp7nMizq7Z/view?usp=drive_link",
  },
  {
    id: "1_q0kyDf9KAwK_lKrO2asDPmln8TFozOv",
    alt: "Graphic Design 15",
    driveLink: "https://drive.google.com/file/d/1_q0kyDf9KAwK_lKrO2asDPmln8TFozOv/view?usp=drive_link",
  },
];

const GraphicsShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const googleDriveLink = "https://drive.google.com/drive/folders/1qUntbeDGNkOa7lOXwSQ6TntDrMEXy_m4";

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % graphicsImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + graphicsImages.length) % graphicsImages.length);
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
          Featured Graphics
        </h3>
        <p className="text-muted-foreground text-center mb-8 font-body max-w-2xl mx-auto">
          A selection of branding, social media graphics, marketing materials, and visual storytelling projects.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {graphicsImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg glass-card cursor-pointer aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <div className="w-full h-full overflow-hidden bg-secondary/20">
                <img
                  src={getDriveImageUrl(image.id)}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if direct image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = `https://drive.google.com/thumbnail?id=${image.id}&sz=w1000`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
          >
            View all graphics on Google Drive
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImage !== null && (
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-6xl w-full p-0 bg-transparent border-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {graphicsImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-3 hover:bg-black/70"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="relative">
                  <img
                    src={getDriveImageUrl(graphicsImages[selectedImage].id)}
                    alt={graphicsImages[selectedImage].alt}
                    className="w-full h-auto rounded-lg max-h-[85vh] object-contain mx-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://drive.google.com/thumbnail?id=${graphicsImages[selectedImage].id}&sz=w2000`;
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-white font-body text-base">
                        {graphicsImages[selectedImage].alt}
                      </p>
                      <a
                        href={graphicsImages[selectedImage].driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open in Google Drive
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    {graphicsImages.length > 1 && (
                      <p className="text-white/70 text-xs mt-2 font-body">
                        {selectedImage + 1} of {graphicsImages.length}
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

export default GraphicsShowcase;
