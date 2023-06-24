import Axios from 'axios';

const config = {
	headers:{
		"Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  	}
};

export const fetchUserInfo = async(username) => {
	console.log(config.headers.Authorization);
    const response = await Axios.get(`https://api.github.com/users/${username}`, config);
    return response.data;
}

export const fetchUserRepos = async(username, page) => {
  	const response = await Axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=12`, config);
  	return response.data;
}

export const fetchUserTopRepos = async(username) => {
  	const response = await Axios.get(`https://api.github.com/users/${username}/repos?sort=updated&order=desc&per_page=12`, config);
  	return response.data;
}

