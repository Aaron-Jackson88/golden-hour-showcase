import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      sessionType: "",
      message: "",
    });
  };

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
              Let's Create Something Beautiful
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              I'd love to hear about your vision and discuss how we can bring your photography 
              dreams to life. Reach out and let's start planning your perfect session.
            </p>
          </motion.div>
        </section>

        {/* Contact Content */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-medium text-primary mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sessionType">Session Type</Label>
                      <Input
                        id="sessionType"
                        name="sessionType"
                        placeholder="Portrait, Event, Graduation, etc."
                        value={formData.sessionType}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your vision, preferred dates, location ideas, or any questions you have..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-2xl font-medium text-primary mb-6">Get In Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-4" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">hello@sarahchen.photography</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-4" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-4" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">San Francisco Bay Area</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-primary mb-4">Follow My Work</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent rounded-full smooth-transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent rounded-full smooth-transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent rounded-full smooth-transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="bg-accent/50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-primary mb-3">Response Time</h3>
                  <p className="text-muted-foreground">
                    I typically respond to all inquiries within 24 hours. For urgent requests, 
                    please call directly. I'm excited to hear about your photography needs!
                  </p>
                </div>

                <div className="bg-accent/50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-primary mb-3">Booking Process</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>1. Reach out with your vision and dates</p>
                    <p>2. We'll schedule a consultation call</p>
                    <p>3. Contract and retainer to secure your date</p>
                    <p>4. Session planning and preparation</p>
                    <p>5. Your amazing photo session!</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;