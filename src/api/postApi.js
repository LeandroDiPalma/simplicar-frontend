const API_URL = 'http://localhost:3000/api';

export const getPosts = async (dealerId) => {
    const response = await fetch(`${API_URL}/dealer/${dealerId}/posts`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch posts: Status ${response.status}`);
    }
    return await response.json();
};

export const getPostById = async (dealerId, postId) => {
    try {
        const response = await fetch(`${API_URL}/dealer/${dealerId}/posts/${postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`  
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();  
    } catch (e) {
        console.error("Failed to fetch post: ", e);
        throw e;  
    }
};


export const getPostsById = async (dealerId) => {
    const response = await fetch(`${API_URL}/dealer/${dealerId}/posts`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch posts: Status ${response.status}`);
    }
    return await response.json();
};


export const deletePost = async (dealerId, postId) => {
    const response = await fetch(`${API_URL}/dealer/${dealerId}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const text = await response.text();
    try {
        return text ? JSON.parse(text) : {};
    } catch (error) {
        console.error('Failed to parse JSON response:', error);
        return {};
    }

};

export const updatePost = async (dealerId, postId, postData) => {
    const response = await fetch(`${API_URL}/dealer/${dealerId}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(postData)
    });
    if (!response.ok) {
        throw new Error(`Failed to update post: Status ${response.status}`);
    }
    return await response.json();
};

export const createPost = async (dealerId, postData) => {
    const response = await fetch(`${API_URL}/dealer/${dealerId}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(postData)
    });
    if (!response.ok) {
        throw new Error(`Failed to create post: Status ${response.status}`);
    }
    return await response.json();
};
