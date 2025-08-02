import React from 'react';
import { Play, BookOpen, Users, Shield, Database, Globe, TestTube, Settings, BarChart3, Archive, Layers, Activity } from 'lucide-react';

interface CategorySelectorProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onStartQuiz: () => void;
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  'Fundamentals': <BookOpen className="w-6 h-6" />,
  'Configuration': <Settings className="w-6 h-6" />,
  'Security': <Shield className="w-6 h-6" />,
  'Data': <Database className="w-6 h-6" />,
  'Web': <Globe className="w-6 h-6" />,
  'Testing': <TestTube className="w-6 h-6" />,
  'Performance': <BarChart3 className="w-6 h-6" />,
  'Architecture': <Layers className="w-6 h-6" />,
  'Monitoring': <Activity className="w-6 h-6" />,
  'REST API': <Globe className="w-6 h-6" />,
  'Logging': <Archive className="w-6 h-6" />,
  'Dependency Injection': <Users className="w-6 h-6" />,
  'Validation': <Shield className="w-6 h-6" />,
  'Caching': <Database className="w-6 h-6" />,
  'Error Handling': <TestTube className="w-6 h-6" />,
  'Profiles': <Settings className="w-6 h-6" />,
  'Packaging': <Archive className="w-6 h-6" />,
  'Development': <BookOpen className="w-6 h-6" />,
  'Microservices': <Layers className="w-6 h-6" />,
  'Deployment': <Settings className="w-6 h-6" />
};

export function CategorySelector({
  categories,
  selectedCategories,
  onCategoryToggle,
  onSelectAll,
  onDeselectAll,
  onStartQuiz
}: CategorySelectorProps) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Spring Boot Best Practices</h1>
        <p className="text-xl opacity-90">Master Spring Boot with 200+ expert-level questions</p>
      </div>

      {/* Category Selection */}
      <div className="p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Categories</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={onSelectAll}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200 font-medium"
            >
              Select All
            </button>
            <button
              onClick={onDeselectAll}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
            >
              Deselect All
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <button
                key={category}
                onClick={() => onCategoryToggle(category)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  isSelected
                    ? 'border-green-500 bg-green-50 text-green-800 shadow-md'
                    : 'border-gray-200 hover:border-green-300 hover:bg-green-50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${isSelected ? 'text-green-600' : 'text-gray-500'}`}>
                    {categoryIcons[category] || <BookOpen className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="font-medium">{category}</div>
                    <div className="text-sm opacity-75">
                      {/* You could add question counts here */}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Start Quiz Button */}
        <div className="text-center">
          <button
            onClick={onStartQuiz}
            disabled={selectedCategories.length === 0}
            className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg ${
              selectedCategories.length > 0
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Play className="w-6 h-6 mr-3" />
            Start Quiz ({selectedCategories.length > 0 ? `${selectedCategories.length} categories` : 'No categories selected'})
          </button>
        </div>

        {/* Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-2">About This Quiz</h3>
          <div className="text-blue-800 space-y-2">
            <p>• Over 200 carefully crafted questions covering Spring Boot best practices</p>
            <p>• Expert-level scenarios and real-world implementation guidance</p>
            <p>• Detailed explanations for each answer to enhance learning</p>
            <p>• Questions organized by key Spring Boot development areas</p>
            <p>• Perfect for developers preparing for interviews or wanting to validate their knowledge</p>
          </div>
        </div>
      </div>
    </div>
  );
}