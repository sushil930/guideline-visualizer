import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, BookOpen, TrendingUp, Download, Award, Target, Activity } from 'lucide-react';

const TeacherDashboard = () => {
  const classPerformanceData = [
    { subject: 'Math', average: 85, completed: 45, total: 50 },
    { subject: 'Science', average: 78, completed: 42, total: 50 },
    { subject: 'Physics', average: 72, completed: 38, total: 50 },
    { subject: 'Chemistry', average: 68, completed: 35, total: 50 },
  ];

  const progressData = [
    { week: 'Week 1', completion: 65 },
    { week: 'Week 2', completion: 72 },
    { week: 'Week 3', completion: 78 },
    { week: 'Week 4', completion: 85 },
  ];

  const engagementData = [
    { name: 'Highly Engaged', value: 35, color: 'hsl(var(--success))' },
    { name: 'Moderately Engaged', value: 45, color: 'hsl(var(--warning))' },
    { name: 'Low Engagement', value: 20, color: 'hsl(var(--danger))' },
  ];

  const studentData = [
    { id: 1, name: 'Alice Johnson', totalPoints: 1250, quizzesCompleted: 12, averageScore: 88, lastActive: '2 hours ago' },
    { id: 2, name: 'Bob Smith', totalPoints: 1180, quizzesCompleted: 11, averageScore: 85, lastActive: '5 hours ago' },
    { id: 3, name: 'Carol Davis', totalPoints: 1320, quizzesCompleted: 13, averageScore: 91, lastActive: '1 hour ago' },
    { id: 4, name: 'David Wilson', totalPoints: 950, quizzesCompleted: 9, averageScore: 79, lastActive: '1 day ago' },
    { id: 5, name: 'Emma Brown', totalPoints: 1420, quizzesCompleted: 15, averageScore: 94, lastActive: '30 min ago' },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-success';
    if (score >= 80) return 'text-warning';
    return 'text-danger';
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Teacher <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-muted-foreground text-lg">Monitor student progress and class performance</p>
          </div>
          <Button className="gradient-secondary hover:shadow-card-hover transition-spring mt-4 md:mt-0">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-card-hover transition-spring border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">50</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-spring border-success/20">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">85%</div>
              <div className="text-sm text-muted-foreground">Avg Completion</div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-spring border-warning/20">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-warning" />
              </div>
              <div className="text-2xl font-bold text-warning">78%</div>
              <div className="text-sm text-muted-foreground">Avg Score</div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-spring border-info/20">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-info/10 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6 text-info" />
              </div>
              <div className="text-2xl font-bold text-info">92%</div>
              <div className="text-sm text-muted-foreground">Active This Week</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Class Performance Chart */}
            <Card className="shadow-card border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Class Performance by Subject
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={classPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="subject" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="average" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Progress Trend */}
            <Card className="shadow-card border-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-secondary" />
                  Weekly Progress Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="completion" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Student Engagement */}
            <Card className="shadow-card border-warning/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-warning" />
                  Student Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={engagementData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {engagementData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.name}</span>
                      </div>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Create New Quiz
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Students
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Export Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Student Performance Table */}
        <Card className="shadow-card mt-8 border-muted/50">
          <CardHeader>
            <CardTitle>Student Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium">Student Name</th>
                    <th className="text-left py-3 px-4 font-medium">Total Points</th>
                    <th className="text-left py-3 px-4 font-medium">Quizzes</th>
                    <th className="text-left py-3 px-4 font-medium">Avg Score</th>
                    <th className="text-left py-3 px-4 font-medium">Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((student) => (
                    <tr key={student.id} className="border-b border-border/50 hover:bg-muted/30 transition-smooth">
                      <td className="py-3 px-4 font-medium">{student.name}</td>
                      <td className="py-3 px-4">{student.totalPoints.toLocaleString()}</td>
                      <td className="py-3 px-4">{student.quizzesCompleted}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${getScoreColor(student.averageScore)}`}>
                          {student.averageScore}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{student.lastActive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;