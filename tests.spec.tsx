import calculateRiskScore from "./src/calculateRiskScore";

describe("Elliptic tech test results", () => {
  it("c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457", () => {
    const result = calculateRiskScore(
      "c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457"
    );

    expect(result).toBe(9);
  });

  it("dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1", () => {
    const result = calculateRiskScore(
      "dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1"
    );

    expect(result).toBe(0);
  });

  it("efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174", () => {
    const result = calculateRiskScore(
      "efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174"
    );

    expect(result).toBe(9.5478976);
  });

  it("cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792", () => {
    const result = calculateRiskScore(
      "cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792"
    );

    expect(result).toBe(5.94935135);
  });
});
