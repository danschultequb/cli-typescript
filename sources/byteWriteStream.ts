import { Result } from "@everyonesoftware/base-typescript";

/**
 * A class that writes bytes.
 */
export abstract class ByteWriteStream
{
    protected constructor()
    {
    }

    /**
     * Write the provided bytes to this {@link ByteWriteStream}. Return the number of
     * bytes that were written.
     * @param bytes The bytes to write.
     */
    public abstract writeBytes(bytes: Uint8Array): Result<number>;
}