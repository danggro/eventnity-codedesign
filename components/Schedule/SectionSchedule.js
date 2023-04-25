import { useState } from "react";
import Container from "../Container";
import mockSchedule from "@/utils/Schedule.json";
import Image from "next/image";
import Button from "../Button";

export default function SectionSchedule() {
  const [shcedule, setShcedule] = useState(mockSchedule);
  return (
    <section className="mb-[148px]">
      <Container>
        <h1 className="font-semibold text-center font-fredoka text-[64px]">
          EVENT SCHEDULE
        </h1>
        <div className="mt-[127px] flex flex-wrap gap-x-[52px] gap-y-[106px]">
          {shcedule.map((s) => {
            return (
              <div key={s.id}>
                <Image
                  src={`/schedule/${s.img}`}
                  width={370}
                  height={240}
                  alt={`shcedule-${s.id}`}
                />
                <div className="px-1">
                  <div className="flex justify-between mt-[14px] mb-3 ">
                    <p className="text-xs font-medium text-gray-500">
                      {s.date}
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      {s.clock}
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-700">{s.title}</h3>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-[103px]">
          <Button variant="large">View More</Button>
        </div>
      </Container>
    </section>
  );
}
