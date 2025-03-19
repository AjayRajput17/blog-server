// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
// import dotenv from "dotenv";

// dotenv.config();

// export const signin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });

//     if (!existingUser) {
//       return res
//         .status(404)
//         .json({ message: "User doesn't exist. Please Signup" });
//     }

//     if (existingUser && existingUser?.external_id) {
//       return res.status(404).json({ message: "Please Sign in with Google" });
//     }

//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       existingUser.password
//     );

//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res
//       .status(200)
//       .cookie("token", token, {
//         expires: new Date(Date.now() + 604800000),
//         httpOnly: true,
//         sameSite: "lax",
//         secure: false,
//       })
//       .json({ result: existingUser });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong. Please Refresh" });
//   }
// };

// export const signup = async (req, res) => {
//   const { firstName, lastName, email, password, confirmPassword } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       if (existingUser?.external_id) {
//         return res
//           .status(400)
//           .json({ message: "User already exists. Please Sign in with Google" });
//       }
//       return res
//         .status(400)
//         .json({ message: "User already exists. Please Login" });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Password don't match" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const newUser = await User.create({
//       email,
//       password: hashedPassword,
//       name: `${firstName} ${lastName}`,
//     });

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res
//       .status(201)
//       .cookie("token", token, {
//         expires: new Date(Date.now() + 604800000),
//         httpOnly: true,
//         sameSite: "lax",
//         secure: false,
//       })
//       .json({ result: newUser });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong. Please Refresh" });
//   }
// };

// export const verifyToken = async (id_token) => {
//   try {
//     const result = await oAuth2Client.verifyIdToken({
//       idToken: id_token,
//       audience: process.env.CLIENT_ID,
//     });
//     const payload = result.getPayload();
//     return payload;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signout = async (req, res) => {
//   try {
//     res.clearCookie("token", {
//       expires: new Date(Date.now()),
//       httpOnly: true,
//       sameSite: "none",
//       secure: true,
//       domain: "blog-mern-backend2.onrender.com",
//     });
//     res.status(201).json({ message: "Successfully logged out" });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// export const checkUserStatus = async (req, res) => {
//   res.status(200).send({ message: "Token not expired" });
// };





import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";

dotenv.config();

const oAuth2Client = new OAuth2Client(process.env.CLIENT_ID);

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User doesn't exist. Please Signup" });
    }

    if (existingUser?.external_id) {
      return res.status(400).json({ message: "Please Sign in with Google" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        httpOnly: true,
        sameSite: "none",
        secure: true, // Use HTTPS
      })
      .json({ result: existingUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong. Please Refresh" });
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser?.external_id) {
        return res
          .status(400)
          .json({ message: "User already exists. Please Sign in with Google" });
      }
      return res.status(400).json({ message: "User already exists. Please Login" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .status(201)
      .cookie("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        httpOnly: true,
        sameSite: "none",
        secure: true, // Use HTTPS
      })
      .json({ result: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong. Please Refresh" });
  }
};

export const verifyToken = async (id_token) => {
  try {
    const result = await oAuth2Client.verifyIdToken({
      idToken: id_token,
      audience: process.env.CLIENT_ID,
    });
    return result.getPayload();
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};

export const signout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      domain: "blog-mern-backend2.onrender.com", // Adjust for your domain
    });
    res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const checkUserStatus = async (req, res) => {
  res.status(200).send({ message: "Token not expired" });
};
