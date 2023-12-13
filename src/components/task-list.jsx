import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useTranslation } from "react-i18next";
import {
  TaskListWrapper,
  AddNewTaskItem,
  StyledTaskList,
  TaskListItem,
  TaskListCheckBox,
  DeleteIconWrapper,
  TaskListTextAndCheckBoxWrapper,
  TaskListTextWrapper,
  TaskListCheckBoxWrapper,
} from "./../styled";
import { DeleteIcon } from "./../styled";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const TaskList = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    setTasks([
      { id: 1, text: "Brush my teeth", completed: false },
      {
        id: 2, text: "Collaborate with Anza on debugging prod issue",
        completed: false,
      },
      {
       id: 3, text: "Complete reading on JavaScript",
        completed: false,
      },
      {
        id: 4, text: "Start developing the notes drawer",
        completed: false,
      },
    ]);
  }, []);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, {  id: `${tasks.length + 1}`,text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(tasks, result.source.index, result.destination.index);

    setTasks(items);
  };

  return (
    <TaskListWrapper>
      <h1> {t("todolist.title")}</h1>
      <AddNewTaskItem
        type="text"
        placeholder={t("todolist.addANewTask")}
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <StyledTaskList>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task, index) => (
                   <Draggable key={(task.id).toString()} draggableId={(task.id).toString()} index={index}>
                   {(provided) => (
                  <TaskListItem key={task.text}  
                    ref={provided.innerRef}
                       {...provided.draggableProps}
                       {...provided.dragHandleProps}>
                   <TaskListTextAndCheckBoxWrapper>
                      <TaskListCheckBoxWrapper>
                        <TaskListCheckBox
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => completeTask(index)}
                        />
                      </TaskListCheckBoxWrapper>
                      <TaskListTextWrapper taskChecked ={task.completed}>{task.text}</TaskListTextWrapper>
                    </TaskListTextAndCheckBoxWrapper>
                    <DeleteIconWrapper>
                      <DeleteIcon
                        icon={faTrash}
                        color={"black"}
                        onClick={() => deleteTask(index)}
                      />
                    </DeleteIconWrapper>
                  </TaskListItem>)}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </StyledTaskList>
    </TaskListWrapper>
  );
};
