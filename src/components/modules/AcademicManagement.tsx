
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, BookOpen, Users, Award, TrendingUp, FileText, CheckCircle, AlertCircle, Star } from "lucide-react";

const AcademicManagement = () => {
  const [selectedTerm, setSelectedTerm] = useState('term2-2024');
  
  // Sample academic data
  const cbcLearningAreas = [
    { name: 'English', progress: 85, assessment: 'A' },
    { name: 'Kiswahili', progress: 78, assessment: 'B+' },
    { name: 'Mathematics', progress: 92, assessment: 'A' },
    { name: 'Science & Technology', progress: 88, assessment: 'A-' },
    { name: 'Social Studies', progress: 80, assessment: 'B+' },
    { name: 'Creative Arts', progress: 95, assessment: 'A' },
    { name: 'Physical Education', progress: 90, assessment: 'A' }
  ];

  const kcseSubjects = [
    { name: 'Mathematics', teacher: 'Mr. Kimani', students: 35, avgGrade: 'B+' },
    { name: 'English', teacher: 'Mrs. Wanjiku', students: 35, avgGrade: 'A-' },
    { name: 'Kiswahili', teacher: 'Mr. Ochieng', students: 35, avgGrade: 'B' },
    { name: 'Biology', teacher: 'Dr. Akinyi', students: 28, avgGrade: 'B+' },
    { name: 'Chemistry', teacher: 'Mr. Hassan', students: 25, avgGrade: 'B' },
    { name: 'Physics', teacher: 'Mrs. Muthoni', students: 22, avgGrade: 'B+' },
    { name: 'Geography', teacher: 'Mr. Kiprotich', students: 30, avgGrade: 'A-' },
    { name: 'History', teacher: 'Mrs. Nyong\'o', students: 28, avgGrade: 'B+' }
  ];

  const upcomingExams = [
    { title: 'Grade 6 Assessment', date: '2024-02-15', type: 'CBC', status: 'upcoming' },
    { title: 'Form 3 CAT 1', date: '2024-02-20', type: 'KCSE', status: 'upcoming' },
    { title: 'KCSE Mocks', date: '2024-03-01', type: 'KCSE', status: 'scheduled' },
    { title: 'CBC End of Term', date: '2024-03-15', type: 'CBC', status: 'scheduled' }
  ];

  const teacherPerformance = [
    { name: 'Sarah Wanjiku', subject: 'Mathematics', performance: 95, students: 120 },
    { name: 'David Kimani', subject: 'English', performance: 88, students: 100 },
    { name: 'Grace Achieng', subject: 'Science', performance: 92, students: 85 },
    { name: 'James Mutua', subject: 'Social Studies', performance: 85, students: 90 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Academic Management</h1>
          <p className="text-gray-600">CBC & KCSE curriculum management with KNEC integration</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedTerm} onValueChange={setSelectedTerm}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="term1-2024">Term 1, 2024</SelectItem>
              <SelectItem value="term2-2024">Term 2, 2024</SelectItem>
              <SelectItem value="term3-2024">Term 3, 2024</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-green-600 hover:bg-green-700">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Academic Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">CBC Students</p>
                <p className="text-2xl font-bold">847</p>
              </div>
              <BookOpen className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Grades 1-6 enrolled
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">KCSE Students</p>
                <p className="text-2xl font-bold">400</p>
              </div>
              <Award className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Forms 1-4 enrolled
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Active Teachers</p>
                <p className="text-2xl font-bold">89</p>
              </div>
              <Users className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              TSC registered educators
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Avg Performance</p>
                <p className="text-2xl font-bold">87%</p>
              </div>
              <TrendingUp className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Overall school performance
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="cbc" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="cbc">CBC Progress</TabsTrigger>
          <TabsTrigger value="kcse">KCSE Classes</TabsTrigger>
          <TabsTrigger value="exams">Examinations</TabsTrigger>
          <TabsTrigger value="teachers">Teacher Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="cbc" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                CBC Learning Areas Progress
              </CardTitle>
              <CardDescription>
                Competency-based curriculum assessment tracking for primary school
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {cbcLearningAreas.map((area, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{area.name}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant={area.assessment.startsWith('A') ? 'default' : 'secondary'}>
                          {area.assessment}
                        </Badge>
                        <span className="text-sm text-gray-600">{area.progress}%</span>
                      </div>
                    </div>
                    <Progress value={area.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>CBC Assessment Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium">Exceeding Expectations</p>
                      <p className="text-sm text-gray-600">Above 80%</p>
                    </div>
                    <Badge variant="default">234 students</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">Meeting Expectations</p>
                      <p className="text-sm text-gray-600">60-79%</p>
                    </div>
                    <Badge variant="secondary">456 students</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="font-medium">Approaching Expectations</p>
                      <p className="text-sm text-gray-600">40-59%</p>
                    </div>
                    <Badge variant="outline">123 students</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium">Below Expectations</p>
                      <p className="text-sm text-gray-600">Below 40%</p>
                    </div>
                    <Badge variant="destructive">34 students</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CBC Learning Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm">Science Project Fair</span>
                    </div>
                    <Badge variant="outline">Tomorrow</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Digital Literacy Assessment</span>
                    </div>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      <span className="text-sm">Art & Craft Exhibition</span>
                    </div>
                    <Badge variant="default">Next Week</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="kcse" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                KCSE Subject Performance
              </CardTitle>
              <CardDescription>
                8-4-4 system subject tracking and KNEC preparation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {kcseSubjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{subject.name}</h4>
                        <p className="text-sm text-gray-600">{subject.teacher}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{subject.students} students</Badge>
                        <Badge variant={subject.avgGrade.startsWith('A') ? 'default' : 'secondary'}>
                          Avg: {subject.avgGrade}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>KNEC Integration Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Student Registration</span>
                    </div>
                    <Badge variant="default">Connected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Exam Timetables</span>
                    </div>
                    <Badge variant="default">Synced</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                      <span>Results Upload</span>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form 4 KCSE Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-600">156</h3>
                    <p className="text-sm text-gray-600">Form 4 Candidates</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 border rounded-lg">
                      <h4 className="font-bold text-green-600">89%</h4>
                      <p className="text-xs text-gray-600">Mock Pass Rate</p>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <h4 className="font-bold text-orange-600">45</h4>
                      <p className="text-xs text-gray-600">Days to KCSE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="exams" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Examinations</CardTitle>
              <CardDescription>Scheduled assessments and national exams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingExams.map((exam, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        exam.status === 'upcoming' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}></div>
                      <div>
                        <h4 className="font-medium">{exam.title}</h4>
                        <p className="text-sm text-gray-600">{exam.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={exam.type === 'CBC' ? 'default' : 'secondary'}>
                        {exam.type}
                      </Badge>
                      <Badge variant="outline">{exam.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teachers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Teacher Performance Analytics</CardTitle>
              <CardDescription>Teaching effectiveness and student outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {teacherPerformance.map((teacher, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-medium">{teacher.name}</h4>
                        <p className="text-sm text-gray-600">{teacher.subject}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{teacher.performance}%</div>
                        <div className="text-sm text-gray-600">{teacher.students} students</div>
                      </div>
                    </div>
                    <Progress value={teacher.performance} className="h-2" />
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

export default AcademicManagement;
