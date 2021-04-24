import React, { useState } from "react";
const NewTodoForm = props => {
  const initialData = {
    task: ""
  };
  const [formData, setFormData] = useState(initialData);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { task } = formData;
    props.addTask(task);
    setFormData(initialData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          id="task"
          name="task"
          value={formData.task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
      </div>
      <br></br>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

export default NewTodoForm;
