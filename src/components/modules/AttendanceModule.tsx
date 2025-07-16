
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, Clock, Users, UserCheck, UserX, Smartphone, BarChart3, TrendingUp, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AttendanceModule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('Form4A');

  // Sample attendance data
  const todayStats = {
    totalStudents: 1247,
    present: 1175,
    absent: 72,
    late: 15,
    attendanceRate: 94.2
  };

  const classAttendance = [
    { class: 'Grade 1A', present: 28, total: 30, rate: 93.3 },
    { class: 'Grade 2B', present: 25, total: 28, rate: 89.3 },
    { class: 'Form 4A', present: 33, total: 35, rate: 94.3 },
    { class: 'Form 3B', present: 30, total: 32, rate: 93.8 }
  ];

  const studentAttendance = [
    { id: 'ST001', name: 'Aisha Mohamed', status: 'present', time: '07:45', class: 'Form 4A' },
    { id: 'ST002', name: 'Brian Wanjiku', status: 'late', time: '08:15', class: 'Grade 6A' },
    { id: 'ST003', name: 'Christine Akinyi', status: 'absent', time: '-', class: 'Form 2B' },
    { id: 'ST004', name: 'David Kimani', status: 'present', time: '07:50', class: 'Form 4A' }
  ];

  const staffAttendance = [
    { name: 'Sarah Wanjiku', department: 'Mathematics', status: 'present', time: '07:30' },
    { name: 'David Kimani', department: 'English', status: 'present', time: '07:25' },
    { name: 'Grace Achieng', department: 'Science', status: 'late', time: '08:10' },
    { name: 'James Mutua', department: 'Social Studies', status: 'absent', time: '-' }
  ];

  const handleMarkAttendance = (studentId: string, status: string) => {
    toast({
      title: "Attendance Updated",
      description: `Student ${studentId} marked as ${status}`,
    });
  };

  const handleBulkAttendance = () => {
    toast({
      title: "Bulk Attendance Recorded",
      description: "Attendance saved for all students in the class",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Management</h1>
          <p className="text-gray-600">Track student and staff attendance with real-time analytics</p>
        </div>
        <div className="flex gap-2">
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-40"
          />
          <Button className="bg-green-600 hover:bg-green-700">
            <Smartphone className="h-4 w-4 mr-2" />
            SMS Alerts
          </Button>
        </div>
      </div>

      {/* Today's Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Present Today</p>
                <p className="text-2xl font-bold">{todayStats.present}</p>
              </div>
              <UserCheck className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              {todayStats.attendanceRate}% attendance rate
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Absent Today</p>
                <p className="text-2xl font-bold">{todayStats.absent}</p>
              </div>
              <UserX className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              {((todayStats.absent / todayStats.totalStudents) * 100).toFixed(1)}% of total students
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Late Arrivals</p>
                <p className="text-2xl font-bold">{todayStats.late}</p>
              </div>
              <Clock className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Arrived after 8:00 AM
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Students</p>
                <p className="text-2xl font-bold">{todayStats.totalStudents}</p>
              </div>
              <Users className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Enrolled this term
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="students" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="students">Student Attendance</TabsTrigger>
          <TabsTrigger value="staff">Staff Attendance</TabsTrigger>
          <TabsTrigger value="classes">Class Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center">
                        <UserCheck className="h-5 w-5 mr-2 text-green-600" />
                        Mark Student Attendance
                      </CardTitle>
                      <CardDescription>Record attendance for {selectedDate}</CardDescription>
                    </div>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Form4A">Form 4A</SelectItem>
                        <SelectItem value="Form3B">Form 3B</SelectItem>
                        <SelectItem value="Grade6A">Grade 6A</SelectItem>
                        <SelectItem value="Grade5B">Grade 5B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentAttendance.map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">{student.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <h4 className="font-medium">{student.name}</h4>
                            <p className="text-sm text-gray-600">{student.id} - {student.class}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">{student.time}</span>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant={student.status === 'present' ? 'default' : 'outline'}
                              className={student.status === 'present' ? 'bg-green-600 hover:bg-green-700' : ''}
                              onClick={() => handleMarkAttendance(student.id, 'present')}
                            >
                              Present
                            </Button>
                            <Button
                              size="sm"
                              variant={student.status === 'late' ? 'default' : 'outline'}
                              className={student.status === 'late' ? 'bg-orange-600 hover:bg-orange-700' : ''}
                              onClick={() => handleMarkAttendance(student.id, 'late')}
                            >
                              Late
                            </Button>
                            <Button
                              size="sm"
                              variant={student.status === 'absent' ? 'default' : 'outline'}
                              className={student.status === 'absent' ? 'bg-red-600 hover:bg-red-700' : ''}
                              onClick={() => handleMarkAttendance(student.id, 'absent')}
                            >
                              Absent
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <Button variant="outline">
                      <Smartphone className="h-4 w-4 mr-2" />
                      Biometric Scan
                    </Button>
                    <Button onClick={handleBulkAttendance} className="bg-green-600 hover:bg-green-700">
                      Save Attendance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Mark All Present
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Smartphone className="h-4 w-4 mr-2" />
                    SMS Absentees
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Class Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Students</span>
                      <span className="font-medium">35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Present</span>
                      <span className="font-medium text-green-600">33</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Absent</span>
                      <span className="font-medium text-red-600">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Attendance Rate</span>
                      <span className="font-medium">94.3%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Staff Attendance Today
              </CardTitle>
              <CardDescription>Teaching and non-teaching staff attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staffAttendance.map((staff, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{staff.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{staff.name}</h4>
                        <p className="text-sm text-gray-600">{staff.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{staff.time}</span>
                      <Badge variant={
                        staff.status === 'present' ? 'default' :
                        staff.status === 'late' ? 'secondary' : 'destructive'
                      }>
                        {staff.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="classes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                Class-wise Attendance Overview
              </CardTitle>
              <CardDescription>Today's attendance summary by class</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classAttendance.map((cls, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{cls.class}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{cls.present}/{cls.total}</span>
                        <Badge variant={cls.rate >= 90 ? 'default' : cls.rate >= 80 ? 'secondary' : 'destructive'}>
                          {cls.rate}%
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          cls.rate >= 90 ? 'bg-green-600' : 
                          cls.rate >= 80 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{width: `${cls.rate}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Attendance Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => {
                    const rates = [94.2, 92.1, 95.3, 91.8, 89.7];
                    return (
                      <div key={day} className="flex justify-between items-center">
                        <span className="text-sm">{day}</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{width: `${rates[index]}%`}}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{rates[index]}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                    <div>
                      <p className="text-sm font-medium">5 students absent for 3+ days</p>
                      <p className="text-xs text-gray-600">Requires follow-up</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <Clock className="h-4 w-4 text-yellow-600 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Form 2B below 85% attendance</p>
                      <p className="text-xs text-gray-600">Weekly average</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Grade 6A perfect attendance</p>
                      <p className="text-xs text-gray-600">3 days running</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceModule;
