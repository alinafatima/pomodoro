import React, { useState } from "react";
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

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
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
        {tasks.map((task, index) => (
          <TaskListItem key={task.text}>
            <TaskListTextAndCheckBoxWrapper>
              <TaskListCheckBoxWrapper>
                <TaskListCheckBox
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => completeTask(index)}
                />
              </TaskListCheckBoxWrapper>
              <TaskListTextWrapper>{task.text}</TaskListTextWrapper>
            </TaskListTextAndCheckBoxWrapper>
            <DeleteIconWrapper>
              <DeleteIcon
                icon={faTrash}
                color={"black"}
                onClick={() => deleteTask(index)}
              />
            </DeleteIconWrapper>
          </TaskListItem>
        ))}
      </StyledTaskList>
    </TaskListWrapper>
  );
};
