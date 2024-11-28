const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-27',
    headers: {
        authorization: '5911d125-9aee-4893-86db-13fee99a57df',
        'Content-Type': 'application/json'
    }
};

function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

const fetchAbout = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
        .then(handleResponse)
};

const updateUserProfile = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({ name, about })
    })
        .then(handleResponse)
};

const fetchCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
        .then(handleResponse)
        .then(data => {
            return data;
        })
};

const likeCard = (cardId, isLiked) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: config.headers
    })
        .then(handleResponse)
};

const deleteCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
        .then(handleResponse)
};

const fetchNewCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({ name, link })
    })
        .then(handleResponse)
};

const fetchAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({ avatar })
    })
        .then(handleResponse)
};

export { fetchAbout, updateUserProfile, fetchCards, likeCard, deleteCard, fetchNewCard, fetchAvatar }