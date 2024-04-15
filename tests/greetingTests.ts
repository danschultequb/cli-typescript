import * as assert from "assert";
import { getGreeting } from "../sources";

suite("greeting.ts", () =>
{
    test("getGreeting()", () =>
    {
        assert.strictEqual(getGreeting(), "Hello world!");
    });
});