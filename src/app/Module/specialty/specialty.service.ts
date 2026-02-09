import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

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

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
};
