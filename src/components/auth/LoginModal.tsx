
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { School, Shield, Users, GraduationCap, Heart } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [loginMethod, setLoginMethod] = useState<'credentials' | 'otp'>('credentials');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    phone: '',
    otp: ''
  });

  const roles = [
    { value: 'admin', label: 'Administrator', icon: Shield, description: 'Full system access' },
    { value: 'teacher', label: 'Teacher', icon: GraduationCap, description: 'Academic management' },
    { value: 'parent', label: 'Parent/Guardian', icon: Heart, description: 'Student progress tracking' },
    { value: 'student', label: 'Student', icon: Users, description: 'Personal dashboard' }
  ];

  const handleLogin = () => {
    if (!selectedRole) return;
    onLogin(selectedRole);
  };

  const handleDemoLogin = (role: string) => {
    setSelectedRole(role);
    onLogin(role);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <School className="h-8 w-8 text-green-600 mr-2" />
            <DialogTitle className="text-2xl font-bold">
              Elimu<span className="text-green-600">Sync</span>
            </DialogTitle>
          </div>
        </DialogHeader>

        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="demo">Demo Access</TabsTrigger>
            <TabsTrigger value="login">Secure Login</TabsTrigger>
          </TabsList>

          <TabsContent value="demo" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demo Portal Access</CardTitle>
                <CardDescription>
                  Experience ElimuSync with sample data from Moi Primary & Secondary School
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {roles.map((role) => (
                  <Button
                    key={role.value}
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    onClick={() => handleDemoLogin(role.value)}
                  >
                    <role.icon className="h-5 w-5 mr-3 text-green-600" />
                    <div className="text-left">
                      <div className="font-medium">{role.label}</div>
                      <div className="text-sm text-gray-500">{role.description}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="role">Select Your Role</Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your access level" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        <div className="flex items-center">
                          <role.icon className="h-4 w-4 mr-2" />
                          {role.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Tabs value={loginMethod} onValueChange={(value) => setLoginMethod(value as any)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="credentials">Email/Password</TabsTrigger>
                  <TabsTrigger value="otp">SMS OTP</TabsTrigger>
                </TabsList>

                <TabsContent value="credentials" className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@school.ac.ke"
                      value={credentials.email}
                      onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="otp" className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+254 700 000 000"
                      value={credentials.phone}
                      onChange={(e) => setCredentials({...credentials, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="otp">OTP Code</Label>
                    <Input
                      id="otp"
                      placeholder="Enter 6-digit code"
                      value={credentials.otp}
                      onChange={(e) => setCredentials({...credentials, otp: e.target.value})}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <Button 
                onClick={handleLogin}
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!selectedRole}
              >
                Access Portal
              </Button>

              <div className="text-xs text-center text-gray-500">
                🔒 Secured with end-to-end encryption • 🇰🇪 Hosted in Kenya
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
