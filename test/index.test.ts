import { describe, it, expect } from "vitest"
import { suggestDomains } from "../src"

describe("suggest function", () => {
    it("should return results for go", () => {
        expect(suggestDomains("go", 10)).toHaveLength(10);
    });
});
