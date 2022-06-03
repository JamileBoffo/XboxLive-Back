import { UnprocessableEntityException } from "@nestjs/common";

export function handleError(error: Error): undefined {
  const errorlines = error.message?.split('\n');
  const lasterrorline = errorlines[errorlines.length - 1]?.trim();

  if (!lasterrorline) {
    console.error(error);
  }
  throw new UnprocessableEntityException(
    lasterrorline || 'Algum erro aconteceu ao executar a operação!',
  );
}
