/* function calculateYears(principal, interest, tax, desired) {
  let amountOfYears = 0;
  let profit = principal;
  do {
    let percentage = profit * interest;
    let afterTax = percentage - (percentage * tax);
    profit += afterTax;
    if (profit <= desired) {
      amountOfYears++;
    }
  }
  while (profit <= desired);

  if (principal == desired) {
    return 0
  }

  return amountOfYears + 1;
} */

/* function calculateYears(principal, interest, tax, desired) {
  // your code
  const years = 0;
  while(principal < desired){
    principal += (principal * interest) * (1 - tax);
    years++;
  }
  return years;
} */