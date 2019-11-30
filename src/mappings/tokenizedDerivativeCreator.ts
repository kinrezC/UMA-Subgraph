import { CreatedTokenizedDerivative } from "../../generated/TokenizedDerivativeCreator/TokenizedDerivativeCreator";
import { TokenizedDerivative, UMA } from "../../generated/schema";
import { zeroBD } from "../helpers";

export function handleCreatedTokenizedDerivative(
  event: CreatedTokenizedDerivative
): void {
  let uma = UMA.load("main");
  if (uma == null) {
    uma = new UMA("main");
    uma.totalDerivatives = 0;
    uma.totalMarginUsd = zeroBD();
    uma.totalMarginEth = zeroBD();
  }

  uma.totalDerivatives += 1;

  let entity = new TokenizedDerivative(event.params.contractAddress.toHex());

  entity.save();
}
