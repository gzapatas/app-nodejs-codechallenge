import { EventValue } from "../../../domain/event.value";

describe("EventValue", () => {
  it("should create an instance with the correct properties", () => {
    const eventValue = new EventValue({
      transactionExternalId: "123456",
      accountExternalIdDebit: "654321",
      accountExternalIdCredit: "321654",
      value: 100,
    });

    expect(eventValue).toEqual(
      expect.objectContaining({
        accountExternalIdCredit: "321654",
        accountExternalIdDebit: "654321",
        transactionExternalId: expect.any(String),
        value: 100,
      })
    )
  });
});