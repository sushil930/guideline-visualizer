import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Award, TreePine, Globe, Trophy, Target, BookOpen } from 'lucide-react';

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
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-green-600 drop-shadow-2xl">
                Learn. Play.
                <br />
                <span className="text-green-500">Save the Planet.</span>
              </h1>
              <p className="text-xl md:text-2xl text-black leading-relaxed drop-shadow-lg">
                Learn sustainability by doing—play challenges, earn points, and create real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="rounded-full bg-[#F26A55] hover:bg-[#e45d48] text-white font-semibold text-lg px-8 py-4 shadow">
                  Application
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-2 border-[#14532d] text-[#14532d] bg-transparent hover:bg-[#14532d]/5 font-semibold text-lg px-8 py-4">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Matching uploaded design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Get Involved. Save the Planet.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A gamified platform that makes environmental learning fun, making practical education 
              about becoming practical, extra and fun for students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Gamified Lessons - Green */}
            <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-0 relative overflow-hidden h-64"
                  style={{
                    backgroundImage: 'url(/character_girl_lightbulb.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}>
              <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-end">
                <div className="backdrop-blur-md bg-white/20 rounded-xl p-4 -mx-4">
                  <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">Gamified lessons</h3>
                  <p className="text-sm text-white/90 font-medium drop-shadow-lg">Participation</p>
                </div>
              </CardContent>
            </Card>

            {/* EcoWise Tasks - Teal */}
            <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-0 relative overflow-hidden h-64"
                  style={{
                    backgroundImage: 'url(/character_boy_plant.png)',
                    backgroundSize: '150%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}>
              <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-end">
                <div className="backdrop-blur-md bg-white/20 rounded-xl p-4 -mx-4">
                  <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">EcoWise</h3>
                  <p className="text-sm text-white/90 font-medium drop-shadow-lg">Procompetition</p>
                </div>
              </CardContent>
            </Card>

            {/* Competition Eco-Points - Blue */}
            <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-0 relative overflow-hidden h-64"
                  style={{
                    backgroundImage: 'url(/character_girl_books.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}>
              <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-end">
                <div className="backdrop-blur-md bg-white/20 rounded-xl p-4 -mx-4">
                  <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">Competition eco-points</h3>
                  <p className="text-sm text-white/90 font-medium drop-shadow-lg">Competitions</p>
                </div>
              </CardContent>
            </Card>

            {/* Local Community - Yellow */}
            <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-0 relative overflow-hidden h-64"
                  style={{
                    backgroundImage: 'url(/character_boy_celebration.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}>
              <CardContent className="p-8 text-center relative z-10 h-full flex flex-col justify-end">
                <div className="backdrop-blur-md bg-white/20 rounded-xl p-4 -mx-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 drop-shadow-lg">Local Community</h3>
                  <p className="text-sm text-gray-700 font-medium drop-shadow-lg">Cooperation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Why It Matters
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A gamified platform that turns environmental education into hands-on, interactive learning students genuinely enjoy.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl"
                   style={{
                     backgroundImage: 'url(/image2.jpg)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat'
                   }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Features</h2>
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
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Real-World Eco Tasks</h3>
                <p className="text-green-100 mb-4">Action challenges you can do</p>
                <div className="text-sm text-green-200">Complete impact tasks at home, in school, or locally.</div>
              </CardContent>
            </Card>
            {/* Competition Eco-Points */}
            <Card className="bg-orange-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Competition Eco-Points</h3>
                <p className="text-orange-100 mb-4">Earn & climb leaderboards</p>
                <div className="text-sm text-orange-200">Gain Eco-Points for verified sustainable actions.</div>
              </CardContent>
            </Card>
            {/* Badges & Rewards */}
            <Card className="bg-blue-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Badges & Rewards</h3>
                <p className="text-blue-100 mb-4">Collect sustainability milestones</p>
                <div className="text-sm text-blue-200">Unlock badges as you progress through eco journeys.</div>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Environmental Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join students turning learning into measurable climate action through fun challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-full">
                <Link to="/student">
                  Start Your Eco-Journey
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold text-lg px-8 py-4 rounded-full">
                <Link to="/teacher">
                  Explore Educator Tools
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm">
              © 2025 ReLeaf • Learn. Play. Save the Planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;