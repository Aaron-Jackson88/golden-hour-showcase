import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Check, Camera, Clock, Image, MapPin } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Essential",
      price: "$350",
      duration: "1 hour",
      locations: "1 location",
      edits: "15 edited photos",
      delivery: "3-5 business days",
      features: [
        "1 hour photo session",
        "15 professionally edited high-resolution photos",
        "Online gallery for download",
        "Print release included",
        "Basic retouching"
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$550",
      duration: "2 hours",
      locations: "2 locations",
      edits: "30 edited photos",
      delivery: "5-7 business days",
      features: [
        "2 hour photo session",
        "30 professionally edited high-resolution photos",
        "Online gallery for download and sharing",
        "Print release included",
        "Advanced retouching and color grading",
        "Outfit change consultation",
        "Sneak peek within 24 hours"
      ],
      popular: true,
    },
    {
      name: "Graduation Mini",
      price: "$250",
      duration: "30 minutes",
      locations: "1 location",
      edits: "10 edited photos",
      delivery: "2-3 business days",
      features: [
        "30 minute graduation session",
        "10 professionally edited high-resolution photos",
        "Cap and gown styling guidance",
        "Family group shots included",
        "Online gallery for sharing",
        "Print release included"
      ],
      popular: false,
    },
    {
      name: "Event Coverage",
      price: "$150/hour",
      duration: "Minimum 2 hours",
      locations: "Event venue",
      edits: "50+ edited photos",
      delivery: "7-10 business days",
      features: [
        "Professional event documentation",
        "Candid and posed shots",
        "High-resolution edited photos",
        "Online gallery for all attendees",
        "Print release included",
        "Raw files available upon request",
        "Travel within 30 miles included"
      ],
      popular: false,
    },
  ];

  const addOns = [
    { name: "Additional edited photos", price: "$15 each" },
    { name: "Rush delivery (24-48 hours)", price: "$100" },
    { name: "Second photographer", price: "$200" },
    { name: "Extended session (+1 hour)", price: "$150" },
    { name: "Professional hair & makeup", price: "$200" },
    { name: "Travel beyond 30 miles", price: "$1 per mile" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-20 px-6 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Photography Packages
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Choose the perfect package for your photography needs. All sessions include 
              professional editing and high-resolution digital downloads.
            </p>
          </motion.div>
        </section>

        {/* Packages Grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  className={`relative bg-card rounded-lg p-8 elegant-shadow smooth-transition hover-shadow ${
                    pkg.popular ? "ring-2 ring-primary" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-medium text-primary mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-light text-primary mb-4">
                      {pkg.price}
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {pkg.locations}
                      </div>
                      <div className="flex items-center justify-center">
                        <Image className="h-4 w-4 mr-2" />
                        {pkg.edits}
                      </div>
                      <div className="flex items-center justify-center">
                        <Camera className="h-4 w-4 mr-2" />
                        {pkg.delivery}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 px-6 bg-accent/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
                Add-On Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Enhance your photography experience with these additional options
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {addOns.map((addon, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-card rounded-lg">
                  <span className="text-muted-foreground">{addon.name}</span>
                  <span className="font-medium text-primary">{addon.price}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
              Ready to Book Your Session?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about packages or want to discuss a custom session? 
              I'd love to hear about your vision and help bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/gallery/portraits">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;