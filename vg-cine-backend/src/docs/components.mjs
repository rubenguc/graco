const components = {
  // error model
  schemas: {
    Profile: {
      type: "object",
      properties: {
        firstName: {
          type: "string",
          example: "Sweet",
        },
        lastName: {
          type: "string",
          example: "Petter",
        },
        id: {
          type: "string",
          example: "25369874",
        },
        address: {
          type: "string",
          example: "en su casa",
        },
        email: {
          type: "string",
          example: "sweetpeter99@gmail.com",
        },
      },
    },

    Movie: {
      type: "object",
      properties: {
        backdrop_path: {
          type: "string",
          example: "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
        },
        id: {
          type: "number",
          example: 766507,
        },
        original_title: {
          type: "string",
          example: "Prey",
        },
        poster_path: {
          type: "string",
          example: "/sNAMqQ9T7YnXnvUSufeWzaRgK6Y.jpg",
        },
        title: {
          type: "string",
          example: "Predator: La presa",
        },
      },
    },

    Task: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          example: "62f256783fbf1b60c03e5cc8",
        },
        id: {
          type: "string",
          example: "28563924",
        },
        ticketCount: {
          type: "number",
          example: 2,
        },
        paymentMethod: {
          type: "string",
          example: "Pago movil",
        },
        movieTitle: {
          type: "string",
          example: "Dragon Ball Super: Super Hero",
        },
        referenceNumber: {
          type: "string",
          example: "4409",
        },
        date: {
          type: "string",
          example: "2022-08-22T04:55:31.819+00:00",
        },
        userId: {
          type: "string",
          example: "63030c438c52122478addc64",
        },
      },
    },

    Error4XX: {
      type: "object", //data type
      properties: {
        error: {
          type: "string", // data type
          description: "Error message", // desc
          example: "Mensaje de error", // example of an error message
        },
      },
    },

    Error5XX: {
      type: "object", //data type
      properties: {
        error: {
          type: "string", // data type
          description: "Error message", // desc
          example: "SERVER_ERROR", // example of an error message
        },
      },
    },
  },
};

export default components;
