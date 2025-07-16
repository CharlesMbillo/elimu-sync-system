
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Heart, MessageSquare, DollarSign, Calendar, BookOpen, Award, Phone, Mail, Bell, Download, CreditCard } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ParentPortal = () => {
  const [selectedChild, setSelectedChild] = useState('aisha');

  // Sample data for parent portal
  const children = [
    {
      id: 'aisha',
      name: 'Aisha Mohamed',
      class: 'Form 4A',
      admissionNumber: 'ADM/2020/001',
      avatar: 'AM'
    },
    {
      id: 'hassan',
      name: 'Hassan Mohamed',
      class: 'Grade 5B',
      admissionNumber: 'ADM/2022/045',
      avatar: 'HM'
    }
  ];

  const selectedChildData = children.find(child => child.id === selectedChild);

  const academicProgress = {
    subjects: [
      { name: 'Mathematics', grade: 'A-', progress: 88, teacher: 'Mr. Kimani' },
      { name: 'English', grade: 'B+', progress: 82, teacher: 'Mrs. Wanjiku' },
      { name: 'Kiswahili', grade: 'A', progress: 92, teacher: 'Mr. Ochieng' },
      { name: 'Biology', grade: 'B+', progress: 85, teacher: 'Dr. Akinyi' },
      { name: 'Chemistry', grade: 'B', progress: 78, teacher: 'Mr. Hassan' }
    ],
    overallGrade: 'B+',
    position: 5,
    totalStudents: 35
  };

  const attendance = {
    thisWeek: 95,
    thisMonth: 92,
    thisTerm: 94,
    daysPresent: 47,
    daysAbsent: 3,
    daysLate: 2
  };

  const feeBalance = {
    totalFees: 45000,
    paidAmount: 30000,
    balance: 15000,
    dueDate: '2024-02-28',
    paymentHistory: [
      { date: '2024-01-15', amount: 15000, method: 'M-Pesa', reference: 'MP240115001' },
      { date: '2024-01-02', amount: 15000, method: 'Bank Transfer', reference: 'BT240102001' }
    ]
  };

  const announcements = [
    {
      title: 'Mid-term Exams Schedule Released',
      content: 'The mid-term examination timetable for Term 2 has been published. Please check your child\'s specific schedule.',
      date: '2024-01-20',
      type: 'academic'
    },
    {
      title: 'Parent-Teacher Meeting',
      content: 'Join us on February 10th for the termly parent-teacher conference. Individual appointments available.',
      date: '2024-01-18',
      type: 'event'
    },
    {
      title: 'Sports Day Registration',
      content: 'Register your child for the upcoming inter-house sports competition. Forms due by January 30th.',
      date: '2024-01-15',
      type: 'event'
    }
  ];

  const handlePayFees = () => {
    toast({
      title: "Payment Initiated",
      description: "Redirecting to M-Pesa payment gateway...",
    });
  };

  const handleSendMessage = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the class teacher",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Parent Portal</h1>
          <p className="text-gray-600">Stay connected with your child's academic journey</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Teacher
          </Button>
        </div>
      </div>

      {/* Child Selector */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            {children.map((child) => (
              <Button
                key={child.id}
                variant={selectedChild === child.id ? "default" : "outline"}
                className={`flex items-center space-x-2 ${selectedChild === child.id ? 'bg-green-600 hover:bg-green-700' : ''}`}
                onClick={() => setSelectedChild(child.id)}
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">{child.avatar}</span>
                </div>
                <div className="text-left">
                  <div className="font-medium">{child.name}</div>
                  <div className="text-xs text-gray-500">{child.class}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Overall Grade</p>
                <p className="text-2xl font-bold">{academicProgress.overallGrade}</p>
              </div>
              <Award className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Position {academicProgress.position} of {academicProgress.totalStudents}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Attendance</p>
                <p className="text-2xl font-bold">{attendance.thisMonth}%</p>
              </div>
              <Calendar className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              This month average
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Fee Balance</p>
                <p className="text-2xl font-bold">KES {feeBalance.balance.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Due: {feeBalance.dueDate}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Messages</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <MessageSquare className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Unread notifications
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="academic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="academic">Academic Progress</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="fees">Fee Payments</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="academic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Academic Performance - {selectedChildData?.name}
              </CardTitle>
              <CardDescription>
                Current term academic progress and subject-wise performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {academicProgress.subjects.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{subject.name}</h4>
                        <p className="text-sm text-gray-600">Teacher: {subject.teacher}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={subject.grade.startsWith('A') ? 'default' : 'secondary'} className="mb-1">
                          {subject.grade}
                        </Badge>
                        <div className="text-sm text-gray-600">{subject.progress}%</div>
                      </div>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Mathematics CAT 2</p>
                      <p className="text-sm text-gray-600">January 15, 2024</p>
                    </div>
                    <Badge variant="default">A-</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">English Essay</p>
                      <p className="text-sm text-gray-600">January 12, 2024</p>
                    </div>
                    <Badge variant="secondary">B+</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Biology Practical</p>
                      <p className="text-sm text-gray-600">January 10, 2024</p>
                    </div>
                    <Badge variant="default">A</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Exams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium">Mid-term Examinations</p>
                    <p className="text-sm text-gray-600">February 15-19, 2024</p>
                    <Badge variant="outline" className="mt-1">Scheduled</Badge>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="font-medium">Chemistry Practical</p>
                    <p className="text-sm text-gray-600">February 5, 2024</p>
                    <Badge variant="outline" className="mt-1">Upcoming</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-green-600" />
                Attendance Record - {selectedChildData?.name}
              </CardTitle>
              <CardDescription>
                Daily attendance tracking and statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-600">{attendance.thisWeek}%</h3>
                    <p className="text-sm text-gray-600">This Week</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-600">{attendance.thisMonth}%</h3>
                    <p className="text-sm text-gray-600">This Month</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-purple-600">{attendance.thisTerm}%</h3>
                    <p className="text-sm text-gray-600">This Term</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-medium mb-4">Attendance Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Days Present</span>
                      <span className="font-medium text-green-600">{attendance.daysPresent}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Days Absent</span>
                      <span className="font-medium text-red-600">{attendance.daysAbsent}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Days Late</span>
                      <span className="font-medium text-orange-600">{attendance.daysLate}</span>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        Excellent attendance record! Your child has maintained consistent school attendance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fees" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-orange-600" />
                Fee Payment Portal
              </CardTitle>
              <CardDescription>
                Manage school fee payments and view transaction history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Current Balance</h4>
                    <div className="text-2xl font-bold text-orange-600">
                      KES {feeBalance.balance.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600">Due: {feeBalance.dueDate}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Total Fees:</span>
                        <span>KES {feeBalance.totalFees.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Paid Amount:</span>
                        <span className="text-green-600">KES {feeBalance.paidAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium">
                        <span>Outstanding:</span>
                        <span className="text-orange-600">KES {feeBalance.balance.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={handlePayFees} className="w-full bg-green-600 hover:bg-green-700">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay via M-Pesa
                  </Button>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Payment History</h4>
                  <div className="space-y-3">
                    {feeBalance.paymentHistory.map((payment, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">KES {payment.amount.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">{payment.date}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline">{payment.method}</Badge>
                            <p className="text-xs text-gray-500 mt-1">{payment.reference}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-purple-600" />
                Communication Center
              </CardTitle>
              <CardDescription>
                Connect with teachers and school administration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Quick Contact</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" onClick={handleSendMessage}>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message Class Teacher
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Parent Meeting
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="h-4 w-4 mr-2" />
                      Email School Administration
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Recent Messages</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium">From: Mathematics Teacher</p>
                      <p className="text-sm text-gray-600">Great improvement in algebra. Keep up the good work!</p>
                      <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium">From: Class Teacher</p>
                      <p className="text-sm text-gray-600">Parent-teacher meeting scheduled for next Friday.</p>
                      <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-yellow-600" />
                School Announcements
              </CardTitle>
              <CardDescription>
                Latest news and important updates from the school
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{announcement.title}</h4>
                      <Badge variant={announcement.type === 'academic' ? 'default' : 'secondary'}>
                        {announcement.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{announcement.content}</p>
                    <p className="text-xs text-gray-500">{announcement.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ParentPortal;
