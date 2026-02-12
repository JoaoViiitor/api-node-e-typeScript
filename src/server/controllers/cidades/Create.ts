import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;
}

const BodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

export const create = async (
  req: Request<{}, {}, ICidade>,
  res: Response
) => {
  try {
    const validatedData = await BodyValidation.validate(req.body, {
      abortEarly: false,
    });

    return res.status(201).json({
      message: 'Cidade criada com sucesso',
      data: validatedData,
    });

  } catch (error) {

  const yupError = error as yup.ValidationError;

  const validatedErrors: Record<string, string> = {};

  yupError.inner.forEach((err) => {
    if (!err.path) return;
    validatedErrors[err.path] = err.message;
  });

  return res.status(StatusCodes.BAD_REQUEST).json({
    erros: validatedErrors,
  });
  }

};