import ChevronRight from "@carbon/icons-react/lib/ChevronRight";

export default function BreadCumpCommunity({
    secondText="Post"
}:{
    secondText?:string
})  {

return (

    <> 
     <div className="flex flex-wrap gap-2 p-2 md:p-0">
            <p className="text-xs font-normal text-gray-800"> Community </p>
                <ChevronRight />
            <p className="text-xs font-normal text-gray-500"> {secondText} </p>
        </div>
    </>

    )

}
