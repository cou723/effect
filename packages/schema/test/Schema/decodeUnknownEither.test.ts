import * as S from "@effect/schema/Schema"
import * as Util from "@effect/schema/test/util"
import { describe, it } from "vitest"

describe("Schema > decodeUnknownEither", () => {
  it("should return Left on async", () => {
    Util.expectEitherLeft(
      S.decodeUnknownEither(Util.AsyncString)("a"),
      `AsyncString
└─ cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work`
    )
  })
})
