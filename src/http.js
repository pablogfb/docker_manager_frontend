

export const BASE_URL = 'http://localhost:3000/v1/'

export async function fetchAvailableImages() {

  const response = await fetch(BASE_URL + 'images');
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  return respData.data;
}

export async function newImage(raw_text) {

  const response = await fetch(BASE_URL + 'images', {
    method: 'POST',
    body: raw_text
  });
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  alert(JSON.stringify(respData.data));
  return respData.data;
}

export async function newDockerfile(file) {
  let formData = new FormData();
  formData.append('dockerfile', file);

  const response = await fetch(`${BASE_URL}images/from_file`, {
    method: 'POST',
    body: formData
  });
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  alert(JSON.stringify(respData.data));
  return respData.data;
}


export async function fetchImageinfo(id) {

  const response = await fetch(`${BASE_URL}images/${id}`);
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  return respData.data;
}


export async function delImage(id) {

  const response = await fetch(`${BASE_URL}images/${id}`, { method: 'DELETE' });
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  return respData.data;
}

export async function tagImage(id, repo, tag) {

  const response = await fetch(`${BASE_URL}images/${id}/tag`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      repo: repo,
      tag: tag
    })
  });
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  alert(JSON.stringify(respData.message));
  return respData.data;
}

export async function fetchAvailableContainers() {

  const response = await fetch(BASE_URL + 'containers');
  const respData = await response.json();

  if (!response.ok) {
    const error = new Error('Failed to fetch containers');
    throw error
  }
  return respData.data;
}

export async function fetchContainerinfo(id) {

  const response = await fetch(`${BASE_URL}containers/${id}`);
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  return respData.data;
}

export async function fetchContainerLogs(id) {

  const response = await fetch(`${BASE_URL}containers/${id}/logs`);
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  return respData.data;
}

export async function createContainer(id) {

  const response = await fetch(BASE_URL + 'containers', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ image: id })
  });
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  alert(JSON.stringify(respData.data));
  return nil;
}

export async function delContainer(id) {

  const response = await fetch(`${BASE_URL}containers/${id}`, { method: 'DELETE' });
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  return respData.data;
}

export async function sendCommandContainer(id, command) {

  const response = await fetch(`${BASE_URL}containers/${id}/action`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ command: command })
  });
  const respData = await response.json();

  if (!response.ok) {
    alert(respData.message);
    throw error
  }
  alert(JSON.stringify(respData.data));
  return respData.data;
}

