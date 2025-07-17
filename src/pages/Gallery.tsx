import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Lightbox from "@/components/Lightbox";

// Import all images explicitly
import portrait1 from "@/assets/Photos/portraits/Vondervic soft book-1.jpg";
import portrait2 from "@/assets/Photos/portraits/Vondervic soft book-3.jpg";
import portrait3 from "@/assets/Photos/portraits/Vondervic soft-1.jpg";
import portrait4 from "@/assets/Photos/portraits/Vondervic soft-10.jpg";
import portrait5 from "@/assets/Photos/portraits/Vondervic soft-12.jpg";
import portrait6 from "@/assets/Photos/portraits/Vondervic soft-3.jpg";
import portrait7 from "@/assets/Photos/portraits/Vondervic soft-4.jpg";
import portrait8 from "@/assets/Photos/portraits/Vondervic soft-5.jpg";
import portrait9 from "@/assets/Photos/portraits/Vondervic soft-7.jpg";
import portrait10 from "@/assets/Photos/portraits/Vondervic soft-8.jpg";

import event1 from "@/assets/Photos/events/Park Hiyatt Event-125.jpg";
import event2 from "@/assets/Photos/events/Park Hiyatt Event-155.jpg";
import event3 from "@/assets/Photos/events/Park Hiyatt Event-181.jpg";
import event4 from "@/assets/Photos/events/Park Hiyatt Event-192.jpg";
import event5 from "@/assets/Photos/events/Park Hiyatt Event-259.jpg";
import event6 from "@/assets/Photos/events/Park Hiyatt Event-27.jpg";
import event7 from "@/assets/Photos/events/Park Hiyatt Event-274.jpg";
import event8 from "@/assets/Photos/events/Park Hiyatt Event-284.jpg";
import event9 from "@/assets/Photos/events/Park Hiyatt Event-293.jpg";
import event10 from "@/assets/Photos/events/Park Hiyatt-23.jpg";
import event11 from "@/assets/Photos/events/Park Hiyatt-41.jpg";
import event12 from "@/assets/Photos/events/Park Hiyatt-45.jpg";
import event13 from "@/assets/Photos/events/Park Hiyatt-54.jpg";
import event14 from "@/assets/Photos/events/Park Hiyatt-88.jpg";
import event15 from "@/assets/Photos/events/Park Hiyatt-9.jpg";
import event16 from "@/assets/Photos/events/TIC First Meet-118.jpg";
import event17 from "@/assets/Photos/events/TIC First Meet-123.jpg";
import event18 from "@/assets/Photos/events/TIC First Meet-15.jpg";
import event19 from "@/assets/Photos/events/TIC First Meet-151.jpg";
import event20 from "@/assets/Photos/events/TIC First Meet-186.jpg";
import event21 from "@/assets/Photos/events/TIC First Meet-23.jpg";
import event22 from "@/assets/Photos/events/TIC First Meet-25.jpg";
import event23 from "@/assets/Photos/events/TIC First Meet-36.jpg";
import event24 from "@/assets/Photos/events/TIC First Meet-37.jpg";
import event25 from "@/assets/Photos/events/TIC First Meet-42.jpg";
import event26 from "@/assets/Photos/events/TIC First Meet-46.jpg";
import event27 from "@/assets/Photos/events/TIC First Meet-47.jpg";
import event28 from "@/assets/Photos/events/TIC First Meet-52.jpg";
import event29 from "@/assets/Photos/events/TIC First Meet-96.jpg";
import event30 from "@/assets/Photos/events/VERSO x Future School Festival 2024-392.jpg";
import event31 from "@/assets/Photos/events/VERSO x Future School Festival 2024-403.jpg";
import event32 from "@/assets/Photos/events/VERSO x Future School Festival 2024-408.jpg";
import event33 from "@/assets/Photos/events/VERSO x Future School Festival 2024-413.jpg";
import event34 from "@/assets/Photos/events/VERSO x Future School Festival 2024-426.jpg";
import event35 from "@/assets/Photos/events/VERSO x Future School Festival 2024-439.jpg";
import event36 from "@/assets/Photos/events/VERSO x Future School Festival 2024-441.jpg";
import event37 from "@/assets/Photos/events/VERSO x Future School Festival 2024-463.jpg";
import event38 from "@/assets/Photos/events/VERSO x Future School Festival 2024-468.jpg";
import event39 from "@/assets/Photos/events/VERSO x Future School Festival 2024-472.jpg";
import event40 from "@/assets/Photos/events/VERSO x Future School Festival 2024-486.jpg";
import event41 from "@/assets/Photos/events/VERSO x Future School Festival 2024-490.jpg";
import event42 from "@/assets/Photos/events/VERSO x Future School Festival 2024-492.jpg";
import event43 from "@/assets/Photos/events/VERSO x Future School Festival 2024-513.jpg";

import editorial1 from "@/assets/Photos/editorial/Blue light-3.jpg";
import editorial2 from "@/assets/Photos/editorial/Blue light-4.jpg";
import editorial3 from "@/assets/Photos/editorial/Blue light-5.jpg";
import editorial4 from "@/assets/Photos/editorial/Green Fein sideway-1.jpg";
import editorial5 from "@/assets/Photos/editorial/Green Fein-11.jpg";
import editorial6 from "@/assets/Photos/editorial/Green Fein-13.jpg";
import editorial7 from "@/assets/Photos/editorial/Green Fein-14.jpg";
import editorial8 from "@/assets/Photos/editorial/Green Fein-5.jpg";
import editorial9 from "@/assets/Photos/editorial/Green Fein-8.jpg";
import editorial10 from "@/assets/Photos/editorial/Natural light shots-3.jpg";
import editorial11 from "@/assets/Photos/editorial/Natural light shots-6.jpg";
import editorial12 from "@/assets/Photos/editorial/Stare.jpg";

import graduation1 from "@/assets/Photos/graduations/IMG_0655.jpg";
import graduation2 from "@/assets/Photos/graduations/IMG_0665.jpg";
import graduation3 from "@/assets/Photos/graduations/IMG_0694-Enhanced-NR.jpg";
import graduation4 from "@/assets/Photos/graduations/IMG_1220.jpg";
import graduation5 from "@/assets/Photos/graduations/IMG_1734.jpg";
import graduation6 from "@/assets/Photos/graduations/IMG_1862.jpg";
import graduation7 from "@/assets/Photos/graduations/IMG_2329.jpg";
import graduation8 from "@/assets/Photos/graduations/IMG_2918.jpg";
import graduation9 from "@/assets/Photos/graduations/IMG_3125.jpg";
import graduation10 from "@/assets/Photos/graduations/IMG_3213.jpg";
import graduation11 from "@/assets/Photos/graduations/IMG_3253.jpg";
import graduation12 from "@/assets/Photos/graduations/IMG_4496.jpg";
import graduation13 from "@/assets/Photos/graduations/IMG_4552.jpg";
import graduation14 from "@/assets/Photos/graduations/IMG_4718.jpg";
import graduation15 from "@/assets/Photos/graduations/IMG_4785.jpg";
import graduation16 from "@/assets/Photos/graduations/IMG_4820.jpg";
import graduation17 from "@/assets/Photos/graduations/IMG_4922-Enhanced-NR.jpg";
import graduation18 from "@/assets/Photos/graduations/IMG_4969-Enhanced-NR.jpg";
import graduation19 from "@/assets/Photos/graduations/IMG_7523.jpg";
import graduation20 from "@/assets/Photos/graduations/IMG_7548.jpg";
import graduation21 from "@/assets/Photos/graduations/IMG_7632.jpg";
import graduation22 from "@/assets/Photos/graduations/IMG_7775-Enhanced-NR.jpg";

const Gallery = () => {
  const { category } = useParams<{ category: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images for each category
  const galleryImages = {
    portraits: [
      { src: portrait1, alt: "Portrait 1" },
      { src: portrait2, alt: "Portrait 2" },
      { src: portrait3, alt: "Portrait 3" },
      { src: portrait4, alt: "Portrait 4" },
      { src: portrait5, alt: "Portrait 5" },
      { src: portrait6, alt: "Portrait 6" },
      { src: portrait7, alt: "Portrait 7" },
      { src: portrait8, alt: "Portrait 8" },
      { src: portrait9, alt: "Portrait 9" },
      { src: portrait10, alt: "Portrait 10" },
    ],
    events: [
      { src: event1, alt: "Event 1" },
      { src: event2, alt: "Event 2" },
      { src: event3, alt: "Event 3" },
      { src: event4, alt: "Event 4" },
      { src: event5, alt: "Event 5" },
      { src: event6, alt: "Event 6" },
      { src: event7, alt: "Event 7" },
      { src: event8, alt: "Event 8" },
      { src: event9, alt: "Event 9" },
      { src: event10, alt: "Event 10" },
      { src: event11, alt: "Event 11" },
      { src: event12, alt: "Event 12" },
      { src: event13, alt: "Event 13" },
      { src: event14, alt: "Event 14" },
      { src: event15, alt: "Event 15" },
      { src: event16, alt: "Event 16" },
      { src: event17, alt: "Event 17" },
      { src: event18, alt: "Event 18" },
      { src: event19, alt: "Event 19" },
      { src: event20, alt: "Event 20" },
      { src: event21, alt: "Event 21" },
      { src: event22, alt: "Event 22" },
      { src: event23, alt: "Event 23" },
      { src: event24, alt: "Event 24" },
      { src: event25, alt: "Event 25" },
      { src: event26, alt: "Event 26" },
      { src: event27, alt: "Event 27" },
      { src: event28, alt: "Event 28" },
      { src: event29, alt: "Event 29" },
      { src: event30, alt: "Event 30" },
      { src: event31, alt: "Event 31" },
      { src: event32, alt: "Event 32" },
      { src: event33, alt: "Event 33" },
      { src: event34, alt: "Event 34" },
      { src: event35, alt: "Event 35" },
      { src: event36, alt: "Event 36" },
      { src: event37, alt: "Event 37" },
      { src: event38, alt: "Event 38" },
      { src: event39, alt: "Event 39" },
      { src: event40, alt: "Event 40" },
      { src: event41, alt: "Event 41" },
      { src: event42, alt: "Event 42" },
      { src: event43, alt: "Event 43" },
    ],
    editorial: [
      { src: editorial1, alt: "Editorial 1" },
      { src: editorial2, alt: "Editorial 2" },
      { src: editorial3, alt: "Editorial 3" },
      { src: editorial4, alt: "Editorial 4" },
      { src: editorial5, alt: "Editorial 5" },
      { src: editorial6, alt: "Editorial 6" },
      { src: editorial7, alt: "Editorial 7" },
      { src: editorial8, alt: "Editorial 8" },
      { src: editorial9, alt: "Editorial 9" },
      { src: editorial10, alt: "Editorial 10" },
      { src: editorial11, alt: "Editorial 11" },
      { src: editorial12, alt: "Editorial 12" },
    ],
    graduations: [
      { src: graduation1, alt: "Graduation 1" },
      { src: graduation2, alt: "Graduation 2" },
      { src: graduation3, alt: "Graduation 3" },
      { src: graduation4, alt: "Graduation 4" },
      { src: graduation5, alt: "Graduation 5" },
      { src: graduation6, alt: "Graduation 6" },
      { src: graduation7, alt: "Graduation 7" },
      { src: graduation8, alt: "Graduation 8" },
      { src: graduation9, alt: "Graduation 9" },
      { src: graduation10, alt: "Graduation 10" },
      { src: graduation11, alt: "Graduation 11" },
      { src: graduation12, alt: "Graduation 12" },
      { src: graduation13, alt: "Graduation 13" },
      { src: graduation14, alt: "Graduation 14" },
      { src: graduation15, alt: "Graduation 15" },
      { src: graduation16, alt: "Graduation 16" },
      { src: graduation17, alt: "Graduation 17" },
      { src: graduation18, alt: "Graduation 18" },
      { src: graduation19, alt: "Graduation 19" },
      { src: graduation20, alt: "Graduation 20" },
      { src: graduation21, alt: "Graduation 21" },
      { src: graduation22, alt: "Graduation 22" },
    ],
  };

  const categoryTitles = {
    portraits: "Portrait Photography",
    events: "Event Photography",
    editorial: "Editorial Photography",
    graduations: "Graduation Photography",
  };

  const categoryDescriptions = {
    portraits: "Intimate portraits that capture the essence and personality of each individual",
    events: "Documenting life's celebrations with candid and heartfelt moments",
    editorial: "Creative storytelling through fashion and lifestyle photography",
    graduations: "Celebrating academic achievements and milestone moments",
  };

  const images = galleryImages[category as keyof typeof galleryImages] || [];
  const title = categoryTitles[category as keyof typeof categoryTitles] || "Gallery";
  const description = categoryDescriptions[category as keyof typeof categoryDescriptions] || "";

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-6">
        {/* Header */}
        <motion.div
          className="max-w-7xl mx-auto text-center py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg elegant-shadow smooth-transition hover-shadow">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover smooth-transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 smooth-transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </div>
  );
};

export default Gallery;