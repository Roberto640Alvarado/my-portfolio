import axios from "axios";

const API_URL = "http://localhost:3000/";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const FeedbackService = {
    //Obtener feedback guardado MongoDB
  getRepoFeedback: async (repoName) => {
    try {
      const response = await API.get(`feedback/${repoName}`);
      return response.data;
    } catch (error) {
      console.error("❌ Error obteniendo el feedback:", error);
      return null;
    }
  },

  //Generar nuevo feedback mediante AI
  generateFeedback: async (repoName, readme, code) => {
    try {
      const response = await API.post(`feedback/${repoName}`, {
        readme,
        code,
      });
      return response.data;
    } catch (error) {
      console.error("❌ Error generando feedback:", error);
      return null;
    }
  },
};
export default FeedbackService;