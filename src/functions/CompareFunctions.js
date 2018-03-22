export const compareName = (personA, personB) => {
  if (personA.name > personB.name) {
    return 1;
  }
  if (personA.name < personB.name) {
    return -1;
  }
  return 0;
};
export const reverseCompareName = (personA, personB) => {
  if (personA.name > personB.name) {
    return -1;
  }
  if (personA.name < personB.name) {
    return 1;
  }
  return 0;
};

export const compareSurName = (personA, personB) => {
  if (personA.surname > personB.surname) {
    return 1;
  }
  if (personA.surname < personB.surname) {
    return -1;
  }
  return 0;
};
export const reverseCompareSurName = (personA, personB) => {
  if (personA.surname > personB.surname) {
    return -1;
  }
  if (personA.surname < personB.surname) {
    return 1;
  }
  return 0;
};

export const comparePosition = (personA, personB) => {
  if (personA.position > personB.position) {
    return 1;
  }
  if (personA.position < personB.position) {
    return -1;
  }
  return 0;
};

export const reverseComparePosition = (personA, personB) => {
  if (personA.position > personB.position) {
    return -1;
  }
  if (personA.position < personB.position) {
    return 1;
  }
  return 0;
};
