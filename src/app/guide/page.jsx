"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { LampContainer } from "../../components/lamp";
import { ContainerScroll } from "../../components/container-scroll-animation";
import { ImagesSlider } from "../../components/images-slider";
import { StickyScroll } from "../../components/sticky-scroll-reveal";



const Page = () => {
    const images = [
        "/konark1.webp",
        "konark2.jpg",
        "konark3.jpg",
    ];
    const content = [
        {
          title: "Charot Wheels",
          description:
            "The temple .",

            description2:"Historical Significance: ",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/konark1.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Dancing Figures",
          description:
            "The temple's walls ",
            description2:"These carvings",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/konark2.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Version control",
          description:
            "Experience real-time ",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/konark3.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Running out of content",
          description:
            "Experience real-time ",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/konark1.webp"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
      ];



    return (
        <>
            <ImagesSlider className="h-[40rem]" images={images}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                >
                    <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Dive into the Stories <br/> and Experience the Glory of Konark
                    </motion.p>
                    <button className="px-4 py-2 backdrop-blur-sm border bg-amber-300/80 border-emerald-500/20 text-black mx-auto text-center rounded-full relative mt-4">
                        <span>Explore →</span>
                        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button>
                </motion.div>
            </ImagesSlider>
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Explore the Map Virtually
                                <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Experience in Street View
                                </span>
                            </h1>
                        </>
                    }
                >
                    {/* <Image
          src={`/map2.png`}
          alt="hero"
          height={720}
          width={1000}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1725776498439!6m8!1m7!1soB19U7TkxoixJOwQ26S0YQ!2m2!1d19.88761003943582!2d86.09490124422962!3f263.31527058290055!4f15.469319837067474!5f0.7820865974627469"
                        width="1000"
                        height="720"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </ContainerScroll>
            </div>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-200/50 to-slate-900 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Explore Facts <br /> the Right Way
                </motion.h1>
            </LampContainer>
            <div className="p-10">
        <StickyScroll content={content} />
        </div>
        
        </>
    );
};

export default Page;
