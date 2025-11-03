import React from "react";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  Globe,
  ShoppingCart,
  User,
  CreditCard,
  Package,
  Bell,
  Search,
  BarChart,
  Settings,
} from "lucide-react";

export default function MicroservicesArchitecture() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-slate-800">
          Microservices Architecture
        </h1>

        <div className="flex flex-col gap-6">
          {/* Client Layer */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-600">Client Layer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                <Globe className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-sm font-semibold text-blue-800">Web App</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                <Monitor className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-sm font-semibold text-blue-800">
                  Mobile App
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                <Server className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-sm font-semibold text-blue-800">
                  Desktop App
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                <Settings className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-sm font-semibold text-blue-800">
                  IoT Devices
                </p>
              </div>
            </div>
          </div>

          {/* API Gateway */}
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="w-10 h-10" />
                <div>
                  <h2 className="text-2xl font-bold">API Gateway</h2>
                  <p className="text-sm text-purple-100">
                    Single Entry Point - Routes requests to services
                  </p>
                </div>
              </div>
              <Shield className="w-8 h-8 text-purple-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                <p className="text-xs font-semibold">Authentication</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                <p className="text-xs font-semibold">Load Balancing</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                <p className="text-xs font-semibold">Rate Limiting</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center">
                <p className="text-xs font-semibold">Request Routing</p>
              </div>
            </div>
          </div>

          {/* Microservices Grid */}
          <div className="bg-slate-100 rounded-xl p-6 border-2 border-slate-300">
            <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">
              Independent Microservices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* User Service */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-blue-800">User Service</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="bg-blue-50 rounded p-2">
                    <p className="font-semibold text-blue-700">Functions:</p>
                    <p>Authentication, Profile, Registration</p>
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center gap-1">
                    <Database className="w-4 h-4 text-slate-600" />
                    <p className="font-semibold">User DB</p>
                  </div>
                </div>
              </div>

              {/* Product Service */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-green-800">Product Service</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="bg-green-50 rounded p-2">
                    <p className="font-semibold text-green-700">Functions:</p>
                    <p>Catalog, Inventory, Search</p>
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center gap-1">
                    <Database className="w-4 h-4 text-slate-600" />
                    <p className="font-semibold">Product DB</p>
                  </div>
                </div>
              </div>

              {/* Order Service */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingCart className="w-6 h-6 text-orange-600" />
                  <h3 className="font-bold text-orange-800">Order Service</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="bg-orange-50 rounded p-2">
                    <p className="font-semibold text-orange-700">Functions:</p>
                    <p>Create, Track, History</p>
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center gap-1">
                    <Database className="w-4 h-4 text-slate-600" />
                    <p className="font-semibold">Order DB</p>
                  </div>
                </div>
              </div>

              {/* Payment Service */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-purple-800">Payment Service</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="bg-purple-50 rounded p-2">
                    <p className="font-semibold text-purple-700">Functions:</p>
                    <p>Process, Refund, Verify</p>
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center gap-1">
                    <Database className="w-4 h-4 text-slate-600" />
                    <p className="font-semibold">Payment DB</p>
                  </div>
                </div>
              </div>

              {/* Notification Service */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-red-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Bell className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-red-800">
                    Notification Service
                  </h3>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="bg-red-50 rounded p-2">
                    <p className="font-semibold text-red-700">Functions:</p>
                    <p>Email, SMS, Push</p>
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center gap-1">
                    <Database className="w-4 h-4 text-slate-600" />
                    <p className="font-semibold">Notification DB</p>
                  </div>
                </div>
              </div>

              {/* Search Service */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-cyan-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-6 h-6 text-cyan-600" />
                  <h3 className="font-bold text-cyan-800">Search Service</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="bg-cyan-50 rounded p-2">
                    <p className="font-semibold text-cyan-700">Functions:</p>
                    <p>Index, Query, Filter</p>
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center gap-1">
                    <Database className="w-4 h-4 text-slate-600" />
                    <p className="font-semibold">Search Index</p>
                  </div>
                </div>
              </div>

              {/* Analytics Service */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart className="w-6 h-6 text-yellow-600" />
                  <h3 className="font-bold text-yellow-800">
                    Analytics Service
                  </h3>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="bg-yellow-50 rounded p-2">
                    <p className="font-semibold text-yellow-700">Functions:</p>
                    <p>Metrics, Reports, Insights</p>
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center gap-1">
                    <Database className="w-4 h-4 text-slate-600" />
                    <p className="font-semibold">Analytics DB</p>
                  </div>
                </div>
              </div>

              {/* Shipping Service */}
              <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-pink-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-6 h-6 text-pink-600" />
                  <h3 className="font-bold text-pink-800">Shipping Service</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="bg-pink-50 rounded p-2">
                    <p className="font-semibold text-pink-700">Functions:</p>
                    <p>Track, Calculate, Update</p>
                  </div>
                  <div className="bg-slate-50 rounded p-2 flex items-center gap-1">
                    <Database className="w-4 h-4 text-slate-600" />
                    <p className="font-semibold">Shipping DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Infrastructure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-indigo-500">
              <h3 className="font-bold text-indigo-700 mb-3 text-lg">
                Service Discovery
              </h3>
              <p className="text-sm text-slate-700 mb-2">
                Finds and registers services dynamically
              </p>
              <div className="bg-indigo-50 rounded p-2 text-xs text-indigo-800">
                Consul, Eureka, Kubernetes DNS
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-3 text-lg">
                Message Queue
              </h3>
              <p className="text-sm text-slate-700 mb-2">
                Asynchronous communication between services
              </p>
              <div className="bg-green-50 rounded p-2 text-xs text-green-800">
                RabbitMQ, Kafka, AWS SQS
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-700 mb-3 text-lg">
                Configuration Server
              </h3>
              <p className="text-sm text-slate-700 mb-2">
                Centralized configuration management
              </p>
              <div className="bg-orange-50 rounded p-2 text-xs text-orange-800">
                Spring Cloud Config, Consul
              </div>
            </div>
          </div>

          {/* Container Orchestration */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-10 h-10" />
              <div>
                <h2 className="text-2xl font-bold">
                  Container Orchestration & Deployment
                </h2>
                <p className="text-sm text-blue-100">
                  Docker, Kubernetes, AWS ECS, Azure Container Service
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center text-sm">
                Auto-scaling
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center text-sm">
                Load Balancing
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center text-sm">
                Health Checks
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center text-sm">
                Rolling Updates
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-2 text-center text-sm">
                Self-healing
              </div>
            </div>
          </div>

          {/* Advantages vs Disadvantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-300 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">
                ✓ Advantages
              </h3>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Independent Deployment:</strong> Deploy services
                    separately
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Technology Flexibility:</strong> Different tech per
                    service
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Scalability:</strong> Scale individual services as
                    needed
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Fault Isolation:</strong> Failure doesn't crash
                    entire system
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Team Autonomy:</strong> Small teams own services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Faster Development:</strong> Parallel development
                    possible
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-rose-50 rounded-xl p-6 border-2 border-rose-300 shadow-lg">
              <h3 className="text-xl font-bold text-rose-700 mb-4">
                ✗ Disadvantages
              </h3>
              <ul className="space-y-2 text-sm text-rose-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Complexity:</strong> Distributed system challenges
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Testing Difficulty:</strong> Hard to test
                    interactions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Data Consistency:</strong> Managing distributed data
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Network Latency:</strong> Inter-service
                    communication overhead
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>DevOps Overhead:</strong> Requires advanced
                    infrastructure
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>
                    <strong>Monitoring:</strong> Need sophisticated
                    observability tools
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Real-world Applications */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">
              Companies Using Microservices
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 text-center border border-red-200">
                <p className="font-bold text-red-800">Netflix</p>
                <p className="text-xs text-red-600 mt-1">Streaming Platform</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
                <p className="font-bold text-blue-800">Amazon</p>
                <p className="text-xs text-blue-600 mt-1">E-commerce</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200">
                <p className="font-bold text-green-800">Uber</p>
                <p className="text-xs text-green-600 mt-1">Ride-sharing</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200">
                <p className="font-bold text-purple-800">Spotify</p>
                <p className="text-xs text-purple-600 mt-1">Music Streaming</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 text-center border border-yellow-200">
                <p className="font-bold text-yellow-800">Airbnb</p>
                <p className="text-xs text-yellow-600 mt-1">Property Rental</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
