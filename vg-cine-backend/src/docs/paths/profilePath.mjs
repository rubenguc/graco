import { errorResponses } from "./errorPaths.mjs";

export const getProfile = {
  tags: ["Profile APIs"], // operation's tag.
  description: "API para ver perfil, necesita token", // operation's desc.
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
                example: "ok ",
              },
              data: {
                type: "object",
                $ref: "#/components/schemas/Profile",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};

export const editProfile = {
  tags: ["Profile APIs"], // operation's tag.
  description: "API para editar perfil, necesita token", // operation's desc.
  // expected responses
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
              example: "25162359",
            },
            address: {
              type: "string",
              example: "calle 42 con av venezuela",
            },
            birthday: {
              type: "string",
              example: "11/09/2001",
            },
          },
        },
      },
    },
  },
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
                example: "perfil cambiado con éxito",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};

export const editPassword = {
  tags: ["Profile APIs"], // operation's tag.
  description: "API para ver contraseña, necesita token", // operation's desc.
  // expected responses
  requestBody: {
    // expected request body
    content: {
      // content-type
      "application/json": {
        schema: {
          type: "object",
          properties: {
            password: {
              type: "string",
              example: "12345",
            },
            confirmPassword: {
              type: "string",
              example: "12345",
            },
          },
        },
      },
    },
  },
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
                example: "contraseña cambiada con éxito",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};
