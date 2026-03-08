import SEO from "@/components/SEO";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  company: z.string().trim().max(200, "Company name is too long").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <SEO title="Contact Us" description="Get in touch with 3FACTOR for a free cybersecurity consultation. Schedule a discovery call to discuss compliance, vCISO, and cloud security needs." canonical="https://threefactor-glow-web.lovable.app/contact" />
      <Navigation />

      <main className="pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-sm font-mono uppercase tracking-widest" style={{ color: "#F36F21" }}>Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4" style={{ color: "#3B3B39" }}>
                Let's Start a Conversation
              </h1>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#646464" }}>
                Ready to elevate your security posture? Get in touch with our team to discuss your unique challenges.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="p-8" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                <h2 className="text-2xl font-semibold mb-6" style={{ color: "#646464" }}>
                  Send us a message
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: "#1a1a1a" }}>Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                             className="border-gray-300 focus:border-gray-500" style={{ color: "#1a1a1a" }}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: "#1a1a1a" }}>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@company.com"
                               className="border-gray-300 focus:border-gray-500" style={{ color: "#1a1a1a" }}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: "#1a1a1a" }}>Company</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company name"
                              className="border-gray-300 focus:border-gray-500" style={{ color: "#1a1a1a" }}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: "#1a1a1a" }}>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your security challenges..."
                              className="border-gray-300 focus:border-gray-500 min-h-32 resize-none" style={{ color: "#1a1a1a" }}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full text-white font-semibold"
                      style={{ backgroundColor: "#3B3B39" }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="p-8" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                  <h2 className="text-2xl font-semibold mb-6" style={{ color: "#646464" }}>
                    Get in touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(243,111,33,0.15)" }}>
                        <Mail className="w-6 h-6" style={{ color: "#F36F21" }} />
                      </div>
                      <div>
                        <h3 className="font-medium" style={{ color: "#646464" }}>Email</h3>
                        <p style={{ color: "#1a1a1a" }}>contact@3factor.io</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(243,111,33,0.15)" }}>
                        <Phone className="w-6 h-6" style={{ color: "#F36F21" }} />
                      </div>
                      <div>
                        <h3 className="font-medium" style={{ color: "#646464" }}>Phone</h3>
                        <p style={{ color: "#1a1a1a" }}>+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(243,111,33,0.15)" }}>
                        <MapPin className="w-6 h-6" style={{ color: "#F36F21" }} />
                      </div>
                      <div>
                        <h3 className="font-medium" style={{ color: "#646464" }}>Location</h3>
                        <p style={{ color: "#1a1a1a" }}>
                          Serving clients globally<br />
                          Remote-first consultancy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "#646464" }}>Response Time</h3>
                  <p className="text-sm" style={{ color: "#1a1a1a" }}>
                    We typically respond within 24 hours during business days. For urgent security matters, please indicate the urgency in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
