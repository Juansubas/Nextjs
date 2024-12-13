import { removeTask } from "@/app/actions/task-actions";
import { Button } from "./ui/button";

function TaskButtonDelete({taskId} : {taskId: number}) {

  return (
    <form action={removeTask}>
      <input type="hidden" name="taskId" value={taskId}/>
      <Button variant={"destructive"}>Delete</Button>
    </form>
  );
}

export default TaskButtonDelete;
