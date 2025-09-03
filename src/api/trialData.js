import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTrials = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trials`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const getTrialsByCreator = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trials?creator=${firebaseKey}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const getTrial = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trials/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const createTrial = (trialData) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trialData),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const updateTrial = (id, trialData) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trials/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trialData),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

const deleteTrial = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trials/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });

export { getTrials, getTrialsByCreator, getTrial, createTrial, updateTrial, deleteTrial };
