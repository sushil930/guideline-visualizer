import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Workflow, Download } from 'lucide-react';
import mermaid from 'mermaid';

const FlowchartPage = () => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
          primaryColor: 'hsl(238, 69%, 60%)',
          primaryTextColor: 'hsl(0, 0%, 100%)',
          primaryBorderColor: 'hsl(238, 69%, 50%)',
          lineColor: 'hsl(238, 69%, 60%)',
          secondaryColor: 'hsl(158, 64%, 52%)',
          tertiaryColor: 'hsl(48, 96%, 53%)',
          background: 'hsl(0, 0%, 100%)',
          mainBkg: 'hsl(0, 0%, 100%)',
          secondBkg: 'hsl(210, 40%, 96.1%)',
        }
      });

      const flowchartDiagram = `
        flowchart TD
          Start([User Visits Platform]) --> Login{Existing User?}
          
          Login -->|No| Register[Register Account]
          Login -->|Yes| UserType{User Type?}
          
          Register --> UserType
          
          UserType -->|Student| StudentDash[Student Dashboard]
          UserType -->|Teacher| TeacherDash[Teacher Dashboard]
          
          StudentDash --> ViewQuizzes[View Available Quizzes]
          ViewQuizzes --> SelectQuiz[Select Quiz]
          SelectQuiz --> TakeQuiz[Take Quiz]
          TakeQuiz --> QuizResult{Quiz Completed?}
          
          QuizResult -->|Yes| UpdateProgress[Update Progress]
          QuizResult -->|No| ContinueQuiz[Continue Quiz]
          ContinueQuiz --> TakeQuiz
          
          UpdateProgress --> CheckBadge{Badge Earned?}
          CheckBadge -->|Yes| ShowBadge[Display New Badge]
          CheckBadge -->|No| UpdateStats[Update Statistics]
          ShowBadge --> UpdateStats
          
          UpdateStats --> StudentDash
          
          TeacherDash --> ViewAnalytics[View Class Analytics]
          TeacherDash --> ManageStudents[Manage Students]
          TeacherDash --> CreateQuiz[Create New Quiz]
          
          ViewAnalytics --> ExportReport[Export Reports]
          ManageStudents --> ViewStudentProgress[View Student Progress]
          CreateQuiz --> SaveQuiz[Save Quiz]
          
          ExportReport --> TeacherDash
          ViewStudentProgress --> TeacherDash
          SaveQuiz --> TeacherDash
          
          style Start fill:#4F46E5,stroke:#4F46E5,stroke-width:2px,color:#fff
          style StudentDash fill:#10B981,stroke:#10B981,stroke-width:2px,color:#fff
          style TeacherDash fill:#10B981,stroke:#10B981,stroke-width:2px,color:#fff
          style ShowBadge fill:#FACC15,stroke:#FACC15,stroke-width:2px,color:#000
          style UpdateProgress fill:#3B82F6,stroke:#3B82F6,stroke-width:2px,color:#fff
      `;

      mermaidRef.current.innerHTML = flowchartDiagram;
      mermaid.init(undefined, mermaidRef.current);
    }
  }, []);

  const userFlows = [
    {
      title: 'Student Learning Flow',
      description: 'How students interact with quizzes and earn badges',
      steps: [
        'Access student dashboard',
        'Browse available quizzes',
        'Select quiz by difficulty',
        'Complete quiz questions',
        'Receive immediate feedback',
        'Earn points and badges',
        'Track learning progress'
      ]
    },
    {
      title: 'Teacher Management Flow',
      description: 'How teachers monitor and manage their students',
      steps: [
        'Access teacher dashboard',
        'View class performance analytics',
        'Monitor individual student progress',
        'Create and assign new quizzes',
        'Generate progress reports',
        'Export data for analysis',
        'Adjust teaching strategies'
      ]
    },
    {
      title: 'Quiz Creation Flow',
      description: 'Process for creating and deploying new quizzes',
      steps: [
        'Define learning objectives',
        'Create quiz questions',
        'Set difficulty levels',
        'Add multimedia content',
        'Configure scoring system',
        'Test quiz functionality',
        'Publish to students'
      ]
    }
  ];

  const systemComponents = [
    {
      name: 'Frontend Interface',
      description: 'React-based user interface optimized for rural devices',
      technologies: ['React', 'Tailwind CSS', 'Responsive Design']
    },
    {
      name: 'Authentication System',
      description: 'Secure login and user management',
      technologies: ['JWT Tokens', 'Role-based Access', 'Session Management']
    },
    {
      name: 'Quiz Engine',
      description: 'Interactive quiz system with real-time feedback',
      technologies: ['Question Pool', 'Scoring Algorithm', 'Progress Tracking']
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comprehensive reporting and data visualization',
      technologies: ['Charts.js', 'Data Export', 'Performance Metrics']
    },
    {
      name: 'Gamification Layer',
      description: 'Badge system and achievement tracking',
      technologies: ['Point System', 'Achievement Engine', 'Leaderboards']
    },
    {
      name: 'Offline Support',
      description: 'Limited functionality when connectivity is poor',
      technologies: ['Service Workers', 'Local Storage', 'Sync Mechanisms']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              System <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Flowchart</span>
            </h1>
            <p className="text-muted-foreground text-lg">Understand the user journey and system architecture</p>
          </div>
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/5 mt-4 md:mt-0">
            <Download className="mr-2 h-4 w-4" />
            Export Flowchart
          </Button>
        </div>

        {/* Mermaid Flowchart */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Workflow className="h-5 w-5 text-primary" />
              User Journey Flow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-6 rounded-lg border overflow-x-auto">
              <div ref={mermaidRef} className="flex justify-center min-w-full" />
            </div>
          </CardContent>
        </Card>

        {/* User Flows */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {userFlows.map((flow, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-spring">
              <CardHeader>
                <CardTitle className="text-lg">{flow.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{flow.description}</p>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {flow.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3 text-sm">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary mt-0.5 flex-shrink-0">
                        {stepIndex + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Architecture */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>System Architecture Components</CardTitle>
            <p className="text-muted-foreground">Core components that power the gamified learning platform</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <div key={index} className="p-6 rounded-lg border border-border hover:border-primary/20 transition-smooth">
                  <h3 className="font-semibold mb-2 text-primary">{component.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{component.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Flow Information */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle>Data Flow & Integration Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-secondary">Student Data Flow</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    Quiz responses captured in real-time
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    Progress automatically synced to dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    Badge achievements triggered by milestones
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    Performance data aggregated for analytics
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-primary">Teacher Data Flow</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Class performance metrics calculated daily
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Individual student reports generated
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Engagement analytics updated continuously
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Export functionality for external analysis
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlowchartPage;