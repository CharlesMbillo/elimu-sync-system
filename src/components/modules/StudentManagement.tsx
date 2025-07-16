
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Search, Filter, Edit, Eye, UserPlus, Download, Upload, MapPin, Phone, Mail, Calendar, GraduationCap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const StudentManagement = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddStudent, setShowAddStudent] = useState(false);

  // Sample student data
  const students = [
    {
      id: 'ST001',
      name: 'Aisha Mohamed',
      class: 'Form 4A',
      curriculum: 'KCSE',
      admissionNumber: 'ADM/2020/001',
      gender: 'Female',
      dateOfBirth: '2006-05-15',
      parentName: 'Hassan Mohamed',
      parentPhone: '+254 712 345 678',
      address: 'Mombasa',
      status: 'Active',
      avatar: 'AM'
    },
    {
      id: 'ST002',
      name: 'Brian Wanjiku',
      class: 'Grade 6',
      curriculum: 'CBC',
      admissionNumber: 'ADM/2023/045',
      gender: 'Male',
      dateOfBirth: '2011-08-22',
      parentName: 'Mary Wanjiku',
      parentPhone: '+254 722 987 654',
      address: 'Nairobi',
      status: 'Active',
      avatar: 'BW'
    },
    {
      id: 'ST003',
      name: 'Christine Akinyi',
      class: 'Form 2B',
      curriculum: 'KCSE',
      admissionNumber: 'ADM/2022/078',
      gender: 'Female',
      dateOfBirth: '2008-12-03',
      parentName: 'James Akinyi',
      parentPhone: '+254 733 456 789',
      address: 'Kisumu',
      status: 'Active',
      avatar: 'CA'
    }
  ];

  const classes = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
    'Form 1A', 'Form 1B', 'Form 2A', 'Form 2B', 'Form 3A', 'Form 3B', 'Form 4A', 'Form 4B'
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const handleAddStudent = () => {
    toast({
      title: "Student Added Successfully",
      description: "New student has been registered in the system",
    });
    setShowAddStudent(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600">Manage student records, admissions, and academic progress</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={showAddStudent} onOpenChange={setShowAddStudent}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <UserPlus className="h-4 w-4 mr-2" />
                New Admission
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Student Admission Form</DialogTitle>
              </DialogHeader>
              <StudentAdmissionForm onSubmit={handleAddStudent} />
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Search Students</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Search by name or admission number..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full sm:w-48">
              <Label>Filter by Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classes</SelectItem>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-blue-600 text-white">
                    {student.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{student.name}</h3>
                  <p className="text-sm text-gray-500">{student.admissionNumber}</p>
                  <div className="flex items-center mt-1">
                    <Badge variant={student.curriculum === 'CBC' ? 'default' : 'secondary'} className="text-xs">
                      {student.curriculum}
                    </Badge>
                    <span className="ml-2 text-sm text-gray-600">{student.class}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-600">{student.dateOfBirth}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-600">{student.parentPhone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-600">{student.address}</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="text-xs">
                    {student.status}
                  </Badge>
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

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">847</div>
            <p className="text-sm text-gray-600">CBC Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">400</div>
            <p className="text-sm text-gray-600">KCSE Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">23</div>
            <p className="text-sm text-gray-600">New Admissions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">5</div>
            <p className="text-sm text-gray-600">Transfers</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Student Admission Form Component
const StudentAdmissionForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    curriculum: '',
    class: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    medicalInfo: ''
  });

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="guardian">Guardian Info</TabsTrigger>
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
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                required
              />
            </div>
            <div>
              <Label>Gender *</Label>
              <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder="Full address"
            />
          </div>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Curriculum *</Label>
              <Select value={formData.curriculum} onValueChange={(value) => setFormData({...formData, curriculum: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select curriculum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cbc">CBC (Competency Based Curriculum)</SelectItem>
                  <SelectItem value="kcse">KCSE (8-4-4 System)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Class/Form *</Label>
              <Select value={formData.class} onValueChange={(value) => setFormData({...formData, class: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grade1">Grade 1</SelectItem>
                  <SelectItem value="grade2">Grade 2</SelectItem>
                  <SelectItem value="grade3">Grade 3</SelectItem>
                  <SelectItem value="grade4">Grade 4</SelectItem>
                  <SelectItem value="grade5">Grade 5</SelectItem>
                  <SelectItem value="grade6">Grade 6</SelectItem>
                  <SelectItem value="form1">Form 1</SelectItem>
                  <SelectItem value="form2">Form 2</SelectItem>
                  <SelectItem value="form3">Form 3</SelectItem>
                  <SelectItem value="form4">Form 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="medicalInfo">Medical Information</Label>
            <Input
              id="medicalInfo"
              value={formData.medicalInfo}
              onChange={(e) => setFormData({...formData, medicalInfo: e.target.value})}
              placeholder="Any medical conditions, allergies, or special needs"
            />
          </div>
        </TabsContent>

        <TabsContent value="guardian" className="space-y-4">
          <div>
            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
            <Input
              id="parentName"
              value={formData.parentName}
              onChange={(e) => setFormData({...formData, parentName: e.target.value})}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="parentPhone">Phone Number *</Label>
              <Input
                id="parentPhone"
                value={formData.parentPhone}
                onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                placeholder="+254 700 000 000"
                required
              />
            </div>
            <div>
              <Label htmlFor="parentEmail">Email Address</Label>
              <Input
                id="parentEmail"
                type="email"
                value={formData.parentEmail}
                onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                placeholder="parent@email.com"
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
          Complete Admission
        </Button>
      </div>
    </form>
  );
};

export default StudentManagement;
