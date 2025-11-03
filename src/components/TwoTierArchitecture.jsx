import React from "react";
import {
  Monitor,
  Server,
  Database,
  ArrowRightLeft,
  Wifi,
  Cpu,
  Layout,
} from "lucide-react";

export default function TwoTierArchitecture() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Two-Tier Architecture
        </h1>

        {/* Main Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          {/* Client Tier */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 border-4 border-purple-500">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Monitor className="w-16 h-16 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-purple-600 mb-2">
                Tier 1: Client
              </h2>
              <p className="text-sm text-slate-600">Presentation Layer</p>
            </div>

            <div className="space-y-3">
              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">
                  User Interface
                </h3>
                <p className="text-sm text-purple-700">
                  Desktop App, Web Browser, Mobile App
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">
                  Business Logic
                </h3>
                <p className="text-sm text-purple-700">
                  Application Processing, Validation
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">
                  Client Features
                </h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• User input handling</li>
                  <li>• Data presentation</li>
                  <li>• Request generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-full p-4 mb-4">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <ArrowRightLeft className="w-6 h-6 text-slate-600" />
            </div>
            <p className="text-center font-semibold text-slate-700 mt-4">
              Network Connection
            </p>
            <p className="text-sm text-slate-600 text-center">
              TCP/IP, HTTP, JDBC
            </p>
          </div>

          {/* Server Tier */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 border-4 border-orange-500">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Server className="w-16 h-16 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-orange-600 mb-2">
                Tier 2: Server
              </h2>
              <p className="text-sm text-slate-600">Data Layer</p>
            </div>

            <div className="space-y-3">
              <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-orange-700" />
                  <h3 className="font-semibold text-orange-800">
                    Database Server
                  </h3>
                </div>
                <p className="text-sm text-orange-700">
                  MySQL, PostgreSQL, Oracle, SQL Server
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">
                  Data Management
                </h3>
                <p className="text-sm text-orange-700">
                  Storage, Retrieval, Security
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">
                  Server Features
                </h3>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Query processing</li>
                  <li>• Data integrity</li>
                  <li>• Concurrent access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Fat Client (Thick Client)
            </h3>
            <p className="text-slate-700 mb-3">
              Most business logic resides on the client side
            </p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>✓ Rich user interface</li>
              <li>✓ Faster response time</li>
              <li>✓ Less network traffic</li>
              <li>✗ Higher client requirements</li>
              <li>✗ Harder to maintain</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-600 mb-4">
              Thin Client
            </h3>
            <p className="text-slate-700 mb-3">
              Most business logic resides on the server side
            </p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>✓ Lower client requirements</li>
              <li>✓ Easier to maintain</li>
              <li>✓ Centralized updates</li>
              <li>✗ More network traffic</li>
              <li>✗ Server dependency</li>
            </ul>
          </div>
        </div>

        {/* Advantages and Disadvantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">
              ✓ Advantages
            </h3>
            <ul className="space-y-2 text-emerald-800">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Easy to maintain and update</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Better performance than single-tier</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Multiple users can access simultaneously</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Data centralization and security</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Cost-effective for small to medium applications</span>
              </li>
            </ul>
          </div>

          <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
            <h3 className="text-xl font-bold text-rose-700 mb-4">
              ✗ Disadvantages
            </h3>
            <ul className="space-y-2 text-rose-800">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>Limited scalability for large applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>Performance issues with many concurrent users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>Network dependency - requires stable connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>Security vulnerabilities in direct database access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>Tight coupling between client and server</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full border-t-4 border-indigo-500">
          <h3 className="text-xl font-bold text-indigo-600 mb-4 text-center">
            Common Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-indigo-600 mb-2">Desktop Apps</p>
              <ul className="space-y-1">
                <li>• Banking Systems</li>
                <li>• POS Systems</li>
                <li>• Inventory Management</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-indigo-600 mb-2">Enterprise</p>
              <ul className="space-y-1">
                <li>• Payroll Systems</li>
                <li>• CRM Applications</li>
                <li>• Accounting Software</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-indigo-600 mb-2">Education</p>
              <ul className="space-y-1">
                <li>• Library Management</li>
                <li>• Student Information</li>
                <li>• Exam Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
