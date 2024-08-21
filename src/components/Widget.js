import React from 'react';

const Widget = ({ widget, setData, category }) => {
  const removeWidget = () => {
    setData((prevData) => ({
      ...prevData,
      categories: prevData.categories.map((cat) =>
        cat.id === category.id
          ? {
              ...cat,
              widgets: cat.widgets.filter((w) => w.id !== widget.id),
            }
          : cat
      ),
    }));
  };

  return (
    <div className="p-4 border rounded shadow-lg relative">
      <h3 className="text-xl font-bold mb-2">{widget.name}</h3>
      <p className="mb-4">{widget.text}</p>
      
      <button
        className="absolute top-2 right-2 text-red-600 font-bold"
        onClick={removeWidget}
      >
        ✕
      </button>
    </div>
  );
};

export default Widget;
