
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#E8DCC4] pt-12 md:pt-16 pb-12 md:pb-16">
      <div className="container-custom">
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ContactItem 
              icon={<Mail className="h-7 w-7" />} 
              title="Email" 
              content="yoyogordy6@gmail.com" 
              href="mailto:yoyogordy6@gmail.com" 
            />
            <ContactItem 
              icon={<Phone className="h-7 w-7" />} 
              title="Phone" 
              content="+972 50 333 5292" 
              href="tel:+972503335292" 
            />
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-medium mb-6 text-muted-foreground">Connect with me</h3>
            <div className="flex justify-center gap-4">
              <SocialLink 
                href="https://www.linkedin.com/in/amit-gordon1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                icon={<Linkedin className="h-6 w-6" />} 
                label="LinkedIn" 
              />
              <SocialLink 
                href="https://www.instagram.com/amit_gordon?igsh=dDZmamI5NngxZG00&utm_source=qr" 
                icon={<Instagram className="h-6 w-6" />} 
                label="Instagram" 
              />
              <SocialLink 
                href="https://www.facebook.com/share/19V4ScBYr4/?mibextid=wwXIfr" 
                icon={<Facebook className="h-6 w-6" />} 
                label="Facebook" 
              />
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
    <a 
      href={href}
      className="group flex flex-col items-center text-center p-8 rounded-2xl bg-card hover:bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="bg-primary/10 group-hover:bg-primary/20 p-4 rounded-2xl mb-4 transition-colors">
        <div className="text-primary">
          {icon}
        </div>
      </div>
      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-2">{title}</h4>
      <p className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors" dir="ltr">
        {content}
      </p>
    </a>
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
      className="group flex items-center justify-center bg-card hover:bg-primary/10 border border-border/50 hover:border-primary/30 w-14 h-14 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-muted-foreground group-hover:text-primary transition-colors">
        {icon}
      </div>
    </a>
  );
};

export default ContactSection;
