import { BookingUser } from '@/protocols';
import { notFoundError } from '@/errors';
import { exclude } from '@/utils/prisma-utils';
import { Booking } from '@prisma/client';
import bookingRepository from '@/repositories/booking-repository';

async function listBooking(userId: number) {
  const booking = await bookingRepository.findBooking(userId);
  if (!booking) {
    throw notFoundError();
  }
}
const bookingService = {
    listBooking
}

export default bookingService;
