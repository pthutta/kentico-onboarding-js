import uuidv4 from 'uuid/v4';

export const generateUUID = () => uuidv4();

export const validateString = str => str.trim().length > 0;
