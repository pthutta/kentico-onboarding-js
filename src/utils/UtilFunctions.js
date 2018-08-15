import uuidv4 from 'uuid/v4';

export const generateUUID = () => uuidv4();

export const checkStringLength = str => str.trim().length > 0;
