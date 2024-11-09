import React, { useState } from "react";
import { deleteTask, updateTask } from "../api";

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDescription, setEditDescription] = useState(task.description);

    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this task?");
        if(confirmed) {
            try {
                await deleteTask(task._id);
                window.location.reload();
            }
            catch (error) {
                console.error("Error deleting task: " + error?.message);
            }
        }
    };

    const handleEdit = async () => {
        setIsEditing(true); // Switch to editing mode
    };

    const handleSave = async () => {
        try {
            const updatedTask = {
                ...task,
                title: editTitle,
                description: editDescription
            };

            await updateTask(task._id, updatedTask); // Update task via API
        }
        catch (error) {
            console.error("Error updating task: " + error?.message);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        rows="3"
                    ></textarea>
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white py-1 px-3 rounded mr-2 hover:bg-green-600"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{task.title}</h3>
                  <p className="text-gray-600">{task.description}</p>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={handleEdit}
                      className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
            )}
        </div>
    );
};

export default TaskItem;