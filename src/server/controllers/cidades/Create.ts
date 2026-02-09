import { Request, Response } from 'express';
import * as yup from 'yup';

interface ICidade {
  nome: string;
}

const BodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export const create = async (
  req: Request<{}, {}, ICidade>,
  res: Response
) => {
  try {
    const validatedData = await BodyValidation.validate(req.body, {
      abortEarly: false,
    });

    console.log(validatedData); // agora faz sentido aqui

    return res.status(201).json({
      message: 'Cidade criada com sucesso',
      data: validatedData,
    });

  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.status(400).json({
      errors: {
        default: yupError.message,
      },
    });
  }
};