import React from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category, setData }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} setData={setData} category={category} />
        ))}
      </div>
      <AddWidgetForm setData={setData} category={category} />
    </div>
  );
};

export default Category;
