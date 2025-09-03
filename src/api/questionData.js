import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getQuestions = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/questions`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const getQuestion = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/questions/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const createQuestion = (questionData) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/questions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(questionData),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const updateQuestion = (id, questionData) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/questions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(questionData),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const deleteQuestion = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/questions/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

export { getQuestions, getQuestion, createQuestion, updateQuestion, deleteQuestion };
