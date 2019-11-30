import { BigInt } from "@graphprotocol/graph-ts";
import { CreatedTokenizedDerivative } from "../../generated/TokenizedDerivativeCreator/TokenizedDerivativeCreator";
import { TokenizedDerivative } from "../../generated/schema";

export function handleCreatedTokenizedDerivative(
  event: CreatedTokenizedDerivative
): void {
  let entity = TokenizedDerivative.load(event.transaction.from.toHex());

  if (entity == null) {
    entity = new TokenizedDerivative(event.transaction.from.toHex());

    entity.count = BigInt.fromI32(0);
  }

  entity.count = entity.count + BigInt.fromI32(1);

  entity.contractAddress = event.params.contractAddress;

  entity.save();
}
