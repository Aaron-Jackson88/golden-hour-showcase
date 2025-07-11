import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Star } from "lucide-react";

const About = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Bride",
      content: "Sarah captured our wedding day perfectly! Every photo tells a story and brings back all the emotions we felt. Her eye for detail and natural moments is incredible.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Graduate",
      content: "The graduation photos exceeded all my expectations. Sarah made me feel comfortable and confident, and the final images truly capture this milestone in my life.",
      rating: 5,
    },
    {
      name: "Rachel Thompson",
      role: "Family Portrait Client",
      content: "Working with Sarah was an absolute pleasure. She has a gift for capturing authentic moments and genuine smiles. Our family photos are treasures we'll keep forever.",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Corporate Event",
      content: "Sarah's professionalism and talent shine through in every shot. She documented our corporate event beautifully while being unobtrusive and efficient.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "Portrait Session",
      content: "I've never felt more confident in front of a camera. Sarah's direction and encouragement brought out the best in me, and the photos are absolutely stunning.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section with Profile */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop"
                    alt="Sarah Chen - Photographer"
                    className="w-full max-w-md mx-auto rounded-lg elegant-shadow"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-light text-primary">
                  About Sarah
                </h1>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Hello! I'm Sarah, a passionate photographer based in San Francisco with over 8 years 
                    of experience capturing life's most precious moments. My journey began with a simple 
                    love for storytelling and has evolved into a deep commitment to preserving memories 
                    through the art of photography.
                  </p>
                  <p>
                    I specialize in portrait, event, editorial, and graduation photography, always striving 
                    to create images that are both timeless and authentic. My approach is centered on making 
                    you feel comfortable and confident, allowing your true personality to shine through.
                  </p>
                  <p>
                    When I'm not behind the camera, you can find me exploring new hiking trails, 
                    experimenting with film photography, or spending time with my rescue dog, Luna. 
                    I believe that the best photographs happen when there's a genuine connection between 
                    photographer and subject.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-6 bg-accent/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
                My Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Authentic Moments</h3>
                  <p className="text-muted-foreground">
                    I focus on capturing genuine emotions and natural interactions, creating images 
                    that truly reflect who you are.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Natural Light</h3>
                  <p className="text-muted-foreground">
                    I have a deep appreciation for natural light and use it to create soft, 
                    warm, and timeless photographs.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-primary">Personal Connection</h3>
                  <p className="text-muted-foreground">
                    Building a rapport with my clients is essential. When you're comfortable, 
                    it shows in every photograph.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
                What My Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Hear from some of the wonderful people I've had the pleasure to work with
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg elegant-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-medium text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;