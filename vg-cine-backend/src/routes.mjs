import { Router } from "express";
import { loginValidations } from "./middleware/authMiddlewares.mjs";
import { ticketModel } from "./models/ticketModel.mjs";
import { userModel } from "./models/userModel.mjs";
import { generateJWT, verifyToken } from "./utils/jwt.mjs";
import { moviesAPI } from "./utils/moviesAPI.mjs";

const router = Router();

// auth
router.post("/login", loginValidations, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.status(404).json({
        error: "Correo o contraseña incorrecta",
      });
    }

    const token = generateJWT(user);

    res.json({
      message: "ok",
      token,
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, birthday, address, id } =
      req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: "El correo ya está registrado",
      });
    }

    const newUser = await userModel.create({
      firstName,
      lastName,
      email,
      password,
      birthday,
      address,
      id
    });
    await newUser.save();

    res.json({
      message: "Usuario creado con éxito",
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

// router.delete("/delete/:email", async (req, res) => {
//   try {
//     const { email } = req.params;

//     const user = await userModel.findOneAndDelete({ email });

//     res.json({
//       message: "Usuario eliminado",
//       deleted: Boolean(user),
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: "SERVER_ERROR",
//     });
//   }
// });

// movie APIs
router.get("/movies", async (req, res) => {
  try {
    const { all } = req.query;

    const { data } = await moviesAPI({
      path: "movie/popular",
    });

    let resp = all == "true" ? data?.results : data?.results?.slice(0, 5);

    res.json({
      message: "ok",
      data: resp,
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.get("/movie-detail/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log(req.params);

    const { data } = await moviesAPI({
      path: `movie/${id}`,
    });

    const { data: cast } = await moviesAPI({
      path: `movie/${id}/credits`,
    });

    res.json({
      message: "ok",
      data: {
        ...data,
        cast: cast?.cast || [],
      },
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

// tickets APIs
router.post("/ticket", verifyToken, async (req, res) => {
  try {
    const { userId, ticketCount, paymentMethod, id, referenceNumber, movieTitle } =
      req.body;

    const data = await ticketModel.create({
      userId,
      ticketCount,
      paymentMethod,
      id,
      referenceNumber,
      movieTitle
    });
    await data.save();

    res.json({
      message: "Ticket creado con exito",
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.get("/ticket", verifyToken, async (req, res) => {
  try {
    const { userId } = req.body;

    const data = await ticketModel.find({ userId });

    res.json({
      message: "ok",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

// profile APIs
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const { userId } = req.body;

    const data = await userModel.findOne(
      { _id: userId },
      { address: 1, birthday: 1, email: 1, firstName: 1, lastName: 1, id: 1, _id: 0 }
    );

    res.json({
      message: "ok",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.put("/edit-profile", verifyToken, async (req, res) => {
  try {
    const { userId, firstName, lastName, birthday, address, id } = req.body;

    await userModel.findOneAndUpdate(
      { _id: userId },
      { firstName, lastName, birthday, address, id }
    );

    res.json({
      message: "perfil cambiado con éxito",
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

router.put("/change-password", verifyToken, async (req, res) => {
  try {
    const { userId, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({
        error: "Las contraseñas no coinciden",
      });
    }

    await userModel.findOneAndUpdate({ _id: userId }, { password });

    res.json({
      message: "contraseña cambiada con éxito",
    });
  } catch (error) {
    res.status(500).json({
      error: "SERVER_ERROR",
    });
  }
});

export default router;
