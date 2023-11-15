import { NextFunction, Request, Response } from "express";
import { User as UserInterface } from "../interfaces/user-interface";
import User from "../models/user-model";
import CreateHttpError from "../utils/error-handler";
import bcrypt from "bcrypt";
import JwtService from "../service/jwt-service";
import UserData from "../data/UserData";

// @route POST /login
// @desc login the user
// @access public
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      CreateHttpError.unProcessableEntitiy(
        "Email address and password is required!"
      )
    );
  }

  try {
    let user: UserInterface | null = null;

    user = await User.findOne({
      email,
    });

    if (!user) {
      return next(
        CreateHttpError.notFound("User not exits with given email address!")
      );
    }

    const isAuthenticated = bcrypt.compare(password, user.password);

    if (!isAuthenticated) {
      return next(
        CreateHttpError.unAuthorised("Email address or password is not match!")
      );
    }

    const { accessToken, refreshToken } = await JwtService.setTokens(
      user._id,
      res
    );

    return res.json({
      success: true,
      user: new UserData(user),
      tokens: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error: any) {
    return next(CreateHttpError.serverError());
  }
};

// @route POST/ register
// @desc register the user
// @access public
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, phone } = req.body;

  if (!email || !password || !phone) {
    return next(
      CreateHttpError.unProcessableEntitiy(
        "Email address, password and phone is required!"
      )
    );
  }

  try {
    let user: UserInterface | null = null;

    user = await User.findOne({
      email,
    });

    if (user) {
      return next(
        CreateHttpError.notFound(
          "User with this email address is already exits!"
        )
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const body = {
      email,
      password: hashedPassword,
      phone,
    };

    user = await User.create(body);

    const { accessToken, refreshToken } = await JwtService.setTokens(
      user._id,
      res
    );

    return res.json({
      success: true,
      user: new UserData(user),
      tokens: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error: any) {
    return next(CreateHttpError.serverError());
  }
};

// @route POST /send-otp
// @desc send otp
// @access public
export const sendOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (!email) {
    return next(
      CreateHttpError.unProcessableEntitiy("Email address is required!")
    );
  }

  try {
  } catch (error: any) {
    return next(CreateHttpError.serverError());
  }
};
