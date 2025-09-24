import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Award, BookOpen, Target, Zap, Recycle, TreePine, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-environmental-learning.jpg';
import environmentalIcons from '@/assets/environmental-icons.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={{
        // Ensure the file extension matches the asset in /public
        backgroundImage: 'url(/background_herosection.png)',
        backgroundSize: '98% 105%', // Stretch horizontally to full width, vertically a bit more
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left max-w-2xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Environmental Stewardship</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform transforms environmental education with interactive experiences that inspire students to protect our planet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gamified Lessons */}
            <Card className="bg-blue-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Gamified Lessons</h3>
                <p className="text-blue-100 mb-4">Story-driven sustainability quests</p>
                <div className="text-sm text-blue-200">Turn topics into interactive learning adventures.</div>
              </CardContent>
            </Card>
            {/* Real-World Eco Tasks */}
            <Card className="bg-green-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
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
            {/* Competition Eco-Points */}
            <Card className="bg-orange-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
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
            {/* Badges & Rewards */}
            <Card className="bg-blue-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
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

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        {/* Background Globe */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4">
          <div className="h-80 w-80 rounded-full bg-gradient-to-br from-green-400 to-blue-500 opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Impact</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <span className="text-lg font-medium text-gray-600">Student</span>
              <span className="text-lg font-medium text-gray-600">School</span>
              <span className="text-lg font-medium text-gray-600">Family</span>
              <span className="text-lg font-medium text-gray-600">Community</span>
              <span className="text-lg font-medium text-gray-600">Planet</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-blue-500 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
                Student
              </Button>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-green-500 mx-auto mb-3 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
                School
              </Button>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gray-700 mx-auto mb-3 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <Button className="bg-gray-700 hover:bg-gray-800 text-white rounded-full px-6">
                Family
              </Button>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-green-600 mx-auto mb-3 flex items-center justify-center">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
                Community
              </Button>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gray-900 mx-auto mb-3 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <Button className="bg-gray-900 hover:bg-black text-white rounded-full px-6">
                Planet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
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