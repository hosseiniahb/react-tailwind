import axios from "axios";

// Configure options for sending requests to receive information from the server
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "6063816930msh90e172799ce59f9p108b0djsnb32e10a6e1d8",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

// A custom function to get information from the server based on parts of a specified URL
export const fetchFromApi = async (url: string) => {
  try {
    const { data } = await axios.get(
      `https://youtube-v31.p.rapidapi.com${url}`,
      options,
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
