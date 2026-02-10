import { prisma } from "../../lib/prisma";
import { Specialty } from "../../../generated/prisma/client";

const createSpecialty = async (Payload: Specialty): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: Payload,
  });
  return specialty;
};

const getAllSpecialties = async (): Promise<Specialty[]> => {
  const specialty = await prisma.specialty.findMany();
  return specialty;
};

const deleteSpecialty = async (id: string): Promise<Specialty> => {
  const specialty = await prisma.specialty.delete({
    where: { id: id },
  });
  return specialty;
};

const updateSpecialty = async (
  id: string,
  Payload: Specialty,
): Promise<Specialty> => {
  const specialty = await prisma.specialty.update({
    where: {
      id: id,
    },
    data: Payload,
  });
  return specialty;
};

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty,
};
