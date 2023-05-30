/**
/**
 * Returns the array adding the distributed customers for each CustomerSuccess.
 * @param {Array<{ id: number, score: number }>} customerSuccess
 * @param {Array<{ id: number, score: number }>} customers
 *
 * @return {Array<{ id: number, score: number, totalCustomers: number }>}
 */

function distributeCustomers(customerSuccess, customers) {
  const sortedCustomerSuccess = customerSuccess.sort(
    (a, b) => a.score - b.score
  );
  const sortedCustomers = customers.sort((a, b) => a.score - b.score);

  const distributedCustomers = sortedCustomerSuccess.map((cs) => {
    const currentCustomerSuccess = { ...cs };
    currentCustomerSuccess.totalCustomers = 0;

    for (let i = 0; i < sortedCustomers.length; i += 1) {
      const customer = sortedCustomers[i];

      if (customer.score > currentCustomerSuccess.score) {
        break;
      } else { currentCustomerSuccess.totalCustomers += 1; }
    }
    sortedCustomers.splice(0, currentCustomerSuccess.totalCustomers);
    return currentCustomerSuccess;
  });

  return distributedCustomers;
}

module.exports = distributeCustomers;

test('Customer distribution', () => {
  const customerSuccess = [
    { id: 1, score: 10 },
    { id: 2, score: 90 },
    { id: 3, score: 25 },
    { id: 4, score: 20 }
  ];

  const customers = [
    { id: 1, score: 90 },
    { id: 2, score: 20 },
    { id: 3, score: 70 },
    { id: 4, score: 40 },
    { id: 5, score: 60 },
    { id: 6, score: 10 }
  ];

  expect(distributeCustomers(customerSuccess, customers)).toEqual([
    { id: 1, score: 10, totalCustomers: 1 },
    { id: 4, score: 20, totalCustomers: 1 },
    { id: 3, score: 25, totalCustomers: 0 },
    { id: 2, score: 90, totalCustomers: 4 }
  ]);
});

function buildSizeEntities(size, score) {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result.push({ id: i + 1, score });
  }
  return result;
}

function mapEntities(arr) {
  return arr.map((item, index) => ({
    id: index + 1,
    score: item
  }));
}

function arraySeq(count, startAt) {
  return Array.apply(0, Array(count)).map((it, index) => index + startAt);
}

test('Check distributeCustomers runtime', () => {
  const css = mapEntities(arraySeq(999, 1));
  const customers = buildSizeEntities(10000, 998);

  const start = performance.now();
  distributeCustomers(css, customers);
  const end = performance.now();
  const executionTime = end - start;
  expect(executionTime).toBeLessThanOrEqual(30);
});
