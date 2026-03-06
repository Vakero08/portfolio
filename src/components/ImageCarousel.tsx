"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageZoom } from "./kibo-ui/image-zoom";
import { Compare } from "./ui/compare";

export function ImageCarousel({ images, compare }: { images: { src: string; alt: string }[]; compare?: boolean }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div>
            <div className="relative group w-full flex items-center justify-center">
                <div className="w-full relative">
                    {!compare ? images.map((img, index) => (
                        <div
                            key={index}
                            className={`h-full overflow-hidden transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100 block" : "opacity-0 hidden"
                                }`}
                        >
                            <ImageZoom>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={1000}
                                    height={1000}
                                    className="rounded-bl-2xl rounded-br-2xl object-cover"
                                />
                            </ImageZoom>
                        </div>
                    )) : (
                        <Compare
                            firstImage={images[0].src}
                            secondImage={images[1].src}
                            firstImageClassName="object-cover object-left-top"
                            secondImageClassname="object-cover object-left-top"
                            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                            slideMode="hover"
                        />
                    )}
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 backdrop-blur-sm"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 backdrop-blur-sm"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                    </>
                )}
            </div>
            <div className=" flex justify-center gap-1.5 py-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${index === currentIndex ? "bg-black/80 w-4 dark:bg-white" : "bg-black/30 w-1.5 dark:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>

    );
}
