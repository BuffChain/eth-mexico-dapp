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

export class Ink extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ink entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ink entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ink", id.toString(), this);
  }

  static load(id: string): Ink | null {
    return store.get("Ink", id) as Ink | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get inkNumber(): BigInt {
    let value = this.get("inkNumber");
    return value.toBigInt();
  }

  set inkNumber(value: BigInt) {
    this.set("inkNumber", Value.fromBigInt(value));
  }

  get jsonUrl(): string {
    let value = this.get("jsonUrl");
    return value.toString();
  }

  set jsonUrl(value: string) {
    this.set("jsonUrl", Value.fromString(value));
  }

  get artist(): string {
    let value = this.get("artist");
    return value.toString();
  }

  set artist(value: string) {
    this.set("artist", Value.fromString(value));
  }

  get limit(): BigInt {
    let value = this.get("limit");
    return value.toBigInt();
  }

  set limit(value: BigInt) {
    this.set("limit", Value.fromBigInt(value));
  }

  get count(): BigInt | null {
    let value = this.get("count");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set count(value: BigInt | null) {
    if (value === null) {
      this.unset("count");
    } else {
      this.set("count", Value.fromBigInt(value as BigInt));
    }
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get sales(): Array<string> | null {
    let value = this.get("sales");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set sales(value: Array<string> | null) {
    if (value === null) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromStringArray(value as Array<string>));
    }
  }

  get likes(): Array<string> | null {
    let value = this.get("likes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set likes(value: Array<string> | null) {
    if (value === null) {
      this.unset("likes");
    } else {
      this.set("likes", Value.fromStringArray(value as Array<string>));
    }
  }

  get tokenTransfers(): Array<string> | null {
    let value = this.get("tokenTransfers");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokenTransfers(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokenTransfers");
    } else {
      this.set("tokenTransfers", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): BigInt | null {
    let value = this.get("createdAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt | null) {
    if (value === null) {
      this.unset("createdAt");
    } else {
      this.set("createdAt", Value.fromBigInt(value as BigInt));
    }
  }

  get mintPrice(): BigInt {
    let value = this.get("mintPrice");
    return value.toBigInt();
  }

  set mintPrice(value: BigInt) {
    this.set("mintPrice", Value.fromBigInt(value));
  }

  get mintPriceSetAt(): BigInt | null {
    let value = this.get("mintPriceSetAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mintPriceSetAt(value: BigInt | null) {
    if (value === null) {
      this.unset("mintPriceSetAt");
    } else {
      this.set("mintPriceSetAt", Value.fromBigInt(value as BigInt));
    }
  }

  get mintPriceNonce(): BigInt | null {
    let value = this.get("mintPriceNonce");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mintPriceNonce(value: BigInt | null) {
    if (value === null) {
      this.unset("mintPriceNonce");
    } else {
      this.set("mintPriceNonce", Value.fromBigInt(value as BigInt));
    }
  }

  get bestPrice(): BigInt {
    let value = this.get("bestPrice");
    return value.toBigInt();
  }

  set bestPrice(value: BigInt) {
    this.set("bestPrice", Value.fromBigInt(value));
  }

  get bestPriceSource(): string | null {
    let value = this.get("bestPriceSource");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bestPriceSource(value: string | null) {
    if (value === null) {
      this.unset("bestPriceSource");
    } else {
      this.set("bestPriceSource", Value.fromString(value as string));
    }
  }

  get bestPriceSetAt(): BigInt | null {
    let value = this.get("bestPriceSetAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set bestPriceSetAt(value: BigInt | null) {
    if (value === null) {
      this.unset("bestPriceSetAt");
    } else {
      this.set("bestPriceSetAt", Value.fromBigInt(value as BigInt));
    }
  }

  get likeCount(): BigInt | null {
    let value = this.get("likeCount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set likeCount(value: BigInt | null) {
    if (value === null) {
      this.unset("likeCount");
    } else {
      this.set("likeCount", Value.fromBigInt(value as BigInt));
    }
  }

  get burnedCount(): BigInt | null {
    let value = this.get("burnedCount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set burnedCount(value: BigInt | null) {
    if (value === null) {
      this.unset("burnedCount");
    } else {
      this.set("burnedCount", Value.fromBigInt(value as BigInt));
    }
  }

  get burned(): boolean {
    let value = this.get("burned");
    return value.toBoolean();
  }

  set burned(value: boolean) {
    this.set("burned", Value.fromBoolean(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ink(): string {
    let value = this.get("ink");
    return value.toString();
  }

  set ink(value: string) {
    this.set("ink", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get network(): string {
    let value = this.get("network");
    return value.toString();
  }

  set network(value: string) {
    this.set("network", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get priceSetAt(): BigInt | null {
    let value = this.get("priceSetAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set priceSetAt(value: BigInt | null) {
    if (value === null) {
      this.unset("priceSetAt");
    } else {
      this.set("priceSetAt", Value.fromBigInt(value as BigInt));
    }
  }

  get transferCount(): BigInt | null {
    let value = this.get("transferCount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set transferCount(value: BigInt | null) {
    if (value === null) {
      this.unset("transferCount");
    } else {
      this.set("transferCount", Value.fromBigInt(value as BigInt));
    }
  }

  get transfers(): Array<string> | null {
    let value = this.get("transfers");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set transfers(value: Array<string> | null) {
    if (value === null) {
      this.unset("transfers");
    } else {
      this.set("transfers", Value.fromStringArray(value as Array<string>));
    }
  }

  get sales(): Array<string> | null {
    let value = this.get("sales");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set sales(value: Array<string> | null) {
    if (value === null) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromStringArray(value as Array<string>));
    }
  }

  get upgradeTransfer(): string | null {
    let value = this.get("upgradeTransfer");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set upgradeTransfer(value: string | null) {
    if (value === null) {
      this.unset("upgradeTransfer");
    } else {
      this.set("upgradeTransfer", Value.fromString(value as string));
    }
  }

  get burned(): boolean {
    let value = this.get("burned");
    return value.toBoolean();
  }

  set burned(value: boolean) {
    this.set("burned", Value.fromBoolean(value));
  }

  get artist(): string | null {
    let value = this.get("artist");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set artist(value: string | null) {
    if (value === null) {
      this.unset("artist");
    } else {
      this.set("artist", Value.fromString(value as string));
    }
  }
}

export class Artist extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Artist entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Artist entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Artist", id.toString(), this);
  }

  static load(id: string): Artist | null {
    return store.get("Artist", id) as Artist | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get inks(): Array<string | null> {
    let value = this.get("inks");
    return value.toStringArray();
  }

  set inks(value: Array<string | null>) {
    this.set("inks", Value.fromStringArray(value));
  }

  get inkCount(): BigInt {
    let value = this.get("inkCount");
    return value.toBigInt();
  }

  set inkCount(value: BigInt) {
    this.set("inkCount", Value.fromBigInt(value));
  }

  get earnings(): BigInt | null {
    let value = this.get("earnings");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set earnings(value: BigInt | null) {
    if (value === null) {
      this.unset("earnings");
    } else {
      this.set("earnings", Value.fromBigInt(value as BigInt));
    }
  }

  get sales(): Array<string> | null {
    let value = this.get("sales");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set sales(value: Array<string> | null) {
    if (value === null) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromStringArray(value as Array<string>));
    }
  }

  get likes(): Array<string> | null {
    let value = this.get("likes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set likes(value: Array<string> | null) {
    if (value === null) {
      this.unset("likes");
    } else {
      this.set("likes", Value.fromStringArray(value as Array<string>));
    }
  }

  get tokenTransfers(): Array<string> | null {
    let value = this.get("tokenTransfers");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokenTransfers(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokenTransfers");
    } else {
      this.set("tokenTransfers", Value.fromStringArray(value as Array<string>));
    }
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(value as Array<string>));
    }
  }

  get likeCount(): BigInt | null {
    let value = this.get("likeCount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set likeCount(value: BigInt | null) {
    if (value === null) {
      this.unset("likeCount");
    } else {
      this.set("likeCount", Value.fromBigInt(value as BigInt));
    }
  }

  get saleCount(): BigInt | null {
    let value = this.get("saleCount");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set saleCount(value: BigInt | null) {
    if (value === null) {
      this.unset("saleCount");
    } else {
      this.set("saleCount", Value.fromBigInt(value as BigInt));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get lastInkAt(): BigInt | null {
    let value = this.get("lastInkAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastInkAt(value: BigInt | null) {
    if (value === null) {
      this.unset("lastInkAt");
    } else {
      this.set("lastInkAt", Value.fromBigInt(value as BigInt));
    }
  }

  get lastLikeAt(): BigInt | null {
    let value = this.get("lastLikeAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastLikeAt(value: BigInt | null) {
    if (value === null) {
      this.unset("lastLikeAt");
    } else {
      this.set("lastLikeAt", Value.fromBigInt(value as BigInt));
    }
  }

  get lastSaleAt(): BigInt | null {
    let value = this.get("lastSaleAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastSaleAt(value: BigInt | null) {
    if (value === null) {
      this.unset("lastSaleAt");
    } else {
      this.set("lastSaleAt", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sale", id.toString(), this);
  }

  static load(id: string): Sale | null {
    return store.get("Sale", id) as Sale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get seller(): Bytes | null {
    let value = this.get("seller");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes | null) {
    if (value === null) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromBytes(value as Bytes));
    }
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get ink(): string {
    let value = this.get("ink");
    return value.toString();
  }

  set ink(value: string) {
    this.set("ink", Value.fromString(value));
  }

  get artist(): string {
    let value = this.get("artist");
    return value.toString();
  }

  set artist(value: string) {
    this.set("artist", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get artistTake(): BigInt {
    let value = this.get("artistTake");
    return value.toBigInt();
  }

  set artistTake(value: BigInt) {
    this.set("artistTake", Value.fromBigInt(value));
  }

  get saleType(): string | null {
    let value = this.get("saleType");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set saleType(value: string | null) {
    if (value === null) {
      this.unset("saleType");
    } else {
      this.set("saleType", Value.fromString(value as string));
    }
  }

  get transfer(): string {
    let value = this.get("transfer");
    return value.toString();
  }

  set transfer(value: string) {
    this.set("transfer", Value.fromString(value));
  }

  get transactionHash(): string | null {
    let value = this.get("transactionHash");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transactionHash(value: string | null) {
    if (value === null) {
      this.unset("transactionHash");
    } else {
      this.set("transactionHash", Value.fromString(value as string));
    }
  }
}

export class TokenTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenTransfer", id.toString(), this);
  }

  static load(id: string): TokenTransfer | null {
    return store.get("TokenTransfer", id) as TokenTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get network(): string | null {
    let value = this.get("network");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set network(value: string | null) {
    if (value === null) {
      this.unset("network");
    } else {
      this.set("network", Value.fromString(value as string));
    }
  }

  get ink(): string | null {
    let value = this.get("ink");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ink(value: string | null) {
    if (value === null) {
      this.unset("ink");
    } else {
      this.set("ink", Value.fromString(value as string));
    }
  }

  get artist(): string | null {
    let value = this.get("artist");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set artist(value: string | null) {
    if (value === null) {
      this.unset("artist");
    } else {
      this.set("artist", Value.fromString(value as string));
    }
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get sale(): string | null {
    let value = this.get("sale");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sale(value: string | null) {
    if (value === null) {
      this.unset("sale");
    } else {
      this.set("sale", Value.fromString(value as string));
    }
  }
}

export class RelayPrice extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RelayPrice entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RelayPrice entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RelayPrice", id.toString(), this);
  }

  static load(id: string): RelayPrice | null {
    return store.get("RelayPrice", id) as RelayPrice | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class MetaData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MetaData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MetaData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MetaData", id.toString(), this);
  }

  static load(id: string): MetaData | null {
    return store.get("MetaData", id) as MetaData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }
}

export class Total extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Total entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Total entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Total", id.toString(), this);
  }

  static load(id: string): Total | null {
    return store.get("Total", id) as Total | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get day(): BigInt | null {
    let value = this.get("day");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set day(value: BigInt | null) {
    if (value === null) {
      this.unset("day");
    } else {
      this.set("day", Value.fromBigInt(value as BigInt));
    }
  }

  get inks(): BigInt | null {
    let value = this.get("inks");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set inks(value: BigInt | null) {
    if (value === null) {
      this.unset("inks");
    } else {
      this.set("inks", Value.fromBigInt(value as BigInt));
    }
  }

  get tokens(): BigInt | null {
    let value = this.get("tokens");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokens(value: BigInt | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromBigInt(value as BigInt));
    }
  }

  get sales(): BigInt | null {
    let value = this.get("sales");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sales(value: BigInt | null) {
    if (value === null) {
      this.unset("sales");
    } else {
      this.set("sales", Value.fromBigInt(value as BigInt));
    }
  }

  get upgrades(): BigInt | null {
    let value = this.get("upgrades");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set upgrades(value: BigInt | null) {
    if (value === null) {
      this.unset("upgrades");
    } else {
      this.set("upgrades", Value.fromBigInt(value as BigInt));
    }
  }

  get artists(): BigInt | null {
    let value = this.get("artists");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set artists(value: BigInt | null) {
    if (value === null) {
      this.unset("artists");
    } else {
      this.set("artists", Value.fromBigInt(value as BigInt));
    }
  }
}

export class InkLookup extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save InkLookup entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save InkLookup entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("InkLookup", id.toString(), this);
  }

  static load(id: string): InkLookup | null {
    return store.get("InkLookup", id) as InkLookup | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get inkId(): string {
    let value = this.get("inkId");
    return value.toString();
  }

  set inkId(value: string) {
    this.set("inkId", Value.fromString(value));
  }
}

export class Like extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Like entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Like entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Like", id.toString(), this);
  }

  static load(id: string): Like | null {
    return store.get("Like", id) as Like | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ink(): string {
    let value = this.get("ink");
    return value.toString();
  }

  set ink(value: string) {
    this.set("ink", Value.fromString(value));
  }

  get artist(): string {
    let value = this.get("artist");
    return value.toString();
  }

  set artist(value: string) {
    this.set("artist", Value.fromString(value));
  }

  get liker(): Bytes {
    let value = this.get("liker");
    return value.toBytes();
  }

  set liker(value: Bytes) {
    this.set("liker", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}
