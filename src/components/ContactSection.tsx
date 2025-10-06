
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "[Success message title]",
        description: "[Success message description]",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="section-heading text-center">[Contact heading]</h2>
          <p className="section-subheading text-center mx-auto">
            [Contact section subtitle - call to action]
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-medium mb-6">[Form heading]</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input 
                      name="name" 
                      placeholder="[Name field placeholder]" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="[Email field placeholder]" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                    <Input 
                      name="subject" 
                      placeholder="[Subject field placeholder]" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                    />
                    <Textarea 
                      name="message" 
                      placeholder="[Message field placeholder]" 
                      rows={6} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '[Sending...]' : '[Send button]'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col justify-between">
              <Card className="mb-6">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-medium mb-6">[Contact info heading]</h3>
                  <div className="space-y-6">
                    <ContactItem 
                      icon={<Mail className="h-6 w-6" />} 
                      title="[Email label]" 
                      content="example@email.com" 
                      href="mailto:example@email.com" 
                    />
                    <ContactItem 
                      icon={<Phone className="h-6 w-6" />} 
                      title="[Phone label]" 
                      content="[Phone number]" 
                      href="tel:+972500000000" 
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-medium mb-6">[Social media heading]</h3>
                  <div className="flex space-x-4">
                    <SocialLink 
                      href="#" 
                      icon={<Linkedin className="h-5 w-5" />} 
                      label="LinkedIn" 
                    />
                    <SocialLink 
                      href="#" 
                      icon={<Instagram className="h-5 w-5" />} 
                      label="Instagram" 
                    />
                    <SocialLink 
                      href="#" 
                      icon={<Facebook className="h-5 w-5" />} 
                      label="Facebook" 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  href: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="bg-primary/10 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <a 
          href={href} 
          className="text-muted-foreground hover:text-primary hover:underline transition-colors"
        >
          {content}
        </a>
      </div>
    </div>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
}) => {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default ContactSection;
