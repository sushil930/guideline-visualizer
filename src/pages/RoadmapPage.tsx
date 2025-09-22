import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Download } from 'lucide-react';
import mermaid from 'mermaid';

const RoadmapPage = () => {
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

      const roadmapDiagram = `
        graph TD
          A[Platform Launch] --> B[Student Registration]
          A --> C[Teacher Registration]
          
          B --> D[Basic Math Quizzes]
          B --> E[Science Fundamentals]
          B --> F[Physics Basics]
          
          D --> G[Advanced Math]
          E --> H[Chemistry Adventures]
          F --> I[Physics Experiments]
          
          G --> J[Math Mastery Badge]
          H --> K[Science Explorer Badge]
          I --> L[Physics Pro Badge]
          
          C --> M[Dashboard Setup]
          M --> N[Student Progress Tracking]
          N --> O[Analytics & Reports]
          
          O --> P[Advanced Analytics]
          J --> Q[Platform Completion]
          K --> Q
          L --> Q
          P --> Q
          
          style A fill:#4F46E5,stroke:#4F46E5,stroke-width:2px,color:#fff
          style Q fill:#10B981,stroke:#10B981,stroke-width:2px,color:#fff
          style J fill:#FACC15,stroke:#FACC15,stroke-width:2px,color:#000
          style K fill:#FACC15,stroke:#FACC15,stroke-width:2px,color:#000
          style L fill:#FACC15,stroke:#FACC15,stroke-width:2px,color:#000
      `;

      mermaidRef.current.innerHTML = roadmapDiagram;
      mermaid.init(undefined, mermaidRef.current);
    }
  }, []);

  const milestones = [
    {
      phase: 'Phase 1: Foundation',
      duration: '2 weeks',
      items: ['Platform setup', 'User authentication', 'Basic dashboard'],
      status: 'completed'
    },
    {
      phase: 'Phase 2: Core Features',
      duration: '3 weeks', 
      items: ['Quiz system', 'Badge mechanics', 'Progress tracking'],
      status: 'in-progress'
    },
    {
      phase: 'Phase 3: Advanced Features',
      duration: '2 weeks',
      items: ['Analytics dashboard', 'Reporting system', 'Multilingual support'],
      status: 'upcoming'
    },
    {
      phase: 'Phase 4: Optimization',
      duration: '1 week',
      items: ['Performance optimization', 'Offline capabilities', 'Mobile responsiveness'],
      status: 'upcoming'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success/10 text-success border-success/20';
      case 'in-progress': return 'bg-warning/10 text-warning border-warning/20';
      case 'upcoming': return 'bg-info/10 text-info border-info/20';
      default: return 'bg-muted';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'upcoming': return 'Upcoming';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Development <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Roadmap</span>
            </h1>
            <p className="text-muted-foreground text-lg">Track our progress in building the gamified learning platform</p>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 mt-4 md:mt-0">
            <Download className="mr-2 h-4 w-4" />
            Export Roadmap
          </Button>
        </div>

        {/* Mermaid Diagram */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Platform Development Flow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-6 rounded-lg border overflow-x-auto">
              <div ref={mermaidRef} className="flex justify-center min-w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <div className="grid md:grid-cols-2 gap-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-spring">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{milestone.phase}</CardTitle>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(milestone.status)}`}>
                    {getStatusText(milestone.status)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Duration: {milestone.duration}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {milestone.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <Card className="shadow-card mt-8">
          <CardHeader>
            <CardTitle>Key Platform Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">📚</span>
                </div>
                <h3 className="font-semibold mb-2">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">Gamified quizzes and activities designed for rural students with limited connectivity</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">Comprehensive analytics for teachers to monitor student engagement and performance</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-warning to-gold flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🏆</span>
                </div>
                <h3 className="font-semibold mb-2">Achievement System</h3>
                <p className="text-sm text-muted-foreground">Motivational badges and rewards to encourage continuous learning and skill development</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoadmapPage;