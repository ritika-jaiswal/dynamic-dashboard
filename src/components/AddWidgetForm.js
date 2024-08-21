import React, { useState } from 'react';

const AddWidgetForm = ({ setData, category }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const addWidget = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(), 
      name,
      text,
    };

    setData((prevData) => ({
      ...prevData,
      categories: prevData.categories.map((cat) =>
        cat.id === category.id
          ? {
              ...cat,
              widgets: [...cat.widgets, newWidget],
            }
          : cat
      ),
    }));

    setName('');
    setText('');
  };

  return (
    <form onSubmit={addWidget} className="mt-4">
      <input
        type="text"
        placeholder="Widget Name"
        className="border p-2 mr-2 w-full sm:w-auto mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Widget Text"
        className="border p-2 mr-2 w-full sm:w-auto mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Widget
      </button>
    </form>
  );
};

export default AddWidgetForm;
