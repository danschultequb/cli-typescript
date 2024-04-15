import { Result } from "@everyonesoftware/base-typescript";
import { CharacterWriteStream } from "./characterWriteStream";

export class ConsoleCharacterWriteStream extends CharacterWriteStream
{
    private constructor()
    {
        super();
    }

    public static create(): ConsoleCharacterWriteStream
    {
        return new ConsoleCharacterWriteStream();
    }

    public override writeString(text: string): Result<void>
    {
        return Result.create(() =>
        {
            process.stdout.write(text);
        });
    }
}