import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  const allPhotos = getAllPhotos();
  const requiredData = allPhotos?.map((photo) => {
    const newPhotoObject = {
      id: photo.id,
      title: photo.title,
      url: photo.url,
    };

    return newPhotoObject;
  });
  return NextResponse.json(requiredData);
}
