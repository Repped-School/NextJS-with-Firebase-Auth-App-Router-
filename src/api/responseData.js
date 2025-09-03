import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getResponses = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/responses`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const getResponsesByQuestion = (questionId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/responses?questionId=${questionId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const getResponse = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/responses/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const createResponse = (responseData) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/responses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(responseData),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const updateResponse = (id, responseData) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/responses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(responseData),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const deleteResponse = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/responses/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

export { getResponses, getResponsesByQuestion, getResponse, createResponse, updateResponse, deleteResponse };
