
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, TrendingDown, Users, DollarSign, Calendar, Download, FileText, PieChart, Activity } from "lucide-react";

const AnalyticsReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('term2-2024');
  const [reportType, setReportType] = useState('academic');

  // Analytics data
  const overallStats = {
    totalStudents: 1247,
    academicPerformance: 87.3,
    attendanceRate: 94.2,
    feeCollection: 90.4,
    teacherStudentRatio: '1:14',
    infrastructureUtilization: 78
  };

  const academicAnalytics = {
    subjectPerformance: [
      { subject: 'Mathematics', average: 78.5, improvement: 5.2 },
      { subject: 'English', average: 82.1, improvement: 3.1 },
      { subject: 'Kiswahili', average: 85.7, improvement: 2.8 },
      { subject: 'Science', average: 76.3, improvement: 4.5 },
      { subject: 'Social Studies', average: 80.9, improvement: 1.9 }
    ],
    gradeDistribution: {
      A: 23, B: 35, C: 28, D: 12, E: 2
    }
  };

  const financialAnalytics = {
    monthlyCollection: [
      { month: 'Jan', collected: 890000, target: 950000 },
      { month: 'Feb', collected: 920000, target: 950000 },
      { month: 'Mar', collected: 875000, target: 950000 }
    ],
    feeCategories: [
      { category: 'Tuition', amount: 1200000, percentage: 60 },
      { category: 'Boarding', amount: 600000, percentage: 30 },
      { category: 'Transport', amount: 150000, percentage: 7.5 },
      { category: 'Extras', amount: 50000, percentage: 2.5 }
    ]
  };

  const attendanceAnalytics = {
    weeklyTrends: [
      { day: 'Mon', rate: 96.2 },
      { day: 'Tue', rate: 94.8 },
      { day: 'Wed', rate: 95.5 },
      { day: 'Thu', rate: 93.1 },
      { day: 'Fri', rate: 91.7 }
    ],
    classWiseAttendance: [
      { class: 'Grade 1-3', rate: 96.8 },
      { class: 'Grade 4-6', rate: 94.2 },
      { class: 'Form 1-2', rate: 92.5 },
      { class: 'Form 3-4', rate: 89.7 }
    ]
  };

  const moeReports = [
    { title: 'EMIS Data Return', description: 'Educational Management Information System report', dueDate: '2024-02-15', status: 'Pending' },
    { title: 'Annual School Census', description: 'Student and staff enumeration report', dueDate: '2024-03-01', status: 'Draft' },
    { title: 'Infrastructure Audit', description: 'School facilities and resources assessment', dueDate: '2024-02-28', status: 'Completed' }
  ];

  const handleGenerateReport = (type: string) => {
    console.log(`Generating ${type} report...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600">Comprehensive insights and MoE-compliant reporting</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="term1-2024">Term 1, 2024</SelectItem>
              <SelectItem value="term2-2024">Term 2, 2024</SelectItem>
              <SelectItem value="term3-2024">Term 3, 2024</SelectItem>
              <SelectItem value="year-2024">Full Year 2024</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-green-600 hover:bg-green-700">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Academic Performance</p>
                <p className="text-2xl font-bold">{overallStats.academicPerformance}%</p>
              </div>
              <BarChart3 className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              +3.2% from last term
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Attendance Rate</p>
                <p className="text-2xl font-bold">{overallStats.attendanceRate}%</p>
              </div>
              <Calendar className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Above national average
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Fee Collection</p>
                <p className="text-2xl font-bold">{overallStats.feeCollection}%</p>
              </div>
              <DollarSign className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              KES 2.2M collected
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="academic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="moe">MoE Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="academic" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  Subject Performance Analysis
                </CardTitle>
                <CardDescription>Average scores by subject for {selectedPeriod}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {academicAnalytics.subjectPerformance.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{subject.subject}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{subject.average}%</Badge>
                          <div className="flex items-center text-sm text-green-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +{subject.improvement}%
                          </div>
                        </div>
                      </div>
                      <Progress value={subject.average} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-green-600" />
                  Grade Distribution
                </CardTitle>
                <CardDescription>Overall grade distribution across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(academicAnalytics.gradeDistribution).map(([grade, percentage]) => (
                    <div key={grade} className="flex items-center justify-between">
                      <span className="font-medium">Grade {grade}</span>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              grade === 'A' ? 'bg-green-600' :
                              grade === 'B' ? 'bg-blue-600' :
                              grade === 'C' ? 'bg-yellow-600' :
                              grade === 'D' ? 'bg-orange-600' : 'bg-red-600'
                            }`}
                            style={{width: `${percentage * 2}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">{percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Key Insights</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 58% of students achieving A-B grades</li>
                    <li>• Mathematics showing significant improvement</li>
                    <li>• Only 2% of students in failing grade</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>CBC vs 8-4-4 Performance Comparison</CardTitle>
              <CardDescription>Comparative analysis between curriculum systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">CBC (Grades 1-6)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Exceeding Expectations</span>
                      <span className="font-medium text-green-600">42%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Meeting Expectations</span>
                      <span className="font-medium text-blue-600">38%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Approaching Expectations</span>
                      <span className="font-medium text-yellow-600">16%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Below Expectations</span>
                      <span className="font-medium text-red-600">4%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">8-4-4 (Forms 1-4)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Grade A (80-100%)</span>
                      <span className="font-medium text-green-600">18%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Grade B (60-79%)</span>
                      <span className="font-medium text-blue-600">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Grade C (40-59%)</span>
                      <span className="font-medium text-yellow-600">32%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Grade D-E (0-39%)</span>
                      <span className="font-medium text-red-600">15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                  Monthly Fee Collection Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {financialAnalytics.monthlyCollection.map((month, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{month.month} 2024</span>
                        <div className="text-right">
                          <div className="font-bold">KES {(month.collected / 1000).toFixed(0)}K</div>
                          <div className="text-sm text-gray-600">
                            Target: KES {(month.target / 1000).toFixed(0)}K
                          </div>
                        </div>
                      </div>
                      <Progress value={(month.collected / month.target) * 100} className="h-2" />
                      <div className="text-xs text-gray-500">
                        {((month.collected / month.target) * 100).toFixed(1)}% of target achieved
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {financialAnalytics.feeCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{category.category}</h4>
                        <p className="text-sm text-gray-600">KES {category.amount.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{category.percentage}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Financial Health</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 90.4% collection rate (above target)</li>
                    <li>• Stable revenue streams across categories</li>
                    <li>• Reduced arrears by 15% this term</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Weekly Attendance Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendanceAnalytics.weeklyTrends.map((day, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium">{day.day}</span>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{width: `${day.rate}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-12">{day.rate}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Class-wise Attendance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendanceAnalytics.classWiseAttendance.map((classData, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{classData.class}</h4>
                        <Badge variant={classData.rate >= 95 ? 'default' : classData.rate >= 90 ? 'secondary' : 'destructive'}>
                          {classData.rate}%
                        </Badge>
                      </div>
                      <Progress value={classData.rate} className="h-2" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Attendance Insights</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Lower secondary shows declining attendance</li>
                    <li>• Friday attendance consistently lowest</li>
                    <li>• Primary levels maintaining excellent rates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="infrastructure" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2 text-purple-600" />
                Infrastructure Utilization
              </CardTitle>
              <CardDescription>Facility usage and capacity analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Classroom Utilization</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Primary Classrooms</span>
                      <span className="font-medium">85% utilized</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Secondary Classrooms</span>
                      <span className="font-medium">78% utilized</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Science Laboratories</span>
                      <span className="font-medium">92% utilized</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Computer Lab</span>
                      <span className="font-medium">71% utilized</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Support Facilities</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Library</span>
                      <span className="font-medium">68% capacity</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dining Hall</span>
                      <span className="font-medium">95% capacity</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dormitories</span>
                      <span className="font-medium">88% occupied</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sports Facilities</span>
                      <span className="font-medium">45% utilized</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="moe" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-red-600" />
                Ministry of Education Reports
              </CardTitle>
              <CardDescription>Mandatory government reporting requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moeReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{report.title}</h4>
                      <p className="text-sm text-gray-600">{report.description}</p>
                      <p className="text-xs text-gray-500">Due: {report.dueDate}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={
                        report.status === 'Completed' ? 'default' :
                        report.status === 'Pending' ? 'secondary' : 'outline'
                      }>
                        {report.status}
                      </Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleGenerateReport(report.title)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Generate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Compliance Status</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 1 report pending submission</li>
                  <li>• All reports use standardized MoE formats</li>
                  <li>• Automated data validation ensures accuracy</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Report Generation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleGenerateReport('Student Enrollment')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Student Enrollment Report
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleGenerateReport('Academic Performance')}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Academic Performance Report
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleGenerateReport('Financial Summary')}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Financial Summary Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Export Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export to Excel (.xlsx)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Export to PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  Export Raw Data (.csv)
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsReports;
