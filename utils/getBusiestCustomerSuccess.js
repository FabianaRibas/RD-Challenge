/**
/**
 * Returns the array of CustomerSuccess with the total of distributed customers
 * @param {Array<{ id: number, score: number }>} customerSuccess
 *
 * @return {number}
 */

function getBusiestCustomerSuccess(customerSuccess) {
  customerSuccess.sort((a, b) => b.totalCustomers - a.totalCustomers);

  if (customerSuccess[0].totalCustomers === customerSuccess[1].totalCustomers) {
    return 0;
  }
  const busiestCustomerSuccess = customerSuccess[0];

  return busiestCustomerSuccess.id;
}

module.exports = getBusiestCustomerSuccess;

test('Busiest customerSuccess', () => {
  const customerSuccess = [
    { id: 1, score: 10, totalCustomers: 1 },
    { id: 2, score: 90, totalCustomers: 4 },
    { id: 3, score: 25, totalCustomers: 0 },
    { id: 4, score: 20, totalCustomers: 1 }
  ];

  expect(getBusiestCustomerSuccess(customerSuccess)).toEqual(2);
});

test('Tie between the two busiest customerSuccess', () => {
  const customerSuccess = [
    { id: 1, score: 10, totalCustomers: 1 },
    { id: 2, score: 90, totalCustomers: 4 },
    { id: 3, score: 25, totalCustomers: 0 },
    { id: 4, score: 20, totalCustomers: 1 },
    { id: 5, score: 20, totalCustomers: 4 }
  ];

  expect(getBusiestCustomerSuccess(customerSuccess)).toEqual(0);
});

function mapEntities(arr) {
  return arr.map((item, index) => ({
    id: index + 1,
    score: item,
    totalCustomers: 5
  }));
}

function arraySeq(count, startAt) {
  return Array.apply(0, Array(count)).map((it, index) => index + startAt);
}

test('Check getBusiestCustomerSuccess runtime', () => {
  const css = mapEntities(arraySeq(999, 1));

  const start = performance.now();
  getBusiestCustomerSuccess(css);
  const end = performance.now();
  const executionTime = end - start;
  expect(executionTime).toBeLessThanOrEqual(30);
});
