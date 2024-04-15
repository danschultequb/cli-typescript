import { CharacterWriteStream, ConsoleCharacterWriteStream, getGreeting } from "./";

const writeStream: CharacterWriteStream = ConsoleCharacterWriteStream.create();

writeStream.writeLine(getGreeting());