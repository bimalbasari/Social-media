import { useState, useEffect } from "react"

const Carousel = ({ children: image, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr(curr => curr == 0 ? image.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr == image.length - 1 ? 0 : curr + 1);
    useEffect(() => {
        if (!autoSlide) { return };
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval()
    }, [])

    return (

        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{image}</div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="text-3xl bg-white bg-opacity-80  text-gray-800 drop-shadow hover:bg-white px-2 font-bold rounded-full ">&lt;</button>
                <button onClick={next} className="text-3xl bg-white bg-opacity-80  text-gray-800 drop-shadow hover:bg-white px-2 font-bold rounded-full ">&gt;</button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {
                        image.map((_, i) => (
                            <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr == i ? "p-2" : "bg-opacity-50"}`} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default Carousel