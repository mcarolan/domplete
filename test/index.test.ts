import { describe, it, expect } from "vitest"
import { greet } from "../src"

describe("greet function", () => {
    it("shoudl return a greeting message", () => {
        expect(greet("Martin")).toBe("woah Martin");
    });
});
