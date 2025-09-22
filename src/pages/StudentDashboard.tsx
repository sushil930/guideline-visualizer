import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Trophy, Star, Play, CheckCircle, Clock, Zap } from 'lucide-react';

const StudentDashboard = () => {
  const [completedQuizzes] = useState([
    { id: 1, title: 'Basic Math', score: 85, completed: true },
    { id: 2, title: 'Science Basics', score: 92, completed: true },
    { id: 3, title: 'Physics Fun', score: 78, completed: true },
  ]);

  const [availableQuizzes] = useState([
    { id: 4, title: 'Chemistry Adventure', difficulty: 'Medium', estimatedTime: '15 min' },
    { id: 5, title: 'Biology Basics', difficulty: 'Easy', estimatedTime: '10 min' },
    { id: 6, title: 'Advanced Math', difficulty: 'Hard', estimatedTime: '20 min' },
  ]);

  const [badges] = useState([
    { id: 1, name: 'Math Master', type: 'gold', description: 'Completed 10 math quizzes' },
    { id: 2, name: 'Science Explorer', type: 'silver', description: 'Completed 5 science quizzes' },
    { id: 3, name: 'Quick Learner', type: 'bronze', description: 'Completed first quiz' },
    { id: 4, name: 'Consistent', type: 'silver', description: '7-day learning streak' },
  ]);

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'gold': return 'bg-gold text-white shadow-lg';
      case 'silver': return 'bg-silver text-white shadow-lg';
      case 'bronze': return 'bg-bronze text-white shadow-lg';
      default: return 'bg-muted';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success/10 text-success border-success/20';
      case 'Medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'Hard': return 'bg-danger/10 text-danger border-danger/20';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Student!</span>
          </h1>
          <p className="text-muted-foreground text-lg">Continue your learning journey and earn amazing badges!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-student hover:shadow-card-hover transition-spring">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">1,250</div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </CardContent>
          </Card>

          <Card className="shadow-student hover:shadow-card-hover transition-spring">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">{completedQuizzes.length}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>

          <Card className="shadow-student hover:shadow-card-hover transition-spring">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-warning" />
              </div>
              <div className="text-2xl font-bold text-warning">{badges.length}</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </CardContent>
          </Card>

          <Card className="shadow-student hover:shadow-card-hover transition-spring">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-info/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-info" />
              </div>
              <div className="text-2xl font-bold text-info">7</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Quizzes */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  Available Quizzes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {availableQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="shadow-student hover:shadow-card-hover transition-spring cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">{quiz.title}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge className={getDifficultyColor(quiz.difficulty)}>
                              {quiz.difficulty}
                            </Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {quiz.estimatedTime}
                            </span>
                          </div>
                        </div>
                        <Button className="gradient-primary hover:shadow-card-hover transition-spring">
                          Start Quiz
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Progress Section */}
            <Card className="shadow-card mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Mathematics</span>
                    <span className="text-success">85%</span>
                  </div>
                  <Progress value={85} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Science</span>
                    <span className="text-success">72%</span>
                  </div>
                  <Progress value={72} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Physics</span>
                    <span className="text-warning">45%</span>
                  </div>
                  <Progress value={45} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Badges */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-warning" />
                  Your Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {badges.map((badge) => (
                    <div key={badge.id} className="text-center">
                      <div className={`h-16 w-16 rounded-full ${getBadgeColor(badge.type)} flex items-center justify-center mx-auto mb-2`}>
                        <Award className="h-8 w-8" />
                      </div>
                      <h4 className="font-semibold text-sm">{badge.name}</h4>
                      <p className="text-xs text-muted-foreground">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedQuizzes.slice(0, 3).map((quiz) => (
                  <div key={quiz.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{quiz.title}</div>
                      <div className="text-xs text-muted-foreground">Score: {quiz.score}%</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;