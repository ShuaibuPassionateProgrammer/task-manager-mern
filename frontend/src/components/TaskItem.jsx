import React, { useState } from "react";
import { deleteTask, updateTask } from "../api";

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDescription, setEditDescription] = useState(task.description);

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
            ) : ""}
        </div>
    );
};

export default TaskItem;