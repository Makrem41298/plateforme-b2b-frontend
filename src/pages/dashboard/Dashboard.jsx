import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    // Sample data
    const salesData = [
        { month: 'Jan', sales: 4000, revenue: 2400 },
        { month: 'Feb', sales: 3000, revenue: 1398 },
        { month: 'Mar', sales: 2000, revenue: 9800 },
        { month: 'Apr', sales: 2780, revenue: 3908 },
        { month: 'May', sales: 1890, revenue: 4800 },
        { month: 'Jun', sales: 2390, revenue: 3800 },
    ];

    const pieData = [
        { name: 'Desktop', value: 45, color: '#3B82F6' },
        { name: 'Mobile', value: 35, color: '#10B981' },
        { name: 'Tablet', value: 20, color: '#F59E0B' },
    ];

    const recentOrders = [
        { id: '001', customer: 'John Doe', amount: '$245.00', status: 'Completed' },
        { id: '002', customer: 'Jane Smith', amount: '$189.50', status: 'Pending' },
        { id: '003', customer: 'Mike Johnson', amount: '$356.75', status: 'Processing' },
        { id: '004', customer: 'Sarah Wilson', amount: '$122.30', status: 'Completed' },
    ];

    const StatCard = ({ title, value, change, icon: Icon, color }) => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-600 text-sm font-medium">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                    <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {change >= 0 ? '+' : ''}{change}% from last month
                    </p>
                </div>
                <div className={`p-3 rounded-lg ${color}`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Dashboard Title */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Revenue"
                    value="$45,231"
                    change={12.5}
                    icon={DollarSign}
                    color="bg-green-500"
                />
                <StatCard
                    title="Total Users"
                    value="2,345"
                    change={8.2}
                    icon={Users}
                    color="bg-blue-500"
                />
                <StatCard
                    title="Total Orders"
                    value="1,234"
                    change={-3.1}
                    icon={ShoppingCart}
                    color="bg-purple-500"
                />
                <StatCard
                    title="Growth Rate"
                    value="15.3%"
                    change={5.4}
                    icon={TrendingUp}
                    color="bg-orange-500"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Sales Chart */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" stroke="#6b7280" />
                            <YAxis stroke="#6b7280" />
                            <Tooltip />
                            <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} />
                            <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Device Usage Pie Chart */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Usage</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                dataKey="value"
                                label={({ name, value }) => `${name}: ${value}%`}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
                    <div className="space-y-4">
                        {recentOrders.map((order) => (
                            <div key={order.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">#{order.id}</p>
                                    <p className="text-sm text-gray-600">{order.customer}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-gray-900">{order.amount}</p>
                                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-blue-100 text-blue-800'
                                    }`}>
                    {order.status}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900">Add New Product</div>
                            <div className="text-sm text-gray-600">Create a new product listing</div>
                        </button>
                        <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900">Generate Report</div>
                            <div className="text-sm text-gray-600">Create monthly sales report</div>
                        </button>
                        <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900">Manage Users</div>
                            <div className="text-sm text-gray-600">View and edit user accounts</div>
                        </button>
                        <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900">Settings</div>
                            <div className="text-sm text-gray-600">Configure dashboard preferences</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;