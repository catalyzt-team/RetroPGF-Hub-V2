"use client"
import { useRef } from "react";
import ProjectDetailSection from "./_component/_Project/ProjectDetailSection";
import OverviewSection from "./_component/_Project/OverviewSection";
import ImpactSection from "./_component/_Project/ImpactSection";
import FundingSection from "./_component/_Project/FundingSection";
import ContributionSection from "./_component/_Project/ContributionSection";
import { RetroRound3 } from "../RetroType3";
import ScrollSpy from "./_component/ScrollSpy";


export default function Cpage({
    data
}:{
    data: RetroRound3   
})  {

    const overViewRef = useRef<HTMLElement | null>(null)
    const contributionRef = useRef<HTMLElement | null>(null)
    const impactRef = useRef<HTMLElement | null>(null)
    const fundingRef = useRef<HTMLElement | null>(null)

return (

    <div className="flex mt-8 gap-10"> 
    {/* Scroll Spy */}
       
        <div className="lg:flex-grow flex flex-col gap-4 lg:gap-16">
            <section className="w-full h-full flex flex-col gap-4 lg:gap-12 lg:flex-grow" id="Overview" ref={overViewRef}>
                <ProjectDetailSection
                data={data}
                />
                <OverviewSection
                data={data}
                />
            </section>
            <ContributionSection data={data} contributionRef={contributionRef} />
            <ImpactSection data={data} impactRef={impactRef} />
            <FundingSection data={data} fundingRef={fundingRef} />
        </div>

        <div className="hidden lg:block max-w-72 min-w-72 rounded-lg ">
            <ScrollSpy
            contributionRef={contributionRef}
            fundingRef={fundingRef}
            impactRef={impactRef}
            overViewRef={overViewRef}
            />
        </div>
    </div>

    )

}