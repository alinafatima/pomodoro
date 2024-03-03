import React, { useEffect, useState } from "react";
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
  TaskInputContainer,
} from "./../styled";
import { DeleteIcon } from "./../styled";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ReactGA from 'react-ga';

export const TaskList = () => {
  const { t } = useTranslation();
  const savedTasks = localStorage.getItem('tasks');
  const [tasks, setTasks] = useState(savedTasks?.length > 0 ? JSON.parse(savedTasks) : []);
  const [taskText, setTaskText] = useState("");
  const today = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = weekdays[today.getDay()];
  const monthName = months[today.getMonth()];
  const formattedDate = dayName + ", " + monthName + " " + today.getDate();

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([
        ...tasks,
        { id: `${tasks.length + 1}`, text: taskText, completed: false },
      ]);
      setTaskText("");
    }

    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked',
      label: 'Task is added.'
    });
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    const taskToBeUpdated = updatedTasks[index]; 
    taskToBeUpdated.completed = !taskToBeUpdated.completed;
    updatedTasks.splice(index, 1);
    updatedTasks.push(taskToBeUpdated);
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

  useEffect(() => { 
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);

  const resetTasks = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
  };

  return (
    <TaskListWrapper>
      <h1
        style={{
          color: "white",
          textAlign: "left",
        }}
      >
        {t("todolist.title")}
      </h1>
      <p
        style={{
          color: "white",
          textAlign: "left",
          marginTop: "-2vh",
          fontWeight: "400",
        }}
      >
        {formattedDate}
      </p>
      <div>
        <TaskInputContainer>
          <AddNewTaskItem
            type="text"
            placeholder={t("todolist.addANewTask")}
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTask();
              }
            }}
          />
          <button
          style={{
            width: "20%",
            justifySelf: "flex-end",
            background: "none",
            border: "none",
            padding: 0,
            margin: 0,
            color: "#fff"
          }}
          onClick={addTask}
        ><i  class="fa fa-plus fa-2x">
          +
        </i>
        </button>
        </TaskInputContainer>
        
      </div>

      <StyledTaskList>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task, index) => (
                  <Draggable
                    key={task.id.toString()}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <TaskListItem
                        key={task.text}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskListTextAndCheckBoxWrapper>
                          <TaskListCheckBoxWrapper>
                            <TaskListCheckBox
                              type="checkbox"
                              checked={task.completed}
                              onChange={() => completeTask(index)}
                            />
                          </TaskListCheckBoxWrapper>
                          <TaskListTextWrapper taskChecked={task.completed}>
                            {task.text}
                          </TaskListTextWrapper>
                        </TaskListTextAndCheckBoxWrapper>
                        <DeleteIconWrapper>
                          <DeleteIcon
                            icon={faTrash}
                            color={"white"}
                            onClick={() => deleteTask(index)}
                          />
                        </DeleteIconWrapper>
                      </TaskListItem>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </StyledTaskList>
      { tasks?.length > 0 && (
        <button 
          onClick={resetTasks}>
          Clear all
        </button>
      )}
    </TaskListWrapper>
  );
};
