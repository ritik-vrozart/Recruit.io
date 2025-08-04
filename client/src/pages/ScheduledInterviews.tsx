import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Video, Phone } from 'lucide-react';

const ScheduledInterviews: React.FC = () => {
  const interviews = [
    {
      id: 1,
      candidate: 'John Doe',
      position: 'Frontend Developer',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'video',
      status: 'upcoming'
    },
    {
      id: 2,
      candidate: 'Jane Smith',
      position: 'Backend Developer',
      date: '2024-01-16',
      time: '2:00 PM',
      type: 'phone',
      status: 'upcoming'
    },
    {
      id: 3,
      candidate: 'Mike Johnson',
      position: 'Full Stack Developer',
      date: '2024-01-17',
      time: '11:30 AM',
      type: 'video',
      status: 'upcoming'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Scheduled Interviews</h1>
          <p className="text-gray-600">Manage your upcoming interview sessions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Schedule New Interview
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Scheduled</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Interviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Video Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500">Scheduled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Phone Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-gray-500">Scheduled</p>
          </CardContent>
        </Card>
      </div>

      {/* Interviews List */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Interviews</CardTitle>
          <CardDescription>
            Your scheduled interview sessions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interviews.map((interview) => (
              <div
                key={interview.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {interview.type === 'video' ? (
                      <Video className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Phone className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{interview.candidate}</h3>
                    <p className="text-sm text-gray-600">{interview.position}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    {interview.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {interview.time}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button size="sm">
                      Join
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduledInterviews; 