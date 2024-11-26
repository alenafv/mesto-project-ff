const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-27',
    headers: {
      authorization: '5911d125-9aee-4893-86db-13fee99a57df',
      'Content-Type': 'application/json'
    }
  };

const fetchAbout = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
  })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.log(err);
      }); 
};

const updateUserProfile = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({ name, about })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.log(err);
      });
};

const fetchCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(data => {
        return data;
    })
    .catch((err) => {
        console.log(err);
      });
};

const likeCard = (evt, cardId, isLiked) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: config.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
    .then(data => {
        evt.target.classList.toggle('card__like-button_is-active');
        const likesCount = evt.target.closest('.card').querySelector('.card__likes-count');
        likesCount.textContent = data.likes.length;
    })
    .catch(err => {
        console.error(err);
    });
};

const deleteCard = (cardId, cardElement) => {
        return fetch(`${config.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: config.headers
      })
        .then(res => {
            if (res.ok) {
                cardElement.remove();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch(err => {
            console.error(err);
        });
};

const fetchNewCard = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({ name, link })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.log(err);
      });
};

const fetchAvatar = (avatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({avatar})
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.log(err);
    });
};

export { fetchAbout, updateUserProfile, fetchCards, likeCard, deleteCard, fetchNewCard, fetchAvatar }