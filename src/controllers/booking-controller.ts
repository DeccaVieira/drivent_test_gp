import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import bookingService from "@/services/booking-service";
import httpStatus from 'http-status';

export async function getBooking(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const bookingByUser = await bookingService.listBooking(Number(userId));
    return res.status(httpStatus.OK).send(bookingByUser);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
