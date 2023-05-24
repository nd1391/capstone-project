import sendRequest from './send-request';

const BASE_URL = '/api/outfits';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function submitOutfit(formData) {
    // Changing data on the server, so make it a POST request
    return sendRequest(BASE_URL, 'POST', formData);
}

export function deleteOutfit(id) {
    console.log(BASE_URL, id)
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE' )
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }