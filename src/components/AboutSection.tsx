
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="section-heading text-center">About Me</h2>
          <p className="section-subheading text-center mx-auto">
            With a passion for words and a talent for persuasive communication, I help brands connect with their audience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-medium">My Background</h3>
              <p>
                I'm Amit Gordon, a 27-year-old copywriter with a knack for creating engaging content that resonates with audiences. 
                With over 5 years of experience in the industry, I've developed a deep understanding of how to craft messages that 
                not only capture attention but also drive action.
              </p>
              <p>
                My journey into copywriting began with a love for storytelling and a degree in Communications. Since then, 
                I've worked with brands across various industries, helping them find their voice and connect with their target markets.
              </p>
              <p>
                I believe in the power of words to transform businesses, and I'm committed to delivering copy that not only 
                sounds good but also achieves results.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium">My Approach</h3>
              <p>
                Every brand has a unique story to tell. I take the time to understand your business, your audience, 
                and your goals before putting pen to paper (or fingers to keyboard).
              </p>
              <p>
                My process involves thorough research, strategic thinking, and creative execution to ensure that 
                every piece of copy I deliver is tailored to your specific needs and objectives.
              </p>
              <p>
                Whether you're looking to launch a new product, revamp your website, or strengthen your brand messaging, 
                I'm here to help you communicate effectively and authentically.
              </p>
            </div>
          </div>

          <Separator className="my-12" />
          
          <h3 className="text-2xl font-medium text-center mb-10">My Skills & Expertise</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              title="Website Copy" 
              description="Engaging and conversion-focused copy that guides visitors through your site and encourages them to take action."
            />
            <SkillCard 
              title="Ad Copywriting" 
              description="Attention-grabbing headlines and compelling calls-to-action that drive clicks and conversions."
            />
            <SkillCard 
              title="Content Marketing" 
              description="Blog posts, articles, and other content that establishes your brand as an authority in your industry."
            />
            <SkillCard 
              title="Email Campaigns" 
              description="Personalized and persuasive email copy that nurtures leads and drives sales."
            />
            <SkillCard 
              title="Brand Messaging" 
              description="Consistent and authentic brand voice that resonates with your target audience."
            />
            <SkillCard 
              title="Social Media Content" 
              description="Engaging posts that spark conversation and build community around your brand."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h4 className="text-lg font-medium mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
