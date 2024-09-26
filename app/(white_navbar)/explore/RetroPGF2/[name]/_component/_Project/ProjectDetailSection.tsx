import LinkIcon from "@carbon/icons-react/lib/Link";
import Image from "next/image";
import { RetroRound2 } from "../../../RetroType2";
import { LogoTwitter } from "@carbon/icons-react";
import LogoGithub from "@carbon/icons-react/lib/LogoGithub";
export default function ProjectDetailSection({
    data
}: {
    data: RetroRound2
}) {

    return (

        <div className="flex flex-col bg-white rounded-lg overflow-hidden border">
            <div className="block relative w-full h-36 lg:h-60 mb-16">
                <Image
                    src={data.bannerPath || "/random/OP-Banner.png"}
                    alt="background"
                    fill
                    className="w-fit object-cover"
                />
            </div>
            <div className="relative flex flex-col gap-4 p-2 sm:p-4 lg:p-6">
            <div className="absolute -top-32 left-2 lg:left-6 rounded-[0.25rem] flex flex-shrink-0 z-20">
                    <div className="relative w-28 h-28 lg:w-32 lg:h-32">
                        <Image
                            src={data.iconPath || "/random/OP-Logo.png"}
                            alt="avatar image"
                            className="rounded-lg object-cover"
                            fill
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-2 sm:p-4 md:px-4 md:pt-0 lg:p-0">
                <h3 className="text-3xl lg:text-5xl font-semibold text-gray-800">
                    {data.name}
                </h3>

                {/* Link */}
                <div className="flex flex-wrap gap-6 my-1 md:my-3 lg:my-4">
                    <a
                        href={data.website}
                        target="_blank" rel="noopener noreferrer"
                        className="flex flex-shrink gap-1.5 text-gray-500 hover:text-primaryRed">
                        <LinkIcon size={20} />
                        <p className="text-sm font-normal line-clamp-1">
                        {data.website}
                        </p>
                    </a>

                    <a
                        href={data.twitter}
                        target="_blank" rel="noopener noreferrer"
                        className="flex flex-shrink gap-1.5 text-gray-500 hover:text-primaryRed">
                        <LogoTwitter size={20} />
                        <p className="text-sm font-normal line-clamp-1">
                            {data.twitter}
                        </p>
                    </a>

                    <a
                        href={data.github}
                        target="_blank" rel="noopener noreferrer"
                        className="flex flex-shrink gap-1.5 text-gray-500 hover:text-primaryRed">
                        <LogoGithub size={20} />
                        <p className="text-sm font-normal line-clamp-1">
                        {data.github}
                        </p>
                    </a>
                
                </div>
            </div>
            </div>
        </div>
       

    )

}
