/**
 * Returns the array of the available CustomerSuccess.
 * @param {Array<{ id: number, score: number }>} CustomerSuccess
 * @param {number[]} CustomerSuccessAway
 *
 * @return {Array<{ id: number, score: number }>}
 */

function customerSuccessAvailability(customerSuccess, customerSuccessAway) {
  const customerSuccessAvailable = customerSuccess.filter(
    (cs) => !customerSuccessAway.includes(cs.id)
  );
  return customerSuccessAvailable;
}

module.exports = customerSuccessAvailability;

test('Unavailable css', () => {
  const customerSuccess = [
    { id: 1, score: 10 },
    { id: 2, score: 90 },
    { id: 3, score: 25 },
    { id: 4, score: 20 }
  ];

  const customerSuccessAway = [1, 4];

  expect(
    customerSuccessAvailability(customerSuccess, customerSuccessAway)
  ).toEqual([
    { id: 2, score: 90 },
    { id: 3, score: 25 }
  ]);
});

test('All css unavailable', () => {
  const customerSuccess = [
    { id: 1, score: 10 },
    { id: 2, score: 90 },
    { id: 3, score: 25 },
    { id: 4, score: 20 }
  ];

  const customerSuccessAway = [1, 2, 3, 4];

  expect(
    customerSuccessAvailability(customerSuccess, customerSuccessAway)
  ).toEqual([]);
});

test('All css available', () => {
  const customerSuccess = [
    { id: 1, score: 10 },
    { id: 2, score: 90 },
    { id: 3, score: 25 },
    { id: 4, score: 20 }
  ];

  const customerSuccessAway = [];

  expect(
    customerSuccessAvailability(customerSuccess, customerSuccessAway)
  ).toEqual(customerSuccess);
});

function mapEntities(arr) {
  return arr.map((item, index) => ({
    id: index + 1,
    score: item
  }));
}

function arraySeq(count, startAt) {
  return Array.apply(0, Array(count)).map((it, index) => index + startAt);
}

test('Check customerSuccessAvailability runtime', () => {
  const css = mapEntities(arraySeq(999, 1));
  const csAway = [999];

  const start = performance.now();
  customerSuccessAvailability(css, csAway);
  const end = performance.now();
  const executionTime = end - start;
  expect(executionTime).toBeLessThanOrEqual(30);
});
