// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TokenizedDerivative extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenizedDerivative entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenizedDerivative entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenizedDerivative", id.toString(), this);
  }

  static load(id: string): TokenizedDerivative | null {
    return store.get("TokenizedDerivative", id) as TokenizedDerivative | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get marginCurrencyAddress(): Bytes {
    let value = this.get("marginCurrencyAddress");
    return value.toBytes();
  }

  set marginCurrencyAddress(value: Bytes) {
    this.set("marginCurrencyAddress", Value.fromBytes(value));
  }

  get marginCurrencySymbol(): string | null {
    let value = this.get("marginCurrencySymbol");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set marginCurrencySymbol(value: string | null) {
    if (value === null) {
      this.unset("marginCurrencySymbol");
    } else {
      this.set("marginCurrencySymbol", Value.fromString(value as string));
    }
  }

  get marginCurrencyName(): string | null {
    let value = this.get("marginCurrencyName");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set marginCurrencyName(value: string | null) {
    if (value === null) {
      this.unset("marginCurrencyName");
    } else {
      this.set("marginCurrencyName", Value.fromString(value as string));
    }
  }

  get marginCurrencyDecimals(): i32 {
    let value = this.get("marginCurrencyDecimals");
    return value.toI32();
  }

  set marginCurrencyDecimals(value: i32) {
    this.set("marginCurrencyDecimals", Value.fromI32(value));
  }

  get startTime(): i32 {
    let value = this.get("startTime");
    return value.toI32();
  }

  set startTime(value: i32) {
    this.set("startTime", Value.fromI32(value));
  }
}
