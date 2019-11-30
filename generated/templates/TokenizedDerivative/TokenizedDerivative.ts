// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class Approval extends EthereumEvent {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Default extends EthereumEvent {
  get params(): Default__Params {
    return new Default__Params(this);
  }
}

export class Default__Params {
  _event: Default;

  constructor(event: Default) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get defaultTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get defaultNav(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Deposited extends EthereumEvent {
  get params(): Deposited__Params {
    return new Deposited__Params(this);
  }
}

export class Deposited__Params {
  _event: Deposited;

  constructor(event: Deposited) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Disputed extends EthereumEvent {
  get params(): Disputed__Params {
    return new Disputed__Params(this);
  }
}

export class Disputed__Params {
  _event: Disputed;

  constructor(event: Disputed) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get timeDisputed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get navDisputed(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EmergencyShutdownTransition extends EthereumEvent {
  get params(): EmergencyShutdownTransition__Params {
    return new EmergencyShutdownTransition__Params(this);
  }
}

export class EmergencyShutdownTransition__Params {
  _event: EmergencyShutdownTransition;

  constructor(event: EmergencyShutdownTransition) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get shutdownTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Expired extends EthereumEvent {
  get params(): Expired__Params {
    return new Expired__Params(this);
  }
}

export class Expired__Params {
  _event: Expired;

  constructor(event: Expired) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get expiryTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NavUpdated extends EthereumEvent {
  get params(): NavUpdated__Params {
    return new NavUpdated__Params(this);
  }
}

export class NavUpdated__Params {
  _event: NavUpdated;

  constructor(event: NavUpdated) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get newNav(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newTokenPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Settled extends EthereumEvent {
  get params(): Settled__Params {
    return new Settled__Params(this);
  }
}

export class Settled__Params {
  _event: Settled;

  constructor(event: Settled) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get settleTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get finalNav(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokensCreated extends EthereumEvent {
  get params(): TokensCreated__Params {
    return new TokensCreated__Params(this);
  }
}

export class TokensCreated__Params {
  _event: TokensCreated;

  constructor(event: TokensCreated) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get numTokensCreated(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokensRedeemed extends EthereumEvent {
  get params(): TokensRedeemed__Params {
    return new TokensRedeemed__Params(this);
  }
}

export class TokensRedeemed__Params {
  _event: TokensRedeemed;

  constructor(event: TokensRedeemed) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get numTokensRedeemed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdrawal extends EthereumEvent {
  get params(): Withdrawal__Params {
    return new Withdrawal__Params(this);
  }
}

export class Withdrawal__Params {
  _event: Withdrawal;

  constructor(event: Withdrawal) {
    this._event = event;
  }

  get symbol(): string {
    return this._event.parameters[0].value.toString();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenizedDerivative__derivativeStorageResultFixedParametersStruct extends EthereumTuple {
  get defaultPenalty(): BigInt {
    return this[0].toBigInt();
  }

  get supportedMove(): BigInt {
    return this[1].toBigInt();
  }

  get disputeDeposit(): BigInt {
    return this[2].toBigInt();
  }

  get fixedFeePerSecond(): BigInt {
    return this[3].toBigInt();
  }

  get withdrawLimit(): BigInt {
    return this[4].toBigInt();
  }

  get product(): Bytes {
    return this[5].toBytes();
  }

  get returnType(): i32 {
    return this[6].toI32();
  }

  get initialTokenUnderlyingRatio(): BigInt {
    return this[7].toBigInt();
  }

  get creationTime(): BigInt {
    return this[8].toBigInt();
  }

  get symbol(): string {
    return this[9].toString();
  }
}

export class TokenizedDerivative__derivativeStorageResultExternalAddressesStruct extends EthereumTuple {
  get sponsor(): Address {
    return this[0].toAddress();
  }

  get apDelegate(): Address {
    return this[1].toAddress();
  }

  get finder(): Address {
    return this[2].toAddress();
  }

  get priceFeed(): Address {
    return this[3].toAddress();
  }

  get returnCalculator(): Address {
    return this[4].toAddress();
  }

  get marginCurrency(): Address {
    return this[5].toAddress();
  }
}

export class TokenizedDerivative__derivativeStorageResultReferenceTokenStateStruct extends EthereumTuple {
  get underlyingPrice(): BigInt {
    return this[0].toBigInt();
  }

  get tokenPrice(): BigInt {
    return this[1].toBigInt();
  }

  get time(): BigInt {
    return this[2].toBigInt();
  }
}

export class TokenizedDerivative__derivativeStorageResultCurrentTokenStateStruct extends EthereumTuple {
  get underlyingPrice(): BigInt {
    return this[0].toBigInt();
  }

  get tokenPrice(): BigInt {
    return this[1].toBigInt();
  }

  get time(): BigInt {
    return this[2].toBigInt();
  }
}

export class TokenizedDerivative__derivativeStorageResultDisputeInfoStruct extends EthereumTuple {
  get disputedNav(): BigInt {
    return this[0].toBigInt();
  }

  get deposit(): BigInt {
    return this[1].toBigInt();
  }
}

export class TokenizedDerivative__derivativeStorageResultWithdrawThrottleStruct extends EthereumTuple {
  get startTime(): BigInt {
    return this[0].toBigInt();
  }

  get remainingWithdrawal(): BigInt {
    return this[1].toBigInt();
  }
}

export class TokenizedDerivative__derivativeStorageResult {
  value0: EthereumTuple;
  value1: EthereumTuple;
  value2: BigInt;
  value3: BigInt;
  value4: i32;
  value5: BigInt;
  value6: EthereumTuple;
  value7: EthereumTuple;
  value8: BigInt;
  value9: EthereumTuple;
  value10: BigInt;
  value11: EthereumTuple;

  constructor(
    value0: TokenizedDerivative__derivativeStorageResultFixedParametersStruct,
    value1: TokenizedDerivative__derivativeStorageResultExternalAddressesStruct,
    value2: BigInt,
    value3: BigInt,
    value4: i32,
    value5: BigInt,
    value6: TokenizedDerivative__derivativeStorageResultReferenceTokenStateStruct,
    value7: TokenizedDerivative__derivativeStorageResultCurrentTokenStateStruct,
    value8: BigInt,
    value9: TokenizedDerivative__derivativeStorageResultDisputeInfoStruct,
    value10: BigInt,
    value11: TokenizedDerivative__derivativeStorageResultWithdrawThrottleStruct
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromTuple(this.value0));
    map.set("value1", EthereumValue.fromTuple(this.value1));
    map.set("value2", EthereumValue.fromSignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromSignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromI32(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromTuple(this.value6));
    map.set("value7", EthereumValue.fromTuple(this.value7));
    map.set("value8", EthereumValue.fromSignedBigInt(this.value8));
    map.set("value9", EthereumValue.fromTuple(this.value9));
    map.set("value10", EthereumValue.fromSignedBigInt(this.value10));
    map.set("value11", EthereumValue.fromTuple(this.value11));
    return map;
  }
}

export class TokenizedDerivative__getUpdatedUnderlyingPriceResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromSignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class TokenizedDerivative extends SmartContract {
  static bind(address: Address): TokenizedDerivative {
    return new TokenizedDerivative("TokenizedDerivative", address);
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(owner),
      EthereumValue.fromAddress(spender)
    ]);

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): CallResult<BigInt> {
    let result = super.tryCall("allowance", [
      EthereumValue.fromAddress(owner),
      EthereumValue.fromAddress(spender)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, value: BigInt): boolean {
    let result = super.call("approve", [
      EthereumValue.fromAddress(spender),
      EthereumValue.fromUnsignedBigInt(value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, value: BigInt): CallResult<boolean> {
    let result = super.tryCall("approve", [
      EthereumValue.fromAddress(spender),
      EthereumValue.fromUnsignedBigInt(value)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(account)]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): CallResult<BigInt> {
    let result = super.tryCall("balanceOf", [
      EthereumValue.fromAddress(account)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", []);

    return result[0].toI32();
  }

  try_decimals(): CallResult<i32> {
    let result = super.tryCall("decimals", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call("decreaseAllowance", [
      EthereumValue.fromAddress(spender),
      EthereumValue.fromUnsignedBigInt(subtractedValue)
    ]);

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("decreaseAllowance", [
      EthereumValue.fromAddress(spender),
      EthereumValue.fromUnsignedBigInt(subtractedValue)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  derivativeStorage(): TokenizedDerivative__derivativeStorageResult {
    let result = super.call("derivativeStorage", []);

    return new TokenizedDerivative__derivativeStorageResult(
      result[0].toTuple() as TokenizedDerivative__derivativeStorageResultFixedParametersStruct,
      result[1].toTuple() as TokenizedDerivative__derivativeStorageResultExternalAddressesStruct,
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toI32(),
      result[5].toBigInt(),
      result[6].toTuple() as TokenizedDerivative__derivativeStorageResultReferenceTokenStateStruct,
      result[7].toTuple() as TokenizedDerivative__derivativeStorageResultCurrentTokenStateStruct,
      result[8].toBigInt(),
      result[9].toTuple() as TokenizedDerivative__derivativeStorageResultDisputeInfoStruct,
      result[10].toBigInt(),
      result[11].toTuple() as TokenizedDerivative__derivativeStorageResultWithdrawThrottleStruct
    ) as TokenizedDerivative__derivativeStorageResult;
  }

  try_derivativeStorage(): CallResult<
    TokenizedDerivative__derivativeStorageResult
  > {
    let result = super.tryCall("derivativeStorage", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new TokenizedDerivative__derivativeStorageResult(
        value[0].toTuple() as TokenizedDerivative__derivativeStorageResultFixedParametersStruct,
        value[1].toTuple() as TokenizedDerivative__derivativeStorageResultExternalAddressesStruct,
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toI32(),
        value[5].toBigInt(),
        value[6].toTuple() as TokenizedDerivative__derivativeStorageResultReferenceTokenStateStruct,
        value[7].toTuple() as TokenizedDerivative__derivativeStorageResultCurrentTokenStateStruct,
        value[8].toBigInt(),
        value[9].toTuple() as TokenizedDerivative__derivativeStorageResultDisputeInfoStruct,
        value[10].toBigInt(),
        value[11].toTuple() as TokenizedDerivative__derivativeStorageResultWithdrawThrottleStruct
      ) as TokenizedDerivative__derivativeStorageResult
    );
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call("increaseAllowance", [
      EthereumValue.fromAddress(spender),
      EthereumValue.fromUnsignedBigInt(addedValue)
    ]);

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("increaseAllowance", [
      EthereumValue.fromAddress(spender),
      EthereumValue.fromUnsignedBigInt(addedValue)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", []);

    return result[0].toString();
  }

  try_name(): CallResult<string> {
    let result = super.tryCall("name", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  symbol(): string {
    let result = super.call("symbol", []);

    return result[0].toString();
  }

  try_symbol(): CallResult<string> {
    let result = super.tryCall("symbol", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): CallResult<BigInt> {
    let result = super.tryCall("totalSupply", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", [
      EthereumValue.fromAddress(recipient),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(recipient: Address, amount: BigInt): CallResult<boolean> {
    let result = super.tryCall("transfer", [
      EthereumValue.fromAddress(recipient),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call("transferFrom", [
      EthereumValue.fromAddress(sender),
      EthereumValue.fromAddress(recipient),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("transferFrom", [
      EthereumValue.fromAddress(sender),
      EthereumValue.fromAddress(recipient),
      EthereumValue.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  mint(to: Address, value: BigInt): boolean {
    let result = super.call("mint", [
      EthereumValue.fromAddress(to),
      EthereumValue.fromUnsignedBigInt(value)
    ]);

    return result[0].toBoolean();
  }

  try_mint(to: Address, value: BigInt): CallResult<boolean> {
    let result = super.tryCall("mint", [
      EthereumValue.fromAddress(to),
      EthereumValue.fromUnsignedBigInt(value)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  calcNAV(): BigInt {
    let result = super.call("calcNAV", []);

    return result[0].toBigInt();
  }

  try_calcNAV(): CallResult<BigInt> {
    let result = super.tryCall("calcNAV", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  calcTokenValue(): BigInt {
    let result = super.call("calcTokenValue", []);

    return result[0].toBigInt();
  }

  try_calcTokenValue(): CallResult<BigInt> {
    let result = super.tryCall("calcTokenValue", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  calcShortMarginBalance(): BigInt {
    let result = super.call("calcShortMarginBalance", []);

    return result[0].toBigInt();
  }

  try_calcShortMarginBalance(): CallResult<BigInt> {
    let result = super.tryCall("calcShortMarginBalance", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  calcExcessMargin(): BigInt {
    let result = super.call("calcExcessMargin", []);

    return result[0].toBigInt();
  }

  try_calcExcessMargin(): CallResult<BigInt> {
    let result = super.tryCall("calcExcessMargin", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentRequiredMargin(): BigInt {
    let result = super.call("getCurrentRequiredMargin", []);

    return result[0].toBigInt();
  }

  try_getCurrentRequiredMargin(): CallResult<BigInt> {
    let result = super.tryCall("getCurrentRequiredMargin", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  canBeSettled(): boolean {
    let result = super.call("canBeSettled", []);

    return result[0].toBoolean();
  }

  try_canBeSettled(): CallResult<boolean> {
    let result = super.tryCall("canBeSettled", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getUpdatedUnderlyingPrice(): TokenizedDerivative__getUpdatedUnderlyingPriceResult {
    let result = super.call("getUpdatedUnderlyingPrice", []);

    return new TokenizedDerivative__getUpdatedUnderlyingPriceResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getUpdatedUnderlyingPrice(): CallResult<
    TokenizedDerivative__getUpdatedUnderlyingPriceResult
  > {
    let result = super.tryCall("getUpdatedUnderlyingPrice", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new TokenizedDerivative__getUpdatedUnderlyingPriceResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get params(): ConstructorCallParamsStruct {
    return this._call.inputValues[0].value.toTuple() as ConstructorCallParamsStruct;
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCallParamsStruct extends EthereumTuple {
  get sponsor(): Address {
    return this[0].toAddress();
  }

  get finderAddress(): Address {
    return this[1].toAddress();
  }

  get priceFeedAddress(): Address {
    return this[2].toAddress();
  }

  get defaultPenalty(): BigInt {
    return this[3].toBigInt();
  }

  get supportedMove(): BigInt {
    return this[4].toBigInt();
  }

  get product(): Bytes {
    return this[5].toBytes();
  }

  get fixedYearlyFee(): BigInt {
    return this[6].toBigInt();
  }

  get disputeDeposit(): BigInt {
    return this[7].toBigInt();
  }

  get returnCalculator(): Address {
    return this[8].toAddress();
  }

  get startingTokenPrice(): BigInt {
    return this[9].toBigInt();
  }

  get expiry(): BigInt {
    return this[10].toBigInt();
  }

  get marginCurrency(): Address {
    return this[11].toAddress();
  }

  get withdrawLimit(): BigInt {
    return this[12].toBigInt();
  }

  get returnType(): i32 {
    return this[13].toI32();
  }

  get startingUnderlyingPrice(): BigInt {
    return this[14].toBigInt();
  }

  get creationTime(): BigInt {
    return this[15].toBigInt();
  }
}

export class ApproveCall extends EthereumCall {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseAllowanceCall extends EthereumCall {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends EthereumCall {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferCall extends EthereumCall {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends EthereumCall {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CreateTokensCall extends EthereumCall {
  get inputs(): CreateTokensCall__Inputs {
    return new CreateTokensCall__Inputs(this);
  }

  get outputs(): CreateTokensCall__Outputs {
    return new CreateTokensCall__Outputs(this);
  }
}

export class CreateTokensCall__Inputs {
  _call: CreateTokensCall;

  constructor(call: CreateTokensCall) {
    this._call = call;
  }

  get marginForPurchase(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokensToPurchase(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateTokensCall__Outputs {
  _call: CreateTokensCall;

  constructor(call: CreateTokensCall) {
    this._call = call;
  }
}

export class DepositAndCreateTokensCall extends EthereumCall {
  get inputs(): DepositAndCreateTokensCall__Inputs {
    return new DepositAndCreateTokensCall__Inputs(this);
  }

  get outputs(): DepositAndCreateTokensCall__Outputs {
    return new DepositAndCreateTokensCall__Outputs(this);
  }
}

export class DepositAndCreateTokensCall__Inputs {
  _call: DepositAndCreateTokensCall;

  constructor(call: DepositAndCreateTokensCall) {
    this._call = call;
  }

  get marginForPurchase(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokensToPurchase(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositAndCreateTokensCall__Outputs {
  _call: DepositAndCreateTokensCall;

  constructor(call: DepositAndCreateTokensCall) {
    this._call = call;
  }
}

export class RedeemTokensCall extends EthereumCall {
  get inputs(): RedeemTokensCall__Inputs {
    return new RedeemTokensCall__Inputs(this);
  }

  get outputs(): RedeemTokensCall__Outputs {
    return new RedeemTokensCall__Outputs(this);
  }
}

export class RedeemTokensCall__Inputs {
  _call: RedeemTokensCall;

  constructor(call: RedeemTokensCall) {
    this._call = call;
  }

  get tokensToRedeem(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemTokensCall__Outputs {
  _call: RedeemTokensCall;

  constructor(call: RedeemTokensCall) {
    this._call = call;
  }
}

export class DisputeCall extends EthereumCall {
  get inputs(): DisputeCall__Inputs {
    return new DisputeCall__Inputs(this);
  }

  get outputs(): DisputeCall__Outputs {
    return new DisputeCall__Outputs(this);
  }
}

export class DisputeCall__Inputs {
  _call: DisputeCall;

  constructor(call: DisputeCall) {
    this._call = call;
  }

  get depositMargin(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DisputeCall__Outputs {
  _call: DisputeCall;

  constructor(call: DisputeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends EthereumCall {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class RemarginCall extends EthereumCall {
  get inputs(): RemarginCall__Inputs {
    return new RemarginCall__Inputs(this);
  }

  get outputs(): RemarginCall__Outputs {
    return new RemarginCall__Outputs(this);
  }
}

export class RemarginCall__Inputs {
  _call: RemarginCall;

  constructor(call: RemarginCall) {
    this._call = call;
  }
}

export class RemarginCall__Outputs {
  _call: RemarginCall;

  constructor(call: RemarginCall) {
    this._call = call;
  }
}

export class AcceptPriceAndSettleCall extends EthereumCall {
  get inputs(): AcceptPriceAndSettleCall__Inputs {
    return new AcceptPriceAndSettleCall__Inputs(this);
  }

  get outputs(): AcceptPriceAndSettleCall__Outputs {
    return new AcceptPriceAndSettleCall__Outputs(this);
  }
}

export class AcceptPriceAndSettleCall__Inputs {
  _call: AcceptPriceAndSettleCall;

  constructor(call: AcceptPriceAndSettleCall) {
    this._call = call;
  }
}

export class AcceptPriceAndSettleCall__Outputs {
  _call: AcceptPriceAndSettleCall;

  constructor(call: AcceptPriceAndSettleCall) {
    this._call = call;
  }
}

export class SetApDelegateCall extends EthereumCall {
  get inputs(): SetApDelegateCall__Inputs {
    return new SetApDelegateCall__Inputs(this);
  }

  get outputs(): SetApDelegateCall__Outputs {
    return new SetApDelegateCall__Outputs(this);
  }
}

export class SetApDelegateCall__Inputs {
  _call: SetApDelegateCall;

  constructor(call: SetApDelegateCall) {
    this._call = call;
  }

  get apDelegate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetApDelegateCall__Outputs {
  _call: SetApDelegateCall;

  constructor(call: SetApDelegateCall) {
    this._call = call;
  }
}

export class EmergencyShutdownCall extends EthereumCall {
  get inputs(): EmergencyShutdownCall__Inputs {
    return new EmergencyShutdownCall__Inputs(this);
  }

  get outputs(): EmergencyShutdownCall__Outputs {
    return new EmergencyShutdownCall__Outputs(this);
  }
}

export class EmergencyShutdownCall__Inputs {
  _call: EmergencyShutdownCall;

  constructor(call: EmergencyShutdownCall) {
    this._call = call;
  }
}

export class EmergencyShutdownCall__Outputs {
  _call: EmergencyShutdownCall;

  constructor(call: EmergencyShutdownCall) {
    this._call = call;
  }
}

export class SettleCall extends EthereumCall {
  get inputs(): SettleCall__Inputs {
    return new SettleCall__Inputs(this);
  }

  get outputs(): SettleCall__Outputs {
    return new SettleCall__Outputs(this);
  }
}

export class SettleCall__Inputs {
  _call: SettleCall;

  constructor(call: SettleCall) {
    this._call = call;
  }
}

export class SettleCall__Outputs {
  _call: SettleCall;

  constructor(call: SettleCall) {
    this._call = call;
  }
}

export class DepositCall extends EthereumCall {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get amountToDeposit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class WithdrawUnexpectedErc20Call extends EthereumCall {
  get inputs(): WithdrawUnexpectedErc20Call__Inputs {
    return new WithdrawUnexpectedErc20Call__Inputs(this);
  }

  get outputs(): WithdrawUnexpectedErc20Call__Outputs {
    return new WithdrawUnexpectedErc20Call__Outputs(this);
  }
}

export class WithdrawUnexpectedErc20Call__Inputs {
  _call: WithdrawUnexpectedErc20Call;

  constructor(call: WithdrawUnexpectedErc20Call) {
    this._call = call;
  }

  get erc20Address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawUnexpectedErc20Call__Outputs {
  _call: WithdrawUnexpectedErc20Call;

  constructor(call: WithdrawUnexpectedErc20Call) {
    this._call = call;
  }
}

export class BurnCall extends EthereumCall {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class MintCall extends EthereumCall {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
