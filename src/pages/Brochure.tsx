import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  GraduationCap, 
  Users, 
  DollarSign, 
  Calendar, 
  UserCheck, 
  BookOpen, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Wifi, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star
} from 'lucide-react';

const Brochure = () => {
  const modules = [
    {
      name: "Student Management System",
      price: "KSh 150,000",
      features: ["Admissions & Enrollment", "Biodata Management", "Class Assignment", "Transfer Records", "Discipline Tracking", "Medical Records"],
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Academic Management",
      price: "KSh 200,000",
      features: ["CBC & 8-4-4 Curriculum", "Timetabling", "Teacher Allocation", "Assessment Records", "KNEC Integration", "Report Generation"],
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      name: "Finance & Fees Management",
      price: "KSh 180,000",
      features: ["M-Pesa Integration", "Automated Invoicing", "Fee Structures", "Arrears Tracking", "Receipt Generation", "Financial Reports"],
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      name: "Attendance Tracking",
      price: "KSh 120,000",
      features: ["Biometric Integration", "Code-based Check-in", "Staff Attendance", "Analytics Dashboard", "Automated Notifications", "Report Generation"],
      icon: <UserCheck className="h-6 w-6" />
    },
    {
      name: "Parent Portal",
      price: "KSh 100,000",
      features: ["SMS/WhatsApp Notifications", "Digital Report Cards", "Fee Balance Checking", "Event Updates", "Communication Hub", "Mobile App"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      name: "Staff Management",
      price: "KSh 140,000",
      features: ["Payroll System", "HR Records", "Performance Appraisals", "Leave Management", "Training Records", "Attendance Tracking"],
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Analytics & Reports",
      price: "KSh 80,000",
      features: ["Real-time Dashboards", "MoE Compliance Reports", "Performance Analytics", "PDF/Excel Export", "Custom Reports", "Data Visualization"],
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  const packages = [
    {
      name: "Basic Package",
      subtitle: "Perfect for Primary Schools",
      price: "KSh 450,000",
      originalPrice: "KSh 570,000",
      savings: "KSh 120,000",
      modules: ["Student Management", "Academic Management", "Finance & Fees", "Parent Portal"],
      students: "Up to 500 students",
      popular: false
    },
    {
      name: "Professional Package",
      subtitle: "Ideal for Secondary Schools",
      price: "KSh 750,000",
      originalPrice: "KSh 970,000",
      savings: "KSh 220,000",
      modules: ["All Basic Modules", "Staff Management", "Attendance Tracking", "Analytics & Reports"],
      students: "Up to 1,500 students",
      popular: true
    },
    {
      name: "Enterprise Package",
      subtitle: "Complete Solution for Large Institutions",
      price: "KSh 950,000",
      originalPrice: "KSh 1,270,000",
      savings: "KSh 320,000",
      modules: ["All Modules", "Custom Integrations", "Priority Support", "Training Program"],
      students: "Unlimited students",
      popular: false
    }
  ];

  const additionalServices = [
    { name: "Installation & Setup", price: "KSh 50,000" },
    { name: "Staff Training (5 days)", price: "KSh 80,000" },
    { name: "Data Migration", price: "KSh 60,000" },
    { name: "Custom Branding", price: "KSh 30,000" },
    { name: "Annual Support & Maintenance", price: "KSh 120,000" },
    { name: "Hardware Consultation", price: "KSh 25,000" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="h-12 w-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tech-For-Good</h1>
              <p className="text-sm text-emerald-600 font-medium">Empowering Education Through Technology</p>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            ElimuSync School Management System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete digital transformation for Kenyan educational institutions. 
            Supporting CBC, 8-4-4, KNEC integration, and M-Pesa payments.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Secure & Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Offline Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Mobile First</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Why Choose ElimuSync?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold">Kenyan Curriculum Ready</h3>
                <p className="text-sm text-gray-600">Built for CBC and 8-4-4 systems with KNEC integration</p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">M-Pesa Integration</h3>
                <p className="text-sm text-gray-600">Seamless mobile money payments and fee collection</p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Wifi className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Offline Capability</h3>
                <p className="text-sm text-gray-600">Works in low-bandwidth environments with auto-sync</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Packages */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-center">Implementation Packages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-emerald-500 scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <p className="text-sm text-gray-600">{pkg.subtitle}</p>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-emerald-600">{pkg.price}</div>
                    <div className="text-sm text-gray-500">
                      <span className="line-through">{pkg.originalPrice}</span>
                      <span className="text-emerald-600 font-medium ml-2">Save {pkg.savings}</span>
                    </div>
                    <div className="text-sm font-medium text-blue-600">{pkg.students}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.modules.map((module, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{module}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Individual Modules */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Individual Module Pricing</h3>
            <p className="text-gray-600 mt-2">Build your custom solution with individual modules</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      {module.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{module.name}</CardTitle>
                      <p className="text-xl font-bold text-emerald-600">{module.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Additional Services</CardTitle>
            <p className="text-gray-600">Professional services to ensure successful implementation</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-emerald-600 font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Implementation Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold">Planning & Setup</h4>
                <p className="text-sm text-gray-600">Week 1-2</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold">System Installation</h4>
                <p className="text-sm text-gray-600">Week 3-4</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold">Data Migration & Training</h4>
                <p className="text-sm text-gray-600">Week 5-6</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <h4 className="font-semibold">Go Live & Support</h4>
                <p className="text-sm text-gray-600">Week 7+</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold">Ready to Transform Your School?</h3>
              <p className="text-xl opacity-90">Contact Tech-For-Good today for a free consultation</p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="opacity-90">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="opacity-90">info@techforgood.co.ke</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="opacity-90">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mt-8">
                <Button variant="secondary" size="lg">
                  Schedule Demo
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Download Brochure
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          <p>© 2024 Tech-For-Good. Empowering Kenyan education through innovative technology solutions.</p>
          <p className="mt-2">All prices in Kenyan Shillings (KSh). Terms and conditions apply.</p>
        </div>
      </div>
    </div>
  );
};

export default Brochure;