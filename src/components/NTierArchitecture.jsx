import React from "react";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  Globe,
  ArrowDown,
  Layers,
  FileText,
  Lock,
} from "lucide-react";

export default function NTierArchitecture() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
          N-Tier Architecture
        </h1>

        <div className="flex flex-col items-center gap-4">
          {/* Client Tier */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-6 border-4 border-blue-500">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-10 h-10 text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-blue-600">
                  Client Tier
                </h2>
                <p className="text-sm text-slate-600">Presentation Layer</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-blue-800">
                  Web Browser
                </p>
                <p className="text-xs text-blue-600">Chrome, Firefox, Safari</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-blue-800">
                  Mobile Apps
                </p>
                <p className="text-xs text-blue-600">iOS, Android Apps</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-blue-800">
                  Desktop Apps
                </p>
                <p className="text-xs text-blue-600">Native Applications</p>
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />

          {/* Load Balancer */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 border-4 border-indigo-500">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-10 h-10 text-indigo-600" />
              <div>
                <h2 className="text-2xl font-bold text-indigo-600">
                  Load Balancer
                </h2>
                <p className="text-sm text-slate-600">Traffic Distribution</p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
              <p className="text-sm text-indigo-800">
                Distributes incoming requests across multiple servers
              </p>
              <p className="text-xs text-indigo-600 mt-1">
                NGINX, HAProxy, AWS ELB, Azure Load Balancer
              </p>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />

          {/* Web Server Tier */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 border-4 border-purple-500">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-10 h-10 text-purple-600" />
              <div>
                <h2 className="text-2xl font-bold text-purple-600">
                  Web Server Tier
                </h2>
                <p className="text-sm text-slate-600">HTTP Request Handling</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <p className="text-sm font-semibold text-purple-800">
                  Static Content
                </p>
                <p className="text-xs text-purple-600">
                  HTML, CSS, JS, Images, Videos
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <p className="text-sm font-semibold text-purple-800">
                  Technologies
                </p>
                <p className="text-xs text-purple-600">Apache, NGINX, IIS</p>
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />

          {/* Application Server Tier */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 border-4 border-green-500">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-10 h-10 text-green-600" />
              <div>
                <h2 className="text-2xl font-bold text-green-600">
                  Application Server Tier
                </h2>
                <p className="text-sm text-slate-600">
                  Business Logic Processing
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-800">
                  Business Logic
                </p>
                <p className="text-xs text-green-600">
                  Validation, Calculations, Rules
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-800">
                  API Services
                </p>
                <p className="text-xs text-green-600">RESTful APIs, GraphQL</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-800">
                  Technologies
                </p>
                <p className="text-xs text-green-600">
                  Node.js, Java, .NET, Python
                </p>
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />

          {/* Security Layer */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 border-4 border-red-500">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-10 h-10 text-red-600" />
              <div>
                <h2 className="text-2xl font-bold text-red-600">
                  Security Layer
                </h2>
                <p className="text-sm text-slate-600">
                  Authentication & Authorization
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <Lock className="w-5 h-5 text-red-700 mb-1" />
                <p className="text-sm font-semibold text-red-800">
                  Authentication
                </p>
                <p className="text-xs text-red-600">OAuth, JWT, SAML</p>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-800">
                  Authorization
                </p>
                <p className="text-xs text-red-600">
                  Role-based Access Control
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-800">Encryption</p>
                <p className="text-xs text-red-600">SSL/TLS, Data Encryption</p>
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />

          {/* Integration Layer */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 border-4 border-yellow-500">
            <div className="flex items-center gap-3 mb-3">
              <Layers className="w-10 h-10 text-yellow-600" />
              <div>
                <h2 className="text-2xl font-bold text-yellow-600">
                  Integration Layer
                </h2>
                <p className="text-sm text-slate-600">
                  External Services & APIs
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <p className="text-sm font-semibold text-yellow-800">
                  Third-party APIs
                </p>
                <p className="text-xs text-yellow-600">
                  Payment, Maps, Social Media
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <p className="text-sm font-semibold text-yellow-800">
                  Message Queue
                </p>
                <p className="text-xs text-yellow-600">
                  RabbitMQ, Kafka, AWS SQS
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <p className="text-sm font-semibold text-yellow-800">
                  Service Bus
                </p>
                <p className="text-xs text-yellow-600">
                  ESB, Azure Service Bus
                </p>
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />

          {/* Data Access Layer */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 border-4 border-cyan-500">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-10 h-10 text-cyan-600" />
              <div>
                <h2 className="text-2xl font-bold text-cyan-600">
                  Data Access Layer
                </h2>
                <p className="text-sm text-slate-600">Database Operations</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
                <p className="text-sm font-semibold text-cyan-800">ORM/ODM</p>
                <p className="text-xs text-cyan-600">
                  Hibernate, Entity Framework, Mongoose
                </p>
              </div>
              <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
                <p className="text-sm font-semibold text-cyan-800">
                  Connection Pool
                </p>
                <p className="text-xs text-cyan-600">
                  Database connection management
                </p>
              </div>
              <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
                <p className="text-sm font-semibold text-cyan-800">Caching</p>
                <p className="text-xs text-cyan-600">Redis, Memcached</p>
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />

          {/* Database Tier */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 border-4 border-orange-500">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-10 h-10 text-orange-600" />
              <div>
                <h2 className="text-2xl font-bold text-orange-600">
                  Database Tier
                </h2>
                <p className="text-sm text-slate-600">
                  Data Storage & Management
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                <p className="text-sm font-semibold text-orange-800">
                  Relational DB
                </p>
                <p className="text-xs text-orange-600">
                  MySQL, PostgreSQL, Oracle
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                <p className="text-sm font-semibold text-orange-800">
                  NoSQL DB
                </p>
                <p className="text-xs text-orange-600">
                  MongoDB, Cassandra, DynamoDB
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                <p className="text-sm font-semibold text-orange-800">
                  Data Warehouse
                </p>
                <p className="text-xs text-orange-600">
                  Snowflake, BigQuery, Redshift
                </p>
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />

          {/* Cloud/Infrastructure Layer */}
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 border-4 border-pink-500">
            <div className="flex items-center gap-3 mb-3">
              <Cloud className="w-10 h-10 text-pink-600" />
              <div>
                <h2 className="text-2xl font-bold text-pink-600">
                  Infrastructure Layer
                </h2>
                <p className="text-sm text-slate-600">Cloud & DevOps</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                <p className="text-sm font-semibold text-pink-800">
                  Cloud Providers
                </p>
                <p className="text-xs text-pink-600">
                  AWS, Azure, Google Cloud
                </p>
              </div>
              <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                <p className="text-sm font-semibold text-pink-800">
                  Containers
                </p>
                <p className="text-xs text-pink-600">Docker, Kubernetes</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                <p className="text-sm font-semibold text-pink-800">
                  Monitoring
                </p>
                <p className="text-xs text-pink-600">
                  Prometheus, Grafana, ELK
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages and Disadvantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-300 shadow-lg">
            <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">✓</span> Advantages
            </h3>
            <ul className="space-y-2 text-emerald-800 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Maximum Scalability:</strong> Each layer scales
                  independently
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>High Flexibility:</strong> Easy to add/remove layers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Better Security:</strong> Multiple security
                  checkpoints
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Maintainability:</strong> Isolated changes per layer
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Technology Diversity:</strong> Different tech per
                  layer
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Load Distribution:</strong> Efficient resource
                  utilization
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-rose-50 rounded-xl p-6 border-2 border-rose-300 shadow-lg">
            <h3 className="text-xl font-bold text-rose-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">✗</span> Disadvantages
            </h3>
            <ul className="space-y-2 text-rose-800 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>High Complexity:</strong> Complex architecture to
                  manage
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Increased Cost:</strong> More infrastructure needed
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Network Overhead:</strong> Multiple network hops
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Development Time:</strong> Longer development cycles
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Debugging Difficulty:</strong> Hard to trace issues
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Team Coordination:</strong> Requires skilled teams
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Real-world Applications */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 border-t-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">
            Enterprise Applications Using N-Tier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">Cloud Platforms</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Microsoft Azure</li>
                <li>• Google Cloud</li>
                <li>• AWS Services</li>
                <li>• Salesforce</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
              <h4 className="font-bold text-green-700 mb-2">E-commerce</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Amazon</li>
                <li>• Alibaba</li>
                <li>• Walmart</li>
                <li>• Target</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
              <h4 className="font-bold text-orange-700 mb-2">Financial</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• PayPal</li>
                <li>• Stripe</li>
                <li>• Banking Systems</li>
                <li>• Trading Platforms</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
              <h4 className="font-bold text-purple-700 mb-2">Social Media</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Facebook</li>
                <li>• Netflix</li>
                <li>• Uber</li>
                <li>• Airbnb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
