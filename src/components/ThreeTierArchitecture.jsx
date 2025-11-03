import React from "react";
import {
  Monitor,
  Server,
  Database,
  Layout,
  Cpu,
  Globe,
  ArrowDown,
  Network,
} from "lucide-react";

export default function ThreeTierArchitecture() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-violet-50 to-cyan-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
          Three-Tier Architecture
        </h1>

        <div className="flex flex-col items-center gap-6">
          {/* Tier 1: Presentation Layer */}
          <div className="w-full bg-white rounded-2xl shadow-2xl p-6 border-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Monitor className="w-10 h-10 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold text-blue-600">
                    Tier 1: Presentation Layer
                  </h2>
                  <p className="text-sm text-slate-600">
                    Client / User Interface
                  </p>
                </div>
              </div>
              <Globe className="w-8 h-8 text-blue-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
                <Layout className="w-6 h-6 text-blue-700 mb-2" />
                <h3 className="font-semibold text-blue-800 mb-1">
                  User Interface
                </h3>
                <p className="text-xs text-blue-700">
                  Web Browser, Mobile App, Desktop Client
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
                <h3 className="font-semibold text-blue-800 mb-1">Components</h3>
                <p className="text-xs text-blue-700">
                  HTML, CSS, JavaScript, React, Angular, Vue
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
                <h3 className="font-semibold text-blue-800 mb-1">
                  Responsibilities
                </h3>
                <p className="text-xs text-blue-700">
                  Display data, Accept user input, Send requests
                </p>
              </div>
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex flex-col items-center">
            <ArrowDown className="w-8 h-8 text-slate-500 animate-bounce" />
            <div className="bg-slate-200 rounded-full px-4 py-2 my-2">
              <p className="text-sm font-semibold text-slate-700">HTTP/HTTPS</p>
            </div>
            <ArrowDown className="w-8 h-8 text-slate-500 animate-bounce" />
          </div>

          {/* Tier 2: Application Layer */}
          <div className="w-full bg-white rounded-2xl shadow-2xl p-6 border-4 border-green-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Server className="w-10 h-10 text-green-600" />
                <div>
                  <h2 className="text-2xl font-bold text-green-600">
                    Tier 2: Application Layer
                  </h2>
                  <p className="text-sm text-slate-600">
                    Business Logic / Middle Tier
                  </p>
                </div>
              </div>
              <Cpu className="w-8 h-8 text-green-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-2 border-green-300">
                <Cpu className="w-6 h-6 text-green-700 mb-2" />
                <h3 className="font-semibold text-green-800 mb-1">
                  Business Logic
                </h3>
                <p className="text-xs text-green-700">
                  Processing, Validation, Calculations, Rules
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-2 border-green-300">
                <h3 className="font-semibold text-green-800 mb-1">
                  Technologies
                </h3>
                <p className="text-xs text-green-700">
                  Node.js, Java, .NET, Python, PHP, Ruby
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-2 border-green-300">
                <h3 className="font-semibold text-green-800 mb-1">
                  Responsibilities
                </h3>
                <p className="text-xs text-green-700">
                  Process requests, Execute logic, Manage transactions
                </p>
              </div>
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex flex-col items-center">
            <ArrowDown className="w-8 h-8 text-slate-500 animate-bounce" />
            <div className="bg-slate-200 rounded-full px-4 py-2 my-2">
              <p className="text-sm font-semibold text-slate-700">
                SQL/Database Protocol
              </p>
            </div>
            <ArrowDown className="w-8 h-8 text-slate-500 animate-bounce" />
          </div>

          {/* Tier 3: Data Layer */}
          <div className="w-full bg-white rounded-2xl shadow-2xl p-6 border-4 border-orange-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Database className="w-10 h-10 text-orange-600" />
                <div>
                  <h2 className="text-2xl font-bold text-orange-600">
                    Tier 3: Data Layer
                  </h2>
                  <p className="text-sm text-slate-600">
                    Database / Data Storage
                  </p>
                </div>
              </div>
              <Network className="w-8 h-8 text-orange-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-2 border-orange-300">
                <Database className="w-6 h-6 text-orange-700 mb-2" />
                <h3 className="font-semibold text-orange-800 mb-1">
                  Data Storage
                </h3>
                <p className="text-xs text-orange-700">
                  Persistent storage, Data integrity, Backup
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-2 border-orange-300">
                <h3 className="font-semibold text-orange-800 mb-1">
                  Databases
                </h3>
                <p className="text-xs text-orange-700">
                  MySQL, PostgreSQL, MongoDB, Oracle, SQL Server
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-2 border-orange-300">
                <h3 className="font-semibold text-orange-800 mb-1">
                  Responsibilities
                </h3>
                <p className="text-xs text-orange-700">
                  Store data, Retrieve data, Ensure security
                </p>
              </div>
            </div>
          </div>

          {/* Advantages and Disadvantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-300 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">✓</span> Advantages
              </h3>
              <ul className="space-y-2 text-emerald-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Scalability:</strong> Each tier can scale
                    independently
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Maintainability:</strong> Changes isolated to
                    specific tiers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Security:</strong> Database not directly accessible
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Flexibility:</strong> Technology stack can vary per
                    tier
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Reusability:</strong> Business logic can be shared
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-rose-50 rounded-xl p-6 border-2 border-rose-300 shadow-lg">
              <h3 className="text-xl font-bold text-rose-700 mb-4 flex items-center gap-2">
                <span className="text-2xl">✗</span> Disadvantages
              </h3>
              <ul className="space-y-2 text-rose-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Complexity:</strong> More complex to design and
                    implement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Cost:</strong> Requires more infrastructure and
                    resources
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Network latency:</strong> Multiple network calls
                    between tiers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Development time:</strong> Takes longer to develop
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span className="text-sm">
                    <strong>Debugging:</strong> More difficult to trace issues
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Real-world Applications */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-full border-t-4 border-violet-500 mt-4">
            <h3 className="text-2xl font-bold text-violet-600 mb-6 text-center">
              Common Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                <h4 className="font-bold text-violet-700 mb-2">E-commerce</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Amazon</li>
                  <li>• eBay</li>
                  <li>• Shopify</li>
                  <li>• Flipkart</li>
                </ul>
              </div>

              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-bold text-cyan-700 mb-2">Social Media</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Facebook</li>
                  <li>• Twitter</li>
                  <li>• LinkedIn</li>
                  <li>• Instagram</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-700 mb-2">Banking</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Online Banking</li>
                  <li>• Payment Gateways</li>
                  <li>• Trading Platforms</li>
                  <li>• Financial Apps</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-700 mb-2">Enterprise</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• CRM Systems</li>
                  <li>• ERP Solutions</li>
                  <li>• HR Management</li>
                  <li>• Cloud Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
