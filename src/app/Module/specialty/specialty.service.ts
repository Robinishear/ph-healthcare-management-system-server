import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (Payload: Specialty): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: Payload,
  });
  return specialty;
};

export const SpecialtyService = {
  createSpecialty,
};
