interface IResponse {
  description: string;
  type: string;
  properties: {
    message: { type: string; default: string };
    status: { type: string; default: number };
  };
}

export function buildErrorShorthand(
  status: number,
  message?: string,
): IResponse {
  return {
    description: message
      ? `${message}.`
      : 'More than one error can trigger this status code.',
    properties: {
      message: { default: message && `${message}!`, type: 'string' },
      status: { default: status, type: 'integer' },
    },
    type: 'object',
  };
}
