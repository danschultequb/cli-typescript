import { Pre, Result } from "@everyonesoftware/base-typescript";

/**
 * A stream that writes characters.
 */
export abstract class CharacterWriteStream
{
    /**
     * Write the provided text to this {@link CharacterWriteStream}.
     * @param value The text to write.
     */
    public abstract writeString(text: string): Result<void>;

    /**
     * Write the provided text and an additional newline character to this {@link CharacterWriteStream}.
     * @param text The text to write to the {@link CharacterWriteStream}.
     */
    public writeLine(text: string): Result<void>
    {
        return CharacterWriteStream.writeLine(this, text);
    }

    /**
     * Write the provided text and an additional newline character to the {@link CharacterWriteStream}.
     * @param writeStream The {@link CharacterWriteStream} to write the provided text and newline to.
     * @param text The text to write to the {@link CharacterWriteStream}.
     */
    public static writeLine(writeStream: CharacterWriteStream, text: string): Result<void>
    {
        Pre.condition.assertNotUndefinedAndNotNull(writeStream, "writeStream");
        Pre.condition.assertNotUndefinedAndNotNull(text, "text");

        return Result.create(() =>
        {
            writeStream.writeString(text).await();
            writeStream.writeString("\n").await();
        });
    }
}