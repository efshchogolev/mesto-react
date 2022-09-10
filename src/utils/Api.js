class Api {
  constructor(host, token) {
    this._host = host;
    this._token = token;

    this._getJsonOrError = this._getJsonOrError.bind(this);
    this._getHeaders = this._getHeaders.bind(this);
  }

  _getJsonOrError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _getHeaders() {
    return {
      authorization: this._token,
      "content-type": "application/json",
    };
  }

  getCards() {
    return fetch(`${this._host}/cards`, {
      headers: this._getHeaders(),
    }).then(this._getJsonOrError);
  }

  getUserInfoFromServer() {
    return fetch(`${this._host}/users/me`, {
      headers: this._getHeaders(),
    }).then(this._getJsonOrError);
  }

  changeLikeCardStatus(id, isNotLiked) {
    if (isNotLiked) {
      return fetch(`${this._host}/cards/${id}/likes`, {
        method: "PUT",
        headers: this._getHeaders(),
      }).then(this._getJsonOrError);
    } else {
      return fetch(`${this._host}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._getHeaders(),
      }).then(this._getJsonOrError);
    }
  }
}

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-47",
  "ad5a4fe9-6249-4900-9757-39fd298866ec"
);

export default api;
