import { useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function Cards() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="absolute inset-0 z-10 " ref={containerRef}>
            <Card
                containerRef={containerRef}
                src="./github.svg"
                alt="Example image"
                rotate="6deg"
                top="20%"
                left="17%"
                className="w-36 md:w-32 hover:cursor-grab active:cursor-grabbing"
            />
            <Card
                containerRef={containerRef}
                src="./nextjs.svg"
                alt="Example image"
                rotate="12deg"
                top="15%"
                left="70%"
                className="w-24 md:w-32 hover:cursor-grab active:cursor-grabbing"
            />
            <Card
                containerRef={containerRef}
                src="./reactjs.svg"
                alt="Example image"
                rotate="-15deg"
                top="60%"
                left="70%"
                className="w-52 md:w-32 hover:cursor-grab active:cursor-grabbing"
            />
            <Card
                containerRef={containerRef}
                src="./nestjs.svg"
                alt="Example image"
                rotate="8deg"
                top="50%"
                left="5%"
                className="w-48 md:w-32 hover:cursor-grab active:cursor-grabbing"
            />
            <Card
                containerRef={containerRef}
                src="./nodejs.svg"
                alt="Example image"
                rotate="18deg"
                top="60%"
                left="20%"
                className="w-40 md:w-32hover:cursor-grab active:cursor-grabbing"
            />
            <Card
                containerRef={containerRef}
                src="./mongodb.svg"
                alt="Example image"
                rotate="18deg"
                top="30%"
                left="80%"
                className="w-40 md:w-32 hover:cursor-grab active:cursor-grabbing"
            />
        </div>
    );
};

interface Props {
    containerRef: RefObject<HTMLDivElement | null>;
    src: string;
    alt: string;
    top: string;
    left: string;
    rotate: string;
    className?: string;
}

const Card = ({
    containerRef,
    src,
    alt,
    top,
    left,
    rotate,
    className,
}: Props) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const els = document.querySelectorAll(".drag-elements");

        let maxZIndex = -Infinity;

        els.forEach((el) => {
            let zIndex = parseInt(
                window.getComputedStyle(el).getPropertyValue("z-index")
            );

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    };

    return (
        <motion.img
            onMouseDown={updateZIndex}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
            className={twMerge(
                "drag-elements absolute p-1",
                className
            )}
            src={src}
            alt={alt}
            drag
            dragConstraints={containerRef}
            // Uncomment below and remove dragElastic to remove movement after release
            //   dragMomentum={false}
            dragElastic={0.65}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        />
    );
};