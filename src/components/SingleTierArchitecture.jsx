import React from "react";
import { Database, Layout, Cpu, HardDrive } from "lucide-react";

export default function SingleTierArchitecture() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
          Single-Tier Architecture
        </h1>

        <div className="flex flex-col items-center gap-8">
          {/* Main Application Block */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl border-4 border-blue-500">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">
                Single Application
              </h2>
              <p className="text-sm text-slate-600">
                All layers integrated in one program
              </p>
            </div>

            {/* Three Layers */}
            <div className="space-y-4">
              {/* Presentation Layer */}
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl p-6 border-2 border-purple-400">
                <div className="flex items-center gap-3 mb-2">
                  <Layout className="w-6 h-6 text-purple-700" />
                  <h3 className="text-lg font-semibold text-purple-800">
                    Presentation Layer
                  </h3>
                </div>
                <p className="text-sm text-purple-700">
                  User Interface (UI) - Forms, Windows, Menus
                </p>
              </div>

              {/* Business Logic Layer */}
              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-xl p-6 border-2 border-green-400">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-6 h-6 text-green-700" />
                  <h3 className="text-lg font-semibold text-green-800">
                    Business Logic Layer
                  </h3>
                </div>
                <p className="text-sm text-green-700">
                  Application Logic - Processing, Validation, Rules
                </p>
              </div>

              {/* Data Layer */}
              <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl p-6 border-2 border-orange-400">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-6 h-6 text-orange-700" />
                  <h3 className="text-lg font-semibold text-orange-800">
                    Data Layer
                  </h3>
                </div>
                <p className="text-sm text-orange-700">
                  Data Storage - Local Database, File System
                </p>
              </div>
            </div>
          </div>

          {/* Local Machine */}
          <div className="flex items-center gap-3 bg-slate-200 rounded-xl px-6 py-4 border-2 border-slate-400">
            <HardDrive className="w-8 h-8 text-slate-700" />
            <div>
              <h3 className="font-semibold text-slate-800">
                Local Machine / Single Device
              </h3>
              <p className="text-sm text-slate-600">
                Everything runs on one computer
              </p>
            </div>
          </div>

          {/* Key Characteristics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">✓ Advantages</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Simple to develop</li>
                <li>• Fast performance (no network)</li>
                <li>• Easy to deploy</li>
                <li>• Lower cost</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">
                ✗ Disadvantages
              </h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• No remote access</li>
                <li>• Limited scalability</li>
                <li>• Single point of failure</li>
                <li>• Hard to maintain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
