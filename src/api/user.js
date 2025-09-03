import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getUsers = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const getUser = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const createUser = (userData) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const updateUser = (id, userData) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

export { getUsers, getUser, createUser, updateUser, deleteUser };
