import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Video, Phone, CheckCircle, XCircle, Clock as ClockIcon } from 'lucide-react';

const AllInterviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const interviews = [
    {
      id: 1,
      candidate: 'John Doe',
      position: 'Frontend Developer',
      date: '2024-01-10',
      time: '10:00 AM',
      type: 'video',
      status: 'completed',
      result: 'passed'
    },
    {
      id: 2,
      candidate: 'Jane Smith',
      position: 'Backend Developer',
      date: '2024-01-12',
      time: '2:00 PM',
      type: 'phone',
      status: 'completed',
      result: 'failed'
    },
    {
      id: 3,
      candidate: 'Mike Johnson',
      position: 'Full Stack Developer',
      date: '2024-01-15',
      time: '11:30 AM',
      type: 'video',
      status: 'upcoming'
    },
    {
      id: 4,
      candidate: 'Sarah Wilson',
      position: 'UI/UX Designer',
      date: '2024-01-08',
      time: '3:00 PM',
      type: 'video',
      status: 'completed',
      result: 'passed'
    },
    {
      id: 5,
      candidate: 'David Brown',
      position: 'DevOps Engineer',
      date: '2024-01-16',
      time: '1:00 PM',
      type: 'phone',
      status: 'upcoming'
    }
  ];

  const getStatusIcon = (status: string, result?: string) => {
    if (status === 'completed') {
      return result === 'passed' ? (
        <CheckCircle className="h-5 w-5 text-green-600" />
      ) : (
        <XCircle className="h-5 w-5 text-red-600" />
      );
    }
    return <ClockIcon className="h-5 w-5 text-yellow-600" />;
  };

  const getStatusText = (status: string, result?: string) => {
    if (status === 'completed') {
      return result === 'passed' ? 'Passed' : 'Failed';
    }
    return 'Upcoming';
  };

  const filteredInterviews = interviews.filter(interview => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'completed') return interview.status === 'completed';
    if (activeFilter === 'upcoming') return interview.status === 'upcoming';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Interviews</h1>
          <p className="text-gray-600">View and manage all your interview sessions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Export Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-gray-500">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">18</div>
            <p className="text-xs text-gray-500">72% success rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">7</div>
            <p className="text-xs text-gray-500">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">5</div>
            <p className="text-xs text-gray-500">20% failure rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <Button
          variant={activeFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setActiveFilter('all')}
        >
          All
        </Button>
        <Button
          variant={activeFilter === 'upcoming' ? 'default' : 'outline'}
          onClick={() => setActiveFilter('upcoming')}
        >
          Upcoming
        </Button>
        <Button
          variant={activeFilter === 'completed' ? 'default' : 'outline'}
          onClick={() => setActiveFilter('completed')}
        >
          Completed
        </Button>
      </div>

      {/* Interviews List */}
      <Card>
        <CardHeader>
          <CardTitle>Interview History</CardTitle>
          <CardDescription>
            Complete list of all interview sessions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredInterviews.map((interview) => (
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
                  <div className="flex items-center gap-2">
                    {getStatusIcon(interview.status, interview.result)}
                    <span className="text-sm font-medium">
                      {getStatusText(interview.status, interview.result)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {interview.status === 'upcoming' && (
                      <Button size="sm">
                        Join
                      </Button>
                    )}
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

export default AllInterviews; 