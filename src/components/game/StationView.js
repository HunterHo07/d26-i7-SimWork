'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function StationView({ station, onBack }) {
  const [activeTab, setActiveTab] = useState('tasks');
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Load saved progress from localStorage when component mounts
    if (typeof window !== 'undefined') {
      const savedProgress = JSON.parse(localStorage.getItem('simworkProgress') || '{}');
      if (savedProgress[station.id]) {
        setCompletedTasks(savedProgress[station.id]);
      }
    }
  }, [station.id]);

  const tasks = {
    developer: [
      { id: 'dev1', title: 'Fix the Navigation Bug', difficulty: 'Easy', description: 'The navigation menu disappears when clicking on submenu items. Debug and fix the issue.' },
      { id: 'dev2', title: 'Implement User Authentication', difficulty: 'Medium', description: 'Create a secure login system with email verification and password recovery.' },
      { id: 'dev3', title: 'Optimize Database Queries', difficulty: 'Hard', description: 'Improve the performance of slow-loading user dashboard by optimizing database queries.' },
    ],
    designer: [
      { id: 'des1', title: 'Create App Icon', difficulty: 'Easy', description: 'Design a modern, distinctive app icon that represents the brand identity.' },
      { id: 'des2', title: 'Redesign Landing Page', difficulty: 'Medium', description: 'Create a conversion-focused landing page with clear call-to-action elements.' },
      { id: 'des3', title: 'Design Design System', difficulty: 'Hard', description: 'Create a comprehensive design system with components, color palette, and typography guidelines.' },
    ],
    pm: [
      { id: 'pm1', title: 'Create Sprint Plan', difficulty: 'Easy', description: 'Organize tasks for the upcoming two-week sprint based on team capacity and priorities.' },
      { id: 'pm2', title: 'Conduct Stakeholder Meeting', difficulty: 'Medium', description: 'Prepare and lead a stakeholder meeting to align on project goals and timeline.' },
      { id: 'pm3', title: 'Resolve Resource Conflict', difficulty: 'Hard', description: 'Address a resource allocation conflict between two critical project workstreams.' },
    ],
    data: [
      { id: 'data1', title: 'Process Customer Records', difficulty: 'Easy', description: 'Enter customer information from paper forms into the CRM system with high accuracy.' },
      { id: 'data2', title: 'Clean Dataset', difficulty: 'Medium', description: 'Identify and correct errors, duplicates, and inconsistencies in the customer database.' },
      { id: 'data3', title: 'Generate Monthly Report', difficulty: 'Hard', description: 'Compile data from multiple sources to create the comprehensive monthly performance report.' },
    ],
    ai: [
      { id: 'ai1', title: 'Create Basic Prompt', difficulty: 'Easy', description: 'Write an effective prompt for generating product descriptions from basic specifications.' },
      { id: 'ai2', title: 'Implement Prompt Chaining', difficulty: 'Medium', description: 'Design a sequence of prompts that build on each other to solve a complex problem.' },
      { id: 'ai3', title: 'Optimize Model Performance', difficulty: 'Hard', description: 'Fine-tune parameters and prompts to improve output quality while reducing token usage.' },
    ],
  };

  const stationTasks = tasks[station.id] || [];

  const handleCompleteTask = (taskId) => {
    if (!completedTasks.includes(taskId)) {
      setCompletedTasks([...completedTasks, taskId]);

      // Simulate saving to localStorage
      const savedProgress = JSON.parse(localStorage.getItem('simworkProgress') || '{}');
      savedProgress[station.id] = [...(savedProgress[station.id] || []), taskId];
      localStorage.setItem('simworkProgress', JSON.stringify(savedProgress));
    }
  };

  return (
    <div className="bg-white dark:bg-dark-300 rounded-xl shadow-xl overflow-hidden">
      {/* Station Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">{station.name}</h2>
            <p className="text-white/80">{station.description}</p>
          </div>
          <button
            onClick={onBack}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
          >
            Back to Map
          </button>
        </div>
      </div>

      {/* Station Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex">
          <button
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === 'tasks'
                ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('tasks')}
          >
            Tasks
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === 'progress'
                ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('progress')}
          >
            Progress
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === 'tools'
                ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'tasks' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Available Tasks</h3>
            {stationTasks.map(task => (
              <div
                key={task.id}
                className={`p-4 rounded-lg border ${
                  completedTasks.includes(task.id)
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                    : 'bg-white dark:bg-dark-200 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-medium">{task.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.difficulty === 'Easy'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                          : task.difficulty === 'Medium'
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                      }`}>
                        {task.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{task.description}</p>
                  </div>
                  <Button
                    variant={completedTasks.includes(task.id) ? 'secondary' : 'primary'}
                    size="sm"
                    onClick={() => handleCompleteTask(task.id)}
                    className="flex-shrink-0"
                  >
                    {completedTasks.includes(task.id) ? 'Completed' : 'Start Task'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'progress' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Progress</h3>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Task Completion</span>
                <span className="text-sm font-medium">{completedTasks.length}/{stationTasks.length}</span>
              </div>
              <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  style={{ width: `${(completedTasks.length / stationTasks.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-dark-400 rounded-lg p-4">
              <h4 className="font-medium mb-2">Skill Development</h4>
              <div className="space-y-3">
                <SkillBar name="Technical Knowledge" value={completedTasks.length * 20} />
                <SkillBar name="Problem Solving" value={completedTasks.length * 15} />
                <SkillBar name="Attention to Detail" value={completedTasks.length * 25} />
                <SkillBar name="Efficiency" value={completedTasks.length * 18} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Available Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ToolCard
                title="Code Editor"
                description="Write and test code with syntax highlighting and auto-completion."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                }
              />
              <ToolCard
                title="Terminal"
                description="Access command line interface for development tasks."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
              />
              <ToolCard
                title="Design Canvas"
                description="Create and edit visual designs with professional tools."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
              />
              <ToolCard
                title="AI Assistant"
                description="Get help and guidance from an AI assistant."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SkillBar({ name, value }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600 dark:text-gray-400">{name}</span>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

function ToolCard({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="font-medium mb-1">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
