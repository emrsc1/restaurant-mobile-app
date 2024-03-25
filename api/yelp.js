import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:`Bearer h6q5JsS9qNd18ASvbQ6ce9qtvtqo2EcYNEsqH_Zmszru03bGAtkXYOBPP8RTfXtq1FctCv6maRlTT6jXNI_W3ykWdAJPjZgAR8NdsnAxIvxrc0iKY4r4ZP4fx3ABZnYx`,
  },
});