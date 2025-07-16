
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Smartphone, Receipt, Download, Plus, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FinanceManagement = () => {
  const [selectedTerm, setSelectedTerm] = useState('term2-2024');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Financial data
  const financialStats = {
    totalRevenue: 'KES 2,450,000',
    collectedFees: 'KES 2,215,500',
    pendingFees: 'KES 234,500',
    overdueAmount: 'KES 89,750',
    collectionRate: 90.4
  };

  const feeStructure = [
    { class: 'Grade 1-3', tuition: 15000, boarding: 25000, transport: 8000, extras: 5000 },
    { class: 'Grade 4-6', tuition: 18000, boarding: 28000, transport: 8000, extras: 6000 },
    { class: 'Form 1-2', tuition: 22000, boarding: 35000, transport: 10000, extras: 8000 },
    { class: 'Form 3-4', tuition: 25000, boarding: 38000, transport: 10000, extras: 10000 }
  ];

  const recentPayments = [
    { 
      id: 'PAY001', 
      student: 'Aisha Mohamed', 
      amount: 25000, 
      method: 'M-Pesa', 
      status: 'completed', 
      date: '2024-01-15',
      reference: 'MP240115001'
    },
    { 
      id: 'PAY002', 
      student: 'Brian Wanjiku', 
      amount: 18000, 
      method: 'Bank Transfer', 
      status: 'completed', 
      date: '2024-01-14',
      reference: 'BT240114002'
    },
    { 
      id: 'PAY003', 
      student: 'Christine Akinyi', 
      amount: 22000, 
      method: 'M-Pesa', 
      status: 'pending', 
      date: '2024-01-14',
      reference: 'MP240114003'
    }
  ];

  const outstandingFees = [
    { student: 'John Kamau', class: 'Form 3A', amount: 15000, overdue: 30, contact: '+254 722 123 456' },
    { student: 'Mary Njeri', class: 'Grade 5B', amount: 8500, overdue: 15, contact: '+254 733 234 567' },
    { student: 'Peter Ochieng', class: 'Form 2B', amount: 12000, overdue: 45, contact: '+254 711 345 678' }
  ];

  const handlePaymentSubmit = () => {
    toast({
      title: "Payment Processed",
      description: "M-Pesa payment has been initiated successfully",
    });
    setShowPaymentModal(false);
  };

  const handleSendReminder = (contact: string) => {
    toast({
      title: "Reminder Sent",
      description: `SMS reminder sent to ${contact}`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Finance Management</h1>
          <p className="text-gray-600">Fees collection, M-Pesa integration, and financial reporting</p>
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
          <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Record Payment
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Record New Payment</DialogTitle>
              </DialogHeader>
              <PaymentForm onSubmit={handlePaymentSubmit} />
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Revenue</p>
                <p className="text-2xl font-bold">{financialStats.totalRevenue}</p>
              </div>
              <DollarSign className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              +12% from last term
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Collected Fees</p>
                <p className="text-2xl font-bold">{financialStats.collectedFees}</p>
              </div>
              <CheckCircle className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              {financialStats.collectionRate}% collection rate
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Pending Fees</p>
                <p className="text-2xl font-bold">{financialStats.pendingFees}</p>
              </div>
              <Clock className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              234 pending payments
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Overdue Amount</p>
                <p className="text-2xl font-bold">{financialStats.overdueAmount}</p>
              </div>
              <AlertCircle className="h-8 w-8 opacity-80" />
            </div>
            <div className="mt-2 text-sm opacity-90">
              67 overdue accounts
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="payments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="payments">Recent Payments</TabsTrigger>
          <TabsTrigger value="outstanding">Outstanding Fees</TabsTrigger>
          <TabsTrigger value="structure">Fee Structure</TabsTrigger>
          <TabsTrigger value="mpesa">M-Pesa Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Receipt className="h-5 w-5 mr-2 text-green-600" />
                Recent Payment Transactions
              </CardTitle>
              <CardDescription>
                Latest fee payments and transaction history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        {payment.method === 'M-Pesa' ? (
                          <Smartphone className="h-6 w-6 text-green-600" />
                        ) : (
                          <CreditCard className="h-6 w-6 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{payment.student}</h4>
                        <p className="text-sm text-gray-600">{payment.reference}</p>
                        <p className="text-xs text-gray-500">{payment.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">KES {payment.amount.toLocaleString()}</div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={payment.status === 'completed' ? 'default' : 'secondary'}>
                          {payment.status}
                        </Badge>
                        <Badge variant="outline">{payment.method}</Badge>
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
                <CardTitle>Payment Methods Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <Smartphone className="h-5 w-5 text-green-600 mr-2" />
                      <span>M-Pesa</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">65%</div>
                      <div className="text-sm text-gray-600">KES 1.59M</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Bank Transfer</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">25%</div>
                      <div className="text-sm text-gray-600">KES 612K</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-gray-600 mr-2" />
                      <span>Cash</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">10%</div>
                      <div className="text-sm text-gray-600">KES 245K</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Collection Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">January 2024</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">February 2024</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">March 2024</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="outstanding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                Outstanding Fee Balances
              </CardTitle>
              <CardDescription>
                Students with pending and overdue fee payments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {outstandingFees.map((fee, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{fee.student}</h4>
                      <p className="text-sm text-gray-600">{fee.class}</p>
                      <p className="text-xs text-gray-500">{fee.contact}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-red-600">KES {fee.amount.toLocaleString()}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="destructive">{fee.overdue} days overdue</Badge>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleSendReminder(fee.contact)}
                        >
                          Send Reminder
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="structure" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fee Structure 2024</CardTitle>
              <CardDescription>Current term fees by class level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Class Level</th>
                      <th className="text-right p-4">Tuition</th>
                      <th className="text-right p-4">Boarding</th>
                      <th className="text-right p-4">Transport</th>
                      <th className="text-right p-4">Extras</th>
                      <th className="text-right p-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{fee.class}</td>
                        <td className="p-4 text-right">KES {fee.tuition.toLocaleString()}</td>
                        <td className="p-4 text-right">KES {fee.boarding.toLocaleString()}</td>
                        <td className="p-4 text-right">KES {fee.transport.toLocaleString()}</td>
                        <td className="p-4 text-right">KES {fee.extras.toLocaleString()}</td>
                        <td className="p-4 text-right font-bold">
                          KES {(fee.tuition + fee.boarding + fee.transport + fee.extras).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mpesa" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2 text-green-600" />
                M-Pesa Integration Status
              </CardTitle>
              <CardDescription>
                Safaricom M-Pesa configuration and transaction monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Connection Status</h4>
                        <p className="text-sm text-gray-600">API connectivity</p>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Paybill Number</h4>
                        <p className="text-sm text-gray-600">522533</p>
                      </div>
                      <Badge variant="secondary">Verified</Badge>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Transaction Limit</h4>
                        <p className="text-sm text-gray-600">KES 70,000 per transaction</p>
                      </div>
                      <Badge variant="outline">Standard</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Today's M-Pesa Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Transactions</span>
                        <span className="font-medium">47</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Total Amount</span>
                        <span className="font-medium">KES 234,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Success Rate</span>
                        <span className="font-medium text-green-600">98.9%</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Payment Instructions</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>1. Go to M-Pesa menu</p>
                      <p>2. Select Lipa na M-Pesa</p>
                      <p>3. Select Pay Bill</p>
                      <p>4. Enter Business No: 522533</p>
                      <p>5. Account No: Student ID</p>
                      <p>6. Enter Amount & PIN</p>
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

// Payment Form Component
const PaymentForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [paymentData, setPaymentData] = useState({
    studentId: '',
    amount: '',
    method: '',
    reference: ''
  });

  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <div>
        <Label htmlFor="studentId">Student ID</Label>
        <Input
          id="studentId"
          placeholder="Enter student admission number"
          value={paymentData.studentId}
          onChange={(e) => setPaymentData({...paymentData, studentId: e.target.value})}
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount (KES)</Label>
        <Input
          id="amount"
          type="number"
          placeholder="Enter payment amount"
          value={paymentData.amount}
          onChange={(e) => setPaymentData({...paymentData, amount: e.target.value})}
        />
      </div>
      <div>
        <Label>Payment Method</Label>
        <Select value={paymentData.method} onValueChange={(value) => setPaymentData({...paymentData, method: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mpesa">M-Pesa</SelectItem>
            <SelectItem value="bank">Bank Transfer</SelectItem>
            <SelectItem value="cash">Cash</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="reference">Reference Number</Label>
        <Input
          id="reference"
          placeholder="Transaction reference"
          value={paymentData.reference}
          onChange={(e) => setPaymentData({...paymentData, reference: e.target.value})}
        />
      </div>
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Process Payment
      </Button>
    </form>
  );
};

export default FinanceManagement;
