import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  const photoId = params.photoId;
  const photo = await getPhotoById(photoId);
  return NextResponse.json(photo);
}
