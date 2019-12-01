import { BigDecimal, Address } from "@graphprotocol/graph-ts";
import { CreatedTokenizedDerivative } from "../../generated/TokenizedDerivativeCreator/TokenizedDerivativeCreator";
import { TokenizedDerivative, Uma } from "../../generated/schema";
import { TokenizedDerivative as TokenizedDerivativeContract } from "../../generated/templates";
import { zeroBD } from "../helpers";

import { log } from "@graphprotocol/graph-ts";

import { ERC20 } from "../../generated/TokenizedDerivativeCreator/ERC20";
import { TokenizedDerivative as TdBind } from "../../generated/TokenizedDerivativeCreator/TokenizedDerivative";

function appendTd(tdAddr: string, marginAddr: Address): void {
  const td = new TokenizedDerivative(tdAddr) as TokenizedDerivative;

  td.marginCurrencyAddress = marginAddr;

  const contract = ERC20.bind(marginAddr);

  const decimals = contract.try_decimals();

  if (!decimals.reverted) {
    td.marginCurrencyDecimals = decimals.value;
  }
}

export function handleCreatedTokenizedDerivative(
  event: CreatedTokenizedDerivative
): void {
  let uma = Uma.load("main");
  if (uma == null) {
    uma = new Uma("main");
    uma.count = 0;
    uma.totalMarginUsd = zeroBD();
    uma.totalMarginEth = zeroBD();
  }

  uma.count = uma.count + 1;

  const bind = TdBind.bind(event.params.contractAddress);

  const marginAddr = bind.try_derivativeStorage();

  if (marginAddr.reverted) {
    log.debug("Derivative storage call failed", []);
  } else {
    log.debug("Checking for margin token data: {}", [
      marginAddr.value.value0.toString()
    ]);
  }

  //const td = appendTd(event.params.contractAddress.toHexString());

  TokenizedDerivativeContract.create(event.params.contractAddress);
  uma.save();
}
