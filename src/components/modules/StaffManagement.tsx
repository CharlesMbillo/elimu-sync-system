
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCheck, DollarSign, Calendar, Users, Plus, Search, Edit, Eye, Phone, Mail, MapPin, Award, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const StaffManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showAddStaff, setShowAddStaff] = useState(false);

  // Sample staff data
  const staffMembers = [
    {
      id: 'ST001',
      name: 'Sarah Wanjiku',
      employeeId: 'EMP/2020/001',
      department: 'Mathematics',
      position: 'Senior Teacher',
      qualification: 'M.Ed Mathematics',
      tscNumber: 'TSC/123456',
      phone: '+254 722 123 456',
      email: 'sarah.wanjiku@school.ac.ke',
      joiningDate: '2020-01-15',
      salary: 65000,
      status: 'Active',
      avatar: 'SW'
    },
    {
      id: 'ST002',
      name: 'David Kimani',
      employeeId: 'EMP/2019/015',
      department: 'English',
      position: 'Head of Department',
      qualification: 'B.Ed English Literature',
      tscNumber: 'TSC/789012',
      phone: '+254 733 234 567',
      email: 'david.kimani@school.ac.ke',
      joiningDate: '2019-08-20',
      salary: 70000,
      status: 'Active',
      avatar: 'DK'
    },
    {
      id: 'ST003',
      name: 'Grace Achieng',
      employeeId: 'EMP/2021/032',
      department: 'Science',
      position: 'Laboratory Technician',
      qualification: 'Diploma in Lab Technology',
      tscNumber: 'TSC/345678',
      phone: '+254 711 345 678',
      email: 'grace.achieng@school.ac.ke',
      joiningDate: '2021-05-10',
      salary: 45000,
      status: 'Active',
      avatar: 'GA'
    }
  ];

  const departments = [
    'Mathematics', 'English', 'Kiswahili', 'Science', 'Social Studies', 
    'ICT', 'Administration', 'Support Staff'
  ];

  const payrollSummary = {
    totalStaff: 89,
    totalSalaries: 4750000,
    pendingPayments: 0,
    deductions: 285000,
    netPay: 4465000
  };

  const leaveRequests = [
    { name: 'Mary Njeri', type: 'Annual Leave', days: 7, status: 'Pending', dates: 'Feb 15-21' },
    { name: 'Peter Ochieng', type: 'Sick Leave', days: 3, status: 'Approved', dates: 'Jan 20-22' },
    { name: 'Jane Wambui', type: 'Maternity', days: 90, status: 'Approved', dates: 'Mar 1-May 30' }
  ];

  const filteredStaff = staffMembers.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || staff.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleAddStaff = () => {
    toast({
      title: "Staff Member Added",
      description: "New staff member has been successfully registered",
    });
    setShowAddStaff(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-gray-600">Manage teaching and non-teaching staff records</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={showAddStaff} onOpenChange={setShowAddStaff}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Staff
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Staff Member</DialogTitle>
              </DialogHeader>
              <StaffRegistrationForm onSubmit={handleAddStaff} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Staff Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Staff</p>
                <p className="text-2xl font-bold">{payrollSummary.totalStaff}</p>
              </div>
              <Users className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Teaching & Non-teaching
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Monthly Payroll</p>
                <p className="text-2xl font-bold">KES {(payrollSummary.totalSalaries / 1000000).toFixed(1)}M</p>
              </div>
              <DollarSign className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Gross salaries
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">On Leave</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Calendar className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Currently away
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">TSC Registered</p>
                <p className="text-2xl font-bold">76</p>
              </div>
              <Award className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              Certified teachers
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Search Staff</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Search by name or employee ID..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full sm:w-48">
              <Label>Filter by Department</Label>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="staff" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="staff">Staff Directory</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="leave">Leave Management</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="staff" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((staff) => (
              <Card key={staff.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-green-600 text-white">
                        {staff.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{staff.name}</h3>
                      <p className="text-sm text-gray-500">{staff.employeeId}</p>
                      <div className="flex items-center mt-1">
                        <Badge variant="default" className="text-xs mr-2">
                          {staff.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {staff.position}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">{staff.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-gray-600 truncate">{staff.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">{staff.qualification}</span>
                    </div>
                    <div className="flex items-center">
                      <UserCheck className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">{staff.tscNumber}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                Monthly Payroll Summary
              </CardTitle>
              <CardDescription>January 2024 payroll breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-800">Gross Salaries</h4>
                    <p className="text-2xl font-bold text-green-600">
                      KES {payrollSummary.totalSalaries.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-medium text-red-800">Total Deductions</h4>
                    <p className="text-2xl font-bold text-red-600">
                      KES {payrollSummary.deductions.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800">Net Pay</h4>
                    <p className="text-2xl font-bold text-blue-600">
                      KES {payrollSummary.netPay.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Deduction Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="text-sm">PAYE Tax</span>
                      <span className="font-medium">KES 142,500</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="text-sm">NHIF</span>
                      <span className="font-medium">KES 89,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span className="text-sm">NSSF</span>
                      <span className="font-medium">KES 53,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leave" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Leave Management
              </CardTitle>
              <CardDescription>Staff leave requests and approvals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveRequests.map((leave, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{leave.name}</h4>
                        <p className="text-sm text-gray-600">{leave.type} - {leave.days} days</p>
                        <p className="text-xs text-gray-500">{leave.dates}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={leave.status === 'Approved' ? 'default' : 
                                    leave.status === 'Pending' ? 'secondary' : 'destructive'}>
                        {leave.status}
                      </Badge>
                      {leave.status === 'Pending' && (
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">Approve</Button>
                          <Button size="sm" variant="outline">Decline</Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-purple-600" />
                Performance Management
              </CardTitle>
              <CardDescription>Staff performance tracking and appraisals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Upcoming Appraisals</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">Sarah Wanjiku</p>
                      <p className="text-sm text-gray-600">Mathematics Department</p>
                      <Badge variant="outline" className="mt-1">Due: Feb 15</Badge>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">David Kimani</p>
                      <p className="text-sm text-gray-600">English Department</p>
                      <Badge variant="outline" className="mt-1">Due: Feb 20</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Performance Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Excellent Performers</span>
                      <span className="font-medium text-green-600">68%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Good Performers</span>
                      <span className="font-medium text-blue-600">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Needs Improvement</span>
                      <span className="font-medium text-orange-600">7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Staff Registration Form Component
const StaffRegistrationForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    employeeId: '',
    department: '',
    position: '',
    qualification: '',
    tscNumber: '',
    phone: '',
    email: '',
    salary: '',
    joiningDate: ''
  });

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="employment">Employment</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+254 700 000 000"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="professional" className="space-y-4">
          <div>
            <Label htmlFor="qualification">Highest Qualification *</Label>
            <Input
              id="qualification"
              value={formData.qualification}
              onChange={(e) => setFormData({...formData, qualification: e.target.value})}
              placeholder="e.g., B.Ed Mathematics, M.A English"
              required
            />
          </div>
          <div>
            <Label htmlFor="tscNumber">TSC Number</Label>
            <Input
              id="tscNumber"
              value={formData.tscNumber}
              onChange={(e) => setFormData({...formData, tscNumber: e.target.value})}
              placeholder="For teaching staff only"
            />
          </div>
        </TabsContent>

        <TabsContent value="employment" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Department *</Label>
              <Select value={formData.department} onValueChange={(value) => setFormData({...formData, department: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="administration">Administration</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="position">Position *</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="salary">Monthly Salary (KES)</Label>
              <Input
                id="salary"
                type="number"
                value={formData.salary}
                onChange={(e) => setFormData({...formData, salary: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="joiningDate">Joining Date *</Label>
              <Input
                id="joiningDate"
                type="date"
                value={formData.joiningDate}
                onChange={(e) => setFormData({...formData, joiningDate: e.target.value})}
                required
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4 pt-6 border-t">
        <Button type="button" variant="outline">
          Save as Draft
        </Button>
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          Add Staff Member
        </Button>
      </div>
    </form>
  );
};

export default StaffManagement;
