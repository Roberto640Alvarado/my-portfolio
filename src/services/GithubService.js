import axios from "axios";

const API_URL = "http://localhost:3000/repos";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const GithubService = {
  //Obtiene todos los classrooms de una organización
  getClassrooms: async () => {
    try {
      const response = await API.get("/classrooms");
      return response.data;
    } catch (error) {
      console.error("❌ Error obteniendo las classrooms:", error);
      return null;
    }
  },

  //Obtiene las tareas (assignments) de una classroom específica
  getAssignments: async (classroomId) => {
    try {
      const response = await API.get(`/classrooms/${classroomId}/assignments`);
      return response.data;
    } catch (error) {
      console.error(
        `❌ Error obteniendo las tareas de la classroom ${classroomId}:`,
        error
      );
      return null;
    }
  },

  //Obtiene los repositorios aceptados de una tarea específica
  getAcceptedAssignments: async (assignmentId) => {
    try {
      const response = await API.get(
        `/assignments/${assignmentId}/accepted_assignments`
      );
      return response.data;
    } catch (error) {
      console.error(
        `❌ Error obteniendo los repositorios aceptados de la tarea ${assignmentId}:`,
        error
      );
      return null;
    }
  },

  //Obtiene el README y el código fuente de un repositorio
  getRepoFiles: async (repoName) => {
    try {
      const response = await API.get(`/${repoName}/files`);
      return response.data;
    } catch (error) {
      console.error(
        `❌ Error obteniendo archivos del repositorio ${repoName}:`,
        error
      );
      return null;
    }
  },
};
export default GithubService;
