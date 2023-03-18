import { errorResponses } from "./errorPaths.mjs";

export const register = {
  tags: ["Auth APIs"], // operation's tag.
  description: "API para registrar usuario", // operation's desc.
  requestBody: {
    // expected request body
    content: {
      // content-type
      "application/json": {
        schema: {
          type: "object",
          properties: {
            firstName: {
              type: "string",
              example: "prueba",
            },
            lastName: {
              type: "string",
              example: "probencio",
            },
            id: {
              type: "string",
              example: "14258963",
            },
            address: {
              type: "string",
              example: "calle 42 con av venezuela",
            },
            birthday: {
              type: "string",
              example: "11/09/2001",
            },
            email: {
              type: "string",
              example: "prueba@gmail.com",
            },
            password: {
              type: "string",
              example: "12345",
            },
          },
        },
      },
    },
  },
  // expected responses
  responses: {
    // response code
    200: {
      description: "Respuesta exitosa", // response desc.
      content: {
        // content-type
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Usuario creado con éxito",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};
