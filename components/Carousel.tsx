"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";

type EmblaCarouselP = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselP> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  //   const {
  // prevBtnDisabled,
  // nextBtnDisabled,
  // onPrevButtonClick,
  // onNextButtonClick,
  //   } = usePrevNextButtons(emblaApi);
  return (
    <section className="embla">
      <div className="embla__viewport md:overflow-visible" ref={emblaRef}>
        <div className="embla__container w-full">
          {slides.map((idx) => (
            <div
              className="embla__slide w-full border border-gray-200 dark:border-[rgba(255,255,255,0.06)] p-5 rounded-xl bg-[linear-gradient(120deg,rgba(0,0,0,0),rgba(0,0,0,.04))] "
              key={idx}
            >
              <div className="flex flex-row gap-1 my-2 ">
                {Array.from(new Array(5).keys()).map((idx) => (
                  <StarIcon
                    stroke={"0"}
                    className="h-4 w-4"
                    fill="#78cc6d"
                    key={idx}
                  />
                ))}
              </div>

              <p
                className={`text-sm ${poppins.className} text-primary_body font-normal my-2`}
              >
                I highly recommend this business. The product quality is
                outstanding, exceeding my expectations every time. I was
                completely impressed with their professionalism and customer
                service. Pricing is fair and transparent - definitely value for
                money.
              </p>
              <div className="flex gap-8 mt-9 flex-row items-center">
                <Image
                  src={"/profile.jpg"}
                  alt="profile"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-primary_green">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 dark:text-heading font-light">
                    CEO, Company Name
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="flex flex-row gap-2 justify-center">
          {scrollSnaps.map((_, index) => {
            return (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={" w-2 h-2 rounded-full embla__dot".concat(
                  Number(index) == Number(selectedIndex)
                    ? " embla__dot--selected bg-primary_green"
                    : " bg-[#00000033] dark:bg-[rgba(255,255,255,0.3)]"
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;

// type UsePrevNextButtonsType = {
//   prevBtnDisabled: boolean;
//   nextBtnDisabled: boolean;
//   onPrevButtonClick: () => void;
//   onNextButtonClick: () => void;
// };

// export const usePrevNextButtons = (
//   emblaApi: EmblaCarouselType | undefined
// ): UsePrevNextButtonsType => {
//   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
//   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

//   const onPrevButtonClick = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const onNextButtonClick = useCallback(() => {
//     if (!emblaApi) return;
//     emblaApi.scrollNext();
//   }, [emblaApi]);

//   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
//     setPrevBtnDisabled(!emblaApi.canScrollPrev());
//     setNextBtnDisabled(!emblaApi.canScrollNext());
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;

//     onSelect(emblaApi);
//     emblaApi.on("reInit", onSelect).on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   };
// };

// type BtnPropType = ComponentPropsWithRef<"button">;

// export const PrevButton: React.FC<BtnPropType> = (props) => {
//   const { children, ...restProps } = props;

//   return (
//     <button
//       className="embla__button embla__button--prev"
//       type="button"
//       {...restProps}
//     >
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
//         />
//       </svg>
//       {children}
//     </button>
//   );
// };

// export const NextButton: React.FC<PropType> = (props) => {
//   const { children, ...restProps } = props;

//   return (
//     <button
//       className="embla__button embla__button--next"
//       type="button"
//       {...restProps}
//     >
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
//         />
//       </svg>
//       {children}
//     </button>
//   );
// };

import { ComponentPropsWithRef, useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { poppins } from "@/lib/fonts";
import { StarIcon } from "lucide-react";
import Image from "next/image";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
