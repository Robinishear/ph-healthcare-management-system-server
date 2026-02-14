/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../lib/prisma";

const getAllDoctors = async () => {
  const doctors = await prisma.doctor.findMany({
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  return doctors;
};

const updateDoctor = async (id: string, payload: any) => {
  await prisma.doctor.findUniqueOrThrow({
    where: { id, isDeleted: false },
  });

  const result = await prisma.doctor.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteDoctor = async (id: string) => {
  const result = await prisma.doctor.update({
    where: { id },
    data: {
      isDeleted: true,
    },
  });
  return result;
};
export const DoctorService = {
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
};
