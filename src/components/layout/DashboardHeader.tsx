
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Bell, Settings, LogOut, School, Users, GraduationCap, DollarSign, Calendar, BarChart3, BookOpen, Home, Bus, UserCheck, Heart, Menu, Wifi, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  userRole: 'admin' | 'teacher' | 'parent' | 'student';
  activeModule: string;
  onModuleChange: (module: string) => void;
  onLogout: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userRole,
  activeModule,
  onModuleChange,
  onLogout
}) => {
  const [isOnline, setIsOnline] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getModulesForRole = () => {
    const baseModules = [
      { id: 'dashboard', label: 'Dashboard', icon: Home }
    ];

    switch (userRole) {
      case 'admin':
        return [
          ...baseModules,
          { id: 'students', label: 'Students', icon: Users },
          { id: 'academics', label: 'Academics', icon: GraduationCap },
          { id: 'finance', label: 'Finance', icon: DollarSign },
          { id: 'attendance', label: 'Attendance', icon: Calendar },
          { id: 'staff', label: 'Staff', icon: UserCheck },
          { id: 'library', label: 'Library', icon: BookOpen },
          { id: 'transport', label: 'Transport', icon: Bus },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 }
        ];
      case 'teacher':
        return [
          ...baseModules,
          { id: 'students', label: 'My Students', icon: Users },
          { id: 'academics', label: 'Classes', icon: GraduationCap },
          { id: 'attendance', label: 'Attendance', icon: Calendar },
          { id: 'library', label: 'Resources', icon: BookOpen },
          { id: 'analytics', label: 'Reports', icon: BarChart3 }
        ];
      case 'parent':
        return [
          ...baseModules,
          { id: 'students', label: 'My Children', icon: Users },
          { id: 'academics', label: 'Academic Progress', icon: GraduationCap },
          { id: 'finance', label: 'Fee Payments', icon: DollarSign },
          { id: 'attendance', label: 'Attendance', icon: Calendar },
          { id: 'parents', label: 'Parent Portal', icon: Heart }
        ];
      case 'student':
        return [
          ...baseModules,
          { id: 'academics', label: 'My Classes', icon: GraduationCap },
          { id: 'attendance', label: 'My Attendance', icon: Calendar },
          { id: 'library', label: 'Library', icon: BookOpen },
          { id: 'analytics', label: 'My Progress', icon: BarChart3 }
        ];
      default:
        return baseModules;
    }
  };

  const modules = getModulesForRole();
  const notifications = [
    { id: 1, title: 'Fee payment reminder', time: '2 min ago', urgent: true },
    { id: 2, title: 'New CBC assessment uploaded', time: '1 hour ago', urgent: false },
    { id: 3, title: 'Parent-teacher meeting scheduled', time: '3 hours ago', urgent: false }
  ];

  const userInfo = {
    admin: { name: 'Sarah Wanjiku', school: 'Moi Educational Complex', avatar: 'SW' },
    teacher: { name: 'David Kimani', school: 'Mathematics Teacher', avatar: 'DK' },
    parent: { name: 'Grace Achieng', school: 'Parent - Form 2B', avatar: 'GA' },
    student: { name: 'Kevin Mutua', school: 'Form 3A Student', avatar: 'KM' }
  };

  const currentUser = userInfo[userRole];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and School Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <School className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="font-bold text-lg text-gray-900">
                  Elimu<span className="text-green-600">Sync</span>
                </h1>
                <p className="text-xs text-gray-500">Moi Educational Complex</p>
              </div>
            </div>
            
            {/* Connection Status */}
            <Badge variant={isOnline ? "default" : "destructive"} className="hidden sm:flex">
              {isOnline ? <Wifi className="h-3 w-3 mr-1" /> : <WifiOff className="h-3 w-3 mr-1" />}
              {isOnline ? 'Online' : 'Offline'}
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {modules.map((module) => (
              <Button
                key={module.id}
                variant={activeModule === module.id ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "flex items-center space-x-2",
                  activeModule === module.id && "bg-green-600 hover:bg-green-700"
                )}
                onClick={() => onModuleChange(module.id)}
              >
                <module.icon className="h-4 w-4" />
                <span>{module.label}</span>
              </Button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications.some(n => n.urgent) && (
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-3 border-b">
                  <h4 className="font-medium">Notifications</h4>
                </div>
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="p-3 cursor-pointer">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-green-600 text-white">
                      {currentUser.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium">{currentUser.name}</p>
                    <p className="text-xs text-gray-500">{currentUser.school}</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {modules.map((module) => (
                <Button
                  key={module.id}
                  variant={activeModule === module.id ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "flex flex-col items-center space-y-1 h-auto py-3",
                    activeModule === module.id && "bg-green-600 hover:bg-green-700"
                  )}
                  onClick={() => {
                    onModuleChange(module.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  <module.icon className="h-4 w-4" />
                  <span className="text-xs">{module.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
