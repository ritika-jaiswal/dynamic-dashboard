
import React, { useState } from 'react';
import Category from './Category';
import { dashboardData } from '../data';

const Dashboard = () => {
  const [data, setData] = useState(dashboardData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = data.categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dynamic Dashboard</h1>
  
      <input
        type="text"
        placeholder="Search widgets..."
        className="border p-2 mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredCategories.map((category) => (
        <Category key={category.id} category={category} setData={setData} />
      ))}
    </div>
  );
};

export default Dashboard;
