import { errorResponses } from "./errorPaths.mjs";

export const getMovies = {
  tags: ["Movies APIs"], // operation's tag.
  parameters: [
    {
      in: "query",
      name: "all",
      schema: {
        type: "string",
        example: "false",
      },
    },
  ],
  description: "API para consultar todas las peliculas", // operation's desc.
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
                  $ref: "#/components/schemas/Movie",
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

export const getMovieDetail = {
  tags: ["Movies APIs"], // operation's tag.
  description: "API para consultar una pelicula", // operation's desc.

  parameters: [
    {
      in: "path", // location of the param
      name: "id", // name of the param
      type: "string",
      example: "610150",
      required: true, // Mandatory param
      description: "Id de la pelicula a mostrar", // param desc.
    },
  ], // expected params.
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
              },
            },
          },
        },
      },
    },
    ...errorResponses,
  },
};
