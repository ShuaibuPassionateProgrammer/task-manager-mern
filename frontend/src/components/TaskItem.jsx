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
                        onChange={e => setEditTitle(e.target.value)}
                    />
                </div>
            ) : ""}
        </div>
    );
};

export default TaskItem;