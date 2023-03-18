import { errorResponses } from "./errorPaths.mjs";

export const getTickets = {
  tags: ["Ticket APIs"], // operation's tag.
  description: "API para consultar todas los tickets", // operation's desc.
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
                type: "array",
                items: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};

export const registerTicket = {
  tags: ["Ticket APIs"], // operation's tag.
  description: "API para un ticket", // operation's desc.
  requestBody: {
    // expected request body
    content: {
      // content-type
      "application/json": {
        schema: {
          type: "object",
          properties: {
            ticketCount: {
              type: "number",
              example: "1",
            },
            paymentMethod: {
              type: "string",
              example: "pago movil",
            },
            id: {
              type: "string",
              example: "14258963",
            },
            referenceNumber: {
              type: "string",
              example: "0428",
            },
            movieTitle: {
              type: "string",
              example: "Dragon Ball Super: Super Hero",
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
                example: "Ticket creado con exito",
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};
