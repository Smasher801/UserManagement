import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);
  return result;
}

export async function getTaskOfUser(userId) {
  const result = await httpAxios
    .get(`/api/users/${userId}/tasks`)
    .then((response) => response.data);
  return result;
}

export async function deleteTask(itemId) {
  const result = await httpAxios
    .delete(`/api/tasks/${itemId}`)
    .then((response) => response.data);
  return result;
}
