import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Award, BookOpen, Target, Zap } from 'lucide-react';

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
                    Gamified Learning
                  </span>
                  <br />
                  <span className="text-foreground">for Rural Education</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Empowering students and teachers with an engaging, accessible platform designed for rural communities. Learn through games, track progress, and achieve more together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="hero" className="text-lg">
                  <Link to="/student">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Try as Student
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 text-lg">
                  <Link to="/teacher">
                    <Users className="mr-2 h-5 w-5" />
                    Teacher Dashboard
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="shadow-student hover:shadow-card-hover transition-spring">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                        <Award className="h-6 w-6 text-success" />
                      </div>
                      <h3 className="font-semibold text-success">Achievement System</h3>
                      <p className="text-sm text-muted-foreground mt-2">Earn badges and rewards</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-card hover:shadow-card-hover transition-spring">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-primary">Progress Tracking</h3>
                      <p className="text-sm text-muted-foreground mt-2">Monitor learning journey</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-card hover:shadow-card-hover transition-spring col-span-2">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-6 w-6 text-warning" />
                      </div>
                      <h3 className="font-semibold">Interactive Learning</h3>
                      <p className="text-sm text-muted-foreground mt-2">Engaging quizzes and activities designed for rural students</p>
                    </CardContent>
                  </Card>
                </div>
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
              Built for <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Rural Communities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed with rural educators and students in mind, focusing on accessibility, engagement, and real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-card-hover transition-spring">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Student-Centered</h3>
                <p className="text-muted-foreground">
                  Gamified learning experiences that make STEM subjects engaging and accessible for rural students with limited resources.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-spring">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Teacher Tools</h3>
                <p className="text-muted-foreground">
                  Professional dashboards with analytics and reports to help teachers track progress and improve learning outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-spring">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-warning to-info flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Offline-Friendly</h3>
                <p className="text-muted-foreground">
                  Lightweight design optimized for low-bandwidth environments, ensuring learning continues even with limited connectivity.
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
            Ready to Transform Rural Education?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students and teachers already using our platform to achieve better learning outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="student" className="text-lg">
              <Link to="/student">
                Start Learning Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg">
              <Link to="/teacher">
                View Teacher Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;