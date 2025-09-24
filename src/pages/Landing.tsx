import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Award, BookOpen, Target, Zap, Recycle, TreePine } from 'lucide-react';
import heroImage from '@/assets/hero-environmental-learning.jpg';
import environmentalIcons from '@/assets/environmental-icons.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    Environmental Education
                  </span>
                  <br />
                  <span className="text-foreground">Through Gamified Learning</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Empowering students to become environmental stewards through engaging, interactive learning experiences. Discover sustainability, climate science, and conservation through games and real-world applications.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="hero" className="text-lg">
                  <Link to="/student">
                    <Leaf className="mr-2 h-5 w-5" />
                    Start Learning
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 text-lg">
                  <Link to="/teacher">
                    <Users className="mr-2 h-5 w-5" />
                    Teacher Hub
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Children learning about environment in nature"
                  className="w-full h-auto rounded-lg shadow-card-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full gradient-primary opacity-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full gradient-secondary opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Environmental Stewardship</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform transforms environmental education with interactive experiences that inspire students to protect our planet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-card-hover transition-spring">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Climate Science</h3>
                <p className="text-muted-foreground">
                  Interactive modules covering climate change, renewable energy, and sustainable practices through engaging simulations and games.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-spring">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-6">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Conservation Action</h3>
                <p className="text-muted-foreground">
                  Real-world projects and challenges that teach biodiversity conservation, waste reduction, and environmental protection strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-spring">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-warning to-info flex items-center justify-center mx-auto mb-6">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ecosystem Explorer</h3>
                <p className="text-muted-foreground">
                  Virtual field trips and ecosystem simulations that bring nature into the classroom for immersive learning experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Our Planet?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the next generation of environmental stewards and start your journey toward sustainable living and climate action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="student" className="text-lg">
              <Link to="/student">
                Explore Nature Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg">
              <Link to="/teacher">
                Teacher Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;