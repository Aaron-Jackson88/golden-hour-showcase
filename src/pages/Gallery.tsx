import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Lightbox from "@/components/Lightbox";

const Gallery = () => {
  const { category } = useParams<{ category: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images for each category
  const galleryImages = {
    portraits: [
      { src: "https://images.unsplash.com/photo-1494790108755-2616c9c69bb6?w=800&h=1200&fit=crop", alt: "Portrait 1" },
      { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop", alt: "Portrait 2" },
      { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1200&fit=crop", alt: "Portrait 3" },
      { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1200&fit=crop", alt: "Portrait 4" },
      { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1200&fit=crop", alt: "Portrait 5" },
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop", alt: "Portrait 6" },
    ],
    events: [
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop", alt: "Event 1" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop", alt: "Event 2" },
      { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop", alt: "Event 3" },
      { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop", alt: "Event 4" },
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop", alt: "Event 5" },
      { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop", alt: "Event 6" },
    ],
    editorial: [
      { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1200&fit=crop", alt: "Editorial 1" },
      { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop", alt: "Editorial 2" },
      { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1200&fit=crop", alt: "Editorial 3" },
      { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop", alt: "Editorial 4" },
      { src: "https://images.unsplash.com/photo-1506629905607-45c3dc94b55b?w=800&h=1200&fit=crop", alt: "Editorial 5" },
      { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1200&fit=crop", alt: "Editorial 6" },
    ],
    graduations: [
      { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop", alt: "Graduation 1" },
      { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop", alt: "Graduation 2" },
      { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop", alt: "Graduation 3" },
      { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop", alt: "Graduation 4" },
      { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop", alt: "Graduation 5" },
      { src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=600&fit=crop", alt: "Graduation 6" },
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