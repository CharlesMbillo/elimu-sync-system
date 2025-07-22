
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, DollarSign, Calendar, BarChart3, BookOpen, Home, Bus, School, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import LoginModal from "@/components/auth/LoginModal";
import DashboardHeader from "@/components/layout/DashboardHeader";
import StudentManagement from "@/components/modules/StudentManagement";
import AcademicManagement from "@/components/modules/AcademicManagement";
import FinanceManagement from "@/components/modules/FinanceManagement";
import AttendanceModule from "@/components/modules/AttendanceModule";
import ParentPortal from "@/components/modules/ParentPortal";
import StaffManagement from "@/components/modules/StaffManagement";
import AnalyticsReports from "@/components/modules/AnalyticsReports";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'teacher' | 'parent' | 'student'>('admin');
  const [activeModule, setActiveModule] = useState('dashboard');
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Demo stats - in real implementation, these would come from API
  const dashboardStats = {
    totalStudents: 1247,
    totalTeachers: 89,
    activeClasses: 34,
    pendingFees: 'KES 234,500',
    attendanceToday: '94.2%',
    upcomingExams: 3
  };

  const quickActions = [
    { title: 'New Student Admission', icon: Users, color: 'bg-green-600', module: 'students' },
    { title: 'Record Attendance', icon: Calendar, color: 'bg-blue-600', module: 'attendance' },
    { title: 'Process Payments', icon: DollarSign, color: 'bg-orange-600', module: 'finance' },
    { title: 'Generate Reports', icon: BarChart3, color: 'bg-purple-600', module: 'analytics' },
  ];

  const recentActivities = [
    { title: 'Form 4 KCSE Results uploaded', time: '2 hours ago', type: 'success' },
    { title: 'M-Pesa payment received - John Kamau', time: '4 hours ago', type: 'info' },
    { title: 'Staff meeting scheduled for tomorrow', time: '6 hours ago', type: 'warning' },
    { title: 'New CBC assessment framework updated', time: '1 day ago', type: 'info' },
  ];

  const handleLogin = (role: string) => {
    setUserRole(role as any);
    setIsLoggedIn(true);
    setShowLoginModal(false);
    toast({
      title: "Login Successful",
      description: `Welcome to ElimuSync - Kenya's Premier School Management System`,
    });
  };

  const handleModuleChange = (module: string) => {
    setActiveModule(module);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-black/10 to-green-600/10"></div>
          <div className="relative px-4 py-16 mx-auto max-w-7xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <School className="h-16 w-16 text-red-600 mr-4" />
                <h1 className="text-5xl font-bold text-gray-900">
                  Elimu<span className="text-green-600">Sync</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Kenya's Premier School Management System - Empowering Education with CBC Integration, 
                KNEC Connectivity, and M-Pesa Support
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🇰🇪 CBC & 8-4-4 Compliant
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  📱 M-Pesa Integrated
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  📡 Offline-First
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🏆 KNEC Connected
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setShowLoginModal(true)}
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white px-8 py-4 text-lg"
                >
                  Access Your School Portal
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => setShowLoginModal(true)}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                >
                  Try Demo
                </Button>
              </div>
              <div className="flex justify-center mt-6">
                <Button 
                  variant="ghost"
                  onClick={() => window.open('/brochure', '_blank')}
                  className="text-green-600 hover:text-green-700 underline"
                >
                  📄 Download Complete Brochure & Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="px-4 py-16 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Complete School Management Solution
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Student Management",
                description: "Complete student lifecycle from admission to graduation with CBC tracking",
                features: ["Admissions", "Class Assignment", "Discipline Records", "Medical Records"]
              },
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                description: "CBC and 8-4-4 curriculum support with KNEC integration",
                features: ["Timetabling", "Continuous Assessment", "KNEC Prep", "Teacher Allocation"]
              },
              {
                icon: DollarSign,
                title: "Smart Finance",
                description: "Automated fees management with M-Pesa integration",
                features: ["Mobile Money", "Invoice Generation", "Arrears Tracking", "MoE Reports"]
              },
              {
                icon: Calendar,
                title: "Attendance Tracking",
                description: "Real-time attendance for students and staff",
                features: ["Biometric Support", "SMS Alerts", "Analytics", "Parent Notifications"]
              },
              {
                icon: BookOpen,
                title: "Digital Library",
                description: "Complete library and inventory management",
                features: ["Book Catalog", "Check-in/out", "Learning Materials", "Digital Resources"]
              },
              {
                icon: BarChart3,
                title: "Analytics & Reports",
                description: "Comprehensive reporting and data visualization",
                features: ["Real-time Data", "MoE Compliance", "Export Options", "Performance Metrics"]
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Overview Section */}
        <div className="px-4 py-16 mx-auto max-w-7xl bg-gradient-to-r from-green-50 to-blue-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Pricing for Every School
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Affordable packages designed for Kenyan schools, from primary to secondary institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Basic Package */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-600">Basic Package</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-2">KSh 450,000</div>
                <p className="text-gray-600">Perfect for small primary schools</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Student Management", "Basic Academics", "Simple Finance", "Attendance Tracking", "Parent Portal"].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="border-2 border-green-400 bg-green-50 transform scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-600">Professional</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-2">KSh 750,000</div>
                <p className="text-gray-600">Ideal for secondary schools</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["All Basic Features", "Advanced Academics", "M-Pesa Integration", "Staff Management", "Analytics & Reports", "Library System"].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-purple-600">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-2">KSh 950,000</div>
                <p className="text-gray-600">Multi-campus institutions</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["All Professional Features", "Multi-School Support", "Advanced Analytics", "Custom Integrations", "Priority Support", "Training Included"].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => window.open('/brochure', '_blank')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              View Complete Pricing Details
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Includes installation, training, and 1-year support. Flexible payment options available.
            </p>
          </div>
        </div>

        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      </div>
    );
  }

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'students':
        return <StudentManagement />;
      case 'academics':
        return <AcademicManagement />;
      case 'finance':
        return <FinanceManagement />;
      case 'attendance':
        return <AttendanceModule />;
      case 'parents':
        return <ParentPortal />;
      case 'staff':
        return <StaffManagement />;
      case 'analytics':
        return <AnalyticsReports />;
      default:
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.totalStudents.toLocaleString()}</div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm opacity-90">+5.2% from last term</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Teaching Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.totalTeachers}</div>
                  <div className="flex items-center mt-2">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span className="text-sm opacity-90">All positions filled</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium opacity-90">Pending Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.pendingFees}</div>
                  <div className="flex items-center mt-2">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span className="text-sm opacity-90">15% decrease this month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks for efficient school management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-gray-50"
                      onClick={() => handleModuleChange(action.module)}
                    >
                      <action.icon className="h-6 w-6" />
                      <span className="text-xs text-center">{action.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest updates and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader 
        userRole={userRole}
        activeModule={activeModule}
        onModuleChange={handleModuleChange}
        onLogout={() => setIsLoggedIn(false)}
      />
      
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {renderActiveModule()}
      </main>
    </div>
  );
};

export default Index;
