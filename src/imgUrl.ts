import { client } from "../client";
import imageUrlBuilder from "@sanity/image-url";
import {
  SanityImageCrop,
  SanityImageHotspot,
} from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function imgUrl(
  ref: string,
  crop?: SanityImageCrop,
  hotspot?: SanityImageHotspot
): string {
  let imageUrl = builder.image(ref);

  if (crop) {
    imageUrl = builder.image(crop);
  }

  if (hotspot) {
    imageUrl = builder.image(hotspot);
  }

  return imageUrl.url() || "";
}
